const express = require('express');
const app = express();
const {getHome,registerForm,saveRegister,showUser,loginForm,editUser,updateUser,deleteUser} = require('../controllers/homeController');

const router = express.Router();

router.get('/home',getHome);

router.get('/register',registerForm);

router.post('/registerUser',saveRegister);

router.get('/showUser',showUser);

router.get('/login',loginForm);

router.get('/editUser/:id',editUser);

router.post('/postEditUser', updateUser); 

router.post('/postDeleteUser/:id', deleteUser);

module.exports = router;