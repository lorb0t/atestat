import "./Servic.scss";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import img1 from "../../assets/Images/cleaning.png";
import img2 from "../../assets/Images/szenyviz_szippantas.png";
import img3 from "../../assets/Images/Remediere_conducta_fara_sapare_Inliner.jpg";
import img4 from "../../assets/Images/robot.jpg";
import img5 from "../../assets/Images/emberker_with_ultrasonic.jpg";
import corner1line from "../../assets/Images_for_web/corner1line.svg";

export const Servic = () => {
  const cont1 = useInView({
    threshold: 0,
  });
  const cont2 = useInView({
    threshold: 0,
  });
  const cont3 = useInView({
    threshold: 0,
  });
  const cont4 = useInView({
    threshold: 0,
  });
  const cont5 = useInView({
    threshold: 0,
  });

  const { t, i18n } = useTranslation();

  const isMobile = window.innerWidth < 1360;

  return (
    <>
      <div className="servic_main">
        <img src={corner1line} alt="" className="corner-vec-left" />
        <img src={corner1line} alt="" className="corner-vec-right" />
        <img src={corner1line} alt="" className="corner-vec-left-bottom" />
        <img src={corner1line} alt="" className="corner-vec-right-bottom" />
        <h1>{t("szolgaltatasok")}</h1>

        {isMobile ? (
          <>
            <div className="servic-containers">
              <div className="1container container-left container" id="cont1">
                <div className="text-container" id="cont1" ref={cont1.ref}>
                  <h3>{t("dugulas_cim")}</h3>
                  <p>{t("dugulas1")}</p>
                  <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">
                      <Link to="/dugulas/">{t("learnMoreButton")}</Link>
                    </span>
                  </button>
                </div>
                <div className="img-container first-pic">
                  <img src={img1} alt="picture" className="servic-img" />
                </div>
              </div>
              <div className="horizontal-line"></div>
              <div className="2container container-right container" id="cont2">
                <div className="text-container" ref={cont2.ref}>
                  <h3>{t("szenyviz_cim")}</h3>
                  <p>{t("szenyviz1")}</p>
                  <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">
                      <Link to="/szenyviz">{t("learnMoreButton")}</Link>
                    </span>
                  </button>
                </div>
                <div className="img-container">
                  <img src={img2} alt="picture" className="servic-img" />
                </div>
              </div>
              <div className="horizontal-line"></div>
              <div className="3container container-left container" id="cont3">
                <div className="text-container" ref={cont3.ref}>
                  <h3>{t("nodig_cim")}</h3>
                  <p>{t("nodig1")}</p>
                  <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">
                      <Link to="/nodig/">{t("learnMoreButton")}</Link>
                    </span>
                  </button>
                </div>
                <div className="img-container">
                  <img src={img3} alt="picture" className="servic-img" />
                </div>
              </div>
              <div className="horizontal-line"></div>
              <div className="4container container-right container" id="cont4">
                <div className="text-container" ref={cont4.ref}>
                  <h3>{t("camera_cim")}</h3>
                  <p>{t("camera1")}</p>
                  <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">
                      <Link to="/camera/">{t("learnMoreButton")}</Link>
                    </span>
                  </button>
                </div>
                <div className="img-container">
                  <img src={img4} alt="picture" className="servic-img" />
                </div>
              </div>
              <div className="horizontal-line"></div>
              <div className="5container container-left container" id="cont5">
                <div className="text-container" ref={cont5.ref}>
                  <h3>{t("meres_cim")}</h3>
                  <p>{t("meres1")}</p>
                  <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">
                      <Link to="/meres/">{t("learnMoreButton")}</Link>
                    </span>
                  </button>
                </div>

                <div className="img-container">
                  <img src={img5} alt="picture" className="servic-img" />
                </div>
              </div>
            </div>
            {/* $################################################################################################################## */}
          </>
        ) : (
          <>
            <div className="servic-containers">
              <div className="1container container-left container" id="cont1">
                <div className="text-container" id="cont1" ref={cont1.ref}>
                  <h3>{t("dugulas_cim")}</h3>
                  <p>{t("dugulas1")}</p>
                  <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">
                      <Link to="/dugulas/">{t("learnMoreButton")}</Link>
                    </span>
                  </button>
                </div>
                <motion.div
                  className="img-container first-pic"
                  initial={{ x: "40vw" }}
                  animate={{
                    x: `${cont1.inView ? 0 : "35vw"}`,
                    visibility: `${cont1.inView ? "visible" : "hidden"}`,
                  }}
                  transition={{ duration: 1.5 }}
                >
                  <img src={img1} alt="picture" className="servic-img" />
                </motion.div>
              </div>
              <div className="2container container-right container" id="cont2">
                <motion.div
                  className="img-container"
                  initial={{ x: "-40vw" }}
                  animate={{
                    x: `${cont2.inView ? 0 : "-35vw"}`,
                    visibility: `${cont2.inView ? "visible" : "hidden"}`,
                  }}
                  transition={{ duration: 1.5 }}
                >
                  <img src={img2} alt="picture" className="servic-img" />
                </motion.div>
                <div className="text-container" ref={cont2.ref}>
                  <h3>{t("szenyviz_cim")}</h3>
                  <p>{t("szenyviz1")}</p>
                  <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">
                      <Link to="/szenyviz">{t("learnMoreButton")}</Link>
                    </span>
                  </button>
                </div>
              </div>
              <div className="3container container-left container" id="cont3">
                <div className="text-container" ref={cont3.ref}>
                  <h3>{t("nodig_cim")}</h3>
                  <p>{t("nodig1")}</p>
                  <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">
                      <Link to="/nodig">{t("learnMoreButton")}</Link>
                    </span>
                  </button>
                </div>
                <motion.div
                  className="img-container"
                  initial={{ x: "40vw" }}
                  animate={{
                    x: `${cont3.inView ? 0 : "35vw"}`,
                    visibility: `${cont3.inView ? "visible" : "hidden"}`,
                  }}
                  transition={{ duration: 1.5 }}
                >
                  <img src={img3} alt="picture" className="servic-img" />
                </motion.div>
              </div>
              <div className="4container container-right container" id="cont4">
                <motion.div
                  className="img-container"
                  initial={{ x: "-40vw" }}
                  animate={{
                    x: `${cont4.inView ? 0 : "-35vw"}`,
                    visibility: `${cont4.inView ? "visible" : "hidden"}`,
                  }}
                  transition={{ duration: 1.5 }}
                >
                  <img src={img4} alt="picture" className="servic-img" />
                </motion.div>
                <div className="text-container" ref={cont4.ref}>
                  <h3>{t("camera_cim")}</h3>
                  <p>{t("camera1")}</p>
                  <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">
                      <Link to="/camera/">{t("learnMoreButton")}</Link>
                    </span>
                  </button>
                </div>
              </div>
              <div className="5container container-left container" id="cont5">
                <div className="text-container" ref={cont5.ref}>
                  <h3>{t("meres_cim")}</h3>
                  <p>{t("meres1")}</p>
                  <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">
                      <Link to="/meres/">{t("learnMoreButton")}</Link>
                    </span>
                  </button>
                </div>

                <motion.div
                  className="img-container first-pic"
                  initial={{ x: "40vw" }}
                  animate={{
                    x: `${cont5.inView ? 0 : "40vw"}`,
                    visibility: `${cont5.inView ? "visible" : "hidden"}`,
                  }}
                  transition={{ duration: 1.5 }}
                >
                  <img src={img5} alt="picture" className="servic-img" />
                </motion.div>
              </div>
            </div>
          </>
        )}
      </div>
    </>

    // TODO: Röwşen
  );
};
