const util = require('./utill/utility');
const fileOpr = require('./store/fileoperation');

let msg = util.greet();
let revMsg = util.reverseString(msg);
fileOpr.writeToAFile('message.txt' , revMsg);


