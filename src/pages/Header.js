import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Menu = styled.div`
  font-family: Roboto,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  width: 100%;

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
    top: -48px;
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
  render () {
    return (
      <Menu>
        <div className="logo">
          <Link to='/'>
            <img src={require('../img/jamstack-logo.svg')} />
          </Link>
        </div>
        <div className="nav">
          <Link to='/Practices'><div className='show'></div>Best Practices</Link>
          <Link to='/Examples'><div className='show'></div>Examples</Link>
          <Link to='/Resources'><div className='show'></div>Resources</Link>
          <Link to='/Community'><div className='show'></div>Community</Link>
        </div>
      </Menu>
    )
  }
}

export default Header;
