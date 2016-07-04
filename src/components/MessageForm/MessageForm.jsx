import React from 'react';

import { Button } from './../Common/Buttons';

export default class MessageForm extends React.Component{
  constructor(props){
    super(props);
  }

  onLeaveChat(){
    console.log("leave chat !");
  }

  render(){
    return (
      <div>
        <input type="" />
        <Button COLOR={Button.COLOR.BLUE} SIZE={Button.SIZE.MEDIUM} onClick={this.onLeaveChat.bind(this)}>Leave chat</Button>
      </div>
    )
  }
}