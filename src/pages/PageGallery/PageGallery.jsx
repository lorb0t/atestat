import img1 from "../../assets/Images/cleaning.png";
import img2 from "../../assets/Images/szenyviz_szippantas.png";
import img3 from "../../assets/Images/Remediere_conducta_fara_sapare_Inliner.jpg";
import img4 from "../../assets/Images/robot.jpg";
import img5 from "../../assets/Images/pierdere-apa-1-compressor.jpg";

import img6 from "../../assets/Images/pierdere-apa-2-compressor.jpg";
import img7 from "../../assets/Images/ultra_sonic.jpg";
import img8 from "../../assets/Images/Localizare_spartura_pe_conducta_de_apa_DN63.jpg";

import img9 from "../../assets/Images/shortliner1.png";
import img10 from "../../assets/Images/shortliner_wood_cut.png";
import img11 from "../../assets/Images/inliner.png";

import img13 from "../../assets/Images/camera2.png";
import img14 from "../../assets/Images/robot_trip.png";

import img15 from "../../assets/Images/Akna_takaritas_elott.jpg";
import img17 from "../../assets/Images/Akna_takaritas_utan.jpg";

import img18 from "../../assets/Images/Kamion_munka.jpg";
import img19 from "../../assets/Images/Kamion_1.jpg";
import img20 from "../../assets/Images/Kamion_ejjszakai_munka.jpg";

import img21 from "../../assets/Images/Acel_vizcso_toldas_PE.jpg";
import img22 from "../../assets/Images/company-cars.png";
import img23 from "../../assets/Images/Exemplu_montaj_conducta_de_scurgere_DN110_necorespunzatoare_.jpg";
import img24 from "../../assets/Images/foto1.jpg";
import img25 from "../../assets/Images/kamion_es_ford.jpg";
import img26 from "../../assets/Images/Iszap_kiurites_Kamion.jpg";
import img27 from "../../assets/Images/Kamion_es_videos_auto.jpg";
import img28 from "../../assets/Images/kamion_repuloter.jpg";
import img29 from "../../assets/Images/Pipe_cutter.jpg";
import img30 from "../../assets/Images/Segment_de_conducta_de_apa_DN63_remediata.jpg";
import img31 from "../../assets/Images/Spartura_conducta_de_apa_DN63.jpg";
import img32 from "../../assets/Images/Spartura_conducta_de_apa_dupa_localizare_si_sapare_DN63.jpg";
import img33 from "../../assets/Images/Spartura_de_apa_localizata_2.jpg";
import img34 from "../../assets/Images/Spartura_de_apa_remediata_prin_electrofuziune.jpg";
import img35 from "../../assets/Images/vizcso_lerakodas.jpg";
import img36 from "../../assets/Images/Vizcso_folyas1.jpg";
import img37 from "../../assets/Images/video_panel.png";
import img38 from "../../assets/Images/cars_above.png";

import corner from "../../assets/Images_for_web/pngkit_cobweb-png_954802.png";

import { useEffect } from "react";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import "./PageGallery.scss";
import { useTranslation } from "react-i18next";

export const PageGallery = () => {
  let pictures = [
    {
      imgSrc: img34,
    },
    {
      imgSrc: img35,
    },
    {
      imgSrc: img36,
    },
    {
      imgSrc: img37,
    },
    {
      imgSrc: img38,
    },
    {
      imgSrc: img23,
    },
    {
      imgSrc: img24,
    },
    {
      imgSrc: img25,
    },
    {
      imgSrc: img26,
    },
    {
      imgSrc: img27,
    },
    {
      imgSrc: img28,
    },
    {
      imgSrc: img29,
    },
    {
      imgSrc: img30,
    },
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
      imgSrc: img11,
    },

    // {
    //   imgSrc: img12,
    // },
    {
      imgSrc: img13,
    },
    {
      imgSrc: img14,
    },
    {
      imgSrc: img15,
    },
    // {
    //   imgSrc: img16,
    // },
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
      imgSrc: img31,
    },
    {
      imgSrc: img32,
    },
    {
      imgSrc: img33,
    },
  ];

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  useEffect(() => {
    setTimeout(() => {
      console.log("ran");
      return window.scrollTo(0, 0);
    }, 1000);
  }, []);

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
