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
    line-height: 30px;
    font-weight: 100;
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
        <p className="contained">
          本站内容由<a href="https://haoqicat.com">好奇猫</a>翻译。
          网站代码在 <a href="https://github.com/happypeter/jam">Github</a>。
          如果你发现本站翻译错误，请给我发 Pull Request 。
        </p>
      </Foo>
    )
  }
}

export default Footer;
