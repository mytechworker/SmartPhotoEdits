import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/style.css"

const GoogleMapCode = () => {
    return (
        <div className="google-map-code">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3462842377826!2d77.65918631482246!3d13.013606590828319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae114392e8f37f%3A0x8f482cafd65ddd13!2sSmart%20Photo%20Edits!5e0!3m2!1sen!2sin!4v1634023023078!5m2!1sen!2sin"
          width="100%"
          height="600"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>

    )
}
export default GoogleMapCode
