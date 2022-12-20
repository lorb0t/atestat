import React from "react";
import { useTranslation } from "react-i18next";
import "./Linening.scss";
import liner from "../../assets/Images_for_web/liner.png";
import fixed_pipe from "../../assets/Images_for_web/fixed_pipe.png";
import broken_pipe from "../../assets/Images_for_web/broken_pipe.png";
import click_finger from "../../assets/Images_for_web/click_finger2.png";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Lineing = () => {
  const { t, i18n } = useTranslation();
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  const [first, setFirst] = useState(true);

  return (
    <div className="line_main_bg" ref={ref}>
      <div className="line_content_left linening_show">
        {window.screen.width < 1250 ? (
          <motion.div
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
              {/* <h1>{t("Lineing.new")}</h1> */}
              <h1>{t("new")}</h1>
            </div>
          </motion.div>
        ) : (
          ""
        )}
        <h1>
          {t("incepund")} <span className="linening_show_span">2023</span>
        </h1>
        <h2>{t("remediere")}</h2>
        {window.screen.width > 1250 ? (
          <button className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">
              <Link to="">{t("soon")}</Link>
            </span>
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="line_content">
        {window.screen.width > 1250 ? (
          <motion.div
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
              {/* <h1>{t("Lineing.new")}</h1> */}
              <h1>{t("new")}</h1>
            </div>
          </motion.div>
        ) : (
          ""
        )}

        <div
          className={`line_content_img ${inView ? "change_op" : "normal_op"}`}
        >
          <img src={liner} alt="Liner machine" />
        </div>
      </div>
      <div className="line_content_right" onClick={() => setFirst(!first)}>
        <div className="line_content_right_images">
          <AnimatePresence>
            {first ? (
              <AnimatePresence>
                <motion.img
                  src={broken_pipe}
                  alt="broken pipe images"
                  className="line_pipe_img"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                />
              </AnimatePresence>
            ) : (
              <motion.img
                src={fixed_pipe}
                alt="fixed pipe images"
                className="line_pipe_img"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />
            )}
          </AnimatePresence>
          <img
            src={click_finger}
            alt="click finger"
            className="line_click_finger"
          />
        </div>
      </div>
    </div>
  );
};

export default Lineing;
