//const express = require('express')
//const app = express()
//const cors = require('cors')  //needed only on local machine due to diff in ports, on prod it will be same
//const path     = require('path');
//const morgan   = require('morgan');
//const mongoose = require('mongoose')
const jwt      = require('jsonwebtoken')
const bcrypt   = require('bcryptjs')
const dotenv   = require('dotenv');
const User     = require('../../models/user.model')
const connectDB= require('../../config/db');

// app.use(cors())
// app.use(express.json())
dotenv.config({ path: './config/config.env'} );
const secret = process.env.SECRETCODE || 'mysupersecretcode900'
//const PORT   = process.env.PORT || 5000;
console.log('secrete='+secret)
console.log('Starting DB connection');
connectDB();

exports.createUser = async (req, res) => {
	console.log('rq body='+ JSON.stringify(req.body));
	try {
		const user = await User.findOne( {email: req.body.email} )
		if (user) {
			return res.status(400).json( { status: 'error', error: 'User alrready exits.' })
		}
		const hashedPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			name: req.body.name,
			email: req.body.email,
			password: hashedPassword,
		})
		return res.status(201).json({ status: true, success: 'ok' })
	} catch (err) {
		return res.status(500).json({ status: 'error', error: 'Invalid data ' + err })
	}
}

exports.loginUser = async (req, res) => {
	console.log("inside login.User"+JSON.stringify(req.body))
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return res.status(404).json({ status: 'error', error: 'User does not exit.' })
	}

	const isPasswordValid = await bcrypt.compare(req.body.password, user.password)

	if (isPasswordValid) {
		const token = jwt.sign( { name: user.name,
				                  email: user.email,
			                    }, secret);
		return res.status(200).json({ status: 'ok', user: token })
	} else {
        console.log('Incorrect password entered.');
		return res.status(403).json({ status: 'error', user: false })
	}
}

exports.getQuote = async (req, res) => {
	const token = req.headers['x-access-token']
	try {
		const decoded = jwt.verify(token, secret)
		const email = decoded.email
		const user = await User.findOne({ email: email })
		return res.status(200).json({ success: true, status: 'ok', quote: user.quote })
	} catch (error) {
		//console.log('Error in token '+ JSON.stringify(token) )
		console.log('Error in GET API: ' + error)
		res.status(500).json({ status: 'error', error: 'invalid token' })
	}
}

exports.createQuote = async (req, res) => {
	const token = req.headers['x-access-token']
	try {
		const decoded = jwt.verify(token, secret)
		const email = decoded.email
		await User.updateOne(
			{ email: email },
			{ $set: { quote: req.body.quote } }
		)
		return res.status(201).json({
            success: true, status:'ok'
		});
		//return res.json({ status: 'ok' })
	} catch (error) {
		console.log('Error in POST API: ' + error)
		res.status(500).json({ status: 'error', error: 'invalid token' })
	}
}

// module.exports=createUser
// module.exports=loginUser
// module.exports = {
// 	createUser,
// 	loginUser
//  }