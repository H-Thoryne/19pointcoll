import React, { Component } from "react"

import Modal from "./Modal/Modal"
import Badge from "./Badge";

import styled from "styled-components"

class Productcard extends Component {
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
    return (
      <ProductCard>
        <div onClick={this.openModal}>
          <Header>
            <Price>{this.props.item.pricePoints} pont</Price>
            <Price huf>{this.props.item.priceHUF} Ft</Price>
          </Header>
          {
            this.props.isNew ? null : null
          }
          <Image src={this.props.item.img} alt="Product Image" />
          <Name>{this.props.item.name}</Name>
          <Text center>- {this.props.item.amountCurrent} db -</Text>
        </div>
        {
          this.state.isOpen ? (<Modal onClose={this.closeModal} item={this.props.item} />) : null
        }
      </ProductCard>
    );
  }
}

export default Productcard;

const ProductCard = styled.div`
  position: relative;
  width: 190px;
  height: 100%;
  margin: 25px 0px 25px 15px;
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
  background: #59C3B2;
  padding: 5px 0;
`;

const Price = styled.div`
  font-size: ${props => props.huf ? "14px" : "16px"};
  font-weight: ${props => props.huf ? "300" : "700"};
  text-align: center;
  color: white;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const Name = styled.div`
  margin: 10px 0 10px 5px;
  font-size: 14px;
  font-weight: bold;
  height: 34px;
  text-align: center;
`;

const Text = styled.div`
  margin: 10px 0 10px 5px;
  text-align: ${props => props.center ? "center" : "inherit"};
`;

/* const Badge = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 80px !important;
  width: 80px !important;
`; */