import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner1 from '../../../Asset/Image/Banner/banner-1.jpg'
import banner2 from '../../../Asset/Image/Banner/banner-2.png'
import banner3 from '../../../Asset/Image/Banner/banner-3.jpg'
import './Banner.css'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  return (
    <Carousel className="carousel" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img  className="d-block w-100" src={banner1} alt="First slide" />
        <Carousel.Caption>
          <h3>Welcome To Horizon Travels.</h3>
          <p>Design Your Perfect Vocation.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  className="d-block w-100" src={banner2} alt="Second slide" />

        <Carousel.Caption>
          <h3>The ultimate guide</h3>
          <p>Your next adventure is waiting for you.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Discover story-worthy travel moments.</h3>
          <p>
            Travel the World Using the Power of Community.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
