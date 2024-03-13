import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Banner from './components/Banner/Banner.jsx'
import Choose from './components/Choose/Choose.jsx'
import About from './components/About/About.jsx'
import Footer from './components/Footer/Footer.jsx'
import PopUp from './components/PopUp/PopUp.jsx'
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [showPopup, setShowPopup] = useState(false)
  const HandlePopup = () =>{
    setShowPopup(true);
  };
  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing :"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  },[])
  return (
    <div className="overflow-x-hidden">
      <Navbar HandlePopup={HandlePopup}/>
      <Hero/>
      <Banner/>
      <Choose/>
      <About HandlePopup ={HandlePopup}/>
      <Banner/>
      <Footer />
      <PopUp showPopUp ={showPopup} setShowPopUp={setShowPopup}/>
    </div>
  )
}

export default App
