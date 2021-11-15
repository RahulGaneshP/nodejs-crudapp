const Employee = require('../models/emp.model');

exports.findById = async(req, res) => {
    try{
    const employee = await Employee.findById(req.params.id);
    res.status(200).json({employee: employee});
    }
    catch(err){
            console.log(err);
            res.sendStatus(404);
    }
};

exports.findByEmail = async(req, res)=> {
    try{
    const employee = await Employee.findByEmail(req.params.email); 
    res.status(200).json({employee: employee});
    }
    catch(err){
        console.log(err);
        res.sendStatus(404);

    };
};

exports.findByNo = async(req, res) => {
    try{
        const employee = await Employee.findByNo(req.params.phno); 
        res.status(200).json({employee: employee});
        }
    catch(err){
            console.log(err);
            res.sendStatus(404);
    
        };
    };

exports.create = async(req, res) =>{
        const new_employee = new Employee(req.body);
        //handles null error 
       if(req.body.constructor === Object && Object.keys(req.body).length === 0){
            res.status(400).send({ error:true, message: 'Please provide all required field' });
        }else{
            try{
            var empid = await Employee.create(new_employee); 
            res.status(201).json({message:"Employee added successfully!",employeeid:empid});
            }
            catch(err){
                console.log(err);
                res.sendStatus(400);   
            };
        }
    };

    exports.update = async(req, res) =>{
        if(req.body.constructor === Object && Object.keys(req.body).length === 0){
            res.status(400).send({ error:true, message: 'Please provide all required field' });
        }else{
            try{
            var noRows = await Employee.update(req.params.id, new Employee(req.body));
            res.status(200).json({message:"Employee successfully updated",rowsUpdated: noRows});
            }
            catch(err) {
                console.log(err);
                res.sendStatus(400);
            };
        }
        };

        exports.delete = async(req, res) =>{
            try{
            const employee = await Employee.delete(req.params.id);
            res.status(204);   
            }
            catch(err){
                console.log(err);
                res.sendStatus(400);
            };
          };
    
  
