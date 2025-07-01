import logo from "./logo.svg";
import "./App.css";
// import FloatingDock from "./Mycomponrnt";
import { Card } from "./poitfolioCard/card";
import { BackgroundBeamsDemo } from "./backgroundbeams";
import { FloatingDockDemo } from "./FloatingDock";
import { Home } from "./components/Home/Home";
import { Mywork } from "./components/Mywork/Mywork";
import TrueFocus from "./components/textanimation/TrueFocus ";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MyProjects } from "./components/MyProjects/MyProjects";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "./ScrollOnTop";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <div className=" bg-black  ">
      <ScrollToTop />
      <FloatingDockDemo />
      <BackgroundBeamsDemo />
      <br />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MyProjects" element={<MyProjects />} />
      </Routes>
    </div>
  );
}

export default App;
