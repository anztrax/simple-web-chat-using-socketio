import React from 'react';
import ChatList from './../components/ChatList/ChatList.jsx';
import StatusBar from './../components/StatusBar/StatusBar.jsx';
import MessageForm from './../components/MessageForm/MessageForm.jsx';

export default class ChatApp extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <StatusBar />
        <ChatList />
        <MessageForm />
      </div>
    )
  }
}