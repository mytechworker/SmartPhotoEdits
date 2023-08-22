import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import ExternalLink from "../components/External_Link"
import logo from "../images/logo.webp"
import favicon from "../images/favicon.ico"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { useState } from "react"
import "../css/style.css"
import "../Fonts/Fonts.css"

const Header = ({ metaTitle, metaDescription, metakeyword, color }) => {
  const [showText, setShowText] = useState(false)
  const imageClick = () => {
    ;<Link to="/" />
  }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription}></meta>
        <meta name="keywords" content={metakeyword}></meta>
        <link rel="icon" type="image/png" sizes="16x16" href={favicon}></link>
      </Helmet>

      <div className="img-top">
        {/* <img src={img_top} alt="top-img-header" width="1366px" height="725px"></img> */}
      </div>

      <div
        className="header-section"
        style={{ background: color && color !== "" ? color : "" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-4 logo-header">
              <Link to="/">
                <img
                  src={logo}
                  alt="header-logo"
                  onClick={() => imageClick()}
                  width="224px"
                  height="59px"
                ></img>
              </Link>
            </div>
            <div className="col-lg-9 col-md-9 col-8">
              <div className="menu-bar">
                <Link to="/about">About Us</Link>
                <Link to="/portfolio">Samples</Link>

                <div className="menu-btn">
                  <Link to="/contact">
                    <button>get a quote</button>
                  </Link>
                </div>
                <div
                  className="mob-menu"
                  onClick={() => setShowText(!showText)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>

          {showText && (
            <div className="menubar-mob">
              <Link to="/about">About Us</Link>
              <Link to="/portfolio">Samples</Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Header
