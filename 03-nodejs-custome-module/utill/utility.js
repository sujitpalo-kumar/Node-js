let greet = () => {
    let msg = 'Good Morning India';
    return msg;
 };
 
 let reverseString = (message) => {
     let temp = '';
     for(let i=message.length-1; i >= 0; i--){
         temp += message.charAt(i);
     }
     return temp;
 };
 
 module.exports = {
     greet,
     reverseString
 };
 