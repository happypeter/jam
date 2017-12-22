import React from "react"
import styled from 'styled-components'
import { Button } from 'antd';

const Com = styled.div`
  background: linear-gradient(0deg,#f7f8f8 0,#fff 100%);
`

const Hero = styled.div`
  padding: 160px 0 calc(104px * 2) 0;
  margin-bottom: -104px;
  .contained {
    margin: 0 auto;
    max-width: 1200px;
    h1 {
      font-size: 44px;
      line-height: 40px;
      margin: calc(8px/2) 0 0 0;
      font-weight: 600;
    }
  }
`

const Contain= styled.div`
  margin: 0 auto;
  max-width: 1200px;
  .grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: calc(64px * 1.61);
   .chapter {
      width: 30%;
      color: #313d3e;
      margin-bottom: 64px;
      text-align: center;
      text-decoration: none;
      font-weight: 700;
      img {
       box-sizing: border-box;
       height: calc(168px * .9);
       margin-bottom: 16px;
       transition: box-shadow .2s ease;
       width: 100%;
      }
      h1 {
        font-size: 24px;
        font-weight: 800;
        line-height: 34px;
        margin: 0 0 14px 0;
      }
      .btn {
        background: #fff;
        border: 1px solid #ed1c40;
        color: #313d3e;
        box-sizing: content-box;
        min-width: 168px;
        font-size: 16px;
        font-weight 800;
        padding: 8px 16px;
        height: auto;!important
      }

      .bottom:hover {
        background: #ed1c40;
        color: #fff;
      }

      .greyed {
        border: #ccc;
        background: #ccc;
        color: #fff;
      }
    }
  }
`

const Gitter = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: -40px auto 40px auto;
  .hook {
    margin: 0 3% 0 0;
    width: 44%;
    align-self: center;
    h1 {
      color: #313d3e;
      font-size: 40px;
      font-weight: 500;
    }
    strong {
      display: block;
    }
    a {
      color: #00c7b7;
      text-decoration: none;
      font-weight: 700;
    }
  }

  .event-card {
    padding: 40px;
    display: initial;
    margin-left: 7%;
    width: 40%;
    color: #313d3e;
    border: 1px solid #d1d4d4;
    text-align: left;
    transition: all .2s ease;
    h4 {
      font-size: 24px;
      line-height: 40px;
      font-weight: 600;
    }

    p {
      margin-top: 24px;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: -10px;
    }
    strong {
      display: block;
    }
  }

  .event-card:hover {
    color: #fff;
    background: #00c7b7;
    border-color: #00c7b7;
  }

  .event-card:hover h4 {
    color: #fff
  }
`

const Events = styled.div`
  margin: 104px auto 64px auto;
  max-width: 1200px;
  .h1 {
    margin-bottom: 46px;
    text-align: center;
    width: 100%;
    line-height: 40px;
    font-size: 44px;
    font-weight: 600;
  }

  .meetup-events-label {
    margin-top: 37px;
    padding-left: 46px;
    font-weight: 700;
    margin-bottom: 12px;
    text-align: left;
    white-space: nowrap;
    text-overflow: ellipsis;
    box-sizing: border-box;
    overflow: hidden;
    display: block;
    float: left;
    margin-right: 2.3576516%;
    width: 65.88078280%;
    margin-left: 17.05960860%;
    font-size: 24px;
    line-height: 40px;
  }

  .event-card:hover {
    top: -2px;
    border-color: #00c7b7;
    box-shadow: 0 5px 8px rgba(0,0,0,.2);
  }

  .event-card {
    color: #313d3e;
    line-height: 30px;
    padding: 24px;
    text-decoration: none;
    background: #fff;
    border: 1px solid #d1d4d4;
    box-shadow: 0 0 0 transparent;
    border-radius: 4px;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    top: 0;
    transition: top .2s ease,box-shadow .2s ease,border-color .2s ease;
    text-align: left;
    display: block;
    float: left;
    width: 65.88078280%;
    margin-left: 17.05960860%;

    .event-date {
      display: block;
      float: left;
      margin-right: 3.57866361%;
      width: 9.36866934%;
      text-align: justify;
      text-transform: uppercase;
      font-family: Roboto,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;
      font-weight: 900;
      font-size: 14px;
      color: #313d3e;
      line-height: 14px;
      cursor: pointer;
    }

    .event-info {
      display: block;
      float: left;
      margin-right: 0;
      width: 87.05266705%;
      h4 {
        color: #8b8b8b;
        font-family: Roboto,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 14px;
        line-height: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0 0 16px 0;
        padding: 0;
      }
      h1 {
        font-size: 24px;
        font-weight: 400;
        line-height: 30px;
        margin: 0 0 1px 0;
        padding: 0;
      }
      .em {
        color: #8b8b8b;
        font-family: Roboto,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;
        font-weight: 400;
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-weight: 200;
        line-height: 24px;
      }
    }
  }
`

const Bottom = styled.div`
  background: #f7f8f8;
  text-align: center;
  .contained {
    padding: 64px 40px;
    margin: 0 auto;
    max-width: 1200px;
    img {
      width: 320px;
      max-width: 100%;
      margin: 0 0 24px 0;
    }
    h1 {
    margin: 0 0 28px 0;
    font-size: 44px;
    line-height: 40px;
    font-weight: 600;
    }
    .button {
      display: inline-block;
      background: #ed1c40;
      border-radius: 4px;
      color: #fff;
      min-width: 168px;
      box-sizing: content-box;
      font-family: Roboto,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;
      text-align: center;
      font-size: 16px;
      font-weight: 700;
      padding: 14px 24px;
      transition: background .2s ease;
    }
  }
