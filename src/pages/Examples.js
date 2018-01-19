import React from "react"
import styled from 'styled-components'
import '../assets/examples.css'

const Wrap = styled.div`
  padding-top: 144px;
  background-image: linear-gradient(0deg,#f7f8f8 0,#fff 100%);
  text-align: left;
  .contained {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 40px;
    box-sizing: content-box;
   .grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .example:hover img {
        box-shadow: 0 8px 24px rgba(0,0,0,.2);
      }

      .example {
        width: 30%;
        color: #313d3e;
        text-decoration: none;
        font-weight: 700;
        .browser {
          background: #f7f8f8;
          border: 1px solid #bcbcbc;
          border-bottom: none;
          border-radius: 4px 4px 0 0;
          color: #bcbcbc;
          line-height: 0;
          overflow: hidden;
          .controls {
            background: #fff;
            box-shadow: calc(8px / 2) 0 0 #bcbcbc;
            clip-path: polygon(0 0,80% 0,100% 100%,0 100%);
            padding: calc(8px / 2) calc(8px / 4) 7px calc(8px / 4);
            width: 24px;
            color: #bcbcbc;
            line-height: 0;
          }
        }

        img {
          box-sizing: border-box;
          border: 1px solid #bcbcbc;
          border-radius: 0 0 4px 4px;
          box-shadow: 0 0 8px transparent;
          height: auto;
          margin-bottom: 26px;
          transition: box-shadow .2s ease;
          width: 100%;
        }

        h1 {
          font-size: 22px;
          font-weight: 700;
          line-height: 34px;
          margin: 0 0 6px 0;
        }

        .tools {
          margin-bottom: 58px;
          list-style-type: none;
          margin: 8px 0 34px 0;
          padding: 0;
          column-count: 2;
          column-gap: 16px;
          li {
            font-size: 16px;
            font-weight: 400;
          }
          li:before {
            content: '• ';
          }
        }
      }
    }
   .cta {
      margin-bottom: 54px;
      h1 {
        font-size: 17px;
        font-style: italic;
        line-height: 26px;
        margin-bottom: 24px;
        margin: 0 4% 40px 0;
        width: 48%;
      }
      a {
        color: #00c7b7;
        text-decoration: none;
        font-weight: 700;
      }
      strong {
        display: block;
        font-weight: 900;
      }
      p:not(.cta) {
        font-size: 16px;
        font-weight: 400;
        line-height: 28px;
        margin: 0 0 26px 0;
        width: 48%;
      }
    }
  }
`

