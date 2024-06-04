import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useState } from "react"

function RootLayout() {
  const [loader, setLoader] = useState(true)

  setTimeout(() => setLoader(false), 1500)

  return (
    <>
      {loader ? <div id="preloader">
          <div className="loader-container">
              <div className="loader2"></div>
          </div>
      </div> : ""}
       <Navbar />
       <main>
            <Outlet/>
       </main>
       <Footer />
    </>
  )
}

export default RootLayout