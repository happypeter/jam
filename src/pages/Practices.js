import React from "react"
import styled from 'styled-components'
import '../assets/practices.css'

const Best_practices = styled.div`
  padding-top: 124px;
  text-align: left;
  width: 100%;
  .contained {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 40px;
    box-sizing: content-box;
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
      <Best_practices className="practices">
        <div className="contained">
          <h1 className="headline">最佳实践</h1>
          <p className="cta">坚持下面这些最佳实践可以让你在建设 JAMstack 网站时候最得心应手。</p>
            <div className="grid">

          <div className="best-practice">
            <h4><img src={require('../img/thumbs-up.svg')} /> 整个项目都部署在 CDN</h4>
            <p>因为 JAMstack 的项目根本不依赖于服务器端代码，所以可以部署到 CDN 上，而不用部署到某个服务器上。
               这样的网站自然能在访问速度上获得最佳表现。
            </p>
          </div>

          <div className="best-practice">
            <h4><img src={require('../img/thumbs-up.svg')} /> 使用 Git 控制一切</h4>
            <p>任何人都可以通过 <code>git clone</code> 来得到项目,然后按照一个标准流程安装依赖 (例如 <code>npm install</code>), 
            然后就可以在本地跑起项目。不需要安装数据库，没有复杂的安装步骤。这样可以让贡献项目变得非常容易，同时测试网站也变得容易了。
            </p>
          </div>

          <div className="best-practice">
            <h4><img src={require('../img/thumbs-up.svg')} />摩登构建工具</h4>
            <p>
              使用最摩登的构建工具。虽然这些工具都在迅速迭代，但是能让我们今天就能用上明天的浏览器才能支持的各种 Web 新功能，也是非常值得学习的。
              具体来说，就是使用 Babel ，PostCSS ，Webpack 这些。
            </p>
          </div>

          <div className="best-practice">
            <h4><img src={require('../img/thumbs-up.svg')} />自动化构建</h4>
            <p>JAMstack 的页面都需要预先编译的，所以每次上线前都需要重新构建一遍。所以自动化这个过程就显得非常重要。 你可以自己用 webhooks 实现自动化，也可以考虑使用有类似服务的平台。（Peter
     注：例如 netlify 。)
            </p>
          </div>

          <div className="best-practice">
            <h4><img src={require('../img/thumbs-up.svg')} />原子化部署</h4>
            <p>
              当一个 JAMstack 项目变得很大的时候，每次修改可能都需要重新部署几百个文件。
              逐个上传这些文件，会造成在上传过程中，网站工作不正常。为了避免这个现象，可以使用允许“原子化部署”的系统。
              这样的系统会保证所有文件都上传完毕后，修改才会被用户看到。
            </p>
          </div>

          <div className="best-practice">
            <h4><img src={require('../img/thumbs-up.svg')} />即时缓存失效</h4>
            <p>
              如果经常都需要进行这个先构建后部署的循环。就需要保证当网站部署了，用户真的就能立即看到。
              也就是我们要保证 CDN 能够立即更新所有缓存。
            </p>
          </div>

      </div>
        </div>
      </Best_practices>
    )
  }
}

export default Practices;
