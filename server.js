var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req,res){
  res.sendFile(__dirname + '/public/view/index.html');
});
app.use(express.static(process.cwd()  + '/public'));

io.on('connection',function(socket){
  console.log('a user connected');

  //this command is broadcast (this is for certain people)
  socket.broadcast.emit('hi');

  socket.on('disconnect',function(){
    console.log('user disconnected');
  });

  socket.on('chat message',function(payload){
    var user = payload.user;
    var text = payload.text;

    //io.emit is for everyome :)
    io.emit('chat message',{
      user : user,
      text : text
    });
  });

  socket.on('new joiner',function(msg){
    var finalMsg = msg + ' has join the conversation';
    io.emit('new joiner',finalMsg);
  });

  socket.on('joiner leave',function(msg){
    var finalMsg = msg + ' has left the conversation';
    io.emit('joiner leave',finalMsg);
  });
});

http.listen(3000,function(){
  console.log('listen on port : ' + 3000)
});
