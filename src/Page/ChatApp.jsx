import React from 'react';

export default class ChatApp extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <form id="statusBar">
          <div id="nameContainer">hi : <span id="joinerName"></span></div>
          <button id="leaveConversationBtn">Leave chat </button>
        </form>
        <ul id="messages"></ul>
        <form action="" id="messageForm">
          <input id="messageTextInput" autocomplete="off" />
          <button>Send Message</button>
        </form>
      </div>
    )
  }
}