import React, { Component } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"

import Carousel from "./Carousel"
import MainImage from "./MainImage";

export default class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemAmount: 1,
    }
  }

  modalRoot = document.getElementById("modal-root")

  handleOrder = (ln, campNr, amount) => {
    window.processOrder(ln, campNr, amount)
  }

  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      return
    }
    console.log("Closing modal")
    this.props.onClose()
  }

  render() {
    const item = this.props.item

    /* Regex for "1234 5" ln format. Can it be done in an even more complicated way? */
    /* let formatted_ln = String(item.ln).match(/\d{4}/) + " " + String(item.ln).match(/\d$/) */

    /* Portal for the modal window outside the original React #root to make sure it's actually the topmost element */
    return ReactDOM.createPortal(
      <Container onClick={this.handleClick}>
        <Body ref={node => this.node = node} >
          <LeftContent >
            {
              /* Only render the ImageCarousel if there are secondary images available */
              item.imgSecondary.length > 0 ? <Carousel item={item} /> : <MainImage src={item.img} />
            }
          </LeftContent>

          <RightContent>
            <Close onClick={this.props.onClose} />
            <Name>{item.name}</Name>
            <Description>{item.description}</Description>
            <Prices>
              <Price>{item.pricePoints} pont</Price>
              <div>és</div>
              <Price>{item.priceHUF} Ft</Price>
            </Prices>
            <LineNumber>Cikkszám: {item.ln}</LineNumber>
            <PurchaseButton onClick={() => this.handleOrder(item.ln, window.campaignVal_sixdigit, this.state.itemAmount)}>Megrendelem</PurchaseButton>
          </RightContent>
        </Body>
      </Container >,
      this.modalRoot,
    )
  }
}

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 9995;

  /* font-family: "Helvetica Neue LT Pro" !important; */
  font-family: "Roboto", sans-serif !important;
  font-weight: normal;
  font-size: 14px;
  line-height: 1.3;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  text-align: initial;

  color: #646464;
  background-color: rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
  list-style: none;
`;

const Body = styled.div`
  width: 840px;
  height: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  float: left;
  display: flex;

  background: white;
  border-radius: 10px;
  overflow: hidden;
  transform: translate(-50%, -50%);
`;

const LeftContent = styled.div`
  flex: 50%;
  padding: 40px 20px;
`;

const RightContent = styled.div`
  flex: 50%;
  padding: 40px 20px;
  background: whitesmoke;
  position: relative;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

const Close = styled.div`
  position: absolute;
  background: lightgray;
  height: 30px;
  width: 30px;
  border-radius: 15px;
  right: 10px;
  top: 10px;
  cursor: pointer;
      
  ::before {
    content: "✕";
    position: absolute;
    font-size: 15px;
    margin: auto;
    left: 9px;
    top: 6px;
  }
`;

const Name = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin: 30px 0;
`;

const Description = styled.div`
  flex-grow: 0.8;
  margin-bottom: 20px;
`;

const LineNumber = styled.div`
  margin-bottom: 20px;
`;

const Prices = styled.div`
  div {
    display: inline-block;
    margin: 0px 3px;
  }
`;

const Price = styled.div`
  margin-bottom: 20px;
  display: inline-block;

  ::before{
    content: '${props => props.before}'
  }

  ::after{
    content: '${props => props.after}'
  }
`;

const PurchaseButton = styled.div`
  background: #FF336D;
  color: white;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: normal;
  text-decoration: none;
  text-align: center;
  cursor: pointer;

  padding: 10px 15px;
  border-radius: 5px;
  width: 250px;
  display: block;
  margin: auto;
`;