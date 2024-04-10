const connection = require('../config/database');

const getUserList = async (req,res )=>{
    let [results, fields]  = await connection.query((`select * from registerUser`));
    return results
}

const updateUserByID= async (name,username,password,email)=>{
    console.log(name,username,password,email);
    let [results, fields] = await connection.query(
    `update registerUser 
    set name = ?, username = ?, pass= ?, email = ? where username = ?
    `, [name ,username ,password ,email,username]);
}

const deleteUserByID = async (username ) =>
{   
    console.log(username);
    let [result, fields] = await connection.query(
        `
        DELETE FROM nodeDB.registerUser
        WHERE name= ?
        `,
        [username]);
}
module.exports = {getUserList,updateUserByID,deleteUserByID}