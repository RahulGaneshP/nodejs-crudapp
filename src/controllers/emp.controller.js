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


  
