const connection = require('../config/database');

const getHome = (req,res) =>{
    res.render('navbar.ejs');
}
const registerForm =(req,res) =>{
    res.render('register.ejs');
}

const  saveRegister = async (req,res) =>
{
    console.log("req.body", req.body);
 
    let name = req.body.name;
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    const [result,files] = await connection.query( `insert into registerUser values (?,?,?,?)`,
    [name,username,password,email])
    console.log('result',result)
    // connection.query(
    //     `insert into registerUser values (?,?,?,?)`,
    //     [name,username,password,email],
    //     function (err,result) {
    //         if (err){
    //             console.log(err);
    //         }
    //         else{
    //             console.log(result);
    //         } 
    //     }
    // )
}

const showUser = (req, res) => {
    res.render('viewUser.ejs')
}

const loginForm = (req, res) => {
    res.render('login.ejs');
}
module.exports= {getHome,registerForm,saveRegister,showUser,loginForm};