import React from "react";
import { TextHoverEffect } from "./components/ui/text-hover-effect.tsx";

export function TextHoverEffectDemo() {
  return (
    <div className="h-[20rem] flex items-center justify-center">
      <TextHoverEffect text="FRONTEND" />
    </div>
  );
}
