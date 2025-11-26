import bootsrap from "../../images/bootstrap-svgrepo-com.svg";
import expressjs from "../../images/express-svgrepo-com.svg";
import javascript from "../../images/jslogo.svg";
import nodejs from "../../images/nodejsmini_.svg";
import reactlogo from "../../images/react-svgrepo-com.svg";
import { Card } from "../../poitfolioCard/card";

export const MyProjects = () => {
  const projects = [
     {
      title: " My Portfolio ",
      image: require("../../images/portfilioBannser.png"),
      link: "https://portfolio-aliraza42.netlify.app/",
      gitlink: "",
      stack: [javascript, reactlogo, nodejs, expressjs, bootsrap],
    },
    {
      title: " A-Z Electronic ",
      image: require("../../images/A-zBanner.png"),
      link: "https://a-to-z-ellectronic.netlify.app/",
      gitlink: "",
      stack: [javascript, reactlogo, nodejs, expressjs, bootsrap],
    },
    {
      title: " UK Estimatiors",
      image: require("../../images/UKBanner.png"),
      link: "https://ukestimatiors.netlify.app/",
      gitlink: "",
      stack: [javascript, reactlogo, nodejs, expressjs, bootsrap],
    },
    {
      title: " Saraha-Demo",
      image: require("../../images/sarahaDemoBanner.png"),
      link: "https://saraha-demo.netlify.app/",
      gitlink: "",
      stack: [javascript, reactlogo, nodejs, expressjs, bootsrap],
    },
    {
      title: "PlanHub ",
      image: require("../../images/planHubbanner.png"),
      link: "https://planhubestimators.netlify.app/",
      gitlink: "",
      stack: [javascript, reactlogo, nodejs, expressjs, bootsrap],
    },
    {
      title: "BlueBook ",
      image: require("../../images/blueBook.png"),
      link: "https://bluebookestimators.com/",
      gitlink: "",
      stack: [javascript, reactlogo, nodejs, expressjs, bootsrap],
    },
    {
      title: " Procore ",
      image: require("../../images/procore.png"),
      link: "https://www.procoreestimators.com/",
      gitlink: "",
      stack: [javascript, reactlogo, nodejs, expressjs, bootsrap],
    },
    {
      title: "BidClerk ",
      image: require("../../images/bidclerk.png"),
      link: "https://bidclerkestimating.com/",
      gitlink: "",
      stack: [javascript, reactlogo, nodejs, expressjs, bootsrap],
    },
    {
      title: " Veterans ",
      image: require("../../images/vetrans.png"),
      link: "https://veteransestimators.com/",
      gitlink: "",
      stack: [javascript, reactlogo, nodejs, expressjs, bootsrap],
    },
    {
      title: " QuickBid ",
      image: require("../../images/QuickBid.png"),
      link: "https://quickbidestimating.com/",
      gitlink: "",
      stack: [javascript, reactlogo, nodejs, expressjs, bootsrap],
    },
    {
      title: "  A-One Estimation",
      image: require("../../images/A1Banner.png"),
      link: "https://a-one-estimation.netlify.app/",
      gitlink: "",
      stack: [javascript, reactlogo, nodejs, expressjs, bootsrap],
    },
  ];
  return (
    <div className=" container-md relative z-[51]">
      <p
        data-aos="zoom-in-up"
        className=" title1_main anton-regular mt-2 mb-2 "
      >
        {" "}
        Featured Projects
      </p>
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
      {projects.map((project) => (
        <Card
          title={project.title}
          image={project.image}
          link={project.link}
          stack={project.stack}
        />
      ))}
      <br />
      <br />
      <br /> <br />
      <br />
    </div>
  );
};
