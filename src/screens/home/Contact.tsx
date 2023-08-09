import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";

const Contact = () => {
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
    <div ref={ref} className="w-[90%] sm:w-[80%]  p-10 lg:w-[45%] mb-60">
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate={parentControls}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="flex items-center"
      >
        <div className="flex-1 border-b-2 mt-6"></div>
        <p className="text-white font-bold mt-5 text-2xl mr-5 ml-5">
          Contact
        </p>
        <div className="flex-1 border-b-2 mt-6"></div>
      </motion.div>

      <motion.div
        variants={childVariants}
        initial="hidden"
        animate={childControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="flex basis-1/2 justify-center flex-col items-center mt-4 gap-y-4"
      >
        <div className="flex  w-full gap-10 justify-center mt-5 flex-col">
          
          <div className="flex gap-4">
            <div className="flex justify-center items-center mt-2">
              {" "}
              <AiOutlineMail className="text-2xl text-white" />
            </div>
            <p className="text-lg lg:text-2xl text-white">+91 955 069 7457</p>
          </div>
          <div className="flex gap-4">
            <div className="flex justify-center items-center mt-2">
              {" "}
              <AiOutlineMail className="text-2xl text-white" />
            </div>
            <p className="text-lg lg:text-2xl text-white"> asifkaif21@gmail.com</p>
          </div>
          <div className="flex gap-4">
            <div className="flex justify-center items-center mt-2">
              {" "}
              <AiOutlineHome className="text-2xl text-white" />
            </div>
            <p className="text-lg lg:text-2xl text-white">
              {" "}
              Baba Nilya, 27/A, Ground Floor, 2nd Cross, 2nd Stage, Vinayaka
              Layout, Kempapura, Hebbal, Bangalore - 560024
            </p>
          </div>
          
        </div>
      </motion.div>
    </div>
  );
};

export default React.memo(Contact);
