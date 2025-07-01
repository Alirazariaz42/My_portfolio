import React from "react";
import { Card } from "../../poitfolioCard/card";
import PlanHub from "../../images/planHub.png";

export const MyProjects = () => {
  const projects = [
    {
      title: "  SmartBid Estimators",
      image: require("../../images/smartBit.png"),
      link: "https://www.smartbidestimators.com/index.html",
      gitlink: "",
    },
    {
      title: " MF BZone",
      image: require("../../images/MfBzone.png"),
      link: "https://mfbzone.com/",
      gitlink: "",
    },
    {
      title: " Pearson Specter Litt Cafe",
      image: require("../../images/psl.png"),
      link: "https://pearsonspecterlitt.cafe/?v=ef7ad2cb6232",
      gitlink: "",
    },
    {
      title: " Majestic Firenze",
      image: require("../../images/megesticfrenzy.png"),
      link: "https://majesticfirenze.com/",
      gitlink: "",
    },
    {
      title: "PlanHub Estimators",
      image: require("../../images/planHub.png"),
      link: "https://planhubestimators.com/",
      gitlink: "",
    },
    {
      title: "BlueBook Estimators",
      image: require("../../images/blueBook.png"),
      link: "https://bluebookestimators.com/",
      gitlink: "",
    },
    {
      title: " Procore Estimators",
      image: require("../../images/procore.png"),
      link: "https://www.procoreestimators.com/",
      gitlink: "",
    },
    {
      title: "BidClerk Estimators",
      image: require("../../images/bidclerk.png"),
      link: "https://bidclerkestimating.com/",
      gitlink: "",
    },
    {
      title: " Veterans Estimators",
      image: require("../../images/vetrans.png"),
      link: "https://veteransestimators.com/",
      gitlink: "",
    },
    {
      title: " QuickBid Estimators",
      image: require("../../images/QuickBid.png"),
      link: "https://quickbidestimating.com/",
      gitlink: "",
    },
  ];
  return (
    <div className=" container">
      {projects.map((project) => (
        <Card title={project.title} image={project.image} link={project.link} />
      ))}
      <br />
      <br />
      <br /> <br />
      <br />
    </div>
  );
};
