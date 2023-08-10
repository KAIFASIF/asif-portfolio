import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "react-scroll";

const Profile = () => {
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
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const childVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div
      ref={ref}
      className="w-full  p-10 lg:w-[50%]  lg:mb-60 flex items-start flex-col"
    >
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate={parentControls}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex items-start flex-col"
      >
        <p className="text-white font-bold text-3xl sm:text-5xl">
          Hey, I'm Shaik Asif.
        </p>
        <p className="text-white mt-2 sm:mt-5 text-lg sm:text-2xl">
          I'm a{" "}
          <span className="font-semibold text-lg sm:text-2xl text-green-400">
            Full Stack Developer, UI/UX Designer and Graphic Designer
          </span>
        </p>
      </motion.div>

      <motion.div
        variants={childVariants}
        initial="hidden"
        animate={childControls}
        transition={{ duration: 1, delay: 0.25 }}
        className="flex  flex-col items-start "
      >
        <p className="text-white mt-5 text-lg sm:text-2xl text-justify font-light">
          I've spent 7 years in designing, building and scaling software for some
          pretty cool companies. With a passion for creating user-friendly and
          visually appealing web applications. With a strong background in both
          frontend and backend development, I enjoy turning ideas into
          functional and elegant solutions.
        </p>
        <div className="mt-5 flex justify-start">
          <Link
            className="cursor-pointer bg-green-400  p-2 rounded px-5 hover:font-semibold text-black"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default React.memo(Profile);
