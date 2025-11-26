import "./card.css";

export const Card = (props) => {
  return (
    <div className="  lg:mt-20 md:mt-16 sm:mt-12 mt-8  ">
      <div data-aos="zoom-in-up" data-aos-delay="100" className="w-fit">
        <div className="flex gap-3 items-center">
          <div
            className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl !border !border-yellow-400/60"
            style={{ transform: "none" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              class="w-5 h-5 text-blue-400"
            >
              <path d="M4 5h16v2H4zM4 10h10v2H4zM4 15h7v2H4z" />
            </svg>
          </div>

          <p className="title3 anton-regular text-lime-50 ">
            Title: {props.title}
          </p>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className="h-[2px] w-[300px] bg-gradient-to-r from-transparent via-blue-600 to-transparent mt-2"
        ></div>
      </div>
      <div data-aos="zoom-in-up" data-aos-delay="300" className="w-fit">
        <div className="flex gap-3 items-center mt-3">
          <div
            className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl !border !border-yellow-400/60"
            style={{ transform: "none" }}
          >
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-5 h-5 text-blue-400"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>

          <p className="title3 anton-regular text-lime-50 ">Tech Stack:</p>
          {props.stack.map((tech, index) => (
            <img
              key={index}
              src={tech}
              alt=""
              className="relative h-6  !hover:scale-100 !transition-all !duration-300"
            />
          ))}
        </div>

        <div
          data-aos="zoom-in-up"
          data-aos-delay="300"
          className="h-[3px] w-100 bg-gradient-to-r from-transparent via-blue-600 to-transparent mt-2"
        ></div>
      </div>

      <div className="sm:mt-5 mt-2">
        <div
          data-aos="zoom-in-up"
          data-aos-delay="500"
          className="containercard noselect"
        >
          <div className="canvas">
            <div className="tracker tr-1"></div>
            <div className="tracker tr-2"></div>
            <div className="tracker tr-3"></div>
            <div className="tracker tr-4"></div>
            <div className="tracker tr-5"></div>
            <div className="tracker tr-6"></div>
            <div className="tracker tr-7"></div>
            <div className="tracker tr-8"></div>
            <div className="tracker tr-9"></div>
            <div id="card">
              <div className="card-content">
                <div className="card-glare"></div>
                <div className="cyber-lines">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div>{/* <p id="prompt">{props.title}</p> */}</div>
                <img
                  src={props.image}
                  alt=""
                  className="w-full sm:h-auto h-[45vh] object-cover "
                />
                {/* <div className="title">
                CYBER
                <br />
                CARD
              </div> */}
                <div className="glowing-elements">
                  <div className="glow-1"></div>
                  <div className="glow-2"></div>
                  <div className="glow-3"></div>
                </div>
                {/* <div className="subtitle">
                <span>INTERACTIVE</span>
                <span className="highlight">3D EFFECT</span>
              </div> */}
                <div className="card-particles">
                  <span></span>
                  <span></span>
                  <span></span> <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="corner-elements">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="scan-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="d-flex  " data-aos="fade-up-left" data-aos-delay="100">
        <a href={props.link} target="blank">
          <button type="button" className="button me-8">
            <span className="fold"></span>

            <div className="points_wrapper">
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
            </div>

            <span className="inner">
              <svg
                className="icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
              >
                <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"></polyline>
              </svg>
              <a className=" text-lime-50 text-decoration-none" target="blank">
                {" "}
                Live Demo
              </a>
            </span>
          </button>
        </a>

        <button class="button3">
          <span className=" flex  gap-[10px]">
            {" "}
            <svg
              style={{ display: "inline" }}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                fill="white"
              ></path>
            </svg>{" "}
            <span> View Code</span>{" "}
          </span>
        </button>
      </div>
      <div className=" " data-aos="zoom-in-up" data-aos-delay="000">
        <div
          data-aos="zoom-in-up"
          data-aos-delay="100"
          className="h-[2px]   flex mx-auto  bg-gradient-to-r from-transparent via-blue-600 to-transparent mt-4 "
        ></div>{" "}
        <div
          data-aos="zoom-in-up"
          data-aos-delay="200"
          className="h-[2px]  w-3/4 flex mx-auto  bg-gradient-to-r from-transparent via-blue-600 to-transparent sm:mt-2 mt-1"
        ></div>{" "}
        <div
          data-aos="zoom-in-up"
          data-aos-delay="300"
          className="h-[2px]  w-2/3 flex mx-auto  bg-gradient-to-r from-transparent via-blue-600 to-transparent sm:mt-2 mt-1"
        ></div>
        <div
          data-aos="zoom-in-up"
          data-aos-delay="400"
          className="h-[2px]  w-1/2 flex mx-auto  bg-gradient-to-r from-transparent via-blue-600 to-transparent sm:mt-2 mt-1"
        ></div>
        <div
          data-aos="zoom-in-up"
          data-aos-delay="500"
          className="h-[2px]  w-1/3 flex mx-auto  bg-gradient-to-r from-transparent via-blue-600 to-transparent sm:mt-2 mt-1"
        ></div>
        <div
          data-aos="zoom-in-up"
          data-aos-delay="600"
          className="h-[2px]  w-1/5 flex mx-auto  bg-gradient-to-r from-transparent via-blue-600 to-transparent sm:mt-2 mt-1"
        ></div>
        <div
          data-aos="zoom-in-up"
          data-aos-delay="700"
          className="h-[2px]  w-1/12 flex mx-auto  bg-gradient-to-r from-transparent via-blue-600 to-transparent sm:mt-2 mt-1"
        ></div>
      </div>
    </div>
  );
};
