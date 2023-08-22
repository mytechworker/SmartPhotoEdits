import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/style.css"
import location_icon from "../images/location-icon.webp"
import phone_icon from "../images/phone-icon.webp"
import email_icon from "../images/email-icon.webp"


const AddressSection = () => {
    return (
        <div className="address-sec">
        <div className="address-row">
          <div className="address-text">
            <div className="address-bg">
              <div className="text-add">
                <div className="img-add">
                  <img src={location_icon}></img>
                </div>
                <h2>OFFICE LOCATION</h2>
                <p>
                  Dodda Banaswadi Main Rd, Lakshmamma Layout, Dodda
                  Banaswadi, Bengaluru, Karnataka 560043
                </p>
              </div>
              <a
                href="https://www.google.com/maps/place/Smart+Photo+Edits/@13.0136118,77.659181,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae114392e8f37f:0x8f482cafd65ddd13!8m2!3d13.0136066!4d77.661375"
                target="_blank"
              >
                See on map
              </a>
            </div>
          </div>

          <div className="address-text">
            <div className="address-bg">
              <div className="text-add">
                <div className="img-add">
                  <img src={phone_icon}></img>
                </div>
                <h2>OFFICE PHONE</h2>
                <p>Call us 24/7</p>
                <h3>+91 80426 92635</h3>
              </div>
              <a href="tel:+00 80 555 777">Call Us Now</a>
            </div>
          </div>

          <div className="address-text">
            <div className="address-bg">
              <div className="text-add">
                <div className="img-add">
                  <img src={email_icon}></img>
                </div>
                <h2>OFFICE EMAIL</h2>
                <p>Email us 24/7</p>
                <h3>info@smartphotoedits.com</h3>
              </div>
              <a href="mailto:info@smartphotoedits.com">Email Us Now</a>
            </div>
          </div>
        </div>
      </div>
    
    )

}

export default AddressSection;