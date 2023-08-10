import React from "react";
import Profile from "./Profile";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import UiUxDesign from "./UiUxDesign";
import GraphicDesigns from "./GraphicDesigns";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="w-full">
      <section
        id="profile"
        className="flex justify-center w-full py-10 h-[90vh]  sm:[40vh] lg:h-screen  bg-zinc-950 items-center"
      >
        <Profile />
      </section>
      <section
        className="flex justify-center w-full py-10 lg:h-screen bg-zinc-900 items-center"
        id="about"
      >
        <About />
      </section>
      <section
        className="flex justify-center w-full py-10 bg-zinc-950 items-center"
        id="skills"
      >
        <Skills />
      </section>
      <section
        className="flex justify-center w-full py-10  bg-zinc-900 items-center"
        id="experience"
      >
        <Experience />
      </section>
      <section
        className="flex justify-center w-full py-10 bg-zinc-950 items-center"
        id="ui/ux"
      >
        <UiUxDesign />
      </section>
      <section
        className="flex justify-center w-full py-10 bg-zinc-900 items-center"
        id="graphic"
      >
        <GraphicDesigns />
      </section>

      <section
        className="flex justify-center w-full   lg:h-screen py-10  bg-zinc-950 items-center"
        id="contact"
      >
        <Contact />
      </section>
    </div>
  );
};

export default React.memo(Home);
