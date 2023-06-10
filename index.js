//Crud with file system
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/apple.txt`

//fs.writeFileSync(filePath,'This is a simple text file');
// fs.readFile(filePath, 'utf8', (err, item) => {
//     console.log(item);
// })
fs.appendFile(filePath, 'and file name is apple.txt', (err) => {
    if (!err) console.log('file is updated')
})





//show file list
// const fs = require('fs')

// const path = require('path');
// const dirPath = path.join(__dirname, 'files');

// for (i = 0; i < 5; i++) {
//     fs.writeFileSync(dirPath + "/hello" + i + ".txt", "a simple file");
// }

// fs.readdir(dirPath, (err, files) => {
//     files.forEach((item) => {
//         console.log(item)
//     })
// })



// const http = require('http');
// const data = require('./data.js')

// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application\json' });
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(3000)

//Input from command line example

// const fs = require('fs');

// const input = process.argv;

// if (input[2] == 'add') {
//     fs.writeFileSync(input[3], input[4]);
// } else if (input[2] == 'remove') {
//     fs.unlinkSync(input[3])
// } else {
//     console.log('invalid input')
// }

