import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <div>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
      <Footer />
    </>
  )
}

export default NotFoundPage
