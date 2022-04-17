import "./Gallery.scss";
import React from "react";

import img1 from "../../assets/Images/wc_dugulas.jpg";
import img2 from "../../assets/Images/company-cars.png";
import img3 from "../../assets/Images/company_house.png";
import img4 from "../../assets/Images/robot.jpg";
import img5 from "../../assets/Images/company_house.png";
import img6 from "../../assets/Images/bemeres.jpg";

import "bootstrap/dist/css/bootstrap.min.css";

import { Carousel } from "react-bootstrap";

export const Gallery = () => {
  const inter = 2500;

  return (
    <div className="gallery_main">
      <h1>Gallery</h1>
      <div className="gallery-images">
        <Carousel pause="false">
          <Carousel.Item interval={inter}>
            <img className="d-block" src={img1} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={inter}>
            <img className="d-block" src={img2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={inter}>
            <img className="d-block " src={img3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item interval={inter}>
            <img className="d-block " src={img4} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item interval={inter}>
            <img className="d-block " src={img5} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item interval={inter}>
            <img className="d-block " src={img6} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item interval={inter}>
            <img className="d-block " src={img3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};
