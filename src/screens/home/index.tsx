import React from "react";
import Profile from "./Profile";
import About from "./About";
import { sectionTypes } from "../../utils/types";
import Skills from "./Skills";
import Experience from "./Experience";
import UiUxDesign from "./UiUxDesign";
import GraphicDesigns from "./GraphicDesigns";
import Contact from "./Contact";

const sectionOptions: sectionTypes[] = [
  {
    id: 1,
    sectionId: "profile",
    css: "h-screen bg-zinc-950",
    component: <Profile />,
  },
  {
    id: 2,
    sectionId: "about",
    css: "h-screen bg-zinc-900 ",
    component: <About />,
  },
  {
    id: 3,
    sectionId: "skills",
    css: "h-screen bg-zinc-950 ",
    component: <Skills />,
  },
  {
    id: 4,
    sectionId: "experience",
    css: "h-screen bg-zinc-900 ",
    component: <Experience />,
  },
  // {
  //   id: 5,
  //   sectionId: "ui/ux",
  //   css: "h-screen bg-zinc-950 ",
  //   component: <UiUxDesign />,
  // },
  // {
  //   id: 6,
  //   sectionId: "graphic",
  //   css: "h-screen bg-zinc-900 ",
  //   component: <GraphicDesigns />,
  // },
  // {
  //   id: 7,
  //   sectionId: "contact",
  //   css: "h-screen bg-zinc-950 ",
  //   component: <Contact />,
  // },
];
const Home = () => {
  return (
    <div className="w-full">
      {/* {sectionOptions.length > 0 &&
        sectionOptions.map((ele: any) => (
          <section key={ele?.id}
            className={`flex justify-center w-full   py-10 ${ele?.css} items-center` }
            id={ele?.sectionId}
          >
            {ele?.component}
          </section>
        ))}


<section
        className="flex justify-center w-full  py-10  bg-zinc-950 items-center"
        id="ui/ux"
      >
        <UiUxDesign />
      </section>
      <section
        className="flex justify-center w-full  py-10   bg-zinc-900 items-center"
        id="graphic"
      >
        <GraphicDesigns />
      </section>
      
      <section
        className="flex justify-center w-full   h-screen py-10  bg-zinc-950 items-center"
        id="contact"
      >
        <Contact />
      </section> */}

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
        className="flex justify-center w-full py-10 lg:h-screen bg-zinc-900 items-center"
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
