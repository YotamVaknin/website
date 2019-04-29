import React from "react"
import { Link } from "gatsby"
import "../../static/style.css"

import { rhythm, scale } from "../utils/typography"

function waitForGlobal(name, timeout = 300) {
  return new Promise((resolve, reject) => {
    let waited = 0

    function wait(interval) {
      setTimeout(() => {
        waited += interval
        // some logic to check if script is loaded
        // usually it something global in window object
        if (window[name] !== undefined) {
          return resolve()
        }
        if (waited >= timeout * 1000) {
          return reject({ message: 'Timeout' })
        }
        wait(interval * 2)
      }, interval)
    }

    wait(30)
  })
}

class Layout extends React.Component {

  componentDidMount() {
          (function () {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_CHTML";

        var config = 'MathJax.Hub.Config({' +
                       'extensions: ["tex2jax.js"],' +
                       'jax: ["input/TeX","output/HTML-CSS"]' +
                     '});' +
                     'MathJax.Hub.Startup.onload();';

        if (window.opera) {script.innerHTML = config}
                     else {script.text = config}

        document.getElementsByTagName("head")[0].appendChild(script);
      })();
      waitForGlobal('MathJax').then(() => {
        window.MathJax.Hub.Config({
          tex2jax: {
            inlineMath: [['$', '$'], ['\\(', '\\)']],
            displayMath: [['$$', '$$'], ['[', ']']],
            processEscapes: true,
            processEnvironments: true,
            skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
            TeX: {
              equationNumbers: { autoNumber: 'AMS' },
              extensions: ['AMSmath.js', 'AMSsymbols.js'],
            },
          },
        })
      })
      if (window.MathJax != null) {
        window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub])
      }
    }
    componentDidUpdate() {
      if (window.MathJax != null) {
        window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub])
      }
    }
    // getI
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header


        if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
              textAlign : `right`,
              direction : `rtl`
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            textAlign : `right`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
            <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >

      <script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML' async></script>

        <header>{header}</header>
        <main >{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
