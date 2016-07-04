import React from 'react';
import Style from './../CommonComponent.css';

export default class TextField extends React.Component{
  constructor(props){
    super(props);
  }

  static SIZE = {
    MEDIUM : {
      className : ''
    }
  };

  render(){
    //resolve button styles
    const {SIZE} = this.props || {className : ''};
    const className = '';
    return (
      <input className={className} />
    )
  }
}