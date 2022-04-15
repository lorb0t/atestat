import "./Gallery.scss";
import img1 from "../../assets/Images/cctv-pipe.png";
import img2 from "../../assets/Images/company-cars.png";
import img3 from "../../assets/Images/company_house.png";
import img4 from "../../assets/Images/robot.jpg";
import img5 from "../../assets/Images/company_house.png";
import img6 from "../../assets/Images/bemeres.jpg";

export const Gallery = () => {
  return (
    <div className="gallery_main">
      <div className="gallery-images">
        <img src={img1} alt="asd" />
        <img src={img2} alt="ads" />
        <img src={img5} alt="asd" />
        <img src={img4} alt="asd" />
        <img src={img3} alt="asd" />
        <img src={img6} alt="ads" />
      </div>
    </div>
  );
};
