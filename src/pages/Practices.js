import React from "react"
import styled from 'styled-components'

const Best_ractices = styled.div`
  padding-top: 124px;
  text-align: left;
  width: 100%;
  .contained {
    margin: 0 auto;
    max-width: 1200px;
  }

  .headline {
    margin-bottom: 16px;
    font-size: 44px;
    line-height: 64px;
    font-weight: 600;
  }

  .cta {
    max-width: 50%;
    margin-bottom: 54px;
    font-size: 20px;
    line-height: 32px;
  }

  .grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .best-practice {
      width: 30%;
      h4 {
        font-size: 24px;
        line-height: 34px;
        font-weight: 700;
        margin: 0 0 14px 0;
        img {
          height: 16px;
          width: auto;
          margin-right: 8px;
        }
      }
      p{
        font-size: 18px;
        font-weight: 400;
        line-height: 28px;
        margin: 0 0 45px 0;
      }
    }
  }
`

class Practices extends React.Component {
  render () {
    return (
      <Best_ractices>
        <div className="contained">
          <h1 className="headline">Best Practices</h1>
          <p className="cta">When building JAMstack projects, you can really get the most out of the stack if you stick to a few best practices.</p>
            <div className="grid">

          <div className="best-practice">
            <h4><img src={require('../img/thumbs-up.svg')} /> Entire Project on a CDN</h4>
            <p>Because JAMstack projects don’t rely on server-side code, they can be distributed instead of living on a single server. Serving directly from a CDN unlocks speeds and performance that can’t be beat. The more of your app you can push to the edge, the better the user experience.</p>
          </div>

          <div className="best-practice">
            <h4><img src={require('../img/thumbs-up.svg')} /> Everything Lives in Git</h4>
            <p>With a JAMstack project, anyone should be able to do a <code>git clone</code>, install any needed dependencies with a standard procedure (like <code>npm install</code>), and be ready to run the full project locally. No databases to clone, no complex installs. This reduces contributor friction, and also simplifies staging and testing workflows.</p>
          </div>

          <div className="best-practice">
            <h4><img src={require('../img/thumbs-up.svg')} /> Modern Build Tools</h4>
            <p>Take advantage of the world of modern build tools. It can be a jungle to get oriented in and it’s a fast moving space, but you’ll want to be able to use tomorrow’s web standards today without waiting for tomorrow’s browsers. And that currently means, Babel, PostCSS, Webpack, and friends.</p>
          </div>

          <div className="best-practice">
            <h4><img src={require('../img/thumbs-up.svg')} /> Automated Builds</h4>
            <p>Because JAMstack markup is prebuilt, content changes won’t go live until you run another build. Automating this process will save you lots of frustration. You can do this yourself with webhooks, or use a publishing platform that includes the service automatically.</p>
          </div>

          <div className="best-practice">
            <h4><img src={require('../img/thumbs-up.svg')} /> Atomic Deploys</h4>
            <p>As JAMstack projects grow really large, new changes might require re-deploying hundreds of files. Uploading these one at a time can cause inconsistent state while the process completes. You can avoid this with a system that lets you do “atomic deploys,” where no changes go live until all changed files have been uploaded.</p>
          </div>

          <div className="best-practice">
            <h4><img src={require('../img/thumbs-up.svg')} /> Instant Cache Invalidation</h4>
            <p>When the build-to-deploy cycle becomes a regular occurrence, you need to know that when a deploy goes live, it really goes live. Eliminate any doubt by making sure your CDN can handle instant cache purges.</p>
          </div>

      </div>
        </div>
      </Best_ractices>
    )
  }
}

export default Practices;
