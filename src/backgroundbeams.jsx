import React from "react";
import { BackgroundBeams } from "./components/ui/background-beams.tsx";

export function BackgroundBeamsDemo() {
  return (
    <div className="w-full  h-screen  bg-black antialiased  absolute w-full z-[0]">
      <BackgroundBeams />
    </div>
  );
}
