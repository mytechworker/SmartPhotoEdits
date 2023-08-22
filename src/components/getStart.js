import React from "react"
import { Trans, Link } from "gatsby-plugin-react-i18next"

const GetStart = ({ dataKey, pageKeyword }) => {
  return (
    <div className="start-sec">
      <div className="container">
        <div className="row  align-items-center">
          <div className="col-md-12 col-lg-9">
            <div className="start-text">
              {typeof window !== "undefined" &&
              localStorage.getItem("gatsby-i18next-language") === "de" &&
              dataKey === "Real Estate Image Editing Services" ? (
                <h1>
                  <Trans>footer&contact</Trans>
                </h1>
              ) : typeof window !== "undefined" &&
                localStorage.getItem("gatsby-i18next-language") === "de" &&
                dataKey === "Portrait & Fashion Photo Editing" ? (
                <h1>
                  <Trans>Portraitfooter&contact</Trans>
                </h1>
              ) : typeof window !== "undefined" &&
                localStorage.getItem("gatsby-i18next-language") === "de" &&
                dataKey === "Jewelry Photo Editing Services" ? (
                <h1>
                  <Trans>Jewelryfooter&contact</Trans>
                </h1>
              ) : (
                <h1>
                  <Trans>{dataKey && dataKey ? dataKey : pageKeyword}</Trans>
                </h1>
              )}
            </div>
          </div>
          <div className="col-md-12 col-lg-3">
            <div className="start-btn">
              <Link to="/contact">
                <button>
                  <Trans>Get started</Trans>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetStart
