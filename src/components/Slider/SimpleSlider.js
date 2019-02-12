import React from 'react'
import Slider from "react-slick"
import Productcard from "./Productcard"
import Spinner from "./Spinner"

import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../styles/SlickSlider.scss"

import styled from "styled-components"

export default function SimpleSlider(props) {
  const sliderSetting = {
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 750,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: false,
    dots: false,
    swipeToSlide: true,
    draggable: false,
    lazyLoad: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }
  const { data, loading } = props
  let sliderContent;
  let min = 0;
  let max = 0;

  if (data === null || loading) {
    sliderContent = <Spinner />
  } else {
    let array = [];
    for (let i = 0; i < props.data.length; i++) {
      array.push(props.data[i].pricePoints)
    }
    min = Math.min.apply(null, array)
    max = Math.max.apply(null, array)

    sliderContent =
      <Slider {...sliderSetting}>
        {
          props.data.map(function (item, i) {
            return <Productcard key={i} item={item} />
          })
        }
      </Slider>
  }

  return (
    <SliderContainer>
      <Header>{min} - {max} pont</Header>
      {sliderContent}
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  margin-top: 50px;
`;

const Header = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  width: 100%;
  margin: auto;

  &::before,
  &::after {
    content: "";
    height: 5px;
    width: 30%;
    background: #ff336d;
    margin: 0 30px 4px 30px;
    display: inline-block;
  }
`;

/* ARROWS */
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