import React, { useState, useEffect } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import real_estate_banner from "../images/real-estate-banner.webp"
import Testimonials from "../components/Testimonials"
import Sucslider from "../components/success_slider.js"
import real_estate_icon_1 from "../images/icon-slider1.webp"
import real_estate_icon_2 from "../images/product-icon-2.webp"
import real_estate_icon_3 from "../images/product-icon-3.webp"
import real_estate_icon_4 from "../images/product-icon-4.webp"
import real_estate_banner_2 from "../images/real-estate-banner-2.webp"
import re_img from "../images/re-img.webp"
import re_img_1 from "../images/re-img-1.webp"
import re_img_2 from "../images/re-img-2.webp"
import re_img_3 from "../images/re-img-3.webp"
import re_img_4 from "../images/re-img-4.webp"
import re_img_5 from "../images/re-img-5.webp"
import re_img_6 from "../images/re-img-6.webp"
import re_img_7 from "../images/re-img-7.webp"
import re_img_mob from "../images/re-img-mob.webp"
import re_img_1_mob from "../images/re-img-1-mob.webp"
import re_img_2_mob from "../images/re-img-2-mob.webp"
import re_img_3_mob from "../images/re-img-3-mob.webp"
import re_img_4_mob from "../images/re-img-4-mob.webp"
import re_img_5_mob from "../images/re-img-5-mob.webp"
import re_img_6_mob from "../images/re-img-6-mob.webp"
import re_img_7_mob from "../images/re-img-7-mob.webp"
import real_estate_banner_mob from "../images/real-estate-banner-mob.webp"
import real_estate_banner_2_mob from "../images/real-estate-banner-2-mob.webp"
import { Trans, useI18next, Link } from "gatsby-plugin-react-i18next"
import GetStart from "../components/getStart"
import { SuccessStoryData } from "../data/realestateSuccessStoryData"
import { TestimonialData } from "../data/realestateTestimonialData"
import setKey, { FirstCapital } from "../utils/setKey"
import { navigate, graphql } from "gatsby"

