import "./home.css";
// import { AnimatedBorderCard } from "";
import { Link } from "react-router-dom";
import { TracingBeamDemo } from "../../trackingBeams";
import TrueFocus from "../textanimation/TrueFocus ";
import BlurText from "../textanimation/buildKeyframes";
import RotatingText from "../textanimation/creativetext";
export const Home = () => {
  const handleAnimationComplete = () => {
    // console.log("Animation completed!");
  };

  return (
    <>
      <div className=" container-md p-lg-0 relative z-[51]">
        {" "}
        <div className="  flex  justify-between  flex-wrap  md:mt-8 md:min-h-screen  ">
          <div className="  xl:w-1/2  lg:w-full p-3">
            <p
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="1700"
              className=" title1_main anton-regular  "
            >
              {" "}
              MERN STACK
            </p>
            <p
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-duration="1400"
              className=" title2 dancing-script  "
            >
              {" "}
              <i>DEVELOPER</i>
            </p>
            <p className=" intro-text anton-regular italic  relative z-[1]">
              <span
                data-aos="fade-right"
                data-aos-delay="800"
                data-aos-duration="1800"
                className=" md:text-xl sm:text-lg  italic inline-block"
              >
                {" "}
                Hi! 👋 I'm .
              </span>
              <br />
              <span
                data-aos="fade-left"
                data-aos-delay="1000"
                data-aos-duration="2000"
              >
                {" "}
                <TrueFocus
                  sentence="ALI RAZA"
                  manualMode={false}
                  blurAmount={5}
                  borderColor="#fc4c00"
                  animationDuration={0.5}
                  pauseBetweenAnimations={2}
                />
              </span>
              <br />
              <span
                className=" inline-block "
                data-aos="zoom-in"
                data-aos-delay="1200"
                data-aos-duration="2000"
              >
                <BlurText
                  text="Delivering clean, responsive, and high-performing web solutions using React.js and the MERN stack, ensuring optimized performance, maintainable architecture, and efficient client–server integration, while aligning every project with modern development standards and user-focused design principles."
                  delay={50}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="md:text-xl sm:text-lg  italic mb-2 text-lime-50 "
                />
              </span>
            </p>

            <div className=" flex items-center relative z-[1] mt-5">
              <span
                data-aos="fade-right"
                data-aos-delay="900"
                data-aos-duration="1800"
                className="  md:text-2xl sm:text-xl    text-teal-50 me-3"
              >
                {" "}
                Creative
              </span>
              <div
                data-aos="fade-left"
                data-aos-delay="1000"
                data-aos-duration="2600"
              >
                <RotatingText
                  texts={["Mind!", "Thinking!", "Ideas!", "Coding!"]}
                  mainClassName="px-2 fw-bold md:text-3xl sm:text-2xl  sm:px-2 md:px-3 bg-cyan-300  text-white outlined-text overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={1800}
                />
              </div>
            </div>
          </div>

          <div className="  xl:w-1/3 xl:mt-5 w-full flex justify-center  relative">
            <div className="   ">
              {" "}
              <div
                data-aos="fade-up-left"
                data-aos-delay="400"
                data-aos-duration="1000"
              >
                {" "}
                <a
                  href="/resume.pdf"
                  download
                  target="_blank"
                  className=" no-underline"
                >
                  <div
                    className=" relative  sm:p-3 p-2  bg-gray-900/30  rounded-2xl !border-x-8   !border !border-blue-700/50  transform hover:scale-105
    hover:bg-blue-900/20 transition-all duration-500 ease-in-out bg-gradient-to-br 
from-[rgba(190,59,246,0.1)] via-[rgba(37,99,235,0.1)] to-[rgba(142,41,236,0.1)]  md:mb-4 mt-4 mb-2 "
                  >
                    <div className=" flex gap-4 align-center justify-center align-items-center">
                      <div
                        className="sm:p-2 p-1 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl !border !border !border-yellow-400/60 small"
                        style={{ transform: "none" }}
                      >
                        <svg
                          width="36px"
                          height="36px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M17 17H17.01M17.4 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H6.6M12 15V4M12 15L9 12M12 15L15 12"
                              stroke="#00AAFF"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>{" "}
                          </g>
                        </svg>
                      </div>
                      <p className=" title3 anton-regular text-lime-50 text-center    uppercase ">
                        {" "}
                        Download Resume
                      </p>
                    </div>
                    <div
                      data-aos="fade-left"
                      data-aos-delay="900"
                      className="h-[2px]  flex mx-auto  bg-gradient-to-r from-transparent via-blue-600 to-transparent mt-2"
                    ></div>
                  </div>
                </a>
              </div>
              <div
                data-aos="fade-up-left"
                data-aos-delay="800"
                data-aos-duration="1500"
              >
                {" "}
                <Link
                  to="/MyProjects"
                  href="mailto:alirazabt15342@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you"
                  className=" no-underline"
                >
                  <div
                    className=" relative   sm:p-3 p-2 bg-gray-900/30  rounded-xl !border-x-8  !border !border-blue-700/50  transform hover:scale-105
    hover:bg-blue-900/20 transition-all duration-500 ease-in-out bg-gradient-to-br 
from-[rgba(190,59,246,0.1)] via-[rgba(37,99,235,0.1)] to-[rgba(142,41,236,0.1)] md:mt-4 md:mb-4 mt-2 mb-2 "
                  >
                    <div
                      data-aos="fade-left"
                      data-aos-delay="400"
                      className=" flex gap-4 align-center justify-center align-items-center"
                    >
                      <div
                        className="sm:p-2 p-1 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl !border !border !border-yellow-400/60 small "
                        style={{ transform: "none" }}
                      >
                        <svg
                          version="1.1"
                          id="Uploaded to svgrepo.com"
                          xmlns="http://www.w3.org/2000/svg"
                          width="36px"
                          height="36px"
                          viewBox="0 0 32 32"
                          fill="#00AAFF"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              class="blueprint_een"
                              d="M29,5H3v18h26V5z M28,22H4V6h24V22z M31.01,2H0.99C0.443,2,0,2.443,0,2.99v22.02 C0,25.557,0.443,26,0.99,26H11v2H9.99C9.443,28,9,28.443,9,28.99v0.02C9,29.557,9.443,30,9.99,30h12.02 c0.547,0,0.99-0.443,0.99-0.99v-0.02c0-0.547-0.443-0.99-0.99-0.99H21v-2h10.01c0.547,0,0.99-0.443,0.99-0.99V2.99 C32,2.443,31.557,2,31.01,2z M19,28h-6v-3h6V28z M30,24H2V4h28V24z M21,12H11v-1h10V12z M21,14H11v-1h10V14z M21,16H11v-1h10V16z M6,8H5V7h1V8z M8,8H7V7h1V8z"
                            ></path>{" "}
                          </g>
                        </svg>
                      </div>
                      <p className=" title3 anton-regular text-lime-50 text-center   uppercase ">
                        {" "}
                        My Projects
                      </p>
                    </div>
                    <div
                      data-aos="fade-left"
                      data-aos-delay="900"
                      className="h-[2px]  flex mx-auto  bg-gradient-to-r from-transparent via-blue-600 to-transparent mt-2"
                    ></div>
                  </div>
                </Link>
              </div>
              <div
                data-aos="fade-up-left"
                data-aos-delay="1200"
                data-aos-duration="2000"
              >
                {" "}
                <a
                  href="https://github.com/Alirazariaz42/"
                  target="_blank"
                  className=" no-underline"
                >
                  <div
                    className=" relative  sm:p-3 p-2   bg-gray-900/30  rounded-2xl !border-x-8  !border !border-blue-700/50  transform hover:scale-105
    hover:bg-blue-900/20 transition-all duration-500 ease-in-out bg-gradient-to-br 
from-[rgba(190,59,246,0.1)] via-[rgba(37,99,235,0.1)] to-[rgba(142,41,236,0.1)] md:mt-4 md:mb-4 mt-2 mb-2 "
                  >
                    <div
                      data-aos="fade-left"
                      data-aos-delay="400"
                      className=" flex gap-4 align-center justify-center align-items-center"
                    >
                      <div
                        className="sm:p-2 p-1 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl !border !border !border-yellow-400/60 small"
                        style={{ transform: "none" }}
                      >
                        <svg
                          width="36px"
                          height="36px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M9.29183 21V18.4407L9.3255 16.6219C9.36595 16.0561 9.58639 15.5228 9.94907 15.11C9.95438 15.1039 9.95972 15.0979 9.9651 15.0919C9.9791 15.0763 9.96988 15.0511 9.94907 15.0485V15.0485C7.52554 14.746 5.0005 13.7227 5.0005 9.26749C4.9847 8.17021 5.3427 7.10648 6.00437 6.27215C6.02752 6.24297 6.05103 6.21406 6.07492 6.18545V6.18545C6.10601 6.1482 6.11618 6.09772 6.10194 6.05134C6.10107 6.04853 6.10021 6.04571 6.09935 6.04289C6.0832 5.9899 6.06804 5.93666 6.05388 5.88321C5.81065 4.96474 5.86295 3.98363 6.20527 3.09818C6.20779 3.09164 6.21034 3.08511 6.2129 3.07858C6.22568 3.04599 6.25251 3.02108 6.28698 3.01493V3.01493C6.50189 2.97661 7.37036 2.92534 9.03298 4.07346C9.08473 4.10919 9.13724 4.14609 9.19053 4.18418V4.18418C9.22901 4.21168 9.27794 4.22011 9.32344 4.20716C9.32487 4.20675 9.32631 4.20634 9.32774 4.20593C9.41699 4.18056 9.50648 4.15649 9.59617 4.1337C11.1766 3.73226 12.8234 3.73226 14.4038 4.1337C14.4889 4.1553 14.5737 4.17807 14.6584 4.20199C14.6602 4.20252 14.6621 4.20304 14.6639 4.20356C14.7174 4.21872 14.7749 4.20882 14.8202 4.17653V4.17653C14.8698 4.14114 14.9187 4.10679 14.967 4.07346C16.6257 2.92776 17.4894 2.9764 17.7053 3.01469V3.01469C17.7404 3.02092 17.7678 3.04628 17.781 3.07946C17.7827 3.08373 17.7843 3.08799 17.786 3.09226C18.1341 3.97811 18.1894 4.96214 17.946 5.88321C17.9315 5.93811 17.9159 5.9928 17.8993 6.04723V6.04723C17.8843 6.09618 17.8951 6.14942 17.9278 6.18875C17.9289 6.18998 17.9299 6.19121 17.9309 6.19245C17.9528 6.21877 17.9744 6.24534 17.9956 6.27215C18.6573 7.10648 19.0153 8.17021 18.9995 9.26749C18.9995 13.747 16.4565 14.7435 14.0214 15.015V15.015C14.0073 15.0165 14.001 15.0334 14.0105 15.0439C14.0141 15.0479 14.0178 15.0519 14.0214 15.0559C14.2671 15.3296 14.4577 15.6544 14.5811 16.0103C14.7101 16.3824 14.7626 16.7797 14.7351 17.1754V21"
                              stroke="#00AAFF"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>{" "}
                            <path
                              d="M4 17C4.36915 17.0523 4.72159 17.1883 5.03065 17.3975C5.3397 17.6068 5.59726 17.8838 5.7838 18.2078C5.94231 18.4962 6.15601 18.7504 6.41264 18.9557C6.66927 19.161 6.96379 19.3135 7.27929 19.4043C7.59478 19.4952 7.92504 19.5226 8.25112 19.485C8.5772 19.4475 8.89268 19.3457 9.17946 19.1855"
                              stroke="#00AAFF"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>{" "}
                          </g>
                        </svg>
                      </div>
                      <p className=" title3 anton-regular text-lime-50 text-center   uppercase ">
                        {" "}
                        gitHub
                      </p>
                    </div>
                    <div
                      data-aos="fade-left"
                      data-aos-delay="900"
                      className="h-[2px]  flex mx-auto  bg-gradient-to-r from-transparent via-blue-600 to-transparent mt-2"
                    ></div>
                  </div>
                </a>
              </div>
              <div
                data-aos="fade-up-left"
                data-aos-delay="1600"
                data-aos-duration="2500"
              >
                {" "}
                <a
                  href="https://www.linkedin.com/in/ali-raza-mern-stack/"
                  target="_blank"
                  className=" no-underline"
                >
                  <div
                    className=" relative    sm:p-3 p-2 md:min-w-[500px] bg-gray-900/30  rounded-2xl  !border-x-8  !border !border-blue-700/50  transform hover:scale-105
    hover:bg-blue-900/20 transition-all duration-200 ease-in-out bg-gradient-to-br 
from-[rgba(190,59,246,0.1)] via-[rgba(37,99,235,0.1)] to-[rgba(142,41,236,0.1)] md:mt-4 md:mb-4 mt-2 mb-2 "
                  >
                    <div className=" flex gap-4 align-center justify-center align-items-center">
                      <div
                        className="sm:p-2 p-1  bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl !border !border !border-yellow-400/60 small"
                        style={{ transform: "none" }}
                      >
                        <svg
                          fill="#00AAFF"
                          version="1.1"
                          id="Layer_1"
                          viewBox="-143 145 512 512"
                          width="36px"
                          height="36px"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g>
                              {" "}
                              <path d="M-143,145v512h512V145H-143z M339,627h-452V175h452V627z"></path>{" "}
                              <rect
                                x="-8.5"
                                y="348.4"
                                width="49.9"
                                height="159.7"
                              ></rect>{" "}
                              <path d="M127.9,508.1v-86.3c0-4.9-0.2-9.7,1.2-13.1c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4v82.6H241v-88.8 c0-49.4-27.8-72.4-63.3-72.4c-28.6,0-46.5,15.6-49.8,26.6v-25.1H71.8c0.7,13.3,0,159.7,0,159.7H127.9z"></path>{" "}
                              <path d="M14.7,328.4h0.4c18.8,0,30.5-12.3,30.4-27.7C45.1,284.9,33.8,273,15.4,273c-18.4,0-30.5,11.9-30.5,27.7 C-15.1,316.2-3.4,328.4,14.7,328.4z"></path>{" "}
                            </g>{" "}
                          </g>
                        </svg>
                      </div>
                      <p className=" title3 anton-regular text-lime-50 text-center   uppercase ">
                        {" "}
                        LinkedIn
                      </p>
                    </div>
                    <div
                      data-aos="fade-left"
                      data-aos-delay="900"
                      className="h-[2px]  flex mx-auto  bg-gradient-to-r from-transparent via-blue-600 to-transparent mt-2"
                    ></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className=" ">
          {" "}
          <TracingBeamDemo />
        </div>
        {/* <div className=" text-center ">
          <Squares
            speed={0.5}
            squareSize={30}
            direction="diagonal" // up, down, left, right, diagonal
            borderColor="#3A83F9"
            hoverFillColor="#222"
          />
        </div> */}
        <br /> <br />
      </div>
    </>
  );
};
