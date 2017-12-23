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
            <h1><strong className="str">JAMstack</strong>: noun \’jam-stak’\ <span><br /></span>  Modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.</h1>
          </div>
        </Sec>
        <Intro className="intro">
          <div className="contained">
            <div>
              When we talk about “The Stack,” we no longer talk about operating systems, specific web servers, backend programming languages, or databases.<br /><br />The JAMstack is not about specific technologies. It’s a new way of building websites and apps that delivers better performance, higher security, lower cost of scaling, and a better developer experience.
            </div>
            <div className="faq">
              <h1>FAQ</h1>
              <Faq />
            </div>
          </div>
        </Intro>
        <Breakdown id='what' className="breakdown">
          <div className="contained">
            <h1>What is the JAMstack?</h1>
            <p>Your project is built with the JAMstack if it meets three key criteria:</p>
          </div>
          <div className="letter-definition">
            <img src={require('../img/j.svg')} className="letter" />
            <h1>JavaScript</h1>
            <p>Any dynamic programming during the request/response cycle is handled by JavaScript, running entirely on the client. This could be any frontend framework, library, or even vanilla JavaScript.</p>
          </div>
          <div className="letter-definition">
            <img src={require('../img/a.svg')} className="letter" />
            <h1>APIs</h1>
            <p>All server-side processes or database actions are abstracted into reusable APIs, accessed over HTTP with JavaScript. These can be custom-built or leverage third-party services.</p>
          </div><div className="letter-definition">
            <img src={require('../img/m.svg')} className="letter" />
            <h1>Markup</h1>
            <p>Templated markup should be prebuilt at deploy time, usually using a site generator for content sites, or a build tool for web apps.<br /><br />
            <Link to="/Examples">Want to see some examples?</Link></p>
          </div>
        </Breakdown>
        <Jam_disqualifications className="jam-disqualifications">
          <h1>When is your site <em>not</em> built with the JAMstack?</h1>
          <p>Any project that relies on a tight coupling between client and server is not built with the JAMstack. This would include:</p>
          <div className="disqualifications">
            <h4 className="disqualification">A site built with a server-side CMS like WordPress, Drupal, Joomla, or Squarespace.</h4>
            <h4 className="disqualification">A monolithic server-run web app that relies on Ruby, Node, or another backend language.</h4>
            <h4 className="disqualification">A single page app that uses isomorphic rendering to build views on the server at runtime.</h4>
          </div>
        </Jam_disqualifications>
        <Why id='why' className="why">
          <h1>Why the JAMstack?</h1>
          <div className="advantages-grid">
            <div className="advantage">
              <h4>Better Performance</h4>
              <p>Why wait for pages to build on the fly when you can generate them at deploy time? When it comes to minimizing the time to first byte, nothing beats pre-built files served over a CDN.</p>
            </div>
            <div className="advantage">
              <h4>Higher Security</h4>
              <p>With server-side processes abstracted into microservice APIs, surface areas for attacks are reduced. You can also leverage the domain expertise of specialist third-party services.</p>
            </div>
            <div className="advantage">
              <h4>Cheaper, Easier Scaling</h4>
              <p>When your deployment amounts to a stack of files that can be served anywhere, scaling is a matter of serving those files in more places. CDNs are perfect for this, and often include scaling in all of their plans.</p>
            </div>
            <div className="advantage">
              <h4>Better Developer Experience</h4>
              <p>Loose coupling and separation of controls allow for more targeted development and debugging, and the expanding selection of CMS options for site generators remove the need to maintain a separate stack for content and marketing.</p>
            </div>
          </div>
        </Why>
        <How id='how' className="how">
          <h1 id="Link-Props">How do I get started?</h1>
          <Link to="/Practices"><h4>Learn About Best Practices →</h4></Link>
          <Link to="/Resources"><h4>View Resources →</h4></Link>
        </How>
      </div>
    )
  }
}

export default Home;
