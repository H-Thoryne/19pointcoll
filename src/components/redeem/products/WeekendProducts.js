
import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Slider from "react-slick"
import ProductCard from "./Product"
import Spinner from "./Spinner"

import "../../../../node_modules/slick-carousel/slick/slick.css"
import "../../../styles/SlickSlider.scss"

import styled from "styled-components"

export class WeekendProducts extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  render() {
    const sliderSetting = {
      autoplay: false,
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

    const { data, loading } = this.props

    let sliderContent;

    if (data === null || loading || this.props.view.loading) {
      sliderContent = <Spinner />
    } else {
      if (!this.props.view.isCarousel) {
        sliderContent =
          <CardDump>
            {data.map((item, i) => {
              return <ProductCard carouselView={false} key={i} item={item} />
            })}
          </CardDump>
      } else {
        sliderContent =
          <Slider {...sliderSetting}>
            {
              data.map((item, i) => {
                return <ProductCard carouselView={true} key={i} item={item} />
              })
            }
          </Slider>
      }
    }

    return (
      <ProductsContainer>
        <Header>Hétvégi ajánlat</Header>
        {/* <Header>{min} - {max} pont</Header> */}
        {sliderContent}
      </ProductsContainer>
    );
  }
}


const mapStateToProps = (state) => ({
  view: state.view
})

export default connect(mapStateToProps, null)(WeekendProducts)

const CardDump = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: flex-start;
padding: 0 45px;
`;

const ProductsContainer = styled.div`
  margin-bottom: 50px;
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