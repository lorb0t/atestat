import "./Header.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/Animations/zoomIn.css";
import "../../assets/Animations/roundedButton.scss";

import { useTranslation } from "react-i18next";

import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

import newStickerHun from "../../assets/Images_for_web/newHunSticker.png";
import newRomSticker from "../../assets/Images_for_web/newRomSticker.png";

export const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="header">
      {/* zoom_in */}
      <div className="header_main">
        <div className="header_comp-motto">
          <a href="#linening">
            {i18n.language === "ro" ? (
              <motion.img
                src={newRomSticker}
                alt="new sticker"
                className="newSticker"
                whileHover={{ scale: 1.2, rotate: -20 }}
              />
            ) : (
              <motion.img
                src={newStickerHun}
                alt="new sticker"
                className="newSticker"
                whileHover={{ scale: 1.2, rotate: -20 }}
              />
            )}
          </a>
          <h1>S.C. CLEAN SPEED S.R.L.</h1>
          <h2>TARGU MURES, STR. BOGATEI, NR. 21</h2>
          <h3>{t("header_motto")}</h3>

          <motion.div whileHover={{ scale: 1.2 }}>
            <button className="button Rowsen">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                {t("contact")}
              </Link>
            </button>
          </motion.div>
        </div>
        <div className="header_services">
          {[
            { name: t("cont1"), id: "cont1" },
            { name: t("cont2"), id: "cont2" },
            { name: t("cont3"), id: "cont3" },
            { name: t("cont4"), id: "cont4" },
            { name: t("cont5"), id: "cont5" },
            { name: t("cont6"), id: "cont6" },
            { name: t("cont7"), id: "cont7" },
          ].map((item) => (
            <Link
              activeClass="active"
              to={item.id}
              key={item.id}
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              className="slide-right"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
