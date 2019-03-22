// pipes and pipe chaining

const fs = require('fs');
const zlib = require('zlib'); //compressing files module
const gunzip = zlib.createGunzip(); // transform string
const readStream = fs.createReadStream('./example2.txt.gz');
const writeStream = fs.createWriteStream('uncompressed.txt'); 

readStream.pipe(gunzip).pipe(writeStream); // source and destination stream  