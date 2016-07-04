import React from 'react';

export default class StatusBarName extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        {this.props.greeting}
        <span>{this.props.username}</span>
      </div>
    )
  }
}