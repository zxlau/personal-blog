import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import './App.css';
import logo from './images/logo.png'
import AppContent from './components/appContent'

const { Header, Content, Footer } = Layout;
const logoStyle = {
  backgroundImage: `url(${logo})`
}
class App extends Component {
  state = {
    selectedKeys: '1'
  }
  handleClick = e => {
    this.setState({
      selectedKeys: e.key
    })
  }
  render() {
    return (
      <div className="App">
        <Layout className="layout">
          <Header>
            <div className="logo" style={logoStyle}></div>
            <Menu 
              theme="dark"
              mode="horizontal"
              selectedKeys={[this.state.selectedKeys]}
              onClick={this.handleClick}
              // defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}>
              <Menu.Item key="1">首页</Menu.Item>
              <Menu.Item key="2">技术</Menu.Item>
              <Menu.Item key="3">经济</Menu.Item>
              <Menu.Item key="4">心理学</Menu.Item>
            </Menu>
          </Header>
          <Content>
            <AppContent selectedKeys={this.state.selectedKeys}></AppContent>
          </Content>
        </Layout>
      </div>
    );
  }
  
}

export default App;
