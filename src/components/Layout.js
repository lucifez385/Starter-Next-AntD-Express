import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import Header from './Header'
import Sidebar from './Sidebar'

const LayoutComponent = props => (
  <Layout className="layout">
    <Header userAgent={props.userAgent} />
    <Layout hasSider className="menu-sider-layout">
      <Sidebar />
      <Layout className="content-layout">
        <Layout.Content>{props.children}</Layout.Content>
      </Layout>
    </Layout>
  </Layout>
)
LayoutComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.object, PropTypes.arrayOf(PropTypes.element)]),
  userAgent: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.object, PropTypes.arrayOf(PropTypes.element)]),
}

LayoutComponent.defaultProps = {
  children: '',
  userAgent: {},
}

export default LayoutComponent
