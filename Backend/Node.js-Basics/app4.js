//basic CRUD operations using filesystem

const fs = require('fs');

// create a file

// fs.writeFile('example.txt', "this is an example file", (err) => {
//     if(err){
//         console.log(err);
//     }else {
//         console.log("File is created!!!");
//         fs.readFile('example.txt','utf8', (err,file) =>{      // file name, encoding type, callback function are required parameters
//             if(err){
//                 console.log(err);
//             }
//             else console.log(file);
//         }) 
//     }
// }) 

//file rename
// fs.rename('example.txt', 'example2.txt', (err) =>{
//     if(err){
//         console.log(err)
//     }else {
//         console.log("File is successfully renamed");
//     }
// })

//update a file using fs
// fs.appendFile('example2.txt', 'Some data is being added', (err) => {
//     if (err){
//         console.log(err);
//     }
//     console.log("Data has been modified to file");
// })

//delete file from system
// fs.unlink('example2.txt', (err) =>{
//     if(err){
//         console.log(err)
//     }
//     console.log("File has been deleted")
// })