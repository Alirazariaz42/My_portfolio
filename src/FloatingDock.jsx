import React from "react";
import { FloatingDock } from "./components/ui/floating-dock.tsx";
import {
  IconAccessPoint,
  IconAddressBook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "MyProjects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/MyProjects",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/ali-raza-react-js/",
    },
    {
      title: "Resume",
      icon: (
        <img
          src={require("./images/resumeicon.png")}
          width={60}
          height={60}
          alt="Resume Logo"
        />
      ),
      href: "https://drive.google.com/file/d/1Rj1P4RQLiogkKuCGUOPB4MC5DxTohWKw/view?usp=sharing",
    },
    // {
    //   title: "Changelog",
    //   icon: (
    //     <IconAddressBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#",
    // },

    // {
    //   title: "Twitter",
    //   icon: (
    //     <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#",
    // },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center fixed z-[201] bottom-5 scale-125  w-full">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links}
      />
    </div>
  );
}
