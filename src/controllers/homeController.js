const connection = require('../config/database');
const {getUserList,updateUserByID,deleteUserByID} = require('../services/CRUDServices');

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

    res.redirect('/home')

}

const showUser = async (req, res) => {
    let result = await getUserList();
    return res.render('viewUser.ejs', {listUser : result})
}

const loginForm = (req, res) => {
    res.render('login.ejs');
}

const editUser = async (req, res) => {
    const name = req.params.id;
    console.log('name',name);
    let [result, fields] = await connection.query('select * from registerUser where name = ?',[name]);
    let user = result  && result.length  >0 ? result[0] : {};
    res.render('editUser.ejs',{userEdit:user});
}

const updateUser = async (req, res) => {
    let name = req.body.name ;
    let username = req.body.username ;
    let password = req.body.password ;
    let email = req.body.email;
    
    // const result = connection.query('select * from registerUser where name = ?', username)
    await updateUserByID(name,username,password,email)
    res.redirect('/home');
}
const deleteUser = async (req,res) =>{

    const username = req.params.id;
    await deleteUserByID(username);
    res.redirect('/home');
}

module.exports= {getHome,registerForm,saveRegister,showUser,loginForm,editUser,updateUser,deleteUser};