import * as React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import testi_icon from "../images/testi-icon.webp"
import { commonConfig } from "../commonConfig/config"

const Testimonials = ({ locationKey, TestimonialData }) => {
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
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
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
            {TestimonialData?.filter(d => d.country.includes(locationKey)).map(
              (filteredData, index) => (
                <div key={index}>
                  <div className="cate-slider-box">
                    <div className="back-color-slider-box">
                      <div className="testi-img">
                        <img
                          className="desktop-img"
                          alt="testimonials-img"
                          width="300px"
                          height="411px"
                          src={`${commonConfig.URL}/images/testimonial/${filteredData.imageDesktop}`}
                        ></img>
                        <img
                          className="mobile-img"
                          alt="testimonials-img-mob"
                          width="140px"
                          height="125px"
                          src={`${commonConfig.URL}/images/testimonial/${filteredData.imageMobile}`}
                        ></img>
                      </div>
                      <div className="testi-text">
                        <div className="testi-icon">
                          <img
                            src={testi_icon}
                            alt="testimonials-icon"
                            width="62px"
                            height="46px"
                          ></img>
                        </div>
                        <div className="testi-middle">
                          <p>{filteredData.description + '"'}</p>
                        </div>

                        <div className="author-name">
                          <h2>{filteredData.title},</h2>
                          <p>{filteredData.place}</p>
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
export default Testimonials