class Examples extends React.Component {
  render () {
    return (
      <Wrap className="box">
        <div className="contained">
          <div className="cta grid">
            <h1>凡是网站上能实现的效果，使用 JAMstack 架构就一样能实现.很多人都这么做了，下面是一些例子：</h1>
            <p>
              <strong>想要把你的网站也添加进来？</strong>
              请发 Pull Request <a href="https://github.com/jamstack/jamstack.org" className="text-link">Click</a>.
            </p>
          </div>
          <div className="grid">

              <a className="example" href="https://budget.boston.gov">
                <div className="browser">
                  <div className="controls">•••</div>
                </div>
                <img src={require('../img/boston-budget.jpg')} />
                <h1>City of Boston - Budget Site</h1>
                <ul className="tools">

                    <li>Jekyll</li>

                    <li>Gulp</li>

                    <li>Chart.js</li>

                </ul>
              </a>

              <a className="example" href="https://www.skcript.com/">
                <div className="browser">
                  <div className="controls">•••</div>
                </div>
                <img src={require('../img/skcript.jpg')} />
                <h1>Skcript</h1>
                <ul className="tools">

                    <li>Middleman</li>

                    <li>Gulp</li>

                    <li>Github</li>

                    <li>Sass</li>

                    <li>Service Workers</li>

                    <li>S3</li>

                    <li>Progressive Web App</li>

                    <li>Google Analytics</li>

                </ul>
              </a>

              <a className="example" href="https://www.justdusk.com">
                <div className="browser">
                  <div className="controls">•••</div>
                </div>
                <img src={require('../img/dusk.jpg')} />
                <h1>DUSK</h1>
                <ul className="tools">

                    <li>Jekyll</li>

                    <li>GitHub</li>

                    <li>Netlify</li>

                    <li>Sass</li>

                    <li>npm</li>

                    <li>Google Analytics</li>

                </ul>
              </a>

              <a className="example" href="https://www.sequoiacap.com/">
                <div className="browser">
                  <div className="controls">•••</div>
                </div>
                <img src={require('../img/sequoia.jpg')} />
                <h1>Sequoia Capital</h1>
                <ul className="tools">

                    <li>Middleman</li>

                    <li>jQuery</li>

                    <li>Sass</li>

                    <li>Contentful</li>

                    <li>fuse.js</li>

                    <li>GitHub</li>

                    <li>Netlify</li>

                    <li>Google Analytics</li>

                </ul>
              </a>

              <a className="example" href="https://carrot.is/">
                <div className="browser">
                  <div className="controls">•••</div>
                </div>
                <img src={require('../img/carrot.jpg')} />
                <h1>Carrot Creative</h1>
                <ul className="tools">

                    <li>Roots</li>

                    <li>Vue</li>

                    <li>Stylus</li>

                    <li>Coffeescript</li>

                    <li>Jade (Pug)</li>

                    <li>Contentful</li>

                    <li>Internal APIs</li>

                    <li>Spike</li>

                    <li>GitHub</li>

                    <li>Netlify</li>

                    <li>Google Analytics</li>

                </ul>
              </a>

              <a className="example" href="http://www.sphero.com/">
                <div className="browser">
                  <div className="controls">•••</div>
                </div>
                <img src={require('../img/sphero.jpg')} />
                <h1>Sphero</h1>
                <ul className="tools">

                    <li>Angular</li>

                    <li>Jekyll</li>

                    <li>Grunt</li>

                    <li>Contentful</li>

                    <li>Vero API</li>

                    <li>Sass</li>

                    <li>GitHub</li>

                    <li>Netlify</li>

                </ul>
              </a>

              <a className="example" href="https://lodash.com/">
                <div className="browser">
                  <div className="controls">•••</div>
                </div>
                <img src={require('../img/lodash.jpg')} />
                <h1>Lodash</h1>
                <ul className="tools">

                    <li>Grunt</li>

                    <li>Babel</li>

                    <li>Jekyll</li>

                    <li>React</li>

                    <li>Sass</li>

                    <li>GitHub</li>

                    <li>Netlify</li>

                </ul>
              </a>

              <a className="example" href="http://www.serverless.com/">
                <div className="browser">
                  <div className="controls">•••</div>
                </div>
                <img src={require('../img/serverless.jpg')} />
                <h1>Serverless</h1>
                <ul className="tools">

                    <li>Webpack</li>

                    <li>Babel</li>

                    <li>Phenomic</li>

                    <li>React</li>

                    <li>CSS modules</li>

                    <li>PostCSS</li>

                    <li>Disqus</li>

                    <li>Auth0</li>

                    <li>GitHub</li>

                    <li>Netlify</li>

                </ul>
              </a>

              <a className="example" href="https://community.algolia.com/marvel-search/">
                <div className="browser">
                  <div className="controls">•••</div>
                </div>
                <img src={require('../img/marvel-search.png')} />>
                <h1>MarvelSearch</h1>
                <ul className="tools">

                    <li>Brunch</li>

                    <li>Babel</li>

                    <li>GitHub Pages</li>

                    <li>Algolia</li>

                    <li>Cloudinary</li>

                    <li>instantsearch.js</li>

                    <li>Sass (SCSS)</li>

                </ul>
              </a>

              <a className="example" href="https://julian.is">
                <div className="browser">
                  <div className="controls">•••</div>
                </div>
                <img src={require('../img/julian.jpg')} />
                <h1>Julian Gaviria</h1>
                <ul className="tools">

                    <li>Jekyll</li>

                    <li>Grunt</li>

                    <li>CloudFlare</li>

                    <li>Sass</li>

                    <li>Critical CSS</li>

                    <li>GitHub</li>

                    <li>Service Workers</li>

                    <li>Web App Manifest</li>

                </ul>
              </a>

              <a className="example" href="https://www.digitalcontinuum.com/">
                <div className="browser">
                  <div className="controls">•••</div>
                </div>
                <img src={require('../img/digital-continuum.jpg')} />
                <h1>Digital Continuum</h1>
                <ul className="tools">

                    <li>Hexo</li>

                    <li>Contentful</li>

                    <li>Sass</li>

                    <li>Google Analytics</li>

                    <li>Algolia</li>

                    <li>Netlify</li>

                </ul>
              </a>

              <a className="example" href="http://www.universalmind.com/">
                <div className="browser">
                  <div className="controls">•••</div>
                </div>
                <img src={require('../img/universalmind.jpg')} />
                <h1>Universal Mind</h1>
                <ul className="tools">

                    <li>Hexo</li>

                    <li>Contentful</li>

                    <li>Sass</li>

                    <li>S3</li>

                    <li>Google Analytics</li>

                    <li>Algolia</li>

                    <li>Netlify</li>

                </ul>
              </a>

              <a className="example" href="https://www.gohyperstatic.com">
                <div className="browser">
                  <div className="controls">•••</div>
                </div>
                <img src={require('../img/hyperstatic.png')} />
                <h1>Hyper Static</h1>
                <ul className="tools">

                    <li>Hugo</li>

                    <li>WebPack 2</li>

                    <li>CloudFlare</li>

                    <li>Babel</li>

                    <li>Critical CSS</li>

                    <li>Gitlab</li>

                    <li>PostCSS</li>

                    <li>Disqus</li>

                    <li>Netlify</li>

                </ul>
              </a>

              <a className="example" href="https://www.cita.hr">
                <div className="browser">
                  <div className="controls">•••</div>
                </div>
                <img src={require('../img/cita.png')} />
                <h1>CiTA</h1>
                <ul className="tools">

                    <li>Sass</li>

                    <li>WebPack 2</li>

                    <li>Gulp</li>

                    <li>Critical CSS</li>

                    <li>Bitbucket</li>

                    <li>Netlify</li>

                </ul>
              </a>

              <a className="example" href="https://www.silvestarbistrovic.from.hr">
                <div className="browser">
                  <div className="controls">•••</div>
                </div>
                <img src={require('../img/silvestarbistrovic.png')} />
                <h1>Silvestar Bistrović</h1>
                <ul className="tools">

                    <li>Hexo</li>

                    <li>Sass</li>

                    <li>Gulp</li>

                    <li>Critical CSS</li>

                    <li>Bitbucket</li>

                    <li>Netlify</li>

                    <li>Cloudinary</li>

                </ul>
              </a>

          </div>
        </div>
      </Wrap>
    )
  }
}

export default Examples;
