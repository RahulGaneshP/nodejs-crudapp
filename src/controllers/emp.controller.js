const Employee = require('../models/emp.model');

//calls findbyid promise asynchronously
exports.findById = async(req, res) => {
    try{
    console.log("GET/employee/id invoked");
    const employee = await Employee.findById(req.params.id);
    //response
    res.status(200).json({data: employee});
    }
    catch(err){
            console.log(err);
            res.sendStatus(400).json({error:err});
    }
};

//calls findbyEmail promise asynchronously
exports.findByEmail = async(req, res)=> {
    try{
    console.log("GET/employee/email invoked");
    const employee = await Employee.findByEmail(req.params.email); 
    //response
    res.status(200).json({data: employee});
    }
    catch(err){
        console.log(err);
        res.sendStatus(400).json({error:err});

    };
};

//calls findbyNo promise asynchronously
exports.findByNo = async(req, res) => {
    try{
        console.log("GET/employee/phone-no invoked");
        const employee = await Employee.findByNo(req.params.phno); 
        //response
        res.status(200).json({data: employee});
        }
    catch(err){
            console.log(err);
            res.sendStatus(400).json({error:err});
    
        };
    };

//calls create promise asynchronously
exports.create = async(req, res) =>{
        const new_employee = new Employee(req.body);
        console.log("POST/employee invoked");
        //handles null error 
       if(req.body.constructor === Object && Object.keys(req.body).length === 0){
            res.status(400).send({message: 'Please provide all required field' });
        }else{
            try{
            var empId = await Employee.create(new_employee); 
            //response
            res.status(201).json({employeeId:empId});

            }
            catch(err){
                console.log(err);
                res.sendStatus(400).json({error:err});   
            };
        }
    };

//calls update promise asynchronously
exports.update = async(req, res) =>{
        console.log("PUT/employee/id invoked");
        if(req.body.constructor === Object && Object.keys(req.body).length === 0){
            res.status(400).send({message: 'Please provide all required field' });
        }else{
            try{
            var noRows = await Employee.update(req.params.id, new Employee(req.body));
            //response
            res.status(200).json({updatedRows: noRows});
            }
            catch(err) {
                console.log(err);
                res.sendStatus(400).json({error:err});
            };
        }
        };

//calls delete promise asynchronously
exports.delete = async(req, res) =>{
            try{
            console.log("DELETE/employee/id invoked");
            const employee = await Employee.delete(req.params.id);
            //response
            res.status(204).json({message:"Employee deleted"});   
            }
            catch(err){
                console.log(err);
                res.sendStatus(400).json({error:err});
            };
          };

//calls createbatch promise asynchronously
exports.createbatch = async(req, res)=> {
            var new_employee = req.body.data;
            console.log("POST/employee/batch invoked");
            //handles null error 
           if(req.body.constructor === Object && Object.keys(req.body).length === 0){
               res.status(400).send({message: 'Please provide all required field' });
            }else{
                try{
                var nofRows = await Employee.createbatch(new_employee);
                //response
                res.status(201).json({rowsAffected:nofRows});
                } 
                catch(err) {
                    console.log(err);
                    res.sendStatus(400).json({error:err}); 
                };
            }
        };

    
  
