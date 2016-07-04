class Disconnect{
  constructor(socket,emitToAll){
    this.socket = socket;
    this.emitToAll = emitToAll;
    this.doAction();
  }

  doAction(){
    this.socket.on('disconnect',()=>{
      console.log('user disconnected');
    });
  }
}

export default Disconnect;