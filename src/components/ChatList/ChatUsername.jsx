import React from 'react';

export default class ChatUsername extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <strong>{this.props.username}</strong>
    )
  }
}