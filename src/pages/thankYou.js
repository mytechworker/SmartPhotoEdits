import React, { useEffect, useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import GoogleMapCode from "../components/googleMapCode"
import AddressSection from "../components/addressSection"
import GetStart from "../components/getStart"
import setKey,{FirstCapital} from "../utils/setKey"

const ThankYou = ({location}) => {
  
  const [dataKey,setDataKey]=useState('');
  const [locationKey,setLocationKey]=useState('');

  useEffect(async()=>{    
      let data = await setKey(location,"utm_term","Image Editing & Retouching Services")
      if(data.length > 0){
        setDataKey(data[0]);
        setLocationKey(data[1]);
      }
      
      return () => {
        data = null;
      }
  },[])

  return (
    <>
      <Header color={"#f4fbf8"} />

      <div className="white-back">
        <div className="container">
          <div className="contact-sec">
            {/* <h1>
              Contact Us and <br></br> Get a Free Quote
            </h1> */}
          </div>
          <br />
          <br />
          <br />
          <div
            className="form-box"
            style={{ textAlign: "center", paddingBottom: "50px !important" }}
          >
            Thank you for contacting SmartPhotoEdits. Our Business Development
            Executive
            <br />{" "}
            <span style={{ textDecoration: "uppercase" }}>
              <strong>Mr. Amaresh Erappa</strong>
            </span>{" "}
            will contact you in 1 business day.
          </div>

          <AddressSection/>
        </div>

        <GoogleMapCode/>
        <GetStart dataKey={FirstCapital(dataKey)} pageKeyword="Start Your Project Today" />
      </div>
      <Footer />
    </>
  )
}

export default ThankYou
