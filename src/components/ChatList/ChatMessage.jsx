import React from 'react';

export default class ChatMessage extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <span>{this.props.message}</span>
    )
  }
}