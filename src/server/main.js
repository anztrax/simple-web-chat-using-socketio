import express from 'express';
import path from 'path';
import Http from 'http';
import socketConnection from './sockets/index';
const app = express();

function initServer(){
  const http = Http.Server(app);

  socketConnection(http);

  app.use(express.static(process.cwd()  + '/public'));
  app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../public/view/index.html'));
  });

  http.listen(3000,()=>{
    console.log('listen on port : ' + 3000)
  });
}

initServer();

export default app;