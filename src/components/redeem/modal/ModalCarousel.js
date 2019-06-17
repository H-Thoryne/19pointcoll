import React, { Component } from 'react';
import styled from "styled-components"
import MainImage from "./ModalImage";

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      img: ""
    }
  }

  componentWillMount = () => {
    this.setState({
      img: this.props.item.img
    })
  }

  handleClick = (e) => {
    this.setState({
      img: e.target.src
    })
  }

  render() {
    return (
      <Container>
        <MainImage src={this.state.img} />
        <SecondaryImages >
          <Image src={this.props.item.img} onClick={this.handleClick} alt="Secondary Image" />
          {
            this.props.item.imgSecondary.map((img, i) => {
              return <Image key={i} src={img} onClick={this.handleClick} alt="Secondary Image" />
            })
          }
        </SecondaryImages>
      </Container>
    )
  }
}

export default Carousel;

const Container = styled.div``;

const SecondaryImages = styled.div`
  display: flex;
  align-content: center;
  width: fit-content;
  margin: 10px auto 0 auto;
  box-sizing: border-box;

  &:hover{
    cursor: pointer;
  }
`;

const Image = styled.img`
  height: 75px;
  width: 75px;
  box-sizing: border-box;
  margin: 3px;
`;