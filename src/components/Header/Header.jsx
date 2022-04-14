import React from "react";
import "./Header.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/Animations/zoomIn.css";
import "../../assets/Animations/roundedButton.scss";

import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <div className="header">
      {/* zoom_in */}
      <div className="header_main">
        <div className="header_comp-motto">
          <h1>S.C. CLEAN SPEED S.R.L.</h1>
          <h2>TARGU MURES, STR. BOGATEI, NR. 21</h2>
          {/* TODO: egy uj logo ami szoveges*/}
          <h3>
            Több éves tapasztalatunkat korszerű és hatékony gépekkel <br />
            egészítettük ki, amit nyugateurópai partnereink is használnak.
          </h3>

          <motion.div whileHover={{ scale: 1.2 }}>
            <a href="#" className="button">
              Contact with us
            </a>
          </motion.div>

          {/* TODO: a button vigyen a contact helyre */}
        </div>
        <div className="header_services">
          {[
            "Duguláselhárítás",
            " Szennyvíz szippantás",
            "Lefolyó cső ásás nélküli javítása",
            "A Csatorna videóvizsgálata(CCTV)",
            "Csőtörés bemérés",
          ].map((item) => (
            <Link
              activeClass="active"
              to={item}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="slide-right"
            >
              {item}
            </Link>
          ))}
          {/* FIXME: az id megjavitasa */}
        </div>
      </div>
    </div>
  );
};
