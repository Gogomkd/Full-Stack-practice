//creating http server with http module

const http = require('http');
const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.write("Hello world from Nodejs");
        res.end();
    }else {
        res.write("Using some other domain");
        res.end();
    }
});












console.log("server is running")
server.listen('3001');