import React, { Component } from 'react'

import Modal from "../modal/Modal"

import styled from "styled-components"

class CarouselProductcard extends Component {
  state = {
    isOpen: false,
  }

  openModal = () => {
    this.setState({
      isOpen: true
    });
  }

  closeModal = () => {
    this.setState({
      isOpen: false
    });
  }

  render() {
    const item = this.props.item;

    return (
      <>
        <Container carouselView={this.props.carouselView} philips={this.props.philips} calendar={this.props.calendar} onClick={(this.openModal)}>
          <Header philips={this.props.philips} calendar={this.props.calendar}>
            <Price>{item.pricePoints} pont</Price>
            <Price huf>{item.priceHUF} Ft</Price>
          </Header>
          {
            (!item.available && this.props.calendar) ? <OutOfStock>ELFOGYOTT</OutOfStock> : null
          }
          <Image src={item.img} alt="Product Image" />
          <Name>{item.name}</Name>
        </Container>
        {
          this.state.isOpen
            ? <Modal onClose={this.closeModal} item={item} isAvailable={item.isAvailable} />
            : null
        }
      </>
    );
  }
}

export default (CarouselProductcard)

const Container = styled.div`
  position: relative;
  width: ${props => (props.philips || props.calendar) ? "250px" : "190px"};
  min-width: 190px;
  height: 293px;
  /* margin: 25px 30px; */
  margin: ${props => props.carouselView ? "25px 0px 25px 15px" : "25px 15px"};
  overflow: hidden;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
  transition: 0.2s all ease;

  box-sizing: border-box;
  
  &:hover {
    box-shadow: 0px 5px 10px 5px rgba(0, 0, 0, 0.2);
    transform: scale(1.02, 1.02);
    transition: 0.2s all ease;
    cursor: pointer;
  }
`;

const Header = styled.div`
  background: ${props => (props.philips || props.calendar) ? "#40B3C4" : "#59C3B2"};
  padding: 5px 0;
`;

const Price = styled.div`
  font-size: ${props => props.huf ? "14px" : "16px"};
  font-weight: ${props => props.huf ? "300" : "700"};
  margin-bottom: ${props => props.huf ? null : "3px"};
  text-align: center;
  color: white;
`;

const Image = styled.img`
  display: block;
  height: 190px;
  width: 190px;
  margin: 0 auto;
`;

const OutOfStock = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  padding: 3px 0;
  color: white;
  background-color: red;
`;

const Name = styled.div`
  margin-top: 10px;
  padding: 0 3px;
  font-size: 14px;
  font-weight: bold;
  height: 34px;
  text-align: center;
`;

/* const Text = styled.div`
  margin: 10px 0 10px 5px;
  text-align: center;
`; */