import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../src/components/ui/tracing-beam.tsx";
import { Stack } from "./components/stack/stack.jsx";
import BlurText from "./components/textanimation/buildKeyframes.jsx";
import SplitText from "./components/textanimation/splittext.jsx";

export function TracingBeamDemo() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <TracingBeam className="px-6">
      <div className="max-w-3xl mx-auto antialiased pt-4 relative">
        <div className="  w-full   mt-7  relative">
          {/* heading  */}
          <div>
            <div data-aos="fade-right" className=" flex gap-4 items-center">
              <div
                className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl !border !border-yellow-400/60"
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
              <p className=" title1 anton-regular     text-lime-50 text-center  mb-7  uppercase ">
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
          <br />
          <BlurText
            text="I have been coding for over 5 years, beginning my journey in 2020. Initially, I learned HTML, CSS, and JavaScript to build websites.
                My first project was a simple website built with HTML, CSS, and JavaScript (~mid-2020).
                As I progressed, I focused heavily on React.js and Next.js. Now, I specialize in building full stack applications with modern web technologies.  I specialize in MongoDB, Express.js, React.js, and Node.js, and have a strong command of front-end technologies like HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, material UI, reactBits, chakra UI, shadcn UI, and Framer Motion. I love turning complex problems into clean, efficient code and crafting smooth user experiences. My journey began with a deep interest in how websites work, and over the years, I’ve transformed that curiosity into a career. I'm constantly learning and exploring new tools and technologies to stay current in this fast-evolving field."
            delay={50}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-base sm:text-lg lg:text-xl italic mb-8 text-lime-50"
          />
        </div>
        <div>
          <div data-aos="fade-right" className=" flex gap-4 items-center">
            <div
              className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30"
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
            <p className=" title1 anton-regular     text-lime-50 text-center  mb-7  uppercase ">
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
        <br />
        <br />
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2
              data-aos="fade-right"
              data-aos-delay="300"
              className="bg-black text-white rounded-full text-xl uppercase fw-bold w-fit px-4 py-1 mb-4"
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
        <br />
        <br />
        <br />
        <br /> <br />
        <div>
          <div data-aos="fade-right" className=" flex gap-4 items-center">
            <div
              className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30"
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
            <p className=" title1 anton-regular     text-lime-50 text-center  mb-7  uppercase ">
              {" "}
              Professional Journey.
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            className="h-[2px]  flex mx-auto  bg-gradient-to-r from-transparent via-blue-600 to-transparent mt-2"
          ></div>

          <div className="space-y-12 mt-8">
            <div className="  lg:p-6 md:p-3 sm:p-2 bg-gray-900/30 rounded-2xl">
              {" "}
              <div className="space-y-6" style={{ transform: "none" }}>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2">
                  <div>
                    <h3
                      data-aos="fade-right"
                      data-aos-delay="300"
                      className="text-2xl font-bold text-white"
                    >
                      MF Bzone
                    </h3>
                    <p
                      data-aos="fade-right"
                      data-aos-delay="400"
                      className="text-blue-400 font-medium text-lg"
                    >
                      MERN Stack Developer
                    </p>
                  </div>
                  <span data-aos="fade-left" className="text-gray-400">
                    August 2023 - September 2024
                  </span>
                </div>
                <p
                  data-aos="fade-right"
                  data-aos-delay="500"
                  className="text-lg text-gray-200 mb-2"
                >
                  I worked as a Front-End and MERN Stack Developer, building
                  responsive, modern, and user-friendly web applications using
                  React.js, Tailwind CSS, Node.js, Express.js, and MongoDB. My
                  role involved transforming ideas into clean UI designs,
                  developing scalable backend APIs, and ensuring smooth
                  client–server communication. I focused heavily on performance,
                  code quality, and delivering reliable solutions that improved
                  user experience.
                </p>
                <ul
                  data-aos="fade-right"
                  data-aos-delay="600"
                  className="space-y-2 mb-8 pl-3"
                >
                  <li
                    className="flex items-start gap-3 text-gray-300 text-lg"
                    style={{ transform: "none", opacity: 1 }}
                  >
                    <div
                      className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"
                      style={{ transform: "none" }}
                    ></div>
                    <span>
                      Developed interactive and responsive user interfaces using
                      React.js, Tailwind CSS, and Bootstrap
                    </span>
                  </li>
                  <li
                    className="flex items-start gap-3 text-gray-300 text-lg"
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
                    className="flex items-start gap-3 text-gray-300 text-lg"
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
                    className="flex items-start gap-3 text-gray-300 text-lg"
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
                    className="flex items-start gap-3 text-gray-300 text-lg"
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
                    className="flex items-start gap-3 text-gray-300 text-lg"
                    style={{ transform: "none", opacity: 1 }}
                  >
                    <div
                      className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"
                      style={{ transform: "none" }}
                    ></div>
                    <span>
                      Coordinated pull request reviews and maintained high code
                      quality standards
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <br /> <br />
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              className="h-[2px] w-1/2 flex mx-auto  bg-gradient-to-r from-transparent via-blue-600 to-transparent mt-2"
            ></div>{" "}
            <div>
              <div className=" lg:p-6 md:p-3 sm:p-2 bg-gray-900/30 rounded-2xl">
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
                        className="text-2xl font-bold text-white"
                      >
                        IMSI Technologies
                      </h3>
                      <p
                        data-aos="fade-right"
                        data-aos-delay="400"
                        className="text-blue-400 font-medium text-lg"
                      >
                        React.js Developer
                      </p>
                    </div>
                    <span data-aos="fade-left" className="text-gray-400">
                      December 2021 - November 2022
                    </span>
                  </div>
                  <p
                    data-aos="fade-right"
                    data-aos-delay="500"
                    className="text-lg text-gray-200 mb-2"
                  >
                    I worked as a React.js and Material UI developer focused on
                    building fast, intuitive, and user-friendly desktop
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
                      className="flex items-start gap-3 text-gray-300 text-lg"
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
                      className="flex items-start gap-3 text-gray-300 text-lg"
                      style={{ transform: "none", opacity: 1 }}
                    >
                      <div
                        className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"
                        style={{ transform: "none" }}
                      ></div>
                      <span>
                        Implemented custom themes, typography, and color systems
                        based on Material UI design standards.
                      </span>
                    </li>
                    <li
                      className="flex items-start gap-3 text-gray-300 text-lg"
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
                      className="flex items-start gap-3 text-gray-300 text-lg"
                      style={{ transform: "none", opacity: 1 }}
                    >
                      <div
                        className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"
                        style={{ transform: "none" }}
                      ></div>
                      <span>
                        Worked with Git/GitHub for version control and followed
                        best development practices.
                      </span>
                    </li>
                    <li
                      className="flex items-start gap-3 text-gray-300 text-lg"
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
                      className="flex items-start gap-3 text-gray-300 text-lg"
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
                  <br />
                </div>
              </div>
              <br />
              <br />
              <div
                data-aos="fade-left"
                data-aos-delay="300"
                className="h-[2px] w-1/2 flex mx-auto  bg-gradient-to-r from-transparent via-blue-600 to-transparent mt-2"
              ></div>{" "}
              <br />
              <br />
              <div className=" lg:p-6 md:p-3 sm:p-2 bg-gray-900/30 rounded-2xl">
                {" "}
                <div>
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2">
                    <div>
                      <h3
                        data-aos="fade-right"
                        data-aos-delay="300"
                        className="text-2xl font-bold text-white"
                      >
                        AppCrates
                      </h3>
                      <p
                        data-aos="fade-right"
                        data-aos-delay="400"
                        className="text-blue-400 font-medium text-lg"
                      >
                        Front-End Developer
                      </p>
                    </div>
                    <span data-aos="fade-left" className="text-gray-400">
                      April 2021 - October 2021
                    </span>
                  </div>
                  <p
                    data-aos="fade-right"
                    data-aos-delay="500"
                    className="text-lg text-gray-200 mb-2"
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
                      className="flex items-start gap-3 text-gray-300 text-lg"
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
                      className="flex items-start gap-3 text-gray-300 text-lg"
                      style={{ transform: "none", opacity: 1 }}
                    >
                      <div
                        className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"
                        style={{ transform: "none" }}
                      ></div>
                      <span>
                        Converted UI/UX designs into fully functional interfaces
                        with a focus on clean code and user-friendly layouts.
                      </span>
                    </li>
                    <li
                      className="flex items-start gap-3 text-gray-300 text-lg"
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
                      className="flex items-start gap-3 text-gray-300 text-lg"
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
                  <br />
                </div>
              </div>
              <br />
              <br />
              <div
                data-aos="fade-left"
                data-aos-delay="300"
                className="h-[2px] w-1/2 flex mx-auto  bg-gradient-to-r from-transparent via-blue-600 to-transparent mt-2"
              ></div>{" "}
              <br />
              <br />
              <div className=" lg:p-6 md:p-3 sm:p-2 bg-gray-900/30 rounded-2xl">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2">
                  <div>
                    <h3
                      data-aos="fade-right"
                      data-aos-delay="300"
                      className="text-2xl font-bold text-white"
                    >
                      Self-Employed
                    </h3>
                    <p
                      data-aos="fade-right"
                      data-aos-delay="400"
                      className="text-blue-400 font-medium text-lg"
                    >
                      Freelance Front-End Web Developer — Fiverr
                    </p>
                  </div>
                  <span data-aos="fade-left" className="text-gray-400">
                    January 2020 - current
                  </span>
                </div>
                <p
                  data-aos="fade-right"
                  data-aos-delay="500"
                  className="text-lg text-gray-200 mb-2"
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
                    className="flex items-start gap-3 text-gray-300 text-lg"
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
                    className="flex items-start gap-3 text-gray-300 text-lg"
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
                    className="flex items-start gap-3 text-gray-300 text-lg"
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
                    className="flex items-start gap-3 text-gray-300 text-lg"
                    style={{ transform: "none", opacity: 1 }}
                  >
                    <div
                      className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"
                      style={{ transform: "none" }}
                    ></div>
                    <span>
                      Delivered projects on time with strong problem-solving and
                      debugging skills.
                    </span>
                  </li>
                </ul>
                <br />
              </div>
              <br />
              <br />
              <div
                data-aos="fade-left"
                data-aos-delay="300"
                className="h-[2px] w-1/2 flex mx-auto  bg-gradient-to-r from-transparent via-blue-600 to-transparent mt-2"
              ></div>{" "}
              <br />
              <br />
            </div>
          </div>
        </div>
        {/* heading  */}
        <div>
          <div data-aos="fade-right" className=" flex gap-4 items-center">
            <div
              className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30"
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
            <p className=" title1 anton-regular     text-lime-50 text-center  mb-7  uppercase ">
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
        <br />
        <div className="text-center p-10  bg-gray-900/30 rounded-2xl">
          <div className=" flex justify-center items-center flex-col">
            <p className=" mb-3 p-2 md:p-4">
              {" "}
              <SplitText
                text="Ready to bring your ideas to life? I'm always excited to collaborate on innovative projects and help transform your vision into reality. ✌️"
                className=" text-xl  text-gray-300  font-semibold text-center"
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
              data-aos="fade-up"
              data-aos-duration="3000"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto w-full"
            >
              <div
                className="w-full"
                tabindex="0"
                style={{ transform: "none" }}
              >
                <a
                  href="mailto:alirazabt15342@gmail.com"
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
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="w-6 h-6 text-blue-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
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
                  href="https://topmate.io/aditya_domle/1811763"
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
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M12 4.5l7.5 7.5-7.5 7.5m7.5-7.5H4.5"
                    ></path>
                  </svg>
                  <span>Source code on Topmate</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <p className=" mb-3">
            {" "}
            <SplitText
              text="MF-Bzone"
              className="sm:text-2xl text-xl text-gray-300  font-semibold text-center"
              delay={50}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              // onLetterAnimationComplete={handleAnimationComplete}
            />
          </p>
          <p className=" mb-2">
            <SplitText
              text="MERN Stack Developer"
              className="sm:text-5xl text-3xl fw-bold underline text-lime-50  font-semibold text-center"
              delay={50}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              // onLetterAnimationComplete={handleAnimationComplete}
            />
          </p>{" "}
          <p className=" mb-2">
            {" "}
            <SplitText
              text="August 2023 - August 2024"
              className="sm:text-2xl text-xl text-gray-400  font-semibold text-center"
              delay={50}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              // onLetterAnimationComplete={handleAnimationComplete}
            />
          </p> */}
        {/* </div> */}
        {/* <br />
        <br /> <br />
        <br /> */}
        {/* <div>
          <p className=" mb-3">
            {" "}
            <SplitText
              text="IMSI Designs"
              className="sm:text-2xl text-xl text-gray-300  font-semibold text-center"
              delay={50}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              // onLetterAnimationComplete={handleAnimationComplete}
            />
          </p>
          <p className=" mb-2">
            <SplitText
              text="React-JS Developer"
              className="sm:text-5xl text-3xl fw-bold underline text-lime-50  font-semibold text-center"
              delay={50}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              // onLetterAnimationComplete={handleAnimationComplete}
            />
          </p>{" "}
          <p className=" mb-2">
            {" "}
            <SplitText
              text="December 2021 - November 2022"
              className="sm:text-2xl text-xl text-gray-400  font-semibold text-center"
              delay={50}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              // onLetterAnimationComplete={handleAnimationComplete}
            />
          </p>
        </div> */}
        {/* <br />
        <br /> <br />
        <br /> */}
        {/* <div>
          <p className=" mb-3">
            {" "}
            <SplitText
              text="Green Systems"
              className="sm:text-2xl text-xl text-gray-300  font-semibold text-center"
              delay={50}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              // onLetterAnimationComplete={handleAnimationComplete}
            />
          </p>
          <p className=" mb-2">
            <SplitText
              text="Front-End Developer"
              className="sm:text-5xl text-3xl fw-bold underline text-lime-50  font-semibold text-center"
              delay={50}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              // onLetterAnimationComplete={handleAnimationComplete}
            />
          </p>{" "}
          <p className=" mb-2">
            {" "}
            <SplitText
              text="February 2020 - May 2020"
              className="sm:text-2xl text-xl text-gray-400  font-semibold text-center"
              delay={50}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              // onLetterAnimationComplete={handleAnimationComplete}
            />
          </p>
        </div> */}
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
