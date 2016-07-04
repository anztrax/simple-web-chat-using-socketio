import React from 'react';
import ChatMessage from './ChatMessage.jsx';
import ChatUsername from './ChatUsername.jsx';

export default class ChatListItem extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <li>
        <ChatUsername username={this.props.username}  />
        <ChatMessage message={this.props.message} />
      </li>
    )
  }
}