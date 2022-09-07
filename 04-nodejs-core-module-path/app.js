const fs =require('fs');
const path = require ('path');


console.log(`folder path :${__dirname}`);
console.log(`JSON File Path ${path.join(__dirname , 'employee' , 'data' , 'employee.json')}`);


fs.readFile(path.join(__dirname, 'employee' , 'data' , 'employee.json'), 'utf-8' , (err , data) => {
    if(err) throw  err;
    let employees = JSON.parse(data);
    fs.writeFile(path.join(__dirname , 'customer' , 'data' , 'customer.json'), JSON.stringify(employees), 'utf-8' , (err) => {
        if(err) throw err;
        console.log('data is written to a JSON file');
    });
});

