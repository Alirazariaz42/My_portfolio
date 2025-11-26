import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../src/components/ui/tracing-beam.tsx";
import { Stack } from "./components/stack/stack.jsx";
import SplitText from "./components/textanimation/splittext.jsx";

export function TracingBeamDemo() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <TracingBeam className="sm:px-6 ">
      <div className="max-w-3xl mx-auto antialiased md:pt-4 relative pl-3">
        <div className="sm:pl-0 pl-5 ">
          {" "}
          <div className="  w-full   mt-7  relative">
            {/* heading  */}
            <div>
              <div data-aos="fade-right" className=" flex gap-4 items-center">
                <div
                  className="lg:p-3 md:p-2 p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl !border !border-yellow-400/60 small"
                  style={{ transform: "none" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-blue-400"
                  >
                    <path d="M12 2a5 5 0 100 10 5 5 0 000-10zM3 20a9 9 0 0118 0H3z" />
                    <path d="M12 13h1v7h-1zM12 11a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </div>
                <p className=" title1 anton-regular     text-lime-50 text-center    uppercase ">
                  {" "}
                  About Me.
                </p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="300"
                className="h-[2px]  flex mx-auto  bg-gradient-to-r from-transparent via-blue-600 to-transparent mt-2"
              ></div>
            </div>

            <div>
              <p className="text-sm sm:text-md lg:text-lg italic mb-8 mt-4 text-lime-50">
                <span
                  className=" inline-block "
                  data-aos="fade-up-left"
                  data-aos-delay="100"
                  data-aos-duration="900"
                >
                  I am a Front-End and MERN Stack Developer with more than 4
                  years of hands-on experience building modern, responsive, and
                  user-focused web applications. My journey has taken me through
                  diverse roles—from freelancing on Fiverr to working with
                  multiple software companies—where I honed my ability to
                  transform ideas into clean, intuitive, and high-performing
                  digital products.
                </span>
                <span
                  className="mt-5 inline-block "
                  data-aos="fade-up-left"
                  data-aos-delay="200"
                  data-aos-duration="1100"
                >
                  I specialize in React.js, Tailwind CSS, Material UI, Node.js,
                  Express.js, and MongoDB, with a strong focus on writing clean
                  code, creating elegant UI components, and developing scalable
                  backend solutions. Whether it’s crafting pixel-perfect
                  interfaces, optimizing performance, or building secure REST
                  APIs, I always strive to deliver work that is both visually
                  appealing and technically sound.
                </span>

                <span
                  className="mt-5 inline-block "
                  data-aos="fade-up-left"
                  data-aos-delay="300"
                  data-aos-duration="1300"
                >
                  Over the years, I’ve worked in professional environments like
                  MF Bzone, IMSI Technologies, and AppCrates, collaborating with
                  designers and backend teams to build seamless and accessible
                  applications. Alongside my professional roles, I’ve
                  continuously served global clients as a freelance front-end
                  developer, delivering quality work with clear communication
                  and a client-first approach.
                </span>

                <span
                  className="mt-5 inline-block "
                  data-aos="fade-up-left"
                  data-aos-delay="400"
                  data-aos-duration="1500"
                >
                  What drives me is the excitement of solving real-world
                  problems with technology, creating meaningful user
                  experiences, and constantly learning new tools and frameworks
                  to stay ahead in the ever-evolving tech world. I enjoy turning
                  complex challenges into elegant, easy-to-use solutions—and I'm
                  always eager to take on projects that push me to grow further.
                </span>

                <span
                  className="mt-5 inline-block "
                  data-aos="fade-up-left"
                  data-aos-delay="500"
                  data-aos-duration="1400"
                >
                  If you’re looking for someone who blends creativity with
                  technical expertise, I’d love to connect and bring your ideas
                  to life.
                </span>
              </p>
              {/* <div>
              <BlurText
                text=""
                delay={50}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                
              />
            </div> */}
            </div>
          </div>
          <div>
            <div
              data-aos="fade-right"
              className=" flex gap-4 items-center sm:mt-10"
            >
              <div
                className="lg:p-3 md:p-2 p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl !border !border-yellow-400/60 small"
                style={{ transform: "none" }}
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-6 h-6 text-blue-400"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <p className=" title1 anton-regular     text-lime-50 text-center    uppercase ">
                {" "}
                My stack.
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              className="h-[2px]  flex mx-auto  bg-gradient-to-r from-transparent via-blue-600 to-transparent mt-2"
            ></div>
          </div>
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2
                data-aos="fade-right"
                data-aos-delay="300"
                className="bg-black text-white rounded-full md:text-xl sm:text-lg text-base uppercase fw-bold
               w-fit px-4 py-1 mb-4 mt-4"
              >
                {item.badge}
              </h2>

              <p className={twMerge("text-xl mb-4")}>{item.title}</p>

              <div className="text-sm  prose prose-sm dark:prose-invert">
                <div className=" flex justify-end flex-wrap gap-4 md:ml-6">
                  {item.description.map((item) => (
                    <Stack logo={item.logo} title={item.title} />
                  ))}
                </div>
                {}
              </div>
            </div>
          ))}
          <div>
            <div
              data-aos="fade-right"
              className=" flex gap-4 items-center sm:mt-10"
            >
              <div
                className="lg:p-3 md:p-2 p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl !border !border-yellow-400/60 small"
                style={{ transform: "none" }}
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-6 h-6 text-blue-400"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <p className=" title1 anton-regular     text-lime-50 text-center    uppercase ">
                {" "}
                Professional Journey.
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              className="h-[2px]  flex mx-auto  bg-gradient-to-r from-transparent via-blue-600 to-transparent mt-2"
            ></div>

            <div className="mt-8">
              <div className="  lg:p-6 md:p-4 sm:p-3  sm:bg-gray-900/30 rounded-2xl">
                {" "}
                <div className="space-y-6" style={{ transform: "none" }}>
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2">
                    <div>
                      <h3
                        data-aos="fade-right"
                        data-aos-delay="300"
                        className="md:text-2xl text-xl font-bold text-white"
                      >
                        MF Bzone
                      </h3>
                      <p
                        data-aos="fade-right"
                        data-aos-delay="400"
                        className="text-blue-400 font-medium md:text-lg mb-0 text-base "
                      >
                        MERN Stack Developer
                      </p>
                    </div>
                    <span
                      data-aos="fade-left"
                      className="text-gray-400 md:text-sm text-xs"
                    >
                      August 2023 - September 2024
                    </span>
                  </div>
                  <p
                    data-aos="fade-right"
                    data-aos-delay="500"
                    className="text-sm sm:text-md lg:text-lg text-gray-200 mb-2 mt-4"
                  >
                    I worked as a Front-End and MERN Stack Developer, building
                    responsive, modern, and user-friendly web applications using
                    React.js, Tailwind CSS, Node.js, Express.js, and MongoDB. My
                    role involved transforming ideas into clean UI designs,
                    developing scalable backend APIs, and ensuring smooth
                    client–server communication. I focused heavily on
                    performance, code quality, and delivering reliable solutions
                    that improved user experience.
                  </p>
                  <ul
                    data-aos="fade-right"
                    data-aos-delay="600"
                    className="space-y-2 mb-8 pl-3"
                  >
                    <li
                      className="flex items-start gap-3 text-gray-300 text-sm sm:text-md lg:text-lg"
                      style={{ transform: "none", opacity: 1 }}
                    >
                      <div
                        className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"
                        style={{ transform: "none" }}
                      ></div>
                      <span>
                        Developed interactive and responsive user interfaces
                        using React.js, Tailwind CSS, and Bootstrap
                      </span>
                    </li>
                    <li
                      className="flex items-start gap-3 text-gray-300 text-sm sm:text-md lg:text-lg"
                      style={{ transform: "none", opacity: 1 }}
                    >
                      <div
                        className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"
                        style={{ transform: "none" }}
                      ></div>
                      <span>
                        Built RESTful APIs and backend features with Node.js,
                        Express.js, and MongoDB
                      </span>
                    </li>
                    <li
                      className="flex items-start gap-3 text-gray-300 text-sm sm:text-md lg:text-lg"
                      style={{ transform: "none", opacity: 1 }}
                    >
                      <div
                        className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"
                        style={{ transform: "none" }}
                      ></div>
                      <span>
                        Integrated third-party services such as Multer,
                        Cloudinary, and form-handling tools
                      </span>
                    </li>
                    <li
                      className="flex items-start gap-3 text-gray-300 text-sm sm:text-md lg:text-lg"
                      style={{ transform: "none", opacity: 1 }}
                    >
                      <div
                        className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"
                        style={{ transform: "none" }}
                      ></div>
                      <span>
                        Collaborated with teams to translate requirements into
                        functional features
                      </span>
                    </li>
                    <li
                      className="flex items-start gap-3 text-gray-300 text-sm sm:text-md lg:text-lg"
                      style={{ transform: "none", opacity: 1 }}
                    >
                      <div
                        className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"
                        style={{ transform: "none" }}
                      ></div>
                      <span>
                        Mentored contributors and facilitated knowledge sharing
                        within the community
                      </span>
                    </li>
                    <li
                      className="flex items-start gap-3 text-gray-300 text-sm sm:text-md lg:text-lg"
                      style={{ transform: "none", opacity: 1 }}
                    >
                      <div
                        className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"
                        style={{ transform: "none" }}
                      ></div>
                      <span>
                        Coordinated pull request reviews and maintained high
                        code quality standards
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="300"
                className="h-[2px] w-1/2 flex mx-auto  bg-gradient-to-r from-transparent via-blue-600 to-transparent mt-2"
              ></div>{" "}
              <div>
                <div className=" lg:p-6 md:p-4 p-3 sm:bg-gray-900/30 rounded-2xl">
                  {" "}
                  <div
                    className="space-y-6"
                    style={{ transform: "none", opacity: 1 }}
                  >
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2">
                      <div>
                        <h3
                          data-aos="fade-right"
                          data-aos-delay="300"
                          className="md:text-2xl text-xl font-bold text-white"
                        >
                          IMSI Technologies
                        </h3>
                        <p
                          data-aos="fade-right"
                          data-aos-delay="400"
                          className="text-blue-400 font-medium md:text-lg mb-0 text-base "
                        >
                          React.js Developer
                        </p>
                      </div>
                      <span
                        data-aos="fade-left"
                        className="text-gray-400 md:text-sm text-xs"
                      >
                        December 2021 - November 2022
                      </span>
                    </div>
                    <p
                      data-aos="fade-right"
                      data-aos-delay="500"
                      className="text-sm sm:text-md lg:text-lg text-gray-200 mb-2 mt-4"
                    >
                      I worked as a React.js and Material UI developer focused
                      on building fast, intuitive, and user-friendly desktop
                      applications. My role involved converting UI/UX wireframes
                      into fully functional interfaces, implementing reusable
                      components, and optimizing state management for smooth
                      performance. I collaborated with backend teams, integrated
                      APIs, and ensured the applications remained responsive,
                      accessible, and visually consistent across all screens.
                    </p>
                    <ul
                      data-aos="fade-right"
                      data-aos-delay="600"
                      className="space-y-2 mb-8 pl-3"
                    >
                      <li
                        className="flex items-start gap-3 text-gray-300 text-sm sm:text-md lg:text-lg"
                        style={{ transform: "none", opacity: 1 }}
                      >
                        <div
                          className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"
                          style={{ transform: "none" }}
                        ></div>
                        <span>
                          Developed scalable UI components using React.js and
                          Material UI for desktop-oriented applications.
                        </span>
                      </li>
                      <li
                        className="flex items-start gap-3 text-gray-300 text-sm sm:text-md lg:text-lg"
                        style={{ transform: "none", opacity: 1 }}
                      >
                        <div
                          className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"
                          style={{ transform: "none" }}
                        ></div>
                        <span>
                          Implemented custom themes, typography, and color
                          systems based on Material UI design standards.
                        </span>
                      </li>
                      <li
                        className="flex items-start gap-3 text-gray-300 text-sm sm:text-md lg:text-lg"
                        style={{ transform: "none", opacity: 1 }}
                      >
                        <div
                          className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"
                          style={{ transform: "none" }}
                        ></div>
                        <span>
                          Collaborated with backend teams to ensure smooth
                          integration of frontend and backend modules.
                        </span>
                      </li>
                      <li
                        className="flex items-start gap-3 text-gray-300 text-sm sm:text-md lg:text-lg"
                        style={{ transform: "none", opacity: 1 }}
                      >
                        <div
                          className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"
                          style={{ transform: "none" }}
                        ></div>
                        <span>
                          Worked with Git/GitHub for version control and
                          followed best development practices.
                        </span>
                      </li>
                      <li
                        className="flex items-start gap-3 text-gray-300 text-sm sm:text-md lg:text-lg"
                        style={{ transform: "none", opacity: 1 }}
                      >
                        <div
                          className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"
                          style={{ transform: "none" }}
                        ></div>
                        <span>
                          Learned industry-standard practices and modern
                          development workflows
                        </span>
                      </li>
                      <li
                        className="flex items-start gap-3 text-gray-300 text-sm sm:text-md lg:text-lg"
                        style={{ transform: "none", opacity: 1 }}
                      >
                        <div
                          className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"
                          style={{ transform: "none" }}
                        ></div>
                        <span>
                          Debugged production-level issues and enhanced overall
                          UI/UX for better user satisfaction.{" "}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-delay="300"
                  className="h-[2px] w-1/2 flex mx-auto  bg-gradient-to-r from-transparent via-blue-600 to-transparent mt-2"
                ></div>{" "}
                <div className=" lg:p-6 md:p-4 p-3 sm:bg-gray-900/30 rounded-2xl">
                  {" "}
                  <div>
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2">
                      <div>
                        <h3
                          data-aos="fade-right"
                          data-aos-delay="300"
                          className="md:text-2xl text-xl font-bold text-white"
                        >
                          AppCrates
                        </h3>
                        <p
                          data-aos="fade-right"
                          data-aos-delay="400"
                          className="text-blue-400 font-medium md:text-lg mb-0 text-base"
                        >
                          Front-End Developer
                        </p>
                      </div>
                      <span
                        data-aos="fade-left"
                        className="text-gray-400 md:text-sm text-xs"
                      >
                        April 2021 - October 2021
                      </span>
                    </div>
                    <p
                      data-aos="fade-right"
                      data-aos-delay="500"
                      className="text-sm sm:text-md lg:text-lg text-gray-200 mb-2 mt-4"
                    >
                      As a Front-End Developer, I built modern, responsive, and
                      user-focused web interfaces using React.js, Material UI,
                      Tailwind CSS, and JavaScript. I collaborated closely with
                      designers and backend teams to translate ideas into clean,
                      efficient, and high-performing UI components. My role
                      focused on creating pixel-perfect layouts, improving user
                      experience, and ensuring seamless performance across
                      devices.
                    </p>
                    <ul
                      data-aos="fade-right"
                      data-aos-delay="600"
                      className="space-y-2 mb-8 pl-3"
                    >
                      <li
                        className="flex items-start gap-3 text-gray-300 text-sm sm:text-md lg:text-lg"
                        style={{ transform: "none", opacity: 1 }}
                      >
                        <div
                          className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"
                          style={{ transform: "none" }}
                        ></div>
                        <span>
                          Developed visually appealing and responsive web pages
                          using React.js, Bootstarp, and Tailwind CSS.
                        </span>
                      </li>
                      <li
                        className="flex items-start gap-3 text-gray-300 text-sm sm:text-md lg:text-lg"
                        style={{ transform: "none", opacity: 1 }}
                      >
                        <div
                          className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"
                          style={{ transform: "none" }}
                        ></div>
                        <span>
                          Converted UI/UX designs into fully functional
                          interfaces with a focus on clean code and
                          user-friendly layouts.
                        </span>
                      </li>
                      <li
                        className="flex items-start gap-3 text-gray-300 text-sm sm:text-md lg:text-lg"
                        style={{ transform: "none", opacity: 1 }}
                      >
                        <div
                          className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"
                          style={{ transform: "none" }}
                        ></div>
                        <span>
                          Improved mobile responsiveness and cross-browser
                          compatibility across different screen sizes.
                        </span>
                      </li>
                      <li
                        className="flex items-start gap-3 text-gray-300 text-sm sm:text-md lg:text-lg"
                        style={{ transform: "none", opacity: 1 }}
                      >
                        <div
                          className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"
                          style={{ transform: "none" }}
                        ></div>
                        <span>
                          Collaborated with teams to debug issues, enhance
                          features, and maintain clean and scalable code
                          architecture.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-delay="300"
                  className="h-[2px] w-1/2 flex mx-auto  bg-gradient-to-r from-transparent via-blue-600 to-transparent mt-2"
                ></div>{" "}
                <div className=" lg:p-6 md:p-4 p-3 sm:bg-gray-900/30 rounded-2xl">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2">
                    <div>
                      <h3
                        data-aos="fade-right"
                        data-aos-delay="300"
                        className="md:text-2xl text-xl font-bold text-white"
                      >
                        Self-Employed
                      </h3>
                      <p
                        data-aos="fade-right"
                        data-aos-delay="400"
                        className="text-blue-400 font-medium md:text-lg mb-0 text-base "
                      >
                        Front-End Web Developer — Fiverr
                      </p>
                    </div>
                    <span
                      data-aos="fade-left"
                      className="text-gray-400 md:text-sm text-xs"
                    >
                      January 2020 - current
                    </span>
                  </div>
                  <p
                    data-aos="fade-right"
                    data-aos-delay="500"
                    className="text-sm sm:text-md lg:text-lg text-gray-200 mb-2 mt-4"
                  >
                    I worked as a freelance Front-End Web Developer on Fiverr,
                    delivering modern, responsive, and high-quality websites for
                    clients worldwide. I specialized in building user-friendly
                    interfaces using React.js, Tailwind CSS, and Material UI,
                    ensuring clean code, pixel-perfect layouts, and fully
                    responsive designs. My focus was always on understanding
                    client needs, providing professional communication, and
                    delivering projects on time with strong attention to detail.
                  </p>
                  <ul
                    data-aos="fade-right"
                    data-aos-delay="600"
                    className="space-y-2 mb-8 pl-3"
                  >
                    <li
                      className="flex items-start gap-3 text-gray-300 text-sm sm:text-md lg:text-lg"
                      style={{ transform: "none", opacity: 1 }}
                    >
                      <div
                        className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"
                        style={{ transform: "none" }}
                      ></div>
                      <span>
                        Developed responsive and mobile-friendly web pages using
                        React.js, HTML, CSS, JavaScript, Tailwind CSS, and
                        Bootstrap.
                      </span>
                    </li>
                    <li
                      className="flex items-start gap-3 text-gray-300 text-sm sm:text-md lg:text-lg"
                      style={{ transform: "none", opacity: 1 }}
                    >
                      <div
                        className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"
                        style={{ transform: "none" }}
                      ></div>
                      <span>
                        Translated client requirements into clean UI/UX designs
                        with smooth user experiences.
                      </span>
                    </li>
                    <li
                      className="flex items-start gap-3 text-gray-300 text-sm sm:text-md lg:text-lg"
                      style={{ transform: "none", opacity: 1 }}
                    >
                      <div
                        className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"
                        style={{ transform: "none" }}
                      ></div>
                      <span>
                        Communicated with clients professionally and provided
                        regular progress updates.{" "}
                      </span>
                    </li>
                    <li
                      className="flex items-start gap-3 text-gray-300 text-sm sm:text-md lg:text-lg"
                      style={{ transform: "none", opacity: 1 }}
                    >
                      <div
                        className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"
                        style={{ transform: "none" }}
                      ></div>
                      <span>
                        Delivered projects on time with strong problem-solving
                        and debugging skills.
                      </span>
                    </li>
                  </ul>
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-delay="300"
                  className="h-[2px] w-1/2 flex mx-auto  bg-gradient-to-r from-transparent via-blue-600 to-transparent mt-2"
                ></div>{" "}
              </div>
            </div>
          </div>
          {/* heading  */}
          <div>
            <div
              data-aos="fade-right"
              className=" flex gap-4 items-center  sm:mt-10 mt-4"
            >
              <div
                className="lg:p-3 md:p-2 p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl !border !border-yellow-400/60 small"
                style={{ transform: "none" }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  className="w-6 h-6 text-blue-400"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"></path>
                </svg>
              </div>
              <p className=" title1 anton-regular     text-lime-50 text-center   uppercase ">
                {" "}
                Let's Build Something Amazing
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              className="h-[2px]  flex mx-auto  bg-gradient-to-r from-transparent via-blue-600 to-transparent mt-2"
            ></div>
          </div>
          <div className="text-center lg:p-10 md:p-5 sm:p-3  md:mt-10 mt-5 bg-gray-900/30 rounded-2xl">
            <div className=" flex justify-center items-center flex-col">
              <p
                data-aos="fade-up-left"
                className=" mb-3 p-2 md:p-4 text-sm sm:text-lg lg:text-xl"
              >
                {" "}
                <SplitText
                  text="Ready to bring your ideas to life? I'm always excited to collaborate on innovative projects and help transform your vision into reality.  ✌️"
                  className=" md:text-xl sm:text-lg text-sm  text-gray-300  font-semibold text-center"
                  delay={10}
                  animationFrom={{
                    opacity: 0,
                    transform: "translate3d(0,50px,0)",
                  }}
                  animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                  easing="easeOutCubic"
                  threshold={0.2}
                  rootMargin="-50px"
                  // onLetterAnimationComplete={handleAnimationComplete}
                />
              </p>

              <div
                data-aos="fade-up-left"
                data-aos-duration="1000"
                className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto w-full"
              >
                <div
                  className="w-full"
                  tabindex="0"
                  style={{ transform: "none" }}
                >
                  <a
                    href="mailto:alirazabt15342@gmail.com?subject=Project%20Inquiry&body=Hello,%20I%20would%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="    w-full flex items-center justify-center gap-2 
    !border !border-blue-700/50 text-blue-400 
    py-2 px-4 
    rounded-[10px] 
    transition-transform duration-300 ease-in-out 
    transform hover:scale-105
    hover:bg-blue-900/20 no-underline 
    text-base whitespace-normal text-center"
                  >
                    <svg
                      width="33px"
                      height="33px"
                      viewBox="0 0 48 48"
                      id="Layer_2"
                      data-name="Layer 2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#00AAFF"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <defs></defs>
                        <path
                          class="cls-1"
                          d="M6.47,10.71a2,2,0,0,0-2,2h0V35.32a2,2,0,0,0,2,2H41.53a2,2,0,0,0,2-2h0V12.68a2,2,0,0,0-2-2H6.47Zm33.21,3.82L24,26.07,8.32,14.53"
                        ></path>
                      </g>
                    </svg>
                    <span>alirazabt15342@gmail.com</span>
                  </a>
                </div>
                <div
                  className="w-full"
                  tabindex="0"
                  style={{ transform: "none" }}
                >
                  <a
                    href="https://wa.me/923152490017?text=Hello%20I%20would%20like%20to%20know%20more"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 
    !border !border-blue-700/50 text-blue-400 
    py-2 px-4 no-underline 
    rounded-[10px] 
    transition-transform duration-300 ease-in-out 
    transform hover:scale-105
    hover:bg-blue-900/20
    text-base whitespace-normal text-center"
                  >
                    <svg
                      width="33px"
                      height="33px"
                      viewBox="0 0 48 48"
                      id="Layer_2"
                      data-name="Layer 2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#00AAFF"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <defs></defs>
                        <path
                          class="cls-1"
                          d="M24,2.5A21.52,21.52,0,0,0,5.15,34.36L2.5,45.5l11.14-2.65A21.5,21.5,0,1,0,24,2.5ZM13.25,12.27h5.86a1,1,0,0,1,1,1,10.4,10.4,0,0,0,.66,3.91,1.93,1.93,0,0,1-.66,2.44l-2.05,2a18.6,18.6,0,0,0,3.52,4.79A18.6,18.6,0,0,0,26.35,30l2-2.05c1-1,1.46-1,2.44-.66a10.4,10.4,0,0,0,3.91.66,1.05,1.05,0,0,1,1,1v5.86a1.05,1.05,0,0,1-1,1,23.68,23.68,0,0,1-15.64-6.84,23.6,23.6,0,0,1-6.84-15.64A1.07,1.07,0,0,1,13.25,12.27Z"
                        ></path>
                      </g>
                    </svg>
                    <span>+923152490017</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:mt-16 mt-12  md:mb-16 sm:mb-10 mb-6">
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
      </div>
    </TracingBeam>
  );
}
const dummyContent = [
  {
    badge: "Frontend : ",

    description: [
      {
        logo: require("./images/html-5-svgrepo-com.svg").default,
        title: "HTML",
      },
      {
        logo: require("./images/css-3-svgrepo-com (1).svg").default,
        title: "CSS",
      },
      { logo: require("./images/jslogo.svg").default, title: "JavaScript" },
      {
        logo: require("./images/react-svgrepo-com.svg").default,
        title: "React ",
      },
      {
        logo: require("./images/redux-logo-svgrepo-com.svg").default,
        title: "Redux",
      },

      {
        logo: require("./images/bootstrap-svgrepo-com.svg").default,
        title: "Bootstrap",
      },
      {
        logo: require("./images/tailwind-svgrepo-com.svg").default,
        title: "Tailwind CSS",
      },
      {
        logo: require("./images/material-ui-svgrepo-com.svg").default,
        title: "Material UI",
      },
      { logo: require("./images/shadcn-ui-logo.png"), title: "Shadcn UI" },
      { logo: require("./images/reactbits.png"), title: "React Bits" },
      { logo: require("./images/Aceternity UI.png"), title: "Aceternity UI" },
      { logo: require("./images/ChaktaUI.png"), title: "Chakra UI " },
      { logo: require("./images/Gsap.png"), title: "GSAP " },
      { logo: require("./images/heroUI.png"), title: "Hero UI " },
    ],
  },
  {
    badge: "Backend : ",

    description: [
      {
        logo: require("./images/nodejs-1-logo-svgrepo-com.svg").default,
        title: "Node js",
      },
      {
        logo: require("./images/express-svgrepo-com.svg").default,
        title: "Express js",
      },
      {
        logo: require("./images/nodejs-icon-logo-svgrepo-com.svg").default,
        title: "REST API",
      },
      {
        logo: require("./images/icons8-jwt-80.svg").default,
        title: "JWT Auth",
      },
      {
        logo: require("./images/cloud-uploading-arrow-svgrepo-com.svg").default,
        title: "Multer",
      },
      // { logo: require("./images/JavaScript.png"), title: "JavaScript" },
      // { logo: require("./images/React.png"), title: "React " },
    ],
  },
  {
    badge: "Database : ",

    description: [
      {
        logo: require("./images/mongo-svgrepo-com.svg").default,
        title: "MongoDB",
      },
      {
        logo: require("./images/icons8-mysql.svg").default,
        title: "MySQL",
      },
      // { logo: require("./images/postgresql.png"), title: "PostgreSQL" },
    ],
  },
  {
    badge: "Tools : ",

    description: [
      { logo: require("./images/git-svgrepo-com.svg").default, title: "Git" },
      {
        logo: require("./images/github-142-svgrepo-com.svg").default,
        title: "GitHub",
      },
      {
        logo: require("./images/postman-icon-svgrepo-com.svg").default,
        title: "Postman",
      },
      {
        logo: require("./images/vscode2-svgrepo-com.svg").default,
        title: "VS Code",
      },
      {
        logo: require("./images/icons8-netlify-96.png"),
        title: "Netlify",
      },
      {
        logo: require("./images/aws-svgrepo-com.svg").default,
        title: "AWS",
      },
    ],
  },
];
