// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

import express from 'express'
import http from 'http'
import io from 'socket.io'
import models from './models/index'
import hat from 'hat';

const app = express();
const server = http.createServer(app);
const chat = io(server)
const text = models.Text;
// app.get('/', function(req, res){
//   res.send('<h1>Hello world</h1>');
// });

server.listen(3000, function(){
  console.log('listening on *:3000');
});

chat.on('connection', function(socket){
  socket.on('chat message', (msg) =>{
    const dataId = hat();
    text.create({
      id: dataId,
      content: msg
    })
    // console.log('message: ' + msg);
  });
});



app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});