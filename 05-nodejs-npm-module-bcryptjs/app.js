const bcrypt= require('bcryptjs')

let user= {
    name:'rajan',
    email: "sujitpalo149@mail.com",
    password:'sujitpalo'
}
let salt = bcrypt.genSaltSync(2);
let hashpassword= bcrypt.hashSync(user.password,salt);

let updateuser ={
    ...user,
    password :hashpassword
}
console.log(updateuser)

if(bcrypt.compareSync('sujitpalo',hashpassword)){
    console.log('Login success');
}
else{
    console.log("invalid password")
}