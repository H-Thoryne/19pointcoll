import React, { Component } from "react"
import Modal from "./Modal/Modal"
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
        <Image src={this.props.item.img} onClick={this.openModal} alt="Product Image" />
        <Text>{this.props.item.name}</Text>
        <SubText>{this.props.item.price_points} pont</SubText>
        <SubText>{this.props.item.amountCurrent} db</SubText>
        {
          this.props.is_new ? (<Badge src="https://via.placeholder.com/80x80" alt="Badge" />) : null
        }
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
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.05);
  transition: 0.2s all ease;

  box-sizing: border-box;
  
  &:hover {
    box-shadow: 0px 5px 10px 5px rgba(0, 0, 0, 0.05);
    transform: scale(1.02, 1.02);
    transition: 0.2s all ease;
    cursor: pointer;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const Text = styled.div`
  margin: 10px 0 10px 5px;
  font-size: 14px;
  font-weight: bold;
`;

const SubText = styled.div`
  margin: 10px 0 10px 5px;
`;

const Badge = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 80px !important;
  width: 80px !important;
`;