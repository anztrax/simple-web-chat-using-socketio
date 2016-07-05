import React from 'react';

import { Button } from './../Common/Buttons';
import { TextField } from './../Common/Inputs';

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
        <TextField size={TextField.SIZE.MEDIUM} />
        <Button COLOR={Button.COLOR.BLUE} SIZE={Button.SIZE.MEDIUM} onClick={this.onLeaveChat.bind(this)}>Leave chat</Button>
      </div>
    )
  }
}