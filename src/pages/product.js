import React, { useState, useEffect } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import product1 from "../images/product1.webp"
import Testimonials from "../components/Testimonials"
import Sucslider from "../components/success_slider.js"
import product_icon_1 from "../images/product-icon-1.webp"
import product_icon_2 from "../images/product-icon-2.webp"
import product_icon_3 from "../images/product-icon-3.webp"
import product_icon_4 from "../images/product-icon-4.webp"
import product_img_2 from "../images/product-img-2.webp"
import ep_img from "../images/pro-1.webp"
import ep_img_1 from "../images/pro-1.webp"
import ep_img_2 from "../images/pro-2.webp"
import ep_img_3 from "../images/pro-3.webp"
import ep_img_4 from "../images/pro-4.webp"
import ep_img_5 from "../images/pro-5.webp"
import ep_img_mob from "../images/pro-1-mob.webp"
import ep_img_1_mob from "../images/pro-1-mob.webp"
import ep_img_2_mob from "../images/pro-2-mob.webp"
import ep_img_3_mob from "../images/pro-3-mob.webp"
import ep_img_4_mob from "../images/pro-4-mob.webp"
import ep_img_5_mob from "../images/pro-5-mob.webp"
import product1_mob from "../images/product1-mob.webp"
import product_img_2_mob from "../images/product-img-2-mob.webp"
import GetStart from "../components/getStart"
import { SuccessStoryData } from "../data/productSuccessStoryData"
import { TestimonialData } from "../data/productTestimonialData"
import setKey, { FirstCapital } from "../utils/setKey"
import { Trans, useI18next, Link } from "gatsby-plugin-react-i18next"
import { navigate, graphql } from "gatsby"

var Product_keyword = "Portrait & Fashion Photo Editing"

