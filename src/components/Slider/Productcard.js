import React, { Component } from "react"

import Modal from "../Modal/Modal"
// import Badge from "./Badge"

import styled from "styled-components"

class ProductCard extends Component {
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
      <React.Fragment>
        <Container onClick={this.openModal}>
          <Header>
            <Price>{item.pricePoints} pont</Price>
            <Price huf>{item.priceHUF} Ft</Price>
          </Header>
          {
            // ! Badge
            /* !item.isAvailable
              ? <Badge text="Elfogyott" bgColor="#6d0854" />
              : isNaN(item.amountCurrent)
                ? <Badge text="Utolsó darabok!" bgColor="#d42929" />
                : null */
          }
          <Image src={item.img} alt="Product Image" />
          <Name>{item.name}</Name>
          {
            // ! Bottom counter
            /* !item.isAvailable
              ? <Text>Elfogyott</Text>
              : isNaN(item.amountCurrent)
                ? <Text>{item.amountCurrent}</Text>
                : <Text>{item.amountCurrent} db</Text> */
          }
        </Container>
        {
          this.state.isOpen
            ? <Modal onClose={this.closeModal} item={item} isAvailable={item.isAvailable} />
            : null
        }
      </React.Fragment>
    );
  }
}

export default ProductCard;

const Container = styled.div`
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
  margin-bottom: ${props => props.huf ? null : "3px"};
  text-align: center;
  color: white;
`;

const Image = styled.img`
  height: 190px;
  width: 190px;

`;

const Name = styled.div`
  margin: 10px 0 10px 5px;
  font-size: 14px;
  font-weight: bold;
  height: 34px;
  text-align: center;
`;

/* const Text = styled.div`
  margin: 10px 0 10px 5px;
  text-align: center;
`; */