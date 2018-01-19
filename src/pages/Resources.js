import React, { PropTypes } from 'react'
import styled from 'styled-components'
import '../assets/resources.css'

const Resource = styled.div`
  background-image: linear-gradient(0deg,#f7f8f8 0,#fff 100%);
  overflow: hidden;
  padding-top: 124px;
  text-align: left;
  width: 100%;
  .contained {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 40px;
    box-sizing: content-box;
  }
  h1 {
    font-size: 40px;
    line-height: 64px;
  }

  p {
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
      .button.green:hover {
        background: #fff;
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
      <Resource className="resources">
        <h1 className="contained">资源</h1>
        <p className="contained">
          请访问<a href="https://jamstack.org/resources/">官网</a>.
        </p>
      </Resource>
    )
  }
}

export default Resources;
