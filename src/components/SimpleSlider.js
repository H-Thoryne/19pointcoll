import React, { Component } from "react";
import Slider from "react-slick";
import Productcard from "./Productcard";

import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import "../style/SimpleSlider.css";

class SimpleSlider extends Component {
  play = () => {
    this.slider.slickPlay();
  }
  pause = () => {
    this.slider.slickPause();
  }

  render() {
    var settings = {
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: false,
      dots: true,
      swipeToSlide: true,
      lazyLoad: true,
      // responsive: [
      //   {
      //     breakpoint: 600,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //       infinite: true,
      //       dots: true
      //     }
      //   }
      // ]
    };

    return (
      <div>
        <Slider ref={slider => (this.slider = slider)} {...settings} className="sliderWrapper-2">
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
        </Slider>
        <br></br>
        <div style={{ textAlign: "center" }}>
          <button className="button" onClick={this.play}>
            Play
          </button>
          <button className="button" onClick={this.pause}>
            Pause
          </button>
        </div>
      </div>
    );
  }
}

export default SimpleSlider;