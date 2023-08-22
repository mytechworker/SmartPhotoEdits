import React, { useEffect, useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import privacy_icon from "../images/privacy-icon.webp"
import privacy_icon_1 from "../images/privacy-icon-1.webp"
import privacy_icon_2 from "../images/privacy-icon-2.webp"
import privacy_icon_3 from "../images/privacy-icon-3.webp"
import { Link } from "gatsby"

const Privacy = () => {
      
  return (
    <>
      <Header color={'#f4fbf8'}/>
      <div className="privacy-back">

        <div className="privacy-1">  
            <div className="container">
                <div className="cat-slider-text">
                    <h2>Our Privacy Policy</h2>
                    <p> At Smart Photo Edits we take all the possible measures to protect the privacy of our customers and website
                    visitors. We have designed our services bearing your confidentiality and security in mind</p>
                    <p>All photo and image editing services provided by Smart Photo Edits are 100% compliant with the GDPR and
                    CCPA regulations</p>
                </div>

                <div className="privacy-icon-box">
                    <div className="pi-box-main">
                        <div className="back-color-slider-box">
                            <div className="bg-privacy-box">
                                    <div className="icon-sec-slider color-1">
                                        <img src={privacy_icon} alt="privacy-icon" width="38px" height="37px"></img>
                                    </div>
                                    <h1>How We Deal With Your Personal Information</h1>
                                    
                                    <a href="#id_1">Jump to this section </a>
                            </div>        
                        </div>
                        <div className="back-color-slider-box">
                            <div className="bg-privacy-box">
                                    <div className="icon-sec-slider color-1">
                                        <img src={privacy_icon_1} alt="privacy-icon-1" width="38px" height="37px"></img>
                                    </div>
                                   
                                    <h1>How We Use Your Data to Serve You Better</h1>
                                
                                    <a href="#id_2">Jump to this section </a>
                            </div>        
                        </div>
                        <div className="back-color-slider-box">
                            <div className="bg-privacy-box">
                                    <div className="icon-sec-slider color-1">
                                        <img src={privacy_icon_2} alt="privacy-icon-2" width="38px" height="37px"></img>
                                    </div>
                                    
                                    <h1>Links to <br></br> External Websites</h1>
                               
                                    <a href="#id_3">Jump to this section </a>
                            </div>        
                        </div>
                        <div className="back-color-slider-box">
                            <div className="bg-privacy-box">    
                                    <div className="icon-sec-slider color-1">
                                        <img src={privacy_icon_3} alt="privacy-icon-3" width="28px" height="37px"></img>
                                    </div>
                                   
                                    <h1>GDRP and <br></br> CCPA Compliance</h1>
                                 
                                    <a href="#id_4">Jump to this section </a>
                            </div>        
                        </div>
                    </div>
                </div>
            </div>
        </div> 


        <div className="privacy-2">  
            <div className="container">
                <div className="cat-slider-text" id="id_1">
                    <h2>How We Deal With <br></br> Your Personal Information</h2>
                    <ul>
                        <li>Any information that you provide to Smart Photo Edits via our website through any forms are always stored using
                            the latest security protocols</li>
                        <li>Your name, email id, address, and phone number are only used by us to communicate with you about our
                            company and its products or services. We will NEVER share your data with a third party – whether for selling,
                            leasing, or any other form of distribution.</li>
                        <li> We always use the latest technology to prevent any unauthorized access or use of your personal data. </li>
                        <li>We may at times share your information with our business partners, authorized vendors or affiliates to provide you
                            with an optimum service and information.</li>
                    </ul>
                </div>
            </div>
        </div> 

        <div className="privacy-2 privacy-3">  
            <div className="container">
                <div className="cat-slider-text" id="id_2">
                    <h2>How We Use Your <br></br> Data to Serve You Better</h2>
                    <ul>
                        <li>Our website uses cookies to deliver a more personalized experience to you.</li>
                        <li>Information that is captured using cookies is analyzed to allow us to improve your web experience</li>
                        <li>We do not get any remote access to your computer or mobile devices via cookies, nor do they grant us access to
                        any of your confidential data. </li>
                        <li>We will never make any customer-centric data or information about your location public. </li>
                        <li>The storage of cookies is restricted to the browser you use or the system memory. You can disable them in your
                            browser’s settings. However, by turning off cookies, you will limit yourself from receiving the full personalized
                            experience that our website is designed for</li>
                        <li>To learn more about cookies and how they work, please visit <a href="https://allaboutcookies.org/" target="_blank">www.allaboutcookies.org</a> </li>
                    </ul>
                </div>
            </div>
        </div>  

          <div className="privacy-4">  
            <div className="container">
                <div className="cat-slider-text" id="id_3">
                    <h2>Links to External Websites</h2>
                    <p>Any links on our website that lead to third-party websites are provided solely for your convenience. They
                        should be accessed at your own risk. Smart Photo Edits will not be responsible for your privacy and security
                        on any of these external websites</p>
                </div>
            </div>
          </div>  

          <div className="privacy-2 privacy-3 privacy-5">  
            <div className="container">
                <div className="cat-slider-text" id="id_4">
                    <h2>GDRP and CCPA Compliance</h2>
                    <ul>
                        <li>All personal or business identification details provided by you on our website (e.g. your name, email, phone
                            number, location, etc.) are all securely stored by us in adherence to the GDRP and CCPA requirements</li>
                        <li>We only use this information for communication with clients and potential customers.</li>
                        <li>We do not retain any of your personal information for any longer than is necessary. The only exception to this is if
                            a law or regulation requires us to maintain your data for longer. </li>
                        <li>You can request copies of your personal information or information related to our data storage policies at any time
                            by contacting us.</li>
                    </ul>
                </div>
            </div>
        </div> 

        <div className="start-sec privacy-6">
            <div className="container">
                <div className="row  align-items-center">
                    <div className="col-md-12 col-lg-8">
                        <div className="start-text">
                            <h1>Contact Us</h1>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <div className="start-btn">
                        <Link to="/contact"> <button>Contact</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       </div>     
      <Footer />
    </>
  )
}

export default Privacy
