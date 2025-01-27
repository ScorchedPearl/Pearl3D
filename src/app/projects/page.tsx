"use client";
import ProJects from "@/components/self/ProJects";
import NavBar from "@/components/self/navBar";
import Portfolio from "@/components/self/portfolio/Portfolio";

export default function Projects() {
  return (
    <div className="w-full h-full absolute inset-0 ">
      <NavBar></NavBar>
      <div className="fixed w-full h-full">
        <ProJects></ProJects>
      </div>
      <div>
        <Portfolio></Portfolio>
      </div>
    </div>
  );
}
