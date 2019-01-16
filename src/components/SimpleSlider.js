import React, { Component } from "react"
import Slider from "react-slick"
import Productcard from "./Productcard"

import "../../node_modules/slick-carousel/slick/slick.css"

import "../styles/SlickSlider.scss"
import styled from "styled-components"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      autoplay: false,
      autoplaySpeed: 3000,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: false,
      dots: false,
      swipeToSlide: false,
      lazyLoad: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    }

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
      <SliderContainer>
        <Header>{amount} pont</Header>
        {/* <div>Összesen {this.props.data.length} termék</div> */}
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          {
            this.props.data.map(function (item, i) {
              return <Productcard key={i} item={item} />
            })
          }
        </Slider>
      </SliderContainer>
    );
  }
}

const SliderContainer = styled.div`
  margin-top: 50px;
`;

const Header = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  width: 100%;
  margin: auto;

  &::before,
  &::after {
    content: "";
    height: 5px;
    width: 35%;
    background: #ff336d;
    margin: 0 30px 4px 30px;
    display: inline-block;
  }
`;

const NextArrow = (props) => {
  return (
    <div className={props.className} onClick={props.onClick} >Next</div>
  );
};

const PrevArrow = (props) => {
  return (
    <div className={props.className} onClick={props.onClick} >Prev</div>
  );
};