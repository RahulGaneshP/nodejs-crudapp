const mysql = require('mysql');
const constr = require ('../config/config.json');
const dbConn = mysql.createPool(constr);

var Employee = function(employee){
    this.firstname = employee.firstname;
    this.lastname = employee.lastname;
    this.email = employee.email;
    this.phno=employee.phno;
    this.designation = employee.designation;
    this.salary = employee.salary;
  };

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

Employee.create = (newEmp) =>{    
    return new Promise((resolve,reject)=>{
    dbConn.query("INSERT INTO employee set ?", newEmp, function (err, res) {
        if(err) {
            console.log("error: ", err);
            return reject(err);
        }
        else{
            console.log(res.insertId);
            return resolve(res.insertId);
        }
    });           
    });
};

Employee.update =(id, employee)=>{
    return new Promise((resolve,reject)=>{
    dbConn.query("UPDATE employee SET firstname=?,lastname=?,email=?,phno=?,designation=?,salary=? WHERE id = ?", [employee.firstname,employee.lastname,employee.email,employee.phno,employee.designation,employee.salary, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
              return reject( err);
          }else{   
            return resolve( res.affectedRows);
          }
      }); 
  });
};

module.exports= Employee;
        
