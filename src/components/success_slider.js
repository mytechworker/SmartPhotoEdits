import * as React from "react"
import Slider from "react-slick"
import { Trans } from "gatsby-plugin-react-i18next"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { commonConfig } from "../commonConfig/config"

const Sucslider = ({ locationKey, SuccessStoryData }) => {
  function SampleNextArrow(props) {
    const { onClick } = props
    return <div className="cut-arrow-right" onClick={onClick} />
  }

  function SamplePrevArrow(props) {
    const { onClick } = props
    return <div className="cut-arrow-left" onClick={onClick} />
  }
  const settings = {
    infinite: true,
    className: "center",
    infinite: true,
    arrows: true,
    //centerMode: true,
    centerPadding: "-60px",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <>
      <div>
        <div className="slider-main">
          <Slider {...settings}>
            {SuccessStoryData?.filter(d => d.country.includes(locationKey)).map(
              (filteredData, index) => (
                <div key={index}>
                  <div className="cate-slider-box">
                    <div className="back-color-slider-box">
                      <div className="testi-img col-md-12 col-lg-6">
                        <div className="img-rel">
                          <img
                            className="desktop-img"
                            alt="success-img"
                            src={`${commonConfig.URL}/images/success-story/${filteredData.imageDesktop}`}
                            width="509px"
                            height="465px"
                          ></img>
                          <img
                            className="mobile-img"
                            alt="success-img-mob"
                            src={`${commonConfig.URL}/images/success-story/${filteredData.imageMobile}`}
                            width="255px"
                            height="234px"
                          ></img>
                          <div className="bottom-text">
                            <h3>
                              <Trans>
                                Need customer reference? Talk to us today!
                              </Trans>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="testi-text col-md-12 col-lg-6">
                        <h3>{filteredData.title}</h3>

                        <div className="subtext">
                          <h5>
                            <Trans>The Scope</Trans>
                          </h5>
                          <p>{filteredData.scope}</p>
                        </div>

                        <div className="subtext">
                          <h5>
                            <Trans>The Outcome</Trans>
                          </h5>
                          <p>{filteredData.outcome}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </Slider>
        </div>
      </div>
    </>
  )
}
export default Sucslider
