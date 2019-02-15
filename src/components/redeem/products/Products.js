
import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Slider from "react-slick"
import ProductCard from "./Product"
import Spinner from "./Spinner"

import "../../../../node_modules/slick-carousel/slick/slick.css"
import "../../../styles/SlickSlider.scss"

import styled from "styled-components"

export class Products extends Component {
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
    const { isCarousel } = this.props.isCarousel

    let sliderContent;
    let min = 0;
    let max = 0;

    if (data === null || loading) {
      sliderContent = <Spinner />
    } else {
      let array = [];
      for (let i = 0; i < data.length; i++) {
        array.push(data[i].pricePoints)
      }
      min = Math.min.apply(null, array)
      max = Math.max.apply(null, array)

      if (!isCarousel) {
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
        <Header>{min} - {max} pont</Header>
        {sliderContent}
      </ProductsContainer>
    );
  }
}


const mapStateToProps = (state) => ({
  isCarousel: state.isCarousel
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Products)

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