import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { designsTypes } from "../../utils/types";
import { uiUxDesignsOptions } from "../../utils/data";

const UiUxDesign = () => {
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
    <div ref={ref} className="w-[90%] lg:w-[55%]">
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate={parentControls}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="flex items-center"
      >
        <div className="flex-1 border-b-2 mt-7"></div>
        <p className="text-green-400 font-bold mt-7 text-2xl ml-5">
          {" "}
          UI/UX Designs
        </p>
      </motion.div>

      <motion.div
        variants={childVariants}
        initial="hidden"
        animate={childControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="flex justify-center flex-col items-center mt-10 gap-y-4"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {uiUxDesignsOptions.length > 0 &&
            uiUxDesignsOptions.map((ele: designsTypes) => (
              <div className="text-white col-span-4" key={ele?.id}>
                <img
                  src={ele?.image}
                  alt="Image"
                  className="w-full h-full transition-transform transform scale-100 hover:scale-110"
                />
              </div>
            ))}
        </div>
      </motion.div> 
    </div>
  );
};

export default React.memo(UiUxDesign);
