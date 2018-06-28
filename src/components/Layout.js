import React, { Component } from 'react'
import { Layout as LayoutAntd } from 'antd'
import Header from './Header'
import HeaderSider from './HeaderSider'

const { Content } = LayoutAntd

class Layout extends Component {
  render() {
    return (
      <LayoutAntd>
        <Header />
        <LayoutAntd>
          <HeaderSider />
          <LayoutAntd>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
              }}
            >
              {this.props.children}
            </Content>
          </LayoutAntd>
        </LayoutAntd>
      </LayoutAntd>
    )
  }
}

export default Layout
