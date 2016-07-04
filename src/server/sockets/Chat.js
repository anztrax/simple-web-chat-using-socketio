class Chat{
  constructor(socket,emitToAll){
    this.socket = socket;
    this.emitToAll = emitToAll;
    this.doAction();
  }

  doAction(){
    this.socket.on('chat message',(payload)=>{
      var user = payload.user;
      var text = payload.text;

      //io.emit is for everyone :)
      this.emitToAll('chat message',{
        user : user,
        text : text
      });
    });

    this.socket.on('new joiner',(msg)=>{
      var finalMsg = msg + ' has join the conversation';
      this.emitToAll('new joiner',finalMsg);
    });

    this.socket.on('joiner leave',(msg)=>{
      var finalMsg = msg + ' has left the conversation';
      this.emitToAll('joiner leave',finalMsg);
    });
  }
}


export default Chat;