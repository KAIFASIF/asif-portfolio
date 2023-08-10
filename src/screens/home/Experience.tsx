import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Experience = () => {
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
    <div ref={ref} className="mx-10 lg:mx-0  w-[80%] lg:w-[75%]">
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate={parentControls}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="flex items-center"
      >
        <p className="text-white font-bold mt-5 text-2xl mr-5">Experience</p>
        <div className="flex-1 border-b-2 mt-10"></div>
      </motion.div>

      <motion.div
        variants={childVariants}
        initial="hidden"
        animate={childControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="flex basis-1/2 justify-center flex-col items-center lg:mt-4 gap-y-4"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2  items-center justify-center lg:mt-4 w-full lg:gap-10 gap-5">
          {/* MM */}
          <div className="w-full lg:mt-4 mt-5">
            {" "}
            <p className="text-gray-100  text-lg font-semibold">
              Mahila Money Pvt Ltd{" "}
              <span className="text-sm font-normal">
                (March 2022 - March 2023)
              </span>
            </p>
            <div className="grid  gap-y-1 lg:mt-2">
              <ul className="mt-4 list-disc pl-6">
                <li className="text-white mb-2">
                  <p className="text-gray-400 text-lg">
                    Application for managing users loans.
                  </p>
                </li>
                <li className="text-white mb-2">
                  <p className="text-gray-400 text-lg">
                    Worked on loan approval dashbaoard with multiple
                    functionlities.
                  </p>
                </li>
                <li className="text-white mb-2">
                  <p className="text-gray-400 text-lg">
                    Tools Used: React, Typescript, Java(Springboot), RestApi’s,
                    Material UI, Tailwind CSS.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Bomway */}
          <div className="w-full mt-2 md:mt-4 ">
            {" "}
            <p className="text-gray-100  text-lg font-semibold">
              Bomway Pvt Ltd
              <span className="text-sm font-normal">
                {" "}
                (Oct 2021 - Jan 2022)
              </span>
            </p>
            <div className="grid  gap-y-1 lg:mt-2">
              <ul className="mt-4 list-disc pl-6">
                <li className="text-white mb-2">
                  <p className="text-gray-400 text-lg">
                    Ecommerce site for B2B.
                  </p>
                </li>
                <li className="text-white mb-2">
                  <p className="text-gray-400 text-lg">
                    A web app where a trader can buy and sell product, inquire
                    about a product, can subscribe , book an appointment and
                    many more.
                  </p>
                </li>
                <li className="text-white mb-2">
                  <p className="text-gray-400 text-lg">
                    Tools Used: React, Django, RestApi’s & Material UI.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Pentamount */}
          <div className="w-full mt-2 md:mt-4  lg:h-48">
            {" "}
            <p className="text-gray-100  text-lg font-semibold">
              Pentamount Technologies Pvt Ltd
              <span className="text-sm font-normal">
                {" "}
                (April 2020 - Sept 2021)
              </span>
            </p>
            <div className="grid  gap-y-1 lg:mt-2">
              <ul className="mt-4 list-disc pl-6">
                <li className="text-white mb-2">
                  <p className="text-gray-400 text-lg">
                    Inventory Management System for a phramaceutical firm.
                  </p>
                </li>
                <li className="text-white mb-2">
                  <p className="text-gray-400 text-lg">
                    A web app where a person can book an appointment, manage
                    stocks, track orders, track expiration of medicines, return
                    orders, can have a video or audio call with a doctor, manage
                    patient’s medical history, current treatment etc.
                  </p>
                </li>
                <li className="text-white mb-2">
                  <p className="text-gray-400 text-lg">
                    Tools Used: React, RestApi’s, JavaScript and Material UI.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Embassy */}
          <div className="w-full mt-2 md:mt-4   lg:h-48">
            {" "}
            <p className="text-gray-100  text-lg font-semibold">
              Embassy Services Pvt Ltd
              <span className="text-sm font-normal">
                {" "}
                (Sept 2018 - March 2020)
              </span>
            </p>
            <div className="grid  gap-y-1 lg:mt-2">
              <ul className="mt-4 list-disc pl-6">
                <li className="text-white mb-2">
                  <p className="text-gray-400 text-lg">
                    With a keen eye for detail and a deep understanding of
                    design principles, I enjoy creating everything from sleek
                    logos to engaging print materials and stunning digital
                    graphics. My goal is to communicate messages and tell
                    stories through design, leaving a lasting impression on
                    viewers.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Printo */}
          <div className="w-full mt-2  lg:mt-20">
            {" "}
            <p className="text-gray-100  text-lg font-semibold">
              Printo Document Services Pvt Ltd
              <span className="text-sm font-normal">
                {" "}
                (April 2016 - April 2018)
              </span>
            </p>
            <div className="grid  gap-y-1 lg:mt-2">
              <ul className="mt-4 list-disc pl-6">
                <li className="text-white mb-2">
                  <p className="text-gray-400 text-lg">
                    As a passionate graphic designer, I thrive on transforming
                    ideas and concepts into captivating visual experiences. My
                    journey began with a curiosity for colors, shapes, and the
                    power of imagery, and it has evolved into a dedication to
                    crafting visually appealing and impactful designs.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default React.memo(Experience);
