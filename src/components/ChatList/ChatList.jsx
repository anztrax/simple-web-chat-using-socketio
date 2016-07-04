import React from 'react';
import ChatListItem from './ChatListItem.jsx';

import style from './ChatList.css';

export default class ChatList extends React.Component{
  constructor(props){
    super(props);
  }

  generateChatListItem(){
    const { messages } = this.props || [];

    return messages.map((data,idx) => {
      const username = data.username;
      const message = data.message;

      return (
        <ChatListItem
          username={username}
          message={message}
        />
      )
    });
  }

  render(){
    return (
      <ul class={style.chatList}>
        {this.generateChatListItem()}
      </ul>
    )
  }
}