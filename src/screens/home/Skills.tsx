import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Skills = () => {
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
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInAnimationVariants = {
    initial: { opacity: 0, y: 100 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  const frontend = ["React", "Angular", "React Native"];
  const css = ["TypeScript", "Tailwind CSS", "Material UI"];
  const backend = ["Springboot (Java)", "Node Js", "Django(Python)"];
  const graphicDesign = ["Illustrator", "Photoshop", "Corel draw"];
  const uiux = ["Figma"];
  return (
    <div ref={ref} className="mx-10 lg:mx-0  w-[80%] lg:w-[55%]">
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate={parentControls}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="flex items-center"
      >
        <div className="flex-1 border-b-2 mt-10"></div>
        <p className="text-green-400 font-bold mt-5 text-2xl ml-5">Skills</p>
      </motion.div>

      <motion.div
        variants={childVariants}
        initial="hidden"
        animate={childControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="flex  justify-center flex-col items-center mt-4 gap-y-4"
      >
        <div className="flex basis-1/2 justify-center flex-col items-center gap-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5  gap-10  p-10">
            <div>
              <p className="text-gray-100 text-lg font-semibold">Frontend</p>
              <div className="mt-4">
                <ul className="gap-y-2 rounded-full">
                  {" "}
                  {frontend.length > 0 &&
                    frontend.map((ele: string, index: number) => (
                      <motion.li
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: false }}
                        custom={index}
                        className="text-gray-400 mb-4 text-lg"
                      >
                        {" "}
                        {ele}{" "}
                      </motion.li>
                    ))}
                </ul>
              </div>
            </div>

            <div>
              <p className="text-gray-100  text-lg font-semibold">Backend</p>
              <div className="grid  gap-y-4 mt-4">
                <ul className="gap-y-2 rounded-full">
                  {" "}
                  {backend.length > 0 &&
                    backend.map((ele: string, index: number) => (
                      <motion.li
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={index}
                        className="text-gray-400 mb-4 text-lg"
                      >
                        {" "}
                        {ele}{" "}
                      </motion.li>
                    ))}
                </ul>
              </div>
            </div>

            <div>
              <p className="text-gray-100  text-lg font-semibold">CSS</p>
              <div className="grid  gap-y-4 mt-4">
                <ul className="gap-y-2 rounded-full">
                  {" "}
                  {css.length > 0 &&
                    css.map((ele: string, index: number) => (
                      <motion.li
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: false }}
                        custom={index}
                        className="text-gray-400 mb-4 text-lg"
                      >
                        {" "}
                        {ele}{" "}
                      </motion.li>
                    ))}
                </ul>
              </div>
            </div>

            <div>
              <p className="text-gray-100  text-lg font-semibold">
                Graphic Designing
              </p>
              <div className="grid  gap-y-4 mt-4">
                <ul className="gap-y-2 rounded-full">
                  {" "}
                  {graphicDesign.length > 0 &&
                    graphicDesign.map((ele: string, index: number) => (
                      <motion.li
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: false }}
                        custom={index}
                        className="text-gray-400 mb-4 text-lg"
                      >
                        {" "}
                        {ele}{" "}
                      </motion.li>
                    ))}
                </ul>
              </div>
            </div>

            <div>
              <p className="text-gray-100  text-lg font-semibold">
                UI/UX Designing
              </p>
              <div className="grid  gap-y-4 mt-4">
                <ul className="gap-y-2 rounded-full">
                  {" "}
                  {uiux.length > 0 &&
                    uiux.map((ele: string, index: number) => (
                      <motion.li
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: false }}
                        custom={index}
                        className="text-gray-400 mb-4 text-lg"
                      >
                        {" "}
                        {ele}{" "}
                      </motion.li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default React.memo(Skills);
