import img1 from "../../assets/Images/bemeres.jpg";
import img2 from "../../assets/Images/robot.jpg";
import img3 from "../../assets/Images/company-cars.png";
import img4 from "../../assets/Images/Kamion1.jpeg";
import img5 from "../../assets/Images/inliner.jpeg";
import img6 from "../../assets/Images/wc_dugulas.jpg";
import img7 from "../../assets/Images/company_house.png";
import img8 from "../../assets/Images/company_logo2.png";
import img9 from "../../assets/Images/bemeres.jpg";
import img10 from "../../assets/Images/robot.jpg";
import img11 from "../../assets/Images/company-cars.png";
import img12 from "../../assets/Images/Kamion1.jpeg";
import img13 from "../../assets/Images/inliner.jpeg";
import img14 from "../../assets/Images/wc_dugulas.jpg";
import img15 from "../../assets/Images/company_house.png";
import img16 from "../../assets/Images/company_logo2.png";
import img17 from "../../assets/Images/bemeres.jpg";
import img18 from "../../assets/Images/robot.jpg";
import img19 from "../../assets/Images/company-cars.png";
import img20 from "../../assets/Images/Kamion1.jpeg";
import img21 from "../../assets/Images/inliner.jpeg";
import img22 from "../../assets/Images/wc_dugulas.jpg";
import img23 from "../../assets/Images/company_house.png";
import img24 from "../../assets/Images/company_logo2.png";

import { MdClose } from "react-icons/md";
import { useState } from "react";
import "./PageGallery.scss";
import { useTranslation } from "react-i18next";

export const PageGallery = () => {
  let pictures = [
    {
      imgSrc: img1,
    },
    {
      imgSrc: img2,
    },
    {
      imgSrc: img3,
    },
    {
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
    {
      imgSrc: img6,
    },
    {
      imgSrc: img7,
    },
    {
      imgSrc: img8,
    },
    {
      imgSrc: img9,
    },
    {
      imgSrc: img10,
    },

    {
      imgSrc: img12,
    },
    {
      imgSrc: img13,
    },
    {
      imgSrc: img14,
    },
    {
      imgSrc: img15,
    },
    {
      imgSrc: img16,
    },
    {
      imgSrc: img17,
    },
    {
      imgSrc: img18,
    },
    {
      imgSrc: img19,
    },
    {
      imgSrc: img20,
    },
    {
      imgSrc: img21,
    },
    {
      imgSrc: img22,
    },
    {
      imgSrc: img23,
    },
    {
      imgSrc: img24,
    },
  ];

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  const { t, i18n } = useTranslation();

  return (
    <div className="page_gallery_main">
      <h1>{t("full_gallery")}</h1>

      {model && (
        <>
          <div className="model">
            <img src={tempImgSrc} />
            <MdClose onClick={() => setModel(false)} />
          </div>
        </>
      )}

      <div className="gallery-g">
        {pictures.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
