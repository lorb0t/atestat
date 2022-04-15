import "./Gallery.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../assets/Images/AboveClouds.png";
import img2 from "../../assets/Images/apple.svg";
import img3 from "../../assets/Images/bemeres.jpg";
import img4 from "../../assets/Images/cctv-pipe.png";
import img5 from "../../assets/Images/cleaning.png";
import img6 from "../../assets/Images/company-cars.png";
import img7 from "../../assets/Images/company_house.png";
import img8 from "../../assets/Images/company_logo.png";
import img9 from "../../assets/Images/company_logo2.png";
import img10 from "../../assets/Images/cool-not-stolen-background-make-time-2hours.png";
import img11 from "../../assets/Images/totally-not-stolen-background2.png";
import img12 from "../../assets/Images/Kamion1.jpeg";

export const Gallery = () => {
  return (
    <div className="gallery_main">
      <Carousel
        className="carousel_main"
        dynamicHeight={false}
        centerMode={true}
        emulateTouch={true}
        showArrows={true}
      >
        <div>
          <img src={img1} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={img2} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={img3} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={img4} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={img5} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={img6} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={img7} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={img8} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={img9} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};
