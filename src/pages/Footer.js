import React, { PropTypes } from 'react'
import styled from 'styled-components'

const Foo = styled.div`
  background: #f7f8f8;
  padding: 40px 0 30px 0;
  .contained {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 40px;
    box-sizing: content-box;
  }
  .contained {
    color: #8b8b8b;
    font-family: Roboto,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;
    font-size: 16px;
    text-align: center;
    line-height: 32px;
    font-weight: 300;
  }

  a {
    color: #00c7b7;
    text-decoration: none;
    font-weight: 700;
  }
`

class Footer extends React.Component {
  render () {
    return (
      <Foo className='footer'>
        <p className="contained">Community chat on <a href="https://gitter.im/jamstack/community" target="_blank" className="text-link">Gitter</a>. Site code on <a href="https://github.com/jamstack/jamstack.org">GitHub</a>. Pull Requests welcome!</p>
      </Foo>
    )
  }
}

export default Footer;
