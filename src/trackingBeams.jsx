import React from "react";
// import { calsans } from "@/fonts/calsans";

import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../src/components/ui/tracing-beam.tsx";
import { Stack } from "./components/stack/stack.jsx";
import SplitText from "./components/textanimation/splittext.jsx";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        <p className=" title1 anton-regular text-4xl text-lime-50 text-center  mb-7  mt-10 uppercase ">
          {" "}
          My stack.
        </p>{" "}
        <br />
        <br />
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-3xl uppercase fw-bold w-fit px-4 py-1 mb-4">
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
        <p className=" title1 anton-regular text-4xl text-lime-50 text-center  mb-7  mt-10 uppercase ">
          {" "}
          My Experience.
        </p>{" "}
        <br /> <br /> <br />
        <div>
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
          </p>
        </div>
        <br />
        <br /> <br />
        <br />
        <div>
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
        </div>
        <br />
        <br /> <br />
        <br />
        <div>
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
        </div>
        <br /> <br />
      </div>
    </TracingBeam>
  );
}
const dummyContent = [
  {
    badge: "Frontend : ",

    description: [
      { logo: require("./images/HTML5.png"), title: "HTML" },
      { logo: require("./images/html.png"), title: "CSS" },
      { logo: require("./images/JavaScript.png"), title: "JavaScript" },
      { logo: require("./images/React.png"), title: "React " },
      { logo: require("./images/redux.png"), title: "Redux" },
      { logo: require("./images/nextjs.png"), title: "Next.js" },
      { logo: require("./images/Bootstraplogo.png"), title: "Bootstrap" },
      {
        logo: require("./images/Tailwind_CSS_Logo.png"),
        title: "Tailwind CSS",
      },
      { logo: require("./images/materialUI.png"), title: "Material UI" },
      { logo: require("./images/shadcn-ui-logo.png"), title: "Shadcn UI" },
      { logo: require("./images/reactbits.png"), title: "React Bits" },
      { logo: require("./images/Aceternity UI.png"), title: "Aceternity UI" },
      { logo: require("./images/ChaktaUI.png"), title: "Chakra UI " },
      { logo: require("./images/heroUI.png"), title: "Hero UI " },
    ],
  },
  {
    badge: "Backend : ",

    description: [
      { logo: require("./images/nodejs.png"), title: "Node js" },
      { logo: require("./images/Express.js.png"), title: "Express js" },
      // { logo: require("./images/html.png"), title: "CSS" },
      // { logo: require("./images/JavaScript.png"), title: "JavaScript" },
      // { logo: require("./images/React.png"), title: "React " },
    ],
  },
  {
    badge: "Database : ",

    description: [
      { logo: require("./images/mongodb-logo.png"), title: "MongoDB" },
      { logo: require("./images/mysql.png"), title: "MySQL" },
      // { logo: require("./images/postgresql.png"), title: "PostgreSQL" },
    ],
  },
  {
    badge: "Tools : ",

    description: [
      { logo: require("./images/git.png"), title: "Git" },
      { logo: require("./images/github.png"), title: "GitHub" },
      // { logo: require("./images/figma.png"), title: "Figma" },
      { logo: require("./images/Visual_Studio.png"), title: "VS Code" },
    ],
  },
];
