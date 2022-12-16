import React from "react";
import { useTranslation } from "react-i18next";
import "./Linening.scss";
import liner from "../../assets/Images_for_web/liner.png";
import fixed_pipe from "../../assets/Images_for_web/fixed_pipe.png";
import broken_pipe from "../../assets/Images_for_web/broken_pipe.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Lineing = () => {
  const { t, i18n } = useTranslation();
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  return (
    <div className="line_main" ref={ref}>
      <div className="line_main_bg">
        <div className="line_content_left">
          <h1>What</h1>
          <h1>What</h1>
          <h1>What</h1>
        </div>
        <div className="line_content">
          {/* <h1>{t("Lineing.1")}</h1> */}

          <motion.div
            className="img-container first-pic"
            initial={{ y: -52 }}
            animate={{
              y: `${inView ? -40 : -50}`,
            }}
            transition={{ duration: 3 }}
          >
            <div
              className={`line_new footer-heading-img ${
                inView ? "wobble-hor-bottom" : ""
              }`}
            >
              <h1>nou</h1>
            </div>
          </motion.div>

          <div
            className={`line_content_img ${inView ? "change_op" : "normal_op"}`}
          >
            <img src={liner} alt="Liner machine" />
          </div>
        </div>
        <div className="line_content_right">
          <img src={fixed_pipe} alt="pipe images" />
        </div>
      </div>
    </div>
  );
};

export default Lineing;
