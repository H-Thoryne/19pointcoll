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
    let formatted_ln = String(item.ln).match(/\d{4}/) + " " + String(item.ln).match(/\d$/)

    /* Portal for the modal window outside the original React #root to make sure it's actually the topmost element */
    return ReactDOM.createPortal(
      <Container onClick={this.handleClick}>
        <Body ref={node => this.node = node} >
          <LeftContent >
            {
              /* Only render the ImageCaroousel if there are secondary images available */
              item.img_alt.length > 0 ? <Carousel item={item} /> : <MainImage src={item.img} />
            }
          </LeftContent>
          <RightContent>
            <div className="rc-close" onClick={this.props.onClose} />
            <div className="rc-name">{item.name}</div>
            <div className="rc-description">{item.description}</div>
            <div className="rc-ln">Cikkszám: {formatted_ln}</div>
            <div className="rc-price">{item.price_points} pont és {item.price_huf} Ft</div>
            <button onClick={() => this.handleOrder(item.ln, window.campaignVal_sixdigit, this.state.itemAmount)}>Megrendel</button>
          </RightContent>
        </Body>
      </Container>,
      this.modalRoot,
    )
  }
}

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9995;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);

  /* font-family: "Helvetica Neue LT Pro" !important; */
  font-family: "Roboto", sans-serif !important;
  font-weight: normal;
  font-size: 14px;
  line-height: 1.2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  text-align: initial;

  /* color: #444444; */
  color: #646464;

  box-sizing: border-box;

  list-style: none;
`;

const Body = styled.div`
  background: white;
  position: absolute;
  float: left;
  width: 840px;
  height: 470px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  display: flex;
  overflow: hidden;
`;

const LeftContent = styled.div`
  flex: 50%;
  padding: 20px;
`;

const RightContent = styled.div`
  flex: 50%;
  padding: 20px;
  background: whitesmoke;
  position: relative;

  .rc-close {
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
  }

  .rc-name {
    font-size: 24px;
    font-weight: 300;
    margin: 60px 0 30px 0;
  }

  .rc-description {
    height: 135px;
    border: 1px solid red;
  }

  .rc-ln {
    margin: 30px 0;
  }
`;