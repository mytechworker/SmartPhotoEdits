import * as React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import fashion_slider_1 from "../images/fashion-slider-1.webp"
import fashion_slider_2 from "../images/fashion-slider-2.webp"
import fashion_slider_3 from "../images/fashion-slider-3.webp"
import { Trans } from "gatsby-plugin-react-i18next"

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
    dots: true,
    arrows: true,
    centerMode: true,
    centerPadding: "80px",
    speed: 500,
    slidesToShow: 3,
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
                  <img
                    src={fashion_slider_1}
                    alt="fashion-slider-img-1"
                    width="554px"
                    height="552px"
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
            </div>
            <div>
              <div className="cate-slider-box">
                <div className="back-color-slider-box">
                  <img
                    src={fashion_slider_2}
                    alt="fashion-slider-img-2"
                    width="554px"
                    height="552px"
                  ></img>
                  <div className="fh-text">
                    <h2>
                      <Trans>Skin Retouching & Airbrushing</Trans>
                    </h2>
                    <p>
                      <Trans>
                        Advanced skin retouching and airbrushing to enhance the
                        subject of the photo.
                      </Trans>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="cate-slider-box">
                <div className="back-color-slider-box">
                  <img
                    src={fashion_slider_3}
                    alt="fashion-slider-img-3"
                    width="554px"
                    height="552px"
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
            </div>

            <div>
              <div className="cate-slider-box">
                <div className="back-color-slider-box">
                  <img
                    src={fashion_slider_1}
                    alt="fashion-slider-img-1"
                    width="554px"
                    height="552px"
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
            </div>
          </Slider>
        </div>
      </div>
    </>
  )
}
export default SimpleSlider
