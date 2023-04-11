import React from "react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import img3 from "../../assets/Images/shortliner1.png";
import img1 from "../../assets/Images/shortliner_wood_cut.png";
import img2 from "../../assets/Images/inliner.png";
import { LearnMore } from "../LearnMore/LearnMore";
const Csotisztit = () => {
  const { t, i18n } = useTranslation();

  const language = i18n.language;
  const vid_size = "400px";

  const equalsRo = () => {
    if ("ro" === language) return true;
    else return false;
  };

  useEffect(() => {
    setTimeout(() => {
      console.log("ran");
      return window.scrollTo(0, 0);
    }, 1000);
  });
  return (
    <LearnMore />
  );
};

export default Csotisztit;
