// import CssTailwind from "./OnlyPractice/CssTailwind.jsx"
import BannerNews from "./DigitalOcean/components/BannerNews"
import BannerSydney from "./DigitalOcean/components/BannerSydney"
import BannerTour from "./DigitalOcean/components/BannerTour"
import Benefits from "./DigitalOcean/components/Benefits"
import BottomSignUp from "./DigitalOcean/components/BottomSignUp"
import Experts from "./DigitalOcean/components/Experts"
import Footer from "./DigitalOcean/components/Footer"
import GetStarted from "./DigitalOcean/components/GetStarted"
import Header from "./DigitalOcean/components/Header"
import Main from "./DigitalOcean/components/Main"
import Products from "./DigitalOcean/components/Products"
import Reviews from "./DigitalOcean/components/Reviews"
import TopHat from "./DigitalOcean/components/TopHat"

function App() {

  return (
    <div className="relative">
      {/* <CssTailwind/> */}
      <TopHat/>
      <Header/>
      <Main/>
      <BannerNews/>
      <Reviews/>
      <BannerSydney/>
      <Benefits/>
      <BannerTour/>
      <Products/>
      <Experts/>
      <BottomSignUp/>
      <GetStarted/>
      <Footer/>
    </div>
  )
}

export default App
