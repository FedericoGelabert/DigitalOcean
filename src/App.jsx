// import CssTailwind from "./OnlyPractice/CssTailwind.jsx"
import BannerNews from "./DigitalOcean/BannerNews"
import BannerSydney from "./DigitalOcean/BannerSydney"
import BannerTour from "./DigitalOcean/BannerTour"
import Benefits from "./DigitalOcean/Benefits"
import Header from "./DigitalOcean/Header"
import Main from "./DigitalOcean/Main"
import Products from "./DigitalOcean/Products"
import Reviews from "./DigitalOcean/Reviews"
import TopHat from "./DigitalOcean/TopHat"

function App() {

  return (
    <div>
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
    </div>
  )
}

export default App
