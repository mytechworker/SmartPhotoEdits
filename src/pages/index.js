import React, { useState, useEffect } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Category_Slider from "../components/Category_Slider"
import Testimonials from "../components/Testimonials"
import Sucslider from "../components/success_slider.js"
import img1 from "../images/1st.webp"
import logo_1 from "../images/logo-1.webp"
import logo_2 from "../images/logo-2.webp"
import logo_3 from "../images/logo-3.webp"
import logo_4 from "../images/logo-4.webp"
import img_back_2 from "../images/img-back-2.webp"
import img_back_mob_2 from "../images/img-back-mob-2.webp"
import howitwork_img from "../images/how-is-img.webp"
import { navigate } from "gatsby"
import GetStart from "../components/getStart"
import { SuccessStoryData } from "../data/successStoryData"
import { TestimonialData } from "../data/testimonialData"
import setKey, { FirstCapital } from "../utils/setKey"
import { Trans, useI18next, Link } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"

const IndexPage = ({ location, ...rest }) => {
  const [dataKey, setDataKey] = useState("")
  const [locationKey, setLocationKey] = useState("")
  const [classname, setClassname] = useState("")

  const { languages, changeLanguage } = useI18next()

  useEffect(() => {
    typeof window !== "undefined" &&
    localStorage.getItem("gatsby-i18next-language") === "de"
      ? setClassname("de")
      : setClassname("")
  })

  useEffect(async () => {
    let data = await setKey(
      location,
      "utm_term",
      "Image Editing & Retouching Services"
    )

    if (data.length > 0) {
      setDataKey(data[0])
      setLocationKey(data[1])
    }

    return () => {
      data = null
    }
  }, [])

  useEffect(() => {
    if (locationKey === "Germany") {
      changeLanguage(languages[2])
    } else {
      if (
        rest.pageContext.language === "de" &&
        localStorage.getItem("location") !== "Germany"
      ) {
        localStorage.setItem("gatsby-i18next-language", "en")
        navigate("/")
      }
    }
  }, [locationKey])

  return (
    <>
      <Header
        metaTitle={
          typeof window !== "undefined" &&
          localStorage.getItem("gatsby-i18next-language") === "de"
            ? "Professionelle Bildbearbeitung und Retusche-Service"
            : "Photo Editing Services"
        }
        metaDescription={
          typeof window !== "undefined" &&
          localStorage.getItem("gatsby-i18next-language") === "de"
            ? "Professioneller Bildbearbeitungsservice für Fotografen und Agenturen. Digitale Fotonachbearbeitung mit Pünktlichkeitsgarantie. Wir helfen weiter!"
            : "SPE is the leading outsourcing provider of photo editing services for businesses in the real estate, fashion, and e-commerce industries, among others."
        }
        metakeyword={
          typeof window !== "undefined" &&
          localStorage.getItem("gatsby-i18next-language") === "de"
            ? "Professionelle Bildbearbeitung, Retusche"
            : "photo editing, photo retouch, image editing"
        }
      >
        <link rel="prefetch" href="https://ipv4.icanhazip.com" />
      </Header>

      <div className="home-sec">
        <div className="zindex-div">
          <div className="container">
            <div className="home-first-sec">
              <div className="row">
                <div className="col-lg-6">
                  <div
                    className={`text-box ${
                      classname === "de" ? "text-box-german" : ""
                    }`}
                  >
                    <h1>
                      <Trans>
                        Looking for{" "}
                        {dataKey && dataKey
                          ? FirstCapital(dataKey)
                          : "Image Editing & Retouching Services"}
                        ?
                      </Trans>
                    </h1>
                    {typeof window !== "undefined" &&
                    localStorage.getItem("gatsby-i18next-language") === "de" ? (
                      <p>
                        <Trans>desc</Trans>
                      </p>
                    ) : (
                      <p>
                        Since 2006, Smart Photo Editors (SPE) has been a
                        preferred partner for photographers, photo studios, and
                        businesses from{" "}
                        {locationKey && locationKey
                          ? locationKey
                          : "United States"}
                        . We are the{" "}
                        {dataKey && dataKey
                          ? dataKey
                          : "Image Editing & Retouching Services"}{" "}
                        professionals and we have built a team of photo editing
                        superstars to provide high-quality, and cost-effective
                        outsourcing options.
                      </p>
                    )}
                    <p>
                      <Trans>
                        We do this by offering flexible engagement plans
                        including one-time assignments, hourly projects, and FTE
                        models. To those looking for{" "}
                        {dataKey && dataKey
                          ? dataKey
                          : "Image Editing & Retouching Services"}{" "}
                        to discover how SPE can give your business a competitive
                        edge, contact us today.
                      </Trans>
                    </p>
                    {typeof window !== "undefined" &&
                      localStorage.getItem("gatsby-i18next-language") ===
                        "de" && (
                        <p>
                          <Trans>subdesc</Trans>
                        </p>
                      )}
                    <div className="btn-home-sec">
                      <Link to={`/contact`} className="get-started">
                        <Trans>Get started</Trans>
                      </Link>

                      <Link to={`/portfolio`} className="see-port">
                        <Trans>see portfolio </Trans>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="homeimg-box">
                    <img
                      src={img1}
                      className="img-1"
                      width="488px"
                      height="578px"
                      alt="banner-img"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="logo-sec">
              <div className="logo-box">
                <img
                  src={logo_1}
                  alt="logo-img-1"
                  width="202px"
                  height="41px"
                ></img>
              </div>
              <div className="logo-box">
                <img
                  src={logo_2}
                  alt="logo-img-2"
                  width="202px"
                  height="41px"
                ></img>
              </div>
              <div className="logo-box">
                <img
                  src={logo_3}
                  alt="logo-img-3"
                  width="202px"
                  height="41px"
                ></img>
              </div>
              <div className="logo-box">
                <img
                  src={logo_4}
                  alt="logo-img-4"
                  width="202px"
                  height="41px"
                ></img>
              </div>
            </div>
          </div>
          <div className="category-slider-sec">
            <div className="container">
              <div className="row">
                <div className="col-lg-9 col-md-12">
                  <div className="cat-slider-text">
                    <h4>
                      <Trans>category</Trans>
                    </h4>
                    <h2>
                      <Trans>
                        {dataKey && dataKey
                          ? FirstCapital(dataKey)
                          : "Image Editing & Retouching Services"}
                      </Trans>
                    </h2>
                    <p>
                      <Trans>
                        Smart Photo Editors will handle all of your photo
                        retouch and editing needs through a wide range of
                        services. These image editing services are all backed by
                        our 100% on-time in-full guarantee, flexible prices, and
                        a customer-centric, quality-first approach.
                      </Trans>
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-12"></div>
              </div>
            </div>

            <div className="main-slider">
              <div className="container cate-slider">
                <div className="img-back-2">
                  <img
                    src={img_back_2}
                    alt="Category-Slider-img"
                    width="644px"
                    height="1748px"
                  ></img>
                </div>
                <div className="img-back-2 mob-img-back">
                  <img
                    src={img_back_mob_2}
                    alt="Category-Slider-img-mob"
                    width="267px"
                    height="685px"
                  ></img>
                </div>
                <Category_Slider dataKey={FirstCapital(dataKey)} />
              </div>
            </div>

            <div className="howitwork-sec">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="img-howit">
                      <img
                        src={howitwork_img}
                        alt="howitwork_img"
                        width="386px"
                        height="538px"
                      ></img>
                    </div>
                  </div>
                  <div className="col-lg-7 p-0">
                    <div className="cat-slider-text">
                      <h4>
                        <Trans>Process</Trans>
                      </h4>
                      <h3>
                        <Trans>How It Works</Trans>
                      </h3>
                      <p
                        className={`${
                          classname === "de" && "how-germen-para-text"
                        }`}
                      >
                        <Trans>
                          A speedy, secure editing process created for a
                          high-quality quick turnaround on your requirements. No
                          time wasted!
                        </Trans>
                      </p>
                    </div>
                    <div className="how-text">
                      <ol>
                        <li>
                          <span>1</span>
                          <p>
                            <Trans>
                              YOU UPLOAD YOUR IMAGES TO OUR FAST SERVERS
                            </Trans>
                          </p>
                        </li>
                        <li>
                          <span>2</span>
                          <p>
                            <Trans>
                              WE EDIT THE IMAGES TO YOUR HEARTS CONTENT
                            </Trans>
                          </p>
                        </li>
                        <li>
                          <span>3</span>
                          <p>
                            <Trans>WE PERFORM RIGUROUS QUALITY CHECKS</Trans>
                          </p>
                        </li>
                        <li>
                          <span>4</span>
                          <p>
                            <Trans>YOU DOWNLOAD THE EDITED IMAGES</Trans>
                          </p>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="category-slider-sec testimonials-sec">
            <div className="container">
              <div className="row">
                <div className="col-lg-9">
                  <div className="cat-slider-text">
                    <h4>
                      <Trans>Word of praise</Trans>
                    </h4>
                    <h3>
                      <Trans>Testimonials</Trans>
                    </h3>
                    <p>
                      <Trans>
                        Don’t just take our word for it. Discover what our
                        customers have to say about us.
                      </Trans>
                    </p>
                  </div>
                </div>
                <div className="col-lg-3"></div>
              </div>
            </div>

            <div className="main-slider">
              <div className="container cate-slider">
                <Testimonials
                  locationKey={locationKey}
                  TestimonialData={TestimonialData}
                />
              </div>
            </div>
          </div>

          <div className="Success-sec">
            <div className="container">
              <div className="cat-slider-text">
                <h4>
                  <Trans>Success</Trans>
                </h4>
                <h3>
                  <Trans>Success Stories</Trans>
                </h3>
                <p>
                  <Trans>
                    Delivering true value to every customer. Find out how we do
                    it.
                  </Trans>
                </p>
              </div>

              <div className="main-slider">
                <div className="container cate-slider">
                  <Sucslider
                    locationKey={locationKey}
                    SuccessStoryData={SuccessStoryData}
                  />
                </div>
              </div>
            </div>
          </div>

          <GetStart
            dataKey={FirstCapital(dataKey)}
            pageKeyword="Image Editing & Retouching Services"
          />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default IndexPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
