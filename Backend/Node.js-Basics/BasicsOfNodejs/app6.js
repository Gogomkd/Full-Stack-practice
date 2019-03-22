// working with readable and writeable streams

const fs = require('fs');

const readStream =  fs.createReadStream('./example.txt', 'utf8');
const writeStream = fs.createWriteStream('example2.txt'); // writhing on the other file even before the original file is readed
readStream.on('data', (chunk) => {
    writeStream.write(chunk);
})

//advantage of readable stream is loading very very large files without using full buffer
//what happens is that we are getting the file in chunks not the whole file at once opposed to the read file method
//witch uses a full buffer witch needs to be big enough to load the whole file at once