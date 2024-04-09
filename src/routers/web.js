const express = require('express');
const app = express();
const {getHome,registerForm,saveRegister,showUser} = require('../controllers/homeController');

const router = express.Router();

router.get('/home',getHome);

router.get('/register',registerForm);

router.post('/registerUser',saveRegister);

router.get('/showUser',showUser);

module.exports = router;