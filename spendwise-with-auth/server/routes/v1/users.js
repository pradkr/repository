const express = require('express');
const router = express.Router();
const { findUser,
        createUser,	
        loginUser,
        getQuote,
        createQuote}  = require('../../controllers/v1/users');

// app.post('/api/v1/user/register', controllers.createUser);
// app.post('/api/v1/user/login', controllers.loginUser);
// app.get( '/api/v1/user/quote', controllers.getQuote);
// app.post('/api/v1/user/quote', controllers.createQuote);

router
    .route('/find')
    .post(findUser)

router
    .route('/register')
    .post(createUser)

router
    .route('/login')
    .post(loginUser)

router
    .route('/getquote')
    .post(getQuote)

router
    .route('/createquote')
    .post(createQuote)

// router
//     .route('/register')
//     .post(createUser)
//     .delete(deleteTransaction);
//     .route('/:id')

module.exports = router;
