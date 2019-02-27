const fs = require('fs');

// //create folder
// fs.mkdir('tutorial', (err) =>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         fs.writeFile('./tutorial/example.txt', 'File Crated', (err) => {
//             if(err){
//                 console.log(err)
//             }
//             else {
//                 console.log("File created ")
//             }
//         })     

//     }
// });

// delete folder with one file
// fs.unlink('./tutorial/example.txt', (err) =>{
//     if(err){
//         console.log(err)
//     }else {
//     fs.rmdir('tutorial', (err) =>{
//     if(err){
//         console.log(err)
//     }
//     console.log("Folder Deleted")
// });
//     }
// });


//delete multiple files for one single directory
// fs.readdir('example', (err, files) =>{
//     if(err){
//         console.log(err)
//     }else {
//         console.log(files);
//         for (let file of files){
//             fs.unlink('./example/' + file,(err) =>{
//                 if(err){
//                     console.log(err)
//                 }else {
//                     console.log("File deleted")
//                 }
//             })
//         } 
//     }
// })
