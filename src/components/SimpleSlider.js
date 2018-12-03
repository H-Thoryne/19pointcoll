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
      dots: false,
      swipeToSlide: true,
      lazyLoad: true,
    };

    return (
      <div>
        <h1>Összesen {this.props.data.length} termék</h1>
        <Slider ref={slider => (this.slider = slider)} {...settings} className="sliderWrapper-2">{
          this.props.data.map(function (item, i) {
            return <Productcard key={i} item={item} />
          })
        }
        </Slider>
        <div>
          <br />
          <br />
          <div style={{ textAlign: "center" }}>
            <button className="button" onClick={this.play}>
              Play
          </button>
            <button className="button" onClick={this.pause}>
              Pause
          </button>
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default SimpleSlider;