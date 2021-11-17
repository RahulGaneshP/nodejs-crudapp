const mysql = require('mysql');
const constr = require ('../config/config.json');

//Create DB Connection Pool
const dbConn = mysql.createPool(constr); 


//Employee Object
var Employee = function(employee){
    this.firstname = employee.firstname;
    this.lastname = employee.lastname;
    this.email = employee.email;
    this.phno=employee.phno;
    this.designation = employee.designation;
    this.salary = employee.salary;
  };

// Get by ID model
Employee.findById = (id) => {
    //create a promise
    return new Promise((resolve,reject)=>{
        //Query fetches employee based on id
        console.log("inside findById model");
        dbConn.query(`Select * from employee where id = ${id}`, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                return reject(err);
            }
            else{
                console.log("Employee fetch by id successful \n");
                return resolve(res[0]);
            }
    });
   });
  };

//GET by email model
Employee.findByEmail = (email) =>{
    //create a promise
    return new Promise((resolve,reject)=>{
    //Query fetches employee based on email
    console.log("inside findByEmail model");
    dbConn.query('Select * from employee where email = ? ', email,function (err, res) {             
        if(err) {
            console.log("error: ", err);
            return reject(err);
        }
        else{
            console.log("Employee fetch by email successful \n");
            return resolve( res[0]);
        }
    });   
});
};

//GET by phone number model
Employee.findByNo = (phno) =>{
    //create a promise
    return new Promise((resolve,reject)=>{
    //Query fetches employee based on phone number
    console.log("inside findByNo model");
    dbConn.query(`Select * from employee where phno = ${phno}`, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            return reject(err);
        }
        else{
            console.log("Employee fetch by number successful \n");
            return resolve( res[0]);
        }
    });   
});
};

//POST create employee model
Employee.create = (newEmp) =>{ 
    //create a promise   
    return new Promise((resolve,reject)=>{
    ///Query inserts a single employee
    console.log("inside create model");
    dbConn.query("INSERT INTO employee set ?", newEmp, function (err, res) {
        if(err) {
            console.log("error: ", err);
            return reject(err);
        }
        else{
            console.log("employee created successfully, employeeID=",res.insertId);
            return resolve(res.insertId);
        }
    });           
    });
};

//PUT update employee model
Employee.update =(id, employee)=>{
    //create a promise
    return new Promise((resolve,reject)=>{
    //Query updates employee based on id
    console.log("inside update model");
    dbConn.query("UPDATE employee SET firstname=?,lastname=?,email=?,phno=?,designation=?,salary=? WHERE id = ?", [employee.firstname,employee.lastname,employee.email,employee.phno,employee.designation,employee.salary, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
              return reject( err);
          }else{ 
            console.log("employee updated successfully, changedRows=",res.changedRows);  
            return resolve( res.changedRows);
          }
      }); 
  });
};

//DELETE delete employee model
Employee.delete = (id)=>{
    //create a promise
    return new Promise((resolve,reject)=>{
    //Query deletes employee based on id
    console.log("inside delete model");
    dbConn.query("DELETE FROM employee WHERE id = ?", [id], function (err, res) {
       if(err) {
        console.log("error: ", err);
        return reject( err);
       }
       else{
          console.log("employee deleted successfully \n");
          return resolve(res);
       }
   }); 
});
};

//POST create batch of employees model
Employee.createbatch = (newEmp) =>{    
    //create a promise
    return new Promise((resolve,reject)=>{
    console.log("inside createBatch model");
    //parses the employee records
    var values=[];
    for(var index in newEmp){
        var obj = (Object.values(newEmp[index]));
        values.push(obj)
    }
  //Query inserts multiple employee records
  var sql = "INSERT INTO employee (firstname,lastname,email,phno,designation,salary) VALUES ?";
  dbConn.query(sql,[values], function (err, res) {
        if(err) {
            console.log("error: ", err);
            return reject(err);
        }
        else{
            console.log("employees created successfully, noOfRowsInserted=",res.affectedRows);
            return resolve( res.affectedRows);
        }
    });           
});
};


module.exports= Employee;
        
