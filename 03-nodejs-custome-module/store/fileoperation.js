const fs = require('fs');

let writeToAFile = (filename , content) => {
    fs.writeFile(filename, content , 'utf-8', (err) => {
        if(err) throw  err;
        console.log(`data is written to a file :  ${filename}`);
    });
};

module.exports = {
    writeToAFile
};
