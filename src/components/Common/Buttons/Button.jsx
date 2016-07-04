import React from 'react';
import Style from './../CommonComponent.css';

export default class Button extends React.Component{
  constructor(props){
    super(props);
  }

  static COLOR ={
    BLUE : {
      className : Style['btn-blue']
    }
  }

  static SIZE = {
    MEDIUM : {
      className : Style['btn-medium']
    }
  };

  render(){
    //resolve button styles
    const {COLOR , SIZE} = this.props || {className : '', className : ''};
    const className = `btn ${COLOR.className} ${SIZE.MEDIUM}`;

    const {onClick}  = this.props || ()=> {};

    return (
      <button onClick={onClick} className={className}>
        {this.props.children}
      </button>
    )
  }
}