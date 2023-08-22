import React, { useEffect, useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import fashion_1 from "../images/fashion-1.webp"
import fashion_1_mob from "../images/fashion-1-mob.webp"
import Testimonials from "../components/Testimonials"
import Fashion_Slider from "../components/Fashion_Slider"
import Sucslider from "../components/success_slider.js"
import fashion_icon_1 from "../images/fashion-icon-1.webp"
import fashion_icon_2 from "../images/fashion-icon-2.webp"
import fashion_icon_3 from "../images/fashion-icon-3.webp"
import fashion_icon_4 from "../images/fashion-icon-4.webp"
import fashion_2 from "../images/fashion-2.webp"
import fashion_2_mob from "../images/fashion-2-mob.webp"
import fashion_slider_1_mob from "../images/fashion-slider-1-mob.webp"
import fashion_slider_2_mob from "../images/fashion-slider-2-mob.webp"
import fashion_slider_3_mob from "../images/fashion-slider-3-mob.webp"
import fashion_slider_4_mob from "../images/fashion-slider-4-mob.webp"
import fashion_slider_5_mob from "../images/fashion-slider-5-mob.webp"
import fashion_slider_6_mob from "../images/fashion-slider-6-mob.webp"
import fashion_slider_7_mob from "../images/fashion-slider-7-mob.webp"
import GetStart from "../components/getStart"
import { SuccessStoryData } from "../data/fashionSuccessStoryData"
import { TestimonialData } from "../data/fashionTestimonialData"
import setKey, { FirstCapital } from "../utils/setKey"
import { Trans, useI18next, Link } from "gatsby-plugin-react-i18next"
import { navigate, graphql } from "gatsby"

var Fashion_keyword = "Portrait & Fashion Photo Editing"

const Fashion = ({ location, ...rest }) => {
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
    let data = await setKey(location, "utm_term_fashion", Fashion_keyword)
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
        navigate("/fashion")
      }
    }
  }, [locationKey])

  return (
    <>
      <Header
        metaTitle={
          typeof window !== "undefined" &&
          localStorage.getItem("gatsby-i18next-language") === "de"
            ? "Porträt- & Modefotobearbeitung auslagern"
            : "Outsource Fashion & Portrait Photo Editing Services to SPE"
        }
        metaDescription={
          typeof window !== "undefined" &&
          localStorage.getItem("gatsby-i18next-language") === "de"
            ? "Lassen Sie Ihre Porträt- und Modefotos vom Profi nachbearbeiten. Perfekte Bilder für Kataloge und Magazine durch Hautretusche und Farbanpassung."
            : "Smart Photo Edits is a leading provider of fashion and portrait photo editing services, offering customized outsourcing services at affordable prices"
        }
        metakeyword={
          typeof window !== "undefined" &&
          localStorage.getItem("gatsby-i18next-language") === "de"
            ? "bild nachbearbeitung"
            : "photo editing, photo retouch, image editing"
        }
      />

      <div className="home-sec">
        <div className="zindex-div">
          <div className="product-sec fashion-sec">
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
                        <h1>
                          <Trans>
                            {dataKey && dataKey
                              ? FirstCapital(dataKey)
                              : Fashion_keyword}
                          </Trans>
                        </h1>
                        <p>
                          <Trans>
                            Smart Photo Edits is a leading provider of{" "}
                            {dataKey && dataKey ? dataKey : Fashion_keyword},
                            offering customized outsourcing services at
                            affordable prices
                          </Trans>
                        </p>
                        <div className="btn-home-sec">
                          <Link to="/contact" className="get-started">
                            <Trans>Get started</Trans>
                          </Link>
                          <Link to="/portfolio?tab=1" className="see-port">
                            <Trans>see portfolio </Trans>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="homeimg-box">
                        <img
                          src={fashion_1}
                          alt="fashion-banner-img"
                          className="img-1 desktop-img-1"
                          width="488px"
                          height="578px"
                        ></img>
                        <img
                          src={fashion_1_mob}
                          alt="fashion-banner-img-mob"
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
                  <div className="col-md-12 col-lg-12 right-len">
                    <div className="row row-2">
                      <div className="col-md-6 col-lg-3 col-6">
                        <div className="back-color-slider-box">
                          <div className="icon-sec-slider color-1">
                            {" "}
                            <img
                              src={fashion_icon_1}
                              alt="fashion-icon-img-1"
                              width="41px"
                              height="37px"
                            ></img>
                          </div>
                          <h1>
                            <Trans>Leading</Trans>
                          </h1>
                          <p>
                            <Trans>
                              Leading outsourcing partner of top fashion and
                              portrait photographers
                            </Trans>
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 col-6">
                        <div className="back-color-slider-box">
                          <div className="icon-sec-slider color-2">
                            {" "}
                            <img
                              src={fashion_icon_2}
                              alt="fashion-icon-img-2"
                              width="41px"
                              height="37px"
                            ></img>
                          </div>
                          <h1>
                            <Trans>Stand Out</Trans>
                          </h1>
                          <p>
                            <Trans>
                              Focuses on the subject of each photograph to make
                              it stand out
                            </Trans>
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 col-6">
                        <div className="back-color-slider-box">
                          <div className="icon-sec-slider color-1">
                            {" "}
                            <img
                              src={fashion_icon_3}
                              alt="fashion-icon-img-3"
                              width="41px"
                              height="37px"
                            ></img>
                          </div>
                          <h1>
                            <Trans>Handle</Trans>
                          </h1>
                          <p>
                            <Trans>
                              Able to handle a large volume of fashion and
                              portrait photo editing{" "}
                            </Trans>
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 col-6">
                        <div className="back-color-slider-box">
                          <div className="icon-sec-slider color-2">
                            {" "}
                            <img
                              src={fashion_icon_4}
                              alt="fashion-icon-img-4"
                              width="41px"
                              height="37px"
                            ></img>
                          </div>
                          <h1>
                            <Trans>Pricing Plans</Trans>
                          </h1>
                          <p>
                            <Trans>
                              Flexible pricing plans include ad-hoc assignments
                            </Trans>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-12 our-mission">
                    <div className="row  align-items-center">
                      <div className="col-md-12 col-lg-6">
                        <div className="cat-slider-text">
                          <h4>
                            <Trans>PERFECTION</Trans>
                          </h4>
                          <h2>
                            <Trans>
                              Looking for{" "}
                              {dataKey && dataKey
                                ? FirstCapital(dataKey)
                                : Fashion_keyword}
                              ?
                            </Trans>
                          </h2>
                          {typeof window !== "undefined" &&
                          localStorage.getItem("gatsby-i18next-language") ===
                            "de" ? (
                            <p>
                              <Trans>Portrait&fashiondesc</Trans>
                            </p>
                          ) : (
                            <p>
                              Smart Photo Edits (SPE) is a leading outsourcing
                              partner of top fashion and portrait photographers
                              as well as photo studios from{" "}
                              {locationKey && locationKey
                                ? locationKey
                                : "United States"}
                              . We’ve worked with photographers, fashion
                              magazines, portrait photo studios, and clothing
                              brands for their photo editing requirements. If
                              you're looking for{" "}
                              {dataKey && dataKey ? dataKey : Fashion_keyword},
                              we are your perfect partner.
                            </p>
                          )}
                          <p>
                            <Trans>
                              Smart Photo Edits focuses on the subject of each
                              photograph to make it stand out. To make this
                              happen, we’ve invested in the latest photo editing
                              tools and hired experts. We’re able to handle a
                              large volume of fashion and portrait photo editing
                              with a quick turnaround.
                            </Trans>
                          </p>
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-6">
                        <div className="img-box-about">
                          <img
                            src={fashion_2}
                            alt="fashion-img-2"
                            className="desktop-img-1"
                            width="604px"
                            height="449px"
                          ></img>
                          <img
                            src={fashion_2_mob}
                            alt="fashion-img-2-mob"
                            className="mob-img-1"
                            width="333px"
                            height="250px"
                          ></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="abot-2-sec secound-ab">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-12 col-lg-6">
                    <h1>
                      <Trans>Flexible pricing plans</Trans>
                    </h1>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <p>
                      <Trans>
                        Our flexible pricing plans include ad-hoc assignments,
                        hourly services, and FTE models. Collaborate with SPE
                        and end your search for{" "}
                        {dataKey && dataKey ? dataKey : Fashion_keyword}
                      </Trans>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="fashion-slider">
              <div className="cat-slider-text">
                <h4>
                  <Trans>ECOMMERCE SERVICES</Trans>
                </h4>
                <h2
                  className={`fashion-photo-service ${
                    classname === "de" && "fashion-photo-service-german"
                  }`}
                >
                  <Trans>Portrait & Fashion Photo Editing Services</Trans>
                </h2>
                <p>
                  <Trans>
                    SPE offers a comprehensive range of portrait and fashion
                    photo editing services for adding glamour and beauty to your
                    photographs.
                  </Trans>
                </p>
              </div>
              <div className="slider-sh">
                <Fashion_Slider />
              </div>

              <div className="fh-slider-mob">
                <div className="fh-slider-box">
                  <div className="fh-slider-mob-img">
                    <img
                      src={fashion_slider_4_mob}
                      alt="fashion-slider-4-img-mob"
                      width="376px"
                      height="378px"
                    ></img>
                    <div className="fh-text">
                      <h2>
                        <Trans>Skin Retouching & Airbrushing</Trans>
                      </h2>
                      <p>
                        <Trans>
                          Advanced skin retouching and airbrushing to enhance
                          the subject of the photo.
                        </Trans>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="fh-slider-box">
                  <div className="fh-slider-mob-img">
                    <img
                      src={fashion_slider_5_mob}
                      alt="fashion-slider-5-img-mob"
                      width="376px"
                      height="378px"
                    ></img>
                    <div className="fh-text">
                      <h2>
                        <Trans>Color Correction</Trans>
                      </h2>
                      <p>
                        <Trans>
                          Fix common coloration issues like dull colors to
                          enrich the subject.
                        </Trans>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="fh-slider-box">
                  <div className="fh-slider-mob-img">
                    <img
                      src={fashion_slider_1_mob}
                      alt="fashion-slider-1-img-mob"
                      width="376px"
                      height="378px"
                    ></img>
                    <div className="fh-text">
                      <h2>
                        <Trans>Lighting and Shading</Trans>
                      </h2>
                      <p>
                        <Trans>
                          Fix common lighting and shading imbalances to make the
                          subject more appealing.
                        </Trans>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="fh-slider-box">
                  <div className="fh-slider-mob-img">
                    <img
                      src={fashion_slider_2_mob}
                      alt="fashion-slider-2-img-mob"
                      width="376px"
                      height="378px"
                    ></img>
                    <div className="fh-text">
                      <h2>
                        <Trans>Skin Retouching & Airbrushing</Trans>
                      </h2>
                      <p>
                        <Trans>
                          Advanced skin retouching and airbrushing to enhance
                          the subject of the photo.
                        </Trans>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="fh-slider-box">
                  <div className="fh-slider-mob-img">
                    <img
                      src={fashion_slider_3_mob}
                      alt="fashion-slider-3-img-mob"
                      width="376px"
                      height="378px"
                    ></img>
                    <div className="fh-text">
                      <h2>
                        <Trans>Contrast and Saturation</Trans>
                      </h2>
                      <p>
                        <Trans>
                          Proper contrast and saturation balancing enhance
                          high-resolution photos.
                        </Trans>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="fh-slider-box">
                  <div className="fh-slider-mob-img">
                    <img
                      src={fashion_slider_6_mob}
                      alt="fashion-slider-6-img-mob"
                      width="376px"
                      height="378px"
                    ></img>
                    <div className="fh-text">
                      <h2>
                        <Trans>Custom Color Tone</Trans>
                      </h2>
                      <p>
                        <Trans>
                          Create customized color tones that draw attention to
                          the subject.
                        </Trans>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="fh-slider-box">
                  <div className="fh-slider-mob-img">
                    <img
                      src={fashion_slider_7_mob}
                      alt="fashion-slider-7-img-mob"
                      width="376px"
                      height="378px"
                    ></img>
                    <div className="fh-text">
                      <h2>
                        <Trans>Background Removal</Trans>
                      </h2>
                      <p>
                        <Trans>
                          Remove distracting backgrounds so that full attention
                          is given to the subject.
                        </Trans>
                      </p>
                    </div>
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
                    <Trans>
                      A speedy, secure editing process created for a
                      high-quality quick turnaround on your requirements. No
                      time wasted!
                    </Trans>
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
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
            <GetStart
              dataKey={FirstCapital(dataKey)}
              pageKeyword={Fashion_keyword}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Fashion

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
