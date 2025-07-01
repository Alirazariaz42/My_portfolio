import React from "react";
import { Compare } from "./components/ui/compare.tsx";

export function CompareDemo() {
  return (
    <div className="p-4  lg:mt-5 mt-14 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4">
      <Compare
        secondImage="https://s3-alpha.figma.com/hub/file/4893892760/4a92437d-3e4e-4d15-9bab-225cfe73fa1a-cover.png"
        firstImage="https://assets.aceternity.com/code-solution.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px] "
        slideMode="hover"
      />
    </div>
  );
}
