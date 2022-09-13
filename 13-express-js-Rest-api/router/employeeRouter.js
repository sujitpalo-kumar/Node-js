const express = require('express');
const router = express.Router();
const fs  = require('fs');
const path = require('path');
const uuid = require('uuid');

let generateId = () => {
    return uuid.v4();
};

/*
    USAGE : GET all Employees
    URL : http://127.0.0.1:5000/employees/
    Method : GET
    FIELDS : no-fields
 */
router.get('/', (request,response) => {
    fs.readFile(path.join(__dirname, '..' , 'data' , 'employees.json'), 'utf-8', (err, data) => {
        if(err) throw  err;
        let employees = JSON.parse(data);
        response.status(200).json({
            result : employees.length,
            employees : employees
        });
    });
});

/*
    USAGE : GET an Employee
    URL : http://127.0.0.1:5000/employees/:id
    Method : GET
    FIELDS : no-fields
 */
router.get('/:id', (request,response) => {
    let employeeId = request.params.id;
    fs.readFile(path.join(__dirname, '..' , 'data' , 'employees.json'), 'utf-8' , (err, data) => {
        if(err) throw err;
        let employees = JSON.parse(data);
        let selectedEmployee = employees.find(employee => {
            return employee._id === employeeId;
        });
        response.status(200).json(selectedEmployee);
    });
});

/*
    USAGE : CREATE an Employee
    URL : http://127.0.0.1:5000/employees/
    Method : POST
    FIELDS : first_name , last_name , email , gender , ip_address
 */
router.post('/', (request,response) => {
    let newEmployee = {
        _id : generateId(),
        first_name : request.body.first_name,
        last_name : request.body.last_name,
        email : request.body.email,
        gender : request.body.gender,
        ip_address : request.body.ip_address,
        date : new Date()
    };
    fs.readFile(path.join(__dirname, '..' , 'data' , 'employees.json'), 'utf-8', (err, data) => {
        if(err) throw  err;
        let employees = JSON.parse(data);
        employees.unshift(newEmployee); // adds a new employee to an array
        fs.writeFile(path.join(__dirname, '..' , 'data' , 'employees.json'), JSON.stringify(employees), 'utf-8', (err) => {
            if(err) throw err;
            response.status(200).json({
                result : 'Employee is Created',
                employee : newEmployee
            });
        })
    });
});

/*
    USAGE : UPDATE an Employee
    URL : http://127.0.0.1:5000/employees/:id
    Method : PUT
    FIELDS : first_name , last_name , email , gender , ip_address
 */
router.put('/:id', (request,response) => {
    let employeeID = request.params.id;
    let updatedEmployee = {
        _id : employeeID,
        first_name : request.body.first_name,
        last_name : request.body.last_name,
        email : request.body.email,
        gender : request.body.gender,
        ip_address : request.body.ip_address,
        date : new Date()
    };
    fs.readFile(path.join(__dirname, '..' , 'data' , 'employees.json'), 'utf-8', (err, data) => {
        if(err) throw  err;
        let employees = JSON.parse(data);
        let removableIndex = employees.map(employee => employee._id).indexOf(employeeID);
        employees.splice(removableIndex, 1, updatedEmployee); // replace employee
        fs.writeFile(path.join(__dirname, '..' , 'data' , 'employees.json'), JSON.stringify(employees), 'utf-8', (err) => {
            if(err) throw err;
            response.status(200).json({
                result : 'Employee is Updated',
                employee : updatedEmployee
            });
        });
    });
});

/*
    USAGE : DELETE an Employee
    URL : http://127.0.0.1:5000/employees/:id
    Method : DELETE
    FIELDS : no-fields
 */
router.delete('/:id' , (request, response) => {
    let employeeID = request.params.id;
    fs.readFile(path.join(__dirname, '..' , 'data' , 'employees.json'), 'utf-8', (err, data) => {
        if(err) throw  err;
        let employees = JSON.parse(data);
        let removableIndex = employees.map(employee => employee._id).indexOf(employeeID);
        employees.splice(removableIndex, 1); // remove an employee
        fs.writeFile(path.join(__dirname, '..' , 'data' , 'employees.json'), JSON.stringify(employees), 'utf-8', (err) => {
            if(err) throw err;
            response.status(200).json({
                result : 'Employee is Deleted',
                employeeID : employeeID
            });
        });
    });
});

module.exports = router;
