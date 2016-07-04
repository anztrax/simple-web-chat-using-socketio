import socketIO from 'socket.io';
import Chat from './Chat';
import Disconnect from './Disconnect';

const init = (io,emitToAll)=>{
  io.on('connection',(socket)=>{
    new Disconnect(socket,emitToAll);
    new Chat(socket,emitToAll);
  });
}

export default (http)=>{
  const io = socketIO(http);
  const emitToAll = io.emit;
  init(io,emitToAll);
}