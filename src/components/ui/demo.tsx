import React from "react";
import Component from "./portfolio-hero"; // adjusted path from @ alias for direct compatibility

export default function Demo() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&family=Antic&display=swap"
      />
      <div className="w-full">
        <Component />
      </div>
    </>
  );
}
