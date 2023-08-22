import React, { useEffect, useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { useForm } from "react-hook-form"
import axios from "axios"
import { commonConfig } from "../commonConfig/config"
import { navigate } from "gatsby"
import GetStart from "../components/getStart"
import GoogleMapCode from "../components/googleMapCode"
import AddressSection from "../components/addressSection"
import setKey,{FirstCapital} from "../utils/setKey"

const Contact = ({location}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const [fileObj, setFileObj] = useState()
  const [fileName, setFileName] = useState("Choose a file...")

  const onFileChange = async e => {
    // const formData = new FormData()
    setFileObj(e.target.files[0])
    // console.log(e.target.files[0].name)
    let afName = e.target.files[0].name
    console.log(afName)
    // formData.append("file", e.target.files[0])
    setFileName(
      afName != "" ? (
        <span>File Selected - {afName}</span>
      ) : (
        <span>Choose a file...</span>
      )
    )
  }

  const onSubmit = data => {
    var dataAppend = new FormData()
    dataAppend.append("firstName", data.firstName)
    dataAppend.append("email", data.email)
    dataAppend.append("TelephoneNumber", data.TelephoneNumber)
    dataAppend.append("Numberofimages", data.Numberofimages)
    dataAppend.append("Message", data.message)
    dataAppend.append("Company", data.Company)
    dataAppend.append("country", "")
    dataAppend.append("upfile1", fileObj)
    console.log(dataAppend)
    var config = {
      method: "post",
      url: `https://www.smartphotoedits.com/api/contact-submit.php`,
      headers: {
        "Content-Type": "application/json",
      },
      data: dataAppend,
    }

    axios(config)
      .then(function (response) {
        {
          if (response?.data?.status == true) {
            navigate("/thankYou")
          }
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

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
            <h1>
              Contact Us and <br></br> Get a Free Quote
            </h1>
          </div>

          <div className="form-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>Name *</label>

                <input
                  className={`form-control ${
                    errors.firstName && errors.firstName?.type === "required"
                      ? "text1"
                      : ""
                  } `}
                  type="text"
                  placeholder="Enter Your First and Last Name Here"
                  name="text"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                ></input>
                <p>
                  {errors.firstName?.type === "required" &&
                    errors.firstName?.message}
                </p>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    className={`form-control ${
                      errors.email && errors.email?.type === "required"
                        ? "text1"
                        : ""
                    } `}
                    type="text"
                    name="text"
                    placeholder="Work Email ID"
                    {...register("email", {
                      required: "E-mail  is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Enter a valid e-mail address",
                      },
                    })}
                  ></input>
                  <p>
                    {errors.email?.type === "required" && errors.email?.message}
                    {errors.email?.type === "pattern" && errors.email?.message}
                  </p>
                </div>
                <div className="form-group">
                  <label>Telephone Number</label>
                  <input
                    type="text"
                    name="text"
                    placeholder="Work Phone Number"
                    className={`form-control`}
                    {...register("TelephoneNumber", {})}
                  ></input>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Number of images</label>
                  <input
                    type="text"
                    name="text"
                    placeholder="Number Of Images"
                    className={`form-control`}
                    {...register("Numberofimages", {
                      pattern: {
                        value: /^[0-9\b]+$/,
                        message: "Enter a valid Number of images",
                      },
                    })}
                  ></input>
                  <p>
                    {errors.Numberofimages?.type === "pattern" &&
                      errors.Numberofimages?.message}
                  </p>
                </div>
                <div className="form-group">
                  <label>Company Name</label>
                  <input
                    type="text"
                    name="text"
                    placeholder="Enter Company Name"
                    className={`form-control`}
                    {...register("Company", {})}
                  ></input>
                </div>
              </div>
              
              <div className="form-group text-area ">
                <label> Message</label>
                <textarea
                  type="text"
                  name="message"
                  placeholder="Enter Your Message Here"
                  className={`form-control ${
                    errors.message && errors.message?.type === "required"
                      ? "text1"
                      : ""
                  }`}
                  {...register("message", {
                    required: "Message is required",
                  })}
                ></textarea>
                <p>
                  {errors.message?.type === "required" &&
                    errors.message?.message}
                </p>
              </div>

              <div className="form-group text-area">
                <label>Document</label>
                <div className="upload-input">
                  <div className="file">
                    <label htmlFor="input-file">Upload File</label>
                    <input
                      id="input-file"
                      onChange={onFileChange}
                      type="file"
                    />
                  </div>
                  <p className="upload-text">{fileName}</p>
                </div>
              </div>

              <div className="submit-form">
                <button type="submit">Submit</button>
              </div>
            </form>
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

export default Contact
