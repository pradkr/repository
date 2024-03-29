const mongoose = require('mongoose')

const User = new mongoose.Schema(
	{
		email: { type: String, required: [true, 'Missing email'], unique: true },
		name:  { type: String, required: [true, 'Missing name'] },
		password:    { type: String, required: [true, 'Missing password'] },
		// updatedat: { type: Date, default: mongoose.now()},
		// datetime: { type: Date, default: Date.now },
		quote:    { type: String },
	},
	{ timestamps: true, collection: 'user-data' }
)

//const model = mongoose.model('UserData', User)
//module.exports = model
module.exports=mongoose.model('UserData', User)