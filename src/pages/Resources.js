import React, { PropTypes } from 'react'
import styled from 'styled-components'

const Resource = styled.div`
  background-image: linear-gradient(0deg,#f7f8f8 0,#fff 100%);
  overflow: hidden;
  padding-top: 124px;
  text-align: left;
  width: 100%;
  h1 {
    display: block;
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 40px;
    box-sizing: content-box;
    font-size: 40px;
    line-height: 64px;
  }

  p {
    display: block;
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 40px;
    box-sizing: content-box;
    font-size: 20px;
    line-height: 32px
  }

  a {
    color: #00c7b7;
    text-decoration: none;
    font-weight: 700;
  }
  .contained .strong {
    display: block;
    font-weight: 900;
  }
`

const Videos = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 40px;
  box-sizing: content-box;
  h1{
    margin-bottom: 16px;
    font-size: 40px;
    line-height: 64px;
  }
  .grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: -45px;
    a {
      outline: 0;
      box-shadow: none;
      width: 30%;
      color: #313d3e;
      .thumbnail-wrap {
        background: #000;
        border-radius: 4px;
        border: 1px solid #bcbcbc;
        box-sizing: border-box;
        box-shadow: 0 0 8px transparent;
        margin-bottom: 8px;
        max-height: 236px;
        overflow: hidden;
        position: relative;
        transition: background .2s ease,box-shadow .2s ease,border-color .2s ease;
        img {
          height: auto;
          margin-bottom: -10px;
          opacity: .5;
          transition: opacity .2s ease;
          width: 100%;
        }
      }

      h4 {
        font-size: 18px;
        font-weight: 700;
        line-height: 30px;
        margin: 24px 0 16px 0;
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 28px;
        margin: 0 0 45px 0;
      }
    }

    .video:hover img {
      opacity: .1;
    }

    .video:hover .thumbnail-wrap:after {
      background-size: 64px 64px;
    }

    .video:hover .thumbnail-wrap {
      background: #00c7b7;
      border-color: #00c7b7;
      box-shadow: 0 8px 24px rgba(0,0,0,.2);
    }

  }
`

const Articles = styled.div`
  margin: 40px 0 104px 0;
  .contained {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 40px;
    box-sizing: content-box;
  }
  h1.contained {
    margin-bottom: 16px;
  }

  .articles-list {
    display: block;
    list-style-type: none;
    margin: 32px auto 0 auto;
    text-align: left;
    li {
      display: flex;
      flex-flow: row wrap;
      padding: 0;
      position: relative;
      transition: background .2s ease;
      a {
        cursor: pointer;
        padding: 16px 40px 16px 0;
        position: relative;
        h3 {
          color: rgba(0, 0, 0, .85);
          font-weight: 500;
        }
      }
    }
  }

  .articles-list li:hover:before {
    background: #00c7b7!important;
  }
`
const Podcasts = styled.div`
  margin: 104px auto;
  padding: 0 40px;
  box-sizing: content-box;
  max-width: 1200px;
  .podcast-promo {
    padding: 64px 40px;
    color: #fff;
    border-radius: 10px;
    .cta {
      padding-right: 104px;
      width: calc(40% - 40px);
      display: inline-block;
      vertical-align: middle;
      img {
        width: 100%;
        margin-bottom: 10px;
      }
      .button {
        display: block;
        max-width: 100%;
        text-align: center;
        background: #00c7b7;
        color: #313d3e;
        border-radius: 4px;
        font-family: Roboto,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;
        font-size: 16px;
        font-weight: 700;
        padding: 8px 16px;
        transition: background .2s ease;
      }
    }
    .teaser {
      width: calc(60% - 40px);
      display: inline-block;
      vertical-align: middle;
      h1 {
        color: #fff;
        margin: -18px 0 4px 0;
        font-size: 40px;
        line-height: 64px;
      }
      p {
        font-size: 18px;
        line-height: 32px;
        margin: 0 0 -10px 0;
        opacity: .7;
      }
    }
  }
