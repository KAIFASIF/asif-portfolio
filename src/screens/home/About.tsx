import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const parentControls = useAnimation();
  const childControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      parentControls.start("visible");
      childControls.start("visible");
    } else {
      parentControls.start("hidden");
      childControls.start("hidden");
    }
  }, [isInView, parentControls, childControls]);

  const parentVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={ref} className=" w-[80%]  lg:p-0 lg:w-[55%] ">
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate={parentControls}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="flex items-center"
      >
        <p className="text-white font-bold mt-5 text-2xl mr-5">About</p>
        <div className="flex-1 border-b-2 mt-6 ml-5"></div>
      </motion.div>

      <motion.div
        variants={childVariants}
        initial="hidden"
        animate={childControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="flex basis-1/2 justify-center flex-col items-center mt-4 gap-y-4"
      >
        <p className="text-gray-400 text-lg text-justify">
          An individual with keen interest in Software programs, possessing good
          problem solving and analytical skills. Looking forward to working with
          a Development team for solving real-life problems by utilizing my
          skills and knowledge to the best of my abilities.
        </p>
        <p className="text-gray-400 text-lg mt-4 text-justify">
          Highly motivated and organised professional with proficiency in
          working with user interfaces. Design first approach with importance to
          efficiency.
        </p>
        <p className="text-gray-400 text-lg mt-4 text-justify">
          Full stack developer and Designer with experience in multiple software
          development tools and technologies. Designer with experience in
          working with Figma, Adobe illustrator, Photoshop and Corel Draw.
        </p>
      </motion.div>
    </div>
  );
};

export default React.memo(About);
