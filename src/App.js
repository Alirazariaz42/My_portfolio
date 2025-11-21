import "./App.css";
// import FloatingDock from "./Mycomponrnt";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { FloatingDockDemo } from "./FloatingDock";
import ScrollToTop from "./ScrollOnTop";
import { BackgroundBeamsDemo } from "./backgroundbeams";
import { Home } from "./components/Home/Home";
import { MyProjects } from "./components/MyProjects/MyProjects";
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
