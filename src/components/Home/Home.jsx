import React from "react";
import CountUp from "react-countup";
import "./home.css";
// import { AnimatedBorderCard } from "";
import { AnimatedBorderCard } from "../../animatedbordercard";
import TrueFocus from "../textanimation/TrueFocus ";
import RotatingText from "../textanimation/creativetext";
import { CompareDemo } from "../../comparecard";
import Squares from "../squareBG/squareBG";
import BlurText from "../textanimation/buildKeyframes";
import { Stack } from "../stack/stack";
import { text } from "framer-motion/client";
import { TracingBeamDemo } from "../../trackingBeams";
import { Card } from "../../poitfolioCard/card";
import project from "../../images/portfolio.png";
import SplitText from "../textanimation/splittext";
import { Link } from "react-router-dom";
export const Home = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <>
      <div className=" container-lg">
        {" "}
        <div className="  flex  justify-evenly  flex-wrap  mt-7   ">
          <div data-aos="fade-up-right" className=" lg:w3/2 xl:w-1/2 ">
            <p className=" title1 anton-regular  "> FRONTEND</p>
            <p className=" title2 anton-regular "> DEVELOPER</p>
            <p className=" intro-text anton-regular italic  relative z-[1]">
              <span className=" fs-3  italic"> Hi! 👋 I'm .</span>
              <TrueFocus
                sentence="ALI RAZA"
                manualMode={false}
                blurAmount={5}
                borderColor="#FFC83D"
                animationDuration={0.5}
                pauseBetweenAnimations={2}
              />
              <br />
              <span className=" ">
                <BlurText
                  text="  A creative Frontend Developer with 5+ years of experience in
                building high-performance, scalable, and responsive web
                solutions."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="fs-4  italic mb-8 text-lime-50"
                />
              </span>
            </p>
            <br />
            <br />
            <div className=" flex items-center relative z-[1]">
              <span className=" fs-2 italic  text-teal-50 me-3"> Creative</span>
              <RotatingText
                texts={["Thinking", "Coding", "Components", "Mind!"]}
                mainClassName="px-2 fw-bold fs-1 sm:px-2 md:px-3 bg-cyan-300  text-white outlined-text overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
          </div>
          <div className="" data-aos="fade-up-left">
            <CompareDemo />
          </div>
        </div>
        <br />
        <br />
        <div>
          <div className="flex justify-between   align-items-center flex-wrap-reverse  ">
            <div
              data-aos="fade-right"
              className=" w-full  xl:w-1/3  md:gap-10 gap-7 flex xl:flex-col justify-evenly  flex-wrap   mt-9   "
            >
              <div className=" relative ">
                <Squares
                  speed={0.5}
                  squareSize={30}
                  direction="diagonal" // up, down, left, right, diagonal
                  borderColor="#3A83F9"
                  hoverFillColor="#222"
                />

                <div class="absolute w-[300px]  inset-0 flex items-center justify-center">
                  <div class=" text-white px-3 py-2 rounded">
                    <p className=" flex  items-center m-0">
                      <span className="fs-4 fw-bolder uppercase  outlined-text font-bold">
                        {" "}
                        Experience:&nbsp;
                      </span>{" "}
                      <CountUp
                        className="  text-6xl outlined-text font-bold "
                        start={0}
                        end={5}
                        duration={2.75}
                      />{" "}
                      <span className=" text-2xl  outlined-text font-bold ">
                        {" "}
                        +
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className=" relative ">
                <Squares
                  speed={0.5}
                  squareSize={30}
                  direction="diagonal" // up, down, left, right, diagonal
                  borderColor="#3A83F9"
                  hoverFillColor="#222"
                />

                <div class="absolute w-[300px] inset-0 flex items-center justify-center">
                  <div class=" text-white px-3 py-2 rounded">
                    <p className=" flex  items-center m-0 m-0">
                      <span className="fs-4 fw-bolder uppercase  outlined-text font-bold">
                        {" "}
                        Projects:&nbsp;
                      </span>{" "}
                      <CountUp
                        className="  text-6xl outlined-text font-bold "
                        start={0}
                        end={30}
                        duration={2.75}
                      />{" "}
                      <span className=" text-2xl  outlined-text font-bold ">
                        {" "}
                        +
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className=" relative ">
                <Squares
                  speed={0.5}
                  squareSize={30}
                  direction="diagonal" // up, down, left, right, diagonal
                  borderColor="#3A83F9"
                  hoverFillColor="#222"
                />

                <div class="absolute w-[300px]  inset-0 flex items-center justify-center">
                  <div class=" text-white px-3 py-2 rounded">
                    <p className=" flex  items-center m-0 m-0">
                      <span className="fs-4 fw-bolder uppercase  outlined-text font-bold">
                        {" "}
                        Clients:&nbsp;
                      </span>{" "}
                      <CountUp
                        className="  text-6xl outlined-text font-bold "
                        start={0}
                        end={20}
                        duration={2.75}
                      />{" "}
                      <span className=" text-2xl  outlined-text font-bold ">
                        {" "}
                        +
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="  w-full xl:w-2/3  mt-7  relative"
            >
              <p className=" title1 anton-regular     text-lime-50 text-center  mb-7  uppercase ">
                {" "}
                About Me.
              </p>{" "}
              <br />
              <BlurText
                text="I have been coding for over 5 years, beginning my journey in 2020. Initially, I learned HTML, CSS, and JavaScript to build websites.
                My first project was a simple website built with HTML, CSS, and JavaScript (~mid-2020).
                As I progressed, I focused heavily on React.js and Next.js. Now, I specialize in building full stack applications with modern web technologies.  I specialize in MongoDB, Express.js, React.js, and Node.js, and have a strong command of front-end technologies like HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, material UI, reactBits, chakra UI, shadcn UI, and Framer Motion. I love turning complex problems into clean, efficient code and crafting smooth user experiences. My journey began with a deep interest in how websites work, and over the years, I’ve transformed that curiosity into a career. I'm constantly learning and exploring new tools and technologies to stay current in this fast-evolving field."
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className=" sm:text-2xl text-xl p-3  italic mb-8 text-lime-50"
              />
            </div>
          </div>
        </div>
        <br />
        <TracingBeamDemo />
        <br /> <br /> <br />
        <p className=" title1 anton-regular  text-lime-50 text-center  mb-7  mt-10 uppercase ">
          {" "}
          My Recent Work.
        </p>{" "}
        <Card image={project} link="" />
        <br /> <br /> <br />
        <div className=" flex justify-center items-center flex-col">
          <p className=" mb-3 p-2 md:p-4">
            {" "}
            <SplitText
              text="Have a project in mind ? Let's build something amazing together! ✌️"
              className=" text-xl sm:text-2xl text-gray-300  font-semibold text-center"
              delay={50}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              // onLetterAnimationComplete={handleAnimationComplete}
            />
          </p>
          <a href="mailto:alirazabt15342@gmail.com" className=" mb-2">
            <SplitText
              text="alirazabt15342@gmail.com"
              className="md:text-5xl sm:text-3xl text-xl fw-bold underline text-lime-50  font-semibold text-center"
              delay={50}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              // onLetterAnimationComplete={handleAnimationComplete}
            />
          </a>{" "}
          <p className=" mb-2">
            {" "}
            <SplitText
              text="+92 3152490017"
              className="text-2xl text-gray-400  font-semibold text-center"
              delay={50}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              // onLetterAnimationComplete={handleAnimationComplete}
            />
          </p>
          {/* <Link to="/MyProjects"></Link> */}
          <a
            href="https://drive.google.com/file/d/1Rj1P4RQLiogkKuCGUOPB4MC5DxTohWKw/view"
            target="_blank"
            className="text-2xl text-blue-400  font-semibold text-center"
            rel="noopener noreferrer"
          >
            <SplitText
              text="  My Resume"
              className="underline"
              delay={50}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              // onLetterAnimationComplete={handleAnimationComplete}
            />
          </a>
        </div>
        <br />
        <br />
        <br />
      </div>
      <div></div> <br />
      <br />
      <br />
    </>
  );
};
