import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import './style/home.css'

const { Header, Content, Footer } = Layout;

class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo"></div>
          <Menu 
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}>
            <Menu.Item key="1">首页</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content>

        </Content>
      </Layout>
    )
  }
}

export default Home;