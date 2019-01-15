import React, { Component } from 'react';
import styled from "styled-components"
import MainImage from "./MainImage";

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      img: ""
    }
  }

  componentWillMount = () => {
    this.setState({
      img: this.props.item.img_alt[0]
    })
  }

  handleClick = (e) => {
    this.setState({
      img: e.target.src
    })
  }

  render() {
    return (
      <ImageCarousel>
        <MainImage src={this.state.img} />
        <SecondaryImages >
          {
            this.props.item.img_alt.map((img, i) => {
              return <SecondaryImage key={i} src={img} onClick={this.handleClick} alt="Secondary Image" />
            })
          }
        </SecondaryImages>
      </ImageCarousel>
    )
  }
}

export default Carousel;

const ImageCarousel = styled.div``;

const SecondaryImages = styled.div`
  display: flex;
  align-content: center;
  width: fit-content;
  margin: auto;
  border: 1px solid red;
  box-sizing: border-box;
`;

const SecondaryImage = styled.img`
  height: 75px;
  width: 75px;
  box-sizing: border-box;
  margin: 3px;
`;