import { BrowserRouter } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { About, Contact, Experience, Certifications, Hero, Navbar, 
  Tech, Works, StarsCanvas } from './components'; 



const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-20 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
      </div>
      <div className="bg-primary relative z-0">
        <StarsCanvas />
        <About />
        <Experience />
        <Tech />
        <Certifications />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    <SpeedInsights />
    </BrowserRouter>
  )
}

export default App
