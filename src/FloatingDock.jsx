import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileText,
  IconHome,
  IconTerminal2,
} from "@tabler/icons-react";
import Squares from "./components/squareBG/squareBG.jsx";
import { FloatingDock } from "./components/ui/floating-dock.tsx";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-sky-500" />
      ),
      href: "/",
    },

    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-sky-500" />
      ),
      href: "/MyProjects",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-sky-500" />
      ),
      href: "https://www.linkedin.com/in/ali-raza-mern-stack/",
    },
    {
      title: "Resume",
      icon: (
        <IconFileText className="h-full w-full text-neutral-500 dark:text-sky-500" />
      ),
      href: "/resume.pdf",
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
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-sky-500" />
      ),
      href: "https://github.com/Alirazariaz42",
    },
  ];
  return (
    <div>
      {" "}
      <div
        data-aos="fade-up"
        className="sm:flex hidden items-center justify-center fixed z-[201] sm:bottom-5 bottom-[0px]   w-full "
      >
        <FloatingDock
          // only for demo, remove for production
          mobileClassName="translate-y-20"
          items={links}
        />
      </div>
      <div
        data-aos="fade-up"
        className="sm:flex items-center justify-center fixed z-[200] sm:bottom-[22px] bottom-[0px] hidden w-full"
      >
        <Squares
          speed={0.8}
          squareSize={25}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="white"
          hoverFillColor="#222"
        />
      </div>
    </div>
  );
}
