import React from 'react';
import StatusBarName from './StatusBarName';
import { Button } from './../Common/Buttons';

export default class StatusBar extends React.Component{
  constructor(props){
    super(props);
  }

  onLeaveChat(){
    console.log("leave chat !");
  }

  render(){
    return (
      <div>
        <StatusBarName username={this.props.username} />
        <Button COLOR={Button.COLOR.BLUE} SIZE={Button.SIZE.MEDIUM} onClick={this.onLeaveChat.bind(this)}>Leave chat</Button>
      </div>
    )
  }
}