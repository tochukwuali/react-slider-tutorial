import React from "react";

import Slider from "react-slick";
import image01 from "../assets/images/pexels-jeremy-bishop-2922672.jpg";
import image02 from "../assets/images/pexels-boys-in-bristol-photography-10528234.jpg";
import image03 from "../assets/images/pexels-chris-10666527.jpg";
import image04 from "../assets/images/pexels-joyston-judah-933054.jpg";
import image05 from "../assets/images/pexels-mirco-violent-blur-4072840.jpg";
import image06 from "../assets/images/pexels-tatiana-syrikova-3933881.jpg";
import image07 from "../assets/images/pexels-quang-nguyen-vinh-2649403.jpg";
import image08 from "../assets/images/pexels-walid-ahmad-1509582.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 6,
  autoplay: true,
  speed: 80000,
  autoplaySpeed: 1000,
  cssEase: "linear",
};

const PictureSlide = () => {
  return (
    <section>
      <div className="gallery">
        <h3 className="header">Image Gallery</h3>
      </div>
      <Slider {...settings} className="">
        <div className="image-container">
          <img src={image01} alt="" className="carousel-img" />
        </div>
        <div className="image-container">
          <img src={image02} alt="" className="carousel-img" />
        </div>
        <div className="image-container">
          <img src={image03} alt="" className="carousel-img" />
        </div>
        <div className="image-container">
          <img src={image04} alt="" className="carousel-img" />
        </div>
        <div className="image-container">
          <img src={image05} alt="" className="carousel-img" />
        </div>
        <div className="image-container">
          <img src={image06} alt="" className="carousel-img" />
        </div>
      </Slider>
    </section>
  );
};

export default PictureSlide;
