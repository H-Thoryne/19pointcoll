import React, { Component } from "react"
import Slider from "react-slick"
import Productcard from "./Productcard"

import "../../node_modules/slick-carousel/slick/slick.css"

import "../styles/SlickSlider.scss"
import styled from "styled-components"

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: [],
      min: 0,
      max: 0
    }
  }

  /* !FIXME: This sucks. Gets called like a billion times, find a way to update state only once, after all props have been received */
  componentWillReceiveProps = () => {
    for (let i = 0; i < this.props.data.length; i++) {
      this.setState(prevState => ({
        arr: [...prevState.arr, this.props.data[i].pricePoints]
      }), () => this.logstuff())
    }
  }

  logstuff = () => {
    this.setState({ min: Math.min.apply(null, this.state.arr) })
    this.setState({ max: Math.max.apply(null, this.state.arr) })
  }

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

    return (
      <SliderContainer>
        <Header>{this.state.min} - {this.state.max} pont</Header>
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
    width: 30%;
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