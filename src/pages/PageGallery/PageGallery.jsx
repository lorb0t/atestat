import img1 from "../../assets/Images/bemeres.jpg";
import img2 from "../../assets/Images/robot.jpg";
import img3 from "../../assets/Images/company-cars.png";
import img4 from "../../assets/Images/Kamion1.jpeg";
import img5 from "../../assets/Images/inliner.jpeg";
import img6 from "../../assets/Images/wc_dugulas.jpg";
import img7 from "../../assets/Images/bemeres.jpg";
import img8 from "../../assets/Images/bemeres.jpg";

import { MdClose } from "react-icons/md";
import { useState } from "react";
import "./PageGallery.scss";

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
  ];

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <div className="page_gallery_main">
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
