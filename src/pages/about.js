import React, { useEffect, useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import About_1 from "../images/about-1.webp"
import About_2 from "../images/about-2.webp"
import About_1_mob from "../images/about-1-mob.webp"
import About_2_mob from "../images/about-2-mob.webp"
import check_img from "../images/check.webp"
import our_mission from "../images/our-mission.webp"
import our_mission_mob from "../images/our-mission-mob.webp"
import Key_Slider from "../components/Key_Slider.js"
import GetStart from "../components/getStart"
import setKey, { FirstCapital } from "../utils/setKey"

const About = ({ location }) => {
  const [dataKey, setDataKey] = useState("")
  const [locationKey, setLocationKey] = useState("")

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

  return (
    <>
      <Header
        metaTitle="About Smart Photo Edits"
        metaDescription="SPE is one of the world’s leading providers of affordable, high-quality photo editing services and
is trusted as an outsourcing partner by top photographers"
      />

      <div className="about-main-div">
        <div className="about-smart">
          <div className="container">
            <div className="cat-slider-text text-center">
              <h4>About</h4>
              <h2>Smart Photo Edits</h2>
            </div>

            <div className="abot-2-sec">
              <div className="row">
                <div className="col-md-6">
                  <div className="img-box-about">
                    <img
                      src={About_1}
                      alt="About-banner-img"
                      className="desktop-img-1"
                      width="528px"
                      height="419px"
                    ></img>
                    <img
                      src={About_1_mob}
                      alt="About-banner-img-mob"
                      className="mob-img-1"
                      width="366px"
                      height="290px"
                    ></img>
                  </div>
                </div>
                <div className="col-md-6">
                  <p>
                    Smart Photo Edits is a photo editing service provider that
                    serves the needs of photographers, photo studios, and
                    several other businesses in their image editing
                    requirements. We are a team of highly skilled editors based
                    in Bangalore, India.
                  </p>
                  <p>
                    Since 2006, we have been collaborating with customers from
                    across the world in industries ranging from fashion to real
                    estate, jewelry, clothing, portraits, retail products, and
                    many more. Having worked with some of the world’s most
                    leading names in the photography world, we have gained a
                    proper, in-depth understanding of what photographers and
                    photo studios genuinely need to take their photographs to
                    the next level.
                  </p>
                </div>
              </div>
            </div>

            <div className="abot-2-sec secound-ab">
              <div className="row">
                <div className="col-md-6">
                  <p>
                    We focus on delivering premium quality services at an
                    affordable price. We have developed flexible engagement
                    plans so our customers can enjoy our services at a price
                    that works best for them. Our attention to detail, dedicated
                    team of experts, and thirst to deliver tangible results are
                    what set us apart in the photo editing world.
                  </p>
                  <div className="check-sec-about">
                    <div className="check-img-about">
                      <img
                        src={check_img}
                        alt="about-check-img"
                        width="35px"
                        height="35px"
                      ></img>
                    </div>
                    <h5>Premium Quality Services</h5>
                  </div>
                  <div className="check-sec-about">
                    <div className="check-img-about">
                      <img
                        src={check_img}
                        alt="about-check-img"
                        width="35px"
                        height="35px"
                      ></img>
                    </div>
                    <h5>Flexible Engagement Plans</h5>
                  </div>
                  <div className="check-sec-about">
                    <div className="check-img-about">
                      <img
                        src={check_img}
                        alt="about-check-img"
                        width="35px"
                        height="35px"
                      ></img>
                    </div>
                    <h5>Deliver Tangible Results </h5>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box-about">
                    <img
                      src={About_2}
                      alt="About-img-2"
                      className="desktop-img-1"
                      width="528px"
                      height="418px"
                    ></img>
                    <img
                      src={About_2_mob}
                      alt="About-img-2-mob"
                      className="mob-img-1"
                      width="366px"
                      height="290px"
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
              <div className="col-md-6">
                <img
                  src={our_mission}
                  alt="ourimission-img"
                  className="desktop-img-1"
                  width="629px"
                  height="470px"
                ></img>
                <img
                  src={our_mission_mob}
                  alt="our-mission-img-mob"
                  className="mob-img-1"
                  width="340px"
                  height="254px"
                ></img>
              </div>
              <div className="col-md-6 our-mission">
                <div className="cat-slider-text">
                  <h4>MISSION</h4>
                  <h2>Our Mission</h2>
                  <p>
                    SPE’s mission is to deliver cost-effective photo editing
                    services as an offshore partner to businesses,
                    photographers, and photo studios in the USA, Canada, UK,
                    Europe, and Australia.
                  </p>
                  <p>
                    We work with a customer-first attitude, focusing on
                    delivering uncompromising quality and security in each
                    project. We have designed our processes to ensure on-time,
                    in-full delivery with thorough quality checks at each stage,
                    delighting our customers every single time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-4-sec key-slider">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-12">
                <div className="cat-slider-text">
                  <h4>DIFFERENTIATORS</h4>
                  <h2>
                    Our Key <br></br> Differentiators
                  </h2>
                  <p>
                    Some of the things that set us apart from our competitors
                    are{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-12"></div>
            </div>
          </div>
          <div className="main-slider">
            <div className="container cate-slider">
              <Key_Slider />
            </div>
          </div>
        </div>
        <GetStart
          dataKey={FirstCapital(dataKey)}
          pageKeyword="Image Editing & Retouching Services"
        />
      </div>

      <Footer />
    </>
  )
}

export default About
