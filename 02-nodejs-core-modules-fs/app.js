const fs= require('fs');
const os= require('os');

//os module
let memory=os.totalmem()
console.log(memory)


let freememory=os.freemem()
console.log(freememory)


let version=os.version()
console.log(version)

let nversion=os.uptime()
console.log(nversion)


//read file sync way
// let filecontent=fs.readFileSync('msg.txt', 'utf-8');
// console.log(filecontent)

// //write to a file
// let writefile =`this is the new line : ${filecontent}`;
// fs.writeFileSync('welcome.txt',writefile,'utf-8');
// console.log('data is written to file');


//read file content in async way

// fs.readFile('msg.txt' ,'utf-8',(err,data)=>{
//     if(err) throw err;
//     // console.log(data)
//     fs.writeFile('data.txt',data,'utf-8',(err,data)=>{
//         if(err) throw err;
//         console.log('data is written to a file')

//     })
// })
// console.log('welcome to fs module')

// JSON file with content
// let employees = [{"id":1,"first_name":"Konrad","last_name":"Deport","email":"kdeport0@flavors.me","gender":"Male","ip_address":"77.144.194.98"},
//     {"id":2,"first_name":"Hogan","last_name":"Vigneron","email":"hvigneron1@umich.edu","gender":"Male","ip_address":"55.141.251.57"},
//     {"id":3,"first_name":"Peirce","last_name":"Weigh","email":"pweigh2@reddit.com","gender":"Male","ip_address":"9.51.57.105"},
//     {"id":4,"first_name":"Ancell","last_name":"Dadge","email":"adadge3@time.com","gender":"Male","ip_address":"34.62.236.196"},
//     {"id":5,"first_name":"Rodi","last_name":"Chidler","email":"rchidler4@mysql.com","gender":"Female","ip_address":"80.188.244.118"},
//     {"id":6,"first_name":"Rustie","last_name":"Goffe","email":"rgoffe5@sfgate.com","gender":"Male","ip_address":"215.222.246.128"},
//     {"id":7,"first_name":"Virgie","last_name":"Biswell","email":"vbiswell6@ebay.com","gender":"Female","ip_address":"31.6.26.106"},
//     {"id":8,"first_name":"Lonny","last_name":"Kelso","email":"lkelso7@scientificamerican.com","gender":"Male","ip_address":"194.38.248.159"},
//     {"id":9,"first_name":"Pip","last_name":"Iannini","email":"piannini8@php.net","gender":"Male","ip_address":"128.202.19.133"},
//     {"id":10,"first_name":"Vanny","last_name":"Blaze","email":"vblaze9@123-reg.co.uk","gender":"Female","ip_address":"194.104.68.78"}];

//      fs.writeFile('emp.json',JSON.stringify(employees),'utf-8',(err)=>{

//        if(err) throw err; 
//        console.log(`data is written to json file`)
//      });

//      //read file
//      fs.readFile('emp.json','utf-8' , (err , data) => {
//         if(err) throw  err;
//         let employees = JSON.parse(data);
//         console.log(employees);
//     });

