import * as React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import key1 from "../images/key-1.webp"
import key2 from "../images/key-2.webp"
import key3 from "../images/key-3.webp"
import key4 from "../images/key-4.webp"

const SimpleSlider = () => {
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
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 2500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 767,
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
            <div>
              <div className="cate-slider-box">
                <div className="back-color-slider-box">
                  <div className="icon-sec-slider color-1">
                    {" "}
                    <img
                      src={key1}
                      alt="OurKey-img-1"
                      width="49px"
                      height="38px"
                    ></img>
                  </div>
                  <h1>Latest Technology</h1>
                  <p>
                    Use of the latest technology for photo editing, including
                    licensed software like Adobe Photoshop and Lightroom. We
                    combine this with exceptional training programs for our
                    executives who understand the nuances of photo editing and
                    deliver outstanding results for our clients
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="cate-slider-box">
                <div className="back-color-slider-box">
                  <div className="icon-sec-slider color-2">
                    {" "}
                    <img
                      src={key2}
                      alt="OurKey-img-2"
                      width="40px"
                      height="46px"
                    ></img>
                  </div>
                  <h1>ISO Quality </h1>
                  <p>
                    We adhere to ISO quality standards like 27001:2013. We aim
                    to deliver projects on time, in total, no matter how
                    versatile our customer’s requirements are. For this reason,
                    we have invested in infrastructure to handle large volumes
                    of photo editing requirements daily successfully
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="cate-slider-box">
                <div className="back-color-slider-box">
                  <div className="icon-sec-slider color-1">
                    {" "}
                    <img
                      src={key3}
                      alt="OurKey-img-3"
                      width="48px"
                      height="48px"
                    ></img>
                  </div>
                  <h1>Streamlined Process</h1>
                  <p>
                    We have established a streamlined process workflow designed
                    for seamless collaboration with the customer, quick
                    iterations, quality checks at every stage, and performance
                    tracking – guaranteeing 100% client satisfaction{" "}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="cate-slider-box">
                <div className="back-color-slider-box">
                  <div className="icon-sec-slider color-2">
                    {" "}
                    <img
                      src={key4}
                      alt="OurKey-img-4"
                      width="48px"
                      height="48px"
                    ></img>
                  </div>
                  <h1>Global Delivery </h1>
                  <p>
                    Our global delivery centers are located in India, the
                    Philippines, Kenya, Bolivia, and Colombia – ensuring that
                    your project keeps going even while you are asleep.{" "}
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  )
}
export default SimpleSlider
