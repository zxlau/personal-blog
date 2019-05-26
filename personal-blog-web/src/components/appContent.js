import React, { Component } from 'react';
import Home from './home'

class appContent extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let content;
    if(this.props.selectedKeys === '1') {
      content = <Home></Home>
    } else if(this.props.selectedKeys === '2') {
      content = '技术'
    } else if(this.props.selectedKeys === '3') {
      content = '经济'
    } else if(this.props.selectedKeys === '4') {
      content = '心理学'
    }
    return (
     content
    )
  }
}

export default appContent;