`

class Community extends React.Component {
  render () {
    return  (
      <Com>
        <Hero className="he">
          <div className="contained">
            <h1 className="community-headline">Join your local JAMstack Chapter.</h1>
          </div>
        </Hero>
        <Contain>
          <div className="grid">
            <a className="chapter jamstack-san-francisco" href="https://www.meetup.com/jamstack-sf/">
              <img src={require('../img/chapters/sf-art.svg')} className="art" />
              <h1>JAMstack San Francisco</h1>
              <Button className="btn bottom" type="danger">Join Now</Button>
            </a>
            <a className="chapter jamstack-san-francisco" href="https://www.meetup.com/jamstack-dallas/">
              <img src={require('../img/chapters/dallas-art.svg')} className="art" />
              <h1>JAMstack Dallas</h1>
              <Button className="btn bottom" type="danger">Join Now</Button>
            </a>
            <a className="chapter jamstack-san-francisco" href="https://www.meetup.com/jamstack-Austin/">
              <img src={require('../img/chapters/austin-art.svg')} className="art" />
              <h1>JAMstack Austin</h1>
              <Button className="btn bottom" type="danger">Join Now</Button>
            </a>
            <a className="chapter jamstack-san-francisco" href="https://www.meetup.com/jamstack-Boston/">
              <img src={require('../img/chapters/boston-art.svg')} className="art" />
              <h1>JAMstack Boston</h1>
              <Button className="btn bottom" type="danger">Join Now</Button>
            </a>
            <a className="chapter jamstack-san-francisco" href="https://www.meetup.com/jamstack-Porto/">
              <img src={require('../img/chapters/porto-art.svg')} className="art" />
              <h1>JAMstack Porto</h1>
              <Button className="btn bottom" type="danger">Join Now</Button>
            </a>
            <a className="chapter jamstack-san-francisco" href="https://www.meetup.com/jamstack-OKC/">
              <img src={require('../img/chapters/okc-art.svg')} className="art" />
              <h1>JAMstack Oklahoma</h1>
              <Button className="btn bottom" type="danger">Join Now</Button>
            </a>
            <a className="chapter jamstack-san-francisco" href="https://www.meetup.com/jamstack-nyc/">
              <img src={require('../img/chapters/nyc-art.svg')} className="art" />
              <h1>JAMstack NYC</h1>
              <Button className="btn bottom" type="danger">Join Now</Button>
            </a>
            <a className="chapter jamstack-san-francisco" href="#">
              <img src={require('../img/chapters/london-art.svg')} className="art" />
              <h1>JAMstack London</h1>
              <Button className="btn greyed" type="danger">Coming Soon</Button>
            </a>
            <a className="chapter jamstack-san-francisco" href="#">
              <img src={require('../img/chapters/seattle-art.svg')} className="art" />
              <h1>JAMstack Seattle</h1>
              <Button className="btn greyed" type="danger">Coming Soon</Button>
            </a>
            <a className="chapter jamstack-san-francisco" href="#">
              <img src={require('../img/chapters/portland-art.svg')} className="art" />
              <h1>JAMstack Portland</h1>
              <Button className="btn greyed" type="danger">Coming Soon</Button>
            </a>
            <a className="chapter jamstack-san-francisco" href="#">
              <img src={require('../img/chapters/philadelphia-art.svg')} className="art" />
              <h1>JAMstack Philadelphia</h1>
              <Button className="btn greyed" type="danger">Coming Soon</Button>
            </a>
            <a className="chapter jamstack-san-francisco" href="#">
              <img src={require('../img/chapters/tokyo-art.svg')} className="art" />
              <h1>JAMstack Tokyo</h1>
              <Button className="btn greyed" type="danger">Coming Soon</Button>
            </a>
          </div>
        </Contain>
        <Gitter>
          <div className="hook">
            <h1>Chat on Gitter.</h1>
            <p>
              <strong>Got a question or just want to chat?</strong>
              Speak with leaders in the space on our community about all things JAMstack in our <a href="https://gitter.im/jamstack/community" target="_blank" className="text-link">Gitter Chat</a>.
            </p>
          </div>
          <a href="https://gitter.im/jamstack/community" target="_blank" className="event-card">
            <h4>Join the Gitter Chat for...</h4>
            <p>
              <strong>• Expert advice on best practices</strong>
              <strong>• Resource recommendations</strong>
              <strong>• General discussion</strong>
            </p>
          </a>
        </Gitter>
        <Events className='events'>
          <h1 className='h1'>Come hang out at the next JAMstack event.</h1>
          <div id="meetup-events">
            <h4 className="meetup-events-label">Upcoming JAMstack Boston Events</h4>
            <a href="https://www.meetup.com/JAMstack-Boston/events/245895909/" className="event-card with-link"><div className="event-date">Jan 25</div><div className="event-info"><h4>Localytics</h4><h1>Presentation Night - "Going static: lessons in static site content management"</h1><em className='em'>Starts at 7:00 am</em></div></a>
          </div>
        </Events>
        <Bottom>
          <div className="contained">
            <img src={require('../img/chapters/meetup-map.svg')} className="art" />
            <h1>Start a JAMstack Meetup</h1>
            <a href="mailto:cassandra@netlify.com" className="button">Contact Us</a>
          </div>
        </Bottom>
      </Com>
    )
  }
}

export default Community;
