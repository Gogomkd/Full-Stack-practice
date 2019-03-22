// serving static files with http server and file system modules

const http = require('http');
const fs = require('fs');

http.createServer((req,res) => {
    const readStream = fs.createReadStream('./static/example.png');
    res.writeHead(200, {'Content-Type' : 'image/png'});
    readStream.pipe(res);

}).listen(3000);