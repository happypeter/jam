import React from "react"
import styled from 'styled-components'
import Link from 'gatsby-link'
import Faq from './Faq';
import '../assets/home.css'


const Sec = styled.div`
  padding: 156px 0 104px 0;
  background-size: cover;
  .contained {
    max-width: 1200px;
    padding: 0 40px;
    box-sizing: content-box;
    margin: 0 auto;
    h1 {
      font-size: 46px;
      line-height: 64px;
      font-weight: 500;
      font-family: leitura,serif;
      .str {
       color: #00c7b7;
      }
    }
    h1:not(.chapters-headline) {
        margin: calc(8px/2) 0 0 0;
    }
  }
`

const Intro = styled.div`
  margin: 104px auto;
  .contained {
    max-width: 1200px;
    padding: 0 40px;
    box-sizing: content-box;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-size: 20px;
    line-height: 35px;
  }

  .contained div{
    width: 44%;
    font-size: 20px;
    line-height: 35px;
  }

  .contained .faq {
    display: inline-block;
    padding: 40px;
    width: 40%;
    border: 1px solid #d1d4d4;
  }

  .faq h1 {
    line-height: 0;
    margin: 15px 0 43px 0;
    font-size: 40px
  }

  .faq span {
    display: block;
    margin-bottom: 6px;
    color: #00c7b7;
    font-size: 20px;
    line-height: 35px;
    font-weight: 700;
  }
`

const Breakdown = styled.div`
  margin: 104px auto;
  .contained {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 40px;
    box-sizing: content-box;
  }
  .contained h1 {
    font-size: 40px;
    line-height: 64px;
    font-weight: 400;
    font-family: leitura,serif;
  }

  .contained p {
    margin: 13px 0 50px 0;
    font-size: 20px;
    line-height: 32px;
  }

  .letter-definition:not(:last-child) {
    margin-bottom: -64px;
  }

  .letter-definition {
    display: table;
    margin: auto;
    max-width: 960px;
    text-align: left;
  }

  .letter-definition img {
    max-width: 300px;
    height: auto;
    margin: 0 24px 0 auto;
    float: left;
  }

  .letter-definition h1 {
    padding-top: calc(40px * 2);
    line-height: 28px;
    font-size: 40px;
    font-weight: 400;
  }

  .letter-definition p {
    width: calc(100% - 300px - 24px);
    display: inline-block;
    font-size: 20px;
    line-height: 32px;
    margin: 20px 0;
  }

  .letter-definition a {
    font-weight: 500;
    font-size: 16px;
    color: #00c7b7;
    text-decoration: none;
  }
`

const Jam_disqualifications = styled.div`
  max-width: 1200px;
  padding: 0 40px;
  box-sizing: content-box;
  margin: 104px auto;
  h1 {
    font-size: 40px;
    line-height: 64px;
    font-weight: 400;
    font-family: leitura,serif;
  }

  p {
    font-size: 20px;
    line-height: 32px;
    margin-top: 20px;
    margin-bottom: 43px;
  }

  .disqualifications {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .disqualification {
      background-position: top left;
      background-size: 40px;
      font-size: 20px;
      line-height: 32px;
      font-weight: 400;
      margin: 0 0 24px 0;
      padding: 0 0 0 64px;
      width: 48%
    }
  }
`

const Why = styled.div`
  max-width: 1200px;
  padding: 0 40px;
  box-sizing: content-box;
  margin: 0 auto;
  h1 {
    margin-bottom: 53px;
    line-height: 30px;
    font-size: 40px;
    font-family: leitura,serif;
  }

  .advantages-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .advantage:nth-child(odd) {
      padding: 0 3% 0 0;
    }

    .advantage:nth-child(n+2) p {
      margin-bottom: 0;
    }

    .advantage {
      width: 50%;
      h4 {
        font-size: 24px;
        line-height: 40px;
        font-weight: 400;
      }

      p {
        margin: 10px 0 43px 0;
        font-size: 20px;
        line-height: 32px;
      }
    }
  }
`

const How = styled.div`
  max-width: 1200px;
  margin: 104px auto;
  padding: 0 40px;
  box-sizing: content-box;
  h1 {
    margin: 0 0 28px 0;
    line-height: 30px;
    font-size: 40px;
    font-weight: 400;
    font-family: leitura,serif;
  }

  a {
    color: #00c7b7;
    text-decoration: none;
    font-weight: 700;
    h4 {
      font-size: 24px;
      line-height: 40px;
      font-weight: 400;
      color: #00c7b7;
    }
  }
`

class Home extends React.Component {
  render () {
    return (
      <div className="container">
        <Sec className='hero'>
          <div className='contained'>
            <h1><strong className="str">JAMstack</strong>: 发音是 \’jam-stak’\ <span><br /></span>基于客户端 Js ，可复用 API 和预编译好的 Markup （标记语言）的摩登 web 开发架构。</h1>
          </div>
        </Sec>
        <Intro className="intro">
          <div className="contained">
            <div>
              这里我们说的 “技术栈” 不特指哪个操作系统， web 服务器，后端语言，或者数据库。<br /><br />JAMstack 不是某些特定技术的组合. 它是一种新的开发网站和 App 的方式，可以实现更高的运行速度和安全性，更低的扩展费用和更好的开发者体验。
            </div>
            <div className="faq">
              <h1>FAQ</h1>
              <Faq />
            </div>
          </div>
        </Intro>
        <Breakdown id='what' className="breakdown">
          <div className="contained">
            <h1>什么是 JAMstack?</h1>
            <p>如果你的网站满足下面三个标准，它就属于一个 JAMstack 架构的网站：</p>
          </div>
          <div className="letter-definition">
            <img src={require('../img/j.svg')} className="letter" />
            <h1>JavaScript</h1>
            <p>所有请求/响应过程中的功能都用 JS 开发，而且完全运行在浏览器中。可以用任意的 JS 框架，甚至纯 JS 来写。</p>
          </div>
          <div className="letter-definition">
            <img src={require('../img/a.svg')} className="letter" />
            <h1>APIs</h1>
            <p>所有服务器端功能都被抽象成了可复用的 API ，通过 JS 发 HTTP 请求来调用。可以自建，也可以是第三方的 API 。</p>
          </div><div className="letter-definition">
            <img src={require('../img/m.svg')} className="letter" />
            <h1>Markup 标记语言</h1>
            <p>模板化的标记语言应该在部署前先编译。如果是内容型网站，一般用网站生成器来编译，如果是 App 就有 Build 工具。<br /><br />
            <Link to="/Examples">例子？</Link></p>
          </div>
        </Breakdown>
        <Jam_disqualifications className="jam-disqualifications">
          <h1>什么样的网站 <em>不属于</em> JAMstack ？</h1>
          <p>
            所有前后端紧密耦合的项目。包括：
          </p>
          <div className="disqualifications">
            <h4 className="disqualification">
              使用 WordProess， Drupal， Joomla， 或者 Squarespace 的网站。
            </h4>
            <h4 className="disqualification">
              基于 Ruby， Node 或者其他后端语言写成的运行于服务器上的 App 。
            </h4>
            <h4 className="disqualification">
              运行时也要依赖于服务器进行同构渲染的单页面应用。
            </h4>
          </div>
        </Jam_disqualifications>
        <Why id='why' className="why">
          <h1>为何选择 JAMstack?</h1>
          <div className="advantages-grid">
            <div className="advantage">
              <h4>高速</h4>
              <p>
                明明可以在部署前就编译成网页的内容，为何要让用户访问的时候才开始编译呢？说起打开速度，什么方式还能比部署到 CDN 上的静态网页更快呢。
              </p>
            </div>
            <div className="advantage">
              <h4>更安全</h4>
              <p>
                服务器端功能都抽出成了 API 。我们自己的代码也没有什么可以被攻击的了，至于提供第三方 API 的公司，一般也比较专注，所以也更专业。
              </p>
            </div>
            <div className="advantage">
              <h4>扩展起来更便宜</h4>
              <p>
                因为就只有一些静态文件需要部署，所以直接多买些 CDN 空间和节点就万事大吉。
              </p>
            </div>
            <div className="advantage">
              <h4>更好的开发者体验</h4>
              <p>
                更低的耦合，简化开发和调试。
              </p>
            </div>
          </div>
        </Why>
        <How id='how' className="how">
          <h1 id="Link-Props">现在上手？</h1>
          <Link to="/Practices"><h4>最佳实践 →</h4></Link>
          <Link to="/Resources"><h4>资源 →</h4></Link>
        </How>
      </div>
    )
  }
}

export default Home;
