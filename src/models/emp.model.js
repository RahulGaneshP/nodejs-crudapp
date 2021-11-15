const mysql = require('mysql');
const constr = require ('../config/config.json');
const dbConn = mysql.createPool(constr);

var Employee ={};

Employee.findById = (id) => {
    return new Promise((resolve,reject)=>{
        dbConn.query(`Select * from employee where id = ${id}`, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                return reject(err);
            }
            else{
                return resolve(res[0]);
            }
    });
   });
  };

Employee.findByEmail = (email) =>{
    return new Promise((resolve,reject)=>{
    dbConn.query('Select * from employee where email = ? ', email,function (err, res) {             
        if(err) {
            console.log("error: ", err);
            return reject(err);
        }
        else{
            return resolve( res[0]);
        }
    });   
});
};

Employee.findByNo = (phno) =>{
    return new Promise((resolve,reject)=>{
    dbConn.query(`Select * from employee where phno = ${phno}`, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            return reject(err);
        }
        else{
            return resolve( res[0]);
        }
    });   
});
};

module.exports= Employee;
        
