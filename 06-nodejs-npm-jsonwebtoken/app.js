const jwt =require('jsonwebtoken');

let user = {
    id : '4564-ASF-4545',
    name : 'Rajan',
    email : 'rajan@gmail.com'
};

let payload ={
    id:user.id,
    name :user.name
};

let secretkey ="sfdfagvzd"
let token = jwt.sign(payload,secretkey,{
    expiresIn:60*60
})
console.log(token)

jwt.verify(token,secretkey,(err,decoded)=>{
    if(err) throw err;
    console.log(decoded);
});