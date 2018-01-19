import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import '../assets/header.css'
import { Menu, Dropdown } from 'antd';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Link to='/'>JAM 技术栈</Link>
    </Menu.Item>
    <Menu.Item key="1">
      <Link to='/Practices'>最佳实践</Link>
    </Menu.Item>
    <Menu.Item key="3"><Link to='/Examples'>例子</Link></Menu.Item>
    <Menu.Item key="4"><Link to='/Resources'>资源</Link></Menu.Item>
    <Menu.Item key="5"><Link to='/Community'>社区</Link></Menu.Item>
  </Menu>
);

const Me = styled.div`
  font-family: Roboto,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  width: 100%;
  transition: background .2s ease,padding .2s ease,box-shadow .2s ease;
  .nav-menu {
    display: none;
  }

  .nav a{
    margin-left: 20px;
    text-decoration: none;
    font-weight: 700;
    color: #313d3e;
    position: relative;
    font-size: 14.5px
  }

  .show {
    background: #00c7b7;
    height: 29px;
    left: 0;
    position: absolute;
    top: -55px;
    transform: translateY(-30px) skew(45deg);
    transition: transform .2s ease;
    width: 100%;
    z-index: -1;
  }

  .nav a:hover .show{
    transform: translateY(0px) skew(0deg);
  }
`



class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      show: false
    }
  }

  componentDidMount() {
     window.addEventListener('scroll', this.orderScroll.bind(this))
   }

   orderScroll() {
     console.log(document.body.scrollTop)
     if (document.body.scrollTop>0) {
       this.setState({show: true})
     }else {
       this.setState({show: false})
     }
   }
  render () {
    let divstyle = {
     backgroundColor:'white',
     padding: '20px 20px 20px 20px',
     boxShadow: '0 4px 8px rgba(0,0,0,.05)'
    }
    return (
      <Me className="header" style={this.state.show? divstyle : null}>
        <div className="logo">
          <Link to='/'>
            <img src={require('../img/jamstack-logo.svg')} />
          </Link>
        </div>
        <div className="nav">
          <Link to='/Practices'><div className='show'></div>最佳实践</Link>
          <Link to='/Examples'><div className='show'></div>例子</Link>
          <Link to='/Resources'><div className='show'></div>资源</Link>
          <Link to='/Community'><div className='show'></div>社区</Link>
        </div>
        <Dropdown overlay={menu} trigger={['click']}>
          <div className="nav-menu">
            <span className="slicknav_btn">
              <span className="slicknav_menutxt">
                <span className="slicknav_icon slicknav_no-text"><span className="slicknav_icon-bar"></span><span className="slicknav_icon-bar"></span><span className="slicknav_icon-bar"></span></span>
              </span>
            </span>
          </div>
        </Dropdown>

      </Me>
    )
  }
}

export default Header;
