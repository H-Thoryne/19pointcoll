import React, { Component } from "react";
import Slider from "react-slick";
import Productcard from "./Productcard";

import "../../node_modules/slick-carousel/slick/slick.css";
// import "../../node_modules/slick-carousel/slick/slick-theme.css";

import "../styles/SimpleSlider.css";

export default class SimpleSlider extends Component {
  play = () => {
    this.slider.slickPlay();
  }
  pause = () => {
    this.slider.slickPause();
  }

  render() {
    const settings = {
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: false,
      dots: false,
      swipeToSlide: true,
      lazyLoad: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };

    let amount;
    switch (this.props.section) {
      case "high":
        amount = "100+"
        break;
      case "mid":
        amount = "20-50"
        break;
      case "low":
        amount = "10-20"
        break;
      default:
        amount = "ERROR"
    }

    return (
      <div className="simple-slider">
        <div className="simple-slider__title">{amount} pont</div>
        <div>Összesen {this.props.data.length} termék</div>
        <Slider ref={slider => (this.slider = slider)} {...settings} className="slider">
          {
            this.props.data.map(function (item, i) {
              return <Productcard key={i} item={item} />
            })
          }
        </Slider>
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

const NextArrow = (props) => {
  return (
    <div className={props.className} onClick={props.onClick} >
      Next
    </div>
  );
};


const PrevArrow = (props) => {
  return (
    <div className={props.className} onClick={props.onClick} >
      prev
    </div>
  );
};