const Realestate = ({ location, ...rest }) => {
  var Real_Estate_keyword = "Real Estate Image Editing Services"

  const { languages, changeLanguage } = useI18next()

  const [dataKey, setDataKey] = useState("")
  const [locationKey, setLocationKey] = useState("")
  const [classname, setClassname] = useState("")

  useEffect(() => {
    typeof window !== "undefined" &&
    localStorage.getItem("gatsby-i18next-language") === "de"
      ? setClassname("de")
      : setClassname("")
  })

  useEffect(async () => {
    let data = await setKey(
      location,
      "utm_term_real_estate",
      Real_Estate_keyword
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
        navigate("/real-estate")
      }
    }
  }, [locationKey])

  return (
    <>
      <Header
        metaTitle={
          typeof window !== "undefined" &&
          localStorage.getItem("gatsby-i18next-language") === "de"
            ? "Bildbearbeitungsservice für Immobilienbilder"
            : "Outsource Real Estate Photo Editing Services to SPE"
        }
        metaDescription={
          typeof window !== "undefined" &&
          localStorage.getItem("gatsby-i18next-language") === "de"
            ? "Lassen Sie Ihre Immobilienfotos vom Profi nachbearbeiten. Perfekte Bilder durch Himmel-Austausch, Retusche und mehr. Sprechen Sie uns an!"
            : "Make your property listings stand out in a competitive market by partnering with Smart Photo Edits, a top real estate photo editing outsourcing partner"
        }
        metakeyword={
          typeof window !== "undefined" &&
          localStorage.getItem("gatsby-i18next-language") === "de"
            ? "Bildbearbeitung service"
            : "photo editing, photo retouch, image editing"
        }
      />
      <div className="home-sec">
        <div className="zindex-div">
          <div className="product-sec">
            <div className="ps-first">
              <div className="container">
                <div className="home-first-sec">
                  <div className="row">
                    <div className="col-lg-6">
                      <div
                        className={`text-box ${
                          classname === "de" ? "text-box-german" : ""
                        }`}
                      >
                        <h1
                          className={
                            classname === "de" && "home-first-sec-german"
                          }
                        >
                          <Trans>
                            {dataKey && dataKey
                              ? FirstCapital(dataKey)
                              : Real_Estate_keyword}
                          </Trans>
                        </h1>

                        <p>
                          <Trans>
                            Make your property listings stand out in a
                            competitive market by partnering with Smart Photo
                            Edits, for
                            {dataKey && dataKey ? dataKey : Real_Estate_keyword}
                            . The leading real estate photo editing outsourcing
                            partner!
                          </Trans>
                        </p>

                        <div className="btn-home-sec">
                          <Link to={`/contact`} className="get-started">
                            <Trans>Get started</Trans>
                          </Link>
                          <Link to={`/portfolio?tab=0`} className="see-port">
                            <Trans>see portfolio </Trans>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="homeimg-box">
                        <img
                          src={real_estate_banner}
                          alt="real-estate-banner-img"
                          className="img-1 desktop-img-1"
                          width="488px"
                          height="578px"
                        ></img>
                        <img
                          src={real_estate_banner_mob}
                          alt="real-estate-banner-img-mob"
                          className="mob-img-1"
                          width="244px"
                          height="289px"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-3-sec">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-lg-6 right-len">
                    <div className="row row-2">
                      <div className="col-md-6 col-6">
                        <div className="back-color-slider-box">
                          <div className="icon-sec-slider color-1">
                            <img
                              src={real_estate_icon_1}
                              alt="real-estate-icon-1"
                              width="48px"
                              height="37px"
                            ></img>
                          </div>
                          <h1>
                            <Trans>Leading</Trans>
                          </h1>
                          <p>
                            <Trans>
                              Leading real estate photo editing outsourcing
                              partner
                            </Trans>
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 col-6">
                        <div className="back-color-slider-box">
                          <div className="icon-sec-slider color-2">
                            <img
                              src={real_estate_icon_2}
                              alt="real-estate-icon-2"
                              width="41px"
                              height="37px"
                            ></img>
                          </div>
                          <h1>
                            <Trans>Partner</Trans>
                          </h1>
                          <p>
                            <Trans>
                              We’ve worked with real estate agents, developers,
                              builders, and photographers
                            </Trans>
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 col-6">
                        <div className="back-color-slider-box">
                          <div className="icon-sec-slider color-1">
                            <img
                              src={real_estate_icon_3}
                              alt="real-estate-icon-3"
                              width="41px"
                              height="37px"
                            ></img>
                          </div>
                          <h1>
                            <Trans>Detail-Oriented</Trans>
                          </h1>
                          <p>
                            <Trans>
                              SPE are highly detail-oriented and meticulous in
                              their approach
                            </Trans>
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 col-6">
                        <div className="back-color-slider-box">
                          <div className="icon-sec-slider color-2">
                            <img
                              src={real_estate_icon_4}
                              alt="real-estate-icon-4"
                              width="41px"
                              height="37px"
                            ></img>
                          </div>
                          <h1>
                            <Trans>Potential</Trans>
                          </h1>
                          <p>
                            <Trans>
                              Real estate photos they edit have the potential to
                              appeal to property buyers
                            </Trans>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6 our-mission">
                    <div className="cat-slider-text">
                      <h4>
                        <Trans>PERFECTION</Trans>
                      </h4>
                      <h2>
                        <Trans>
                          Looking for{" "}
                          {dataKey && dataKey
                            ? FirstCapital(dataKey)
                            : Real_Estate_keyword}
                          ?
                        </Trans>
                      </h2>
                      {typeof window !== "undefined" &&
                      localStorage.getItem("gatsby-i18next-language") ===
                        "de" ? (
                        <p>
                          <Trans>realestate-perfection-desc</Trans>
                        </p>
                      ) : (
                        <p>
                          {" "}
                          Smart Photo Edits (SPE) is a leading real estate photo
                          editing outsourcing partner for businesses in{" "}
                          {locationKey && locationKey
                            ? locationKey
                            : "United States"}
                          .
                        </p>
                      )}
                      <p>
                        <Trans>
                          {" "}
                          We’ve worked with real estate agents, developers,
                          builders, and photographers to improve their property
                          listings online. All real estate photo editing
                          services teams at SPE are highly detail-oriented and
                          meticulous in their approach, so if you're looking for{" "}
                          {dataKey && dataKey ? dataKey : Real_Estate_keyword},
                          we are the ideal partner for you.
                        </Trans>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="abot-2-sec secound-ab">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <p>
                      <Trans>
                        We’ve invested in the latest photography-related
                        technological tools, to ensure that the real estate
                        photos they edit have the potential to appeal to
                        property buyers.
                      </Trans>
                    </p>

                    {typeof window !== "undefined" &&
                    localStorage.getItem("gatsby-i18next-language") === "de" ? (
                      <p>
                        <Trans>realestatedesc</Trans>
                      </p>
                    ) : (
                      <p>
                        Our teams can handle large volumes of image editing in a
                        short time. We also have flexible pricing plans to suit
                        any budget – so you can rest assured your search for{" "}
                        {dataKey && dataKey ? dataKey : Real_Estate_keyword} in{" "}
                        {locationKey && locationKey
                          ? locationKey
                          : "United States"}{" "}
                        will end with a successful partnership with us.
                      </p>
                    )}
                  </div>
                  <div className="col-md-6">
                    <div className="img-box-about">
                      <img
                        src={real_estate_banner_2}
                        alt="real-estate-banner-2"
                        className="desktop-img-1"
                        width="490px"
                        height="417px"
                      ></img>
                      <img
                        src={real_estate_banner_2_mob}
                        alt="real-estate-banner-2-mob"
                        className="mob-img-1"
                        width="333px"
                        height="250px"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ep-sec re-sec">
              <div className="container">
                <div className="cat-slider-text">
                  <h4>
                    <Trans>ECOMMERCE SERVICES</Trans>
                  </h4>
                  <h2
                    className={`real-estate-heading ${
                      classname === "de" && "real-estate-heading-german"
                    }`}
                  >
                    <Trans>Real Estate Photo Editing Services by SPE</Trans>
                  </h2>
                  <p>
                    <Trans>
                      SPE’s real-estate photo editing services are designed to
                      deliver high-quality property images for more leads and
                      better sales
                    </Trans>
                  </p>
                </div>
                <div className="row">
                  <div className="ep-box">
                    <div className="ep-img">
                      <img
                        src={re_img}
                        alt="real-estate-Product-img"
                        className="desktop-img-1"
                        width="296px"
                        height="359px"
                      ></img>
                      <img
                        src={re_img_mob}
                        alt="real-estate-img-mob"
                        className="mob-img-1"
                        width="236px"
                        height="286px"
                      ></img>
                    </div>
                    <h1>
                      <Trans>Real Estate Photo Enhancements</Trans>
                    </h1>
                    <p>
                      <Trans>
                        Retouch and enhance property images so they stand out
                        and sell.
                      </Trans>
                    </p>
                  </div>
                  <div className="ep-box">
                    <div className="ep-img">
                      <img
                        src={re_img_1}
                        alt="real-estate-img-1"
                        className="desktop-img-1"
                        width="296px"
                        height="359px"
                      ></img>
                      <img
                        src={re_img_1_mob}
                        alt="real-estate-img-1-mob"
                        className="mob-img-1"
                        width="236px"
                        height="286px"
                      ></img>
                    </div>
                    <h1>
                      <Trans>Real Estate Photo Correction</Trans>
                    </h1>
                    <p>
                      <Trans>
                        Correct minor blemishes in real estate photos so they
                        are not distracting.
                      </Trans>
                    </p>
                  </div>
                  <div className="ep-box">
                    <div className="ep-img">
                      <img
                        src={re_img_2}
                        alt="real-estate-img-2"
                        className="desktop-img-1"
                        width="296px"
                        height="359px"
                      ></img>
                      <img
                        src={re_img_2_mob}
                        alt="real-estate-img-2-mob"
                        className="mob-img-1"
                        width="236px"
                        height="286px"
                      ></img>
                    </div>
                    <h1>
                      <Trans>Real Estate HDR Blending & Corrections</Trans>
                    </h1>
                    <p>
                      <Trans>
                        Enhance property listings with HDR images that emphasize
                        all the details
                      </Trans>
                    </p>
                  </div>
                  <div className="ep-box">
                    <div className="ep-img">
                      <img
                        src={re_img_3}
                        alt="real-estate-img-3"
                        className="desktop-img-1"
                        width="296px"
                        height="359px"
                      ></img>
                      <img
                        src={re_img_3_mob}
                        alt="real-estate-img-3-mob"
                        className="mob-img-1"
                        width="236px"
                        height="286px"
                      ></img>
                    </div>
                    <h1>
                      <Trans>Real Estate Perspective Corrections</Trans>
                    </h1>
                    <p>
                      Correct distortions and misalignments in real estate
                      photos to create a natural look.
                    </p>
                  </div>
                  <div className="ep-box">
                    <div className="ep-img">
                      <img
                        src={re_img_4}
                        alt="real-estate-img-4"
                        className="desktop-img-1"
                        width="296px"
                        height="359px"
                      ></img>
                      <img
                        src={re_img_4_mob}
                        alt="real-estate-img-4-mob"
                        className="mob-img-1"
                        width="236px"
                        height="286px"
                      ></img>
                    </div>
                    <h1>
                      <Trans>Real Estate Blurry Image Corrections</Trans>
                    </h1>
                    <p>
                      <Trans>
                        Sharpen blurred images to create a crisp and clear
                        property photo
                      </Trans>
                    </p>
                  </div>
                  <div className="ep-box">
                    <div className="ep-img">
                      <img
                        src={re_img_5}
                        alt="real-estate-img-5"
                        className="desktop-img-1"
                        width="296px"
                        height="359px"
                      ></img>
                      <img
                        src={re_img_5_mob}
                        alt="real-estate-img-5-mob"
                        className="mob-img-1"
                        width="236px"
                        height="286px"
                      ></img>
                    </div>
                    <h1>
                      <Trans>Property Sky Replacement</Trans>
                    </h1>
                    <p>
                      <Trans>
                        Replace the sky behind a property photo to create a
                        specific mood.
                      </Trans>
                    </p>
                  </div>
                  <div className="ep-box">
                    <div className="ep-img">
                      <img
                        src={re_img_6}
                        alt="real-estate-img-6"
                        className="desktop-img-1"
                        width="296px"
                        height="359px"
                      ></img>
                      <img
                        src={re_img_6_mob}
                        alt="real-estate-img-6-mob"
                        className="mob-img-1"
                        width="236px"
                        height="286px"
                      ></img>
                    </div>
                    <h1>
                      <Trans>360-Degree Virtual Property Tours</Trans>
                    </h1>
                    <p>
                      <Trans>
                        Provide a convenient way for buyers to pre-screen houses
                        from the comfort of their homes.
                      </Trans>
                    </p>
                  </div>
                  <div className="ep-box">
                    <div className="ep-img">
                      <img
                        src={re_img_7}
                        alt="real-estate-img-7"
                        className="desktop-img-1"
                        width="296px"
                        height="359px"
                      ></img>
                      <img
                        src={re_img_7_mob}
                        alt="real-estate-img-7-mob"
                        className="mob-img-1"
                        width="236px"
                        height="286px"
                      ></img>
                    </div>
                    <h1>
                      <Trans>Real Estate Drone Image Editing</Trans>
                    </h1>
                    <p>
                      <Trans>
                        Convert shaky, unstable footage into breathtaking
                        property images
                      </Trans>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="how-sec">
              <div className="container">
                <h2>
                  <Trans>How it Works</Trans>
                </h2>
                {typeof window !== "undefined" &&
                localStorage.getItem("gatsby-i18next-language") === "de" ? (
                  <p className="how-germen-para-text">
                    <Trans>workingdesc</Trans>
                  </p>
                ) : (
                  <p>
                    A speedy, secure editing process created for a high-quality
                    quick turnaround on your requirements. No time wasted!
                  </p>
                )}
              </div>
            </div>

            <div className="category-slider-sec testimonials-sec ecommerce-testi">
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
                      Delivering true value to every customer. Find out how we
                      do it.
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
              pageKeyword={Real_Estate_keyword}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Realestate

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