const For = ({ location, ...rest }) => {
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
    let data = await setKey(location, "utm_term_product", Product_keyword)
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
        navigate("/product")
      }
    }
  }, [locationKey])

  return (
    <>
      <Header
        metaTitle={
          typeof window !== "undefined" &&
          localStorage.getItem("gatsby-i18next-language") === "de"
            ? "Unser Service: E-Commerce- & Produktfoto-Bearbeitung"
            : "Outsource ECommerce & Product Photo Editing Services to SPE"
        }
        metaDescription={
          typeof window !== "undefined" &&
          localStorage.getItem("gatsby-i18next-language") === "de"
            ? "Wir bearbeiten Produktfotos für Onlineshops, Ebay und Amazon. Freistellen und Zuschneiden – schnell und günstig."
            : "Sell your products faster by enhancing your online shop and e-commerce listings with optimized images by partnering with Smart Photo Edits"
        }
        metakeyword={
          typeof window !== "undefined" &&
          localStorage.getItem("gatsby-i18next-language") === "de"
            ? "Produktfoto-Bearbeitung"
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
                        {typeof window !== "undefined" &&
                        localStorage.getItem("gatsby-i18next-language") ===
                          "de" ? (
                          <h1>
                            <Trans>productpage</Trans>
                          </h1>
                        ) : (
                          <h1>
                            {dataKey && dataKey
                              ? FirstCapital(dataKey)
                              : Product_keyword}
                          </h1>
                        )}

                        <p>
                          <Trans>
                            The {dataKey && dataKey ? dataKey : Product_keyword}{" "}
                            at Smart Photo Edits will add persuasion to Sell
                            your products faster by enhancing your online shop
                            and e-commerce listings!
                          </Trans>
                        </p>

                        <div className="btn-home-sec">
                          <Link to="/contact" className="get-started">
                            <Trans>Get started</Trans>
                          </Link>
                          <Link to="/portfolio?tab=2" className="see-port">
                            <Trans>see portfolio </Trans>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="homeimg-box">
                        <img
                          src={product1}
                          alt="product-banner-img"
                          className="img-1 desktop-img-1"
                          width="488px"
                          height="578px"
                        ></img>
                        <img
                          src={product1_mob}
                          alt="product-banner-img-mob"
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
                              src={product_icon_1}
                              alt="product-icon-img-1"
                              width="41px"
                              height="37px"
                            ></img>
                          </div>
                          <h1>
                            <Trans>Leading</Trans>
                          </h1>
                          <p>
                            <Trans>
                              Leading provider of e-commerce and product photo
                              editing
                            </Trans>
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 col-6">
                        <div className="back-color-slider-box">
                          <div className="icon-sec-slider color-2">
                            <img
                              src={product_icon_2}
                              alt="product-icon-img-2"
                              width="41px"
                              height="37px"
                            ></img>
                          </div>
                          <h1>
                            <Trans>Partner</Trans>
                          </h1>
                          <p>
                            <Trans>
                              Partner with us as we offer high-quality services
                            </Trans>
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 col-6">
                        <div className="back-color-slider-box">
                          <div className="icon-sec-slider color-1">
                            <img
                              src={product_icon_3}
                              alt="product-icon-img-3"
                              width="41px"
                              height="37px"
                            ></img>
                          </div>
                          <h1>
                            <Trans>Optimized</Trans>
                          </h1>
                          <p>
                            <Trans>
                              We ensure that every image is optimized for use
                            </Trans>
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 col-6">
                        <div className="back-color-slider-box">
                          <div className="icon-sec-slider color-2">
                            <img
                              src={product_icon_4}
                              alt="product-icon-img-4"
                              width="41px"
                              height="37px"
                            ></img>
                          </div>
                          <h1>
                            <Trans>Ready</Trans>
                          </h1>
                          <p>
                            <Trans>
                              Ready to use on online marketplace and e-commerce
                              platforms
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
                      {typeof window !== "undefined" &&
                      localStorage.getItem("gatsby-i18next-language") ===
                        "de" ? (
                        <h2>
                          <Trans>productperfectiontext</Trans>
                        </h2>
                      ) : (
                        <h2>
                          Looking for{" "}
                          {dataKey && dataKey
                            ? FirstCapital(dataKey)
                            : Product_keyword}
                          ?
                        </h2>
                      )}
                      <p>
                        <Trans>
                          Smart Photo Edits (SPE) is a leading provider of
                          e-commerce and product photo editing services to
                          online retailers and product photographers in{" "}
                          {locationKey && locationKey
                            ? locationKey
                            : "United States"}
                          .
                        </Trans>
                      </p>
                      <p>
                        <Trans>
                          Businesses looking for{" "}
                          {dataKey && dataKey ? dataKey : Product_keyword} love
                          to partner with us as we offer high-quality services
                          at affordable prices. We have designed our e-commerce
                          and product photo editing services to ensure that
                          every image is optimized for use in an online
                          marketplace and e-commerce platforms.
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
                        We’ve invested in the top product photography editing
                        tools like Adobe Photoshop and Lightroom – which allows
                        us to add the creativity and corrections needed to
                        enhance images for online viewing.
                      </Trans>
                    </p>
                    <p>
                      <Trans>
                        We have also built teams of editing specialists who are
                        specifically trained in those tools so they can handle
                        large volumes of photo editing requirements. If you are
                        looking for{" "}
                        {dataKey && dataKey ? dataKey : Product_keyword}, then
                        SPE is the right partner for you.
                      </Trans>
                    </p>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box-about">
                      <img
                        src={product_img_2}
                        alt="product-img-2"
                        className="desktop-img-1"
                        width="490px"
                        height="417px"
                      ></img>
                      <img
                        src={product_img_2_mob}
                        alt="product-img-2-mob"
                        className="mob-img-1"
                        width="333px"
                        height="250px"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ep-sec">
              <div className="container">
                <div className="cat-slider-text">
                  {typeof window !== "undefined" &&
                  localStorage.getItem("gatsby-i18next-language") === "de" ? (
                    <h4>
                      <Trans>ECOMMERCE-SERVICES-PRODUCT</Trans>
                    </h4>
                  ) : (
                    <h4>ECOMMERCE SERVICES</h4>
                  )}
                  <h2
                    className={`product-photo-service ${
                      classname === "de" && "product-photo-service-german"
                    }`}
                  >
                    <Trans>
                      eCommerce & Product Photo Editing Services by SPE
                    </Trans>
                  </h2>
                  <p>
                    <Trans>
                      SPE offers extensive e-commerce product photo editing
                      services to help you sell better online
                    </Trans>
                  </p>
                </div>
                <div className="row">
                  <div className="ep-box">
                    <div className="ep-img">
                      <img
                        src={ep_img}
                        alt="eCommerce-Product-img"
                        className="desktop-img-1"
                        width="296px"
                        height="359px"
                      ></img>
                      <img
                        src={ep_img_mob}
                        alt="eCommerce-Product-img-mob"
                        className="mob-img-1"
                        width="236px"
                        height="286px"
                      ></img>
                    </div>
                    {typeof window !== "undefined" &&
                    localStorage.getItem("gatsby-i18next-language") === "de" ? (
                      <h1>
                        <Trans>Photo Retouching Product</Trans>
                      </h1>
                    ) : (
                      <h1>Photo Retouching</h1>
                    )}
                    <p>
                      <Trans>
                        Contrast/brightness, red-eye reduction, and enlarging of
                        product photos
                      </Trans>
                    </p>
                  </div>
                  <div className="ep-box">
                    <div className="ep-img">
                      <img
                        src={ep_img_1}
                        alt="eCommerce-Product-img-1"
                        className="desktop-img-1"
                        width="296px"
                        height="359px"
                      ></img>
                      <img
                        src={ep_img_1_mob}
                        alt="eCommerce-Product-img-mob"
                        className="mob-img-1"
                        width="236px"
                        height="286px"
                      ></img>
                    </div>
                    <h1>
                      <Trans>Color Corrections</Trans>
                    </h1>
                    <p>
                      <Trans>
                        Exact color-matching is guaranteed to make your products
                        stand out.
                      </Trans>
                    </p>
                  </div>
                  <div className="ep-box">
                    <div className="ep-img">
                      <img
                        src={ep_img_2}
                        alt="eCommerce-Product-img-2"
                        className="desktop-img-1"
                        width="296px"
                        height="359px"
                      ></img>
                      <img
                        src={ep_img_2_mob}
                        alt="eCommerce-Product-img-2-mob"
                        className="mob-img-1"
                        width="236px"
                        height="286px"
                      ></img>
                    </div>
                    {typeof window !== "undefined" &&
                    localStorage.getItem("gatsby-i18next-language") === "de" ? (
                      <h1>
                        <Trans>Background Removal Product</Trans>
                      </h1>
                    ) : (
                      <h1>Background Removal</h1>
                    )}
                    <p>
                      <Trans>
                        Change an ordinary or uninspiring background to a
                        vibrant one of your choice!
                      </Trans>
                    </p>
                  </div>
                  <div className="ep-box">
                    <div className="ep-img">
                      <img
                        src={ep_img_3}
                        alt="eCommerce-Product-img-3"
                        className="desktop-img-1"
                        width="296px"
                        height="359px"
                      ></img>
                      <img
                        src={ep_img_3_mob}
                        alt="eCommerce-Product-img-3-mob"
                        className="mob-img-1"
                        width="236px"
                        height="286px"
                      ></img>
                    </div>
                    <h1>
                      <Trans>Lighting & Shadow Corrections</Trans>
                    </h1>
                    <p>
                      <Trans>
                        Addition of artificial shadows, cast shadows, and drop
                        shadows.
                      </Trans>
                    </p>
                  </div>
                  <div className="ep-box">
                    <div className="ep-img">
                      <img
                        src={ep_img_4}
                        alt="eCommerce-Product-img-4"
                        className="desktop-img-1"
                        width="296px"
                        height="359px"
                      ></img>
                      <img
                        src={ep_img_4_mob}
                        alt="eCommerce-Product-img-4-mob"
                        className="mob-img-1"
                        width="236px"
                        height="286px"
                      ></img>
                    </div>
                    <h1>
                      <Trans>Scaling Adjustments</Trans>
                    </h1>
                    <p>
                      <Trans>
                        Cropping and ratio adjustments to fit any digital
                        catalog or e-commerce marketplace requirements.
                      </Trans>
                    </p>
                  </div>
                  <div className="ep-box">
                    <div className="ep-img">
                      <img
                        src={ep_img_5}
                        alt="eCommerce-Product-img-5"
                        className="desktop-img-1"
                        width="296px"
                        height="359px"
                      ></img>
                      <img
                        src={ep_img_5_mob}
                        alt="eCommerce-Product-img-5-mob"
                        className="mob-img-1"
                        width="236px"
                        height="286px"
                      ></img>
                    </div>
                    <h1>
                      <Trans>Custom Color Tone</Trans>
                    </h1>
                    <p>
                      <Trans>
                        High-resolution color correction and enhancement to make
                        any product magical
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
                    <Trans>ProductHowtoWorkDesc</Trans>
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
              pageKeyword={Product_keyword}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default For

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