`

class Resources extends React.Component {
  render () {
    return (
      <Resource>
        <h1 className="contained">Resources</h1>
        <p className="contained">
          <strong className='strong'>Have a great JAMstack resource to share?</strong>
          Submit a Pull Request with your JAMstack resource's information <a href="https://github.com/jamstack/jamstack.org">here</a>.
        </p>
        <Videos>
          <h1>Videos</h1>
          <div className="grid">
            <a className="video" href="https://www.youtube.com/watch?v=uWTMEDEPw8c" data-lity="" data-lity-target="https://www.youtube.com/watch?v=uWTMEDEPw8c">
              <div className="thumbnail-wrap">
                <img src={require('../img/mathias-active-ingredients.jpg')} />
              </div>
              <h4>Rise of the JAMstack</h4>
              <p>The emergence of Git centered workflows, around modern build tools, static site generators, and modern browsers, have changed the way most front-enders work.</p>
            </a>
            <a className="video" href="https://vimeo.com/163522126" data-lity="" data-lity-target="https://vimeo.com/163522126">
              <div className="thumbnail-wrap">
                <img src={require('../img/mathias-smashing-conf.png')} />
              </div>
              <h4>The New Front-end Stack. Javascript, APIs and Markup</h4>
              <p>Matt Biilmann covers how a new stack has emerged and how this has changed how web sites and web apps are built.</p>
            </a>
            <a className="video" href="https://www.youtube.com/watch?v=lRg99MH6rhw" data-lity="" data-lity-target="https://www.youtube.com/watch?v=lRg99MH6rhw">
              <div className="thumbnail-wrap">
              <img src={require('../img/isomorphic.jpg')} />
              </div>
              <h4>Easy Isomorphic Rendering on the JAMstack</h4>
              <p>In this talk, Phil explores some techniques and tools which can combine to create dynamic and powerful sites with on a JAM Stack.</p>
            </a>
          </div>
        </Videos>
        <Articles>
          <h1 className="contained">Articles</h1>
            <ul className="articles-list contained">

              <li>
                <a href="https://cosmicjs.com/blog/how-to-build-a-jamstack-website">
                  <h3>How to Build a JAMstack Website</h3>
                  <span>→</span>
                </a>
              </li>

              <li>
                <a href="https://www.contentful.com/r/knowledgebase/jamstack-cms/">
                  <h3>A JAMstack-ready CMS</h3>
                  <span>→</span>
                </a>
              </li>

              <li>
                <a href="https://www.hawksworx.com/blog/isomorphic-rendering-on-the-jam-stack/">
                  <h3>Isomorphic Rendering on the JAMstack</h3>
                  <span>→</span>
                </a>
              </li>

              <li>
                <a href="https://www.contentful.com/blog/2016/02/10/snipcart-middleman-contentful">
                  <h3>Dynamic product management in a static e-commerce workflow</h3>
                  <span>→</span>
                </a>
              </li>

              <li>
                <a href="https://snipcart.com/blog/jamstack-clients-static-site-cms">
                  <h3>JAMstack for Clients: On Benefits &amp; Static Site CMS</h3>
                  <span>→</span>
                </a>
              </li>

              <li>
                <a href="https://builtvisible.com/go-static-try-jamstack/">
                  <h3>Go static: 5 reasons to try JAMstack on your next project</h3>
                  <span>→</span>
                </a>
              </li>

              <li>
                <a href="https://habd.as/zero-to-http-2-aws-hugo/">
                  <h3>Zero to HTTP/2 with AWS and Hugo</h3>
                  <span>→</span>
                </a>
              </li>

          </ul>
        </Articles>
        <Podcasts>
          <div className="podcast-promo">
            <div className="cta">
              <img src={require('../img/jamstack-knockout.svg')} />
              <a href="https://www.netlify.com/tags/podcast" className="button green">View All Podcasts →</a>
            </div>
            <div className="teaser">
              <h1>Tune into the Podcast</h1>
              <p>Every week, Brian Douglas from Netlify talks with special guests about all things pertaining to the JAMstack.</p>
            </div>
          </div>
        </Podcasts>
      </Resource>
    )
  }
}

export default Resources;
