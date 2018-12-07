import React, { Component } from 'react';
import ReactDOM from "react-dom"

import "../styles/Modal.css"

export default class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemAmount: 1,
    }
  }

  modalRoot = document.getElementById('modal-root')
  handleOrder = (ln, campNr, amount) => {
    window.processOrder(ln, campNr, amount);
  }

  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      return;
    }
    console.log("closing")
    this.props.onClose()
  }

  render() {
    const item = this.props.item;
    return ReactDOM.createPortal(
      <div onClick={this.handleClick} className="modal-background">
        <div className="modal" ref={node => this.node = node} >
          <div className="modal-left">
            {
              item.img_alt.length > 0 ? <ImageCarousel item={item} /> : <SingleImage item={item} />
            }
          </div>
          <div className="modal-right">
            <div className="modal-right__close-x" onClick={this.props.onClose}></div>
            <div className="modal-right__product-name">{item.name}</div>
            <div className="modal-right__product-ln">{item.ln}</div>
            <div className="modal-right__product-description">{item.description}</div>
            <button onClick={() => this.handleOrder(item.ln, this.state.itemAmount)}>Megrendel</button>
          </div>
        </div>
      </div>,
      this.modalRoot,
    )
  }
}

class ImageCarousel extends Component {
  state = {
    mainImg: "",
  }

  // Set default main image to first of secondary images
  componentDidMount = () => {
    this.setState({
      mainImg: this.props.item.img_alt[0]
    })
  }

  // Change main image src to clicked one
  handleClick = (e) => {
    this.setState({
      mainImg: e.target.src
    })
  }

  render() {
    const img_alt = this.props.item.img_alt
    return (
      <div className="modal-left__carousel">
        <img src={this.state.mainImg} alt="MainProduct" className="modal-left__main-image" />
        <div className="modal-left__carousel__secondary-container">
          {img_alt.map((img, i) => {
            return <img key={i} src={img} onClick={this.handleClick} alt="AltProduct" className="modal-left__carousel__secondary-image" />
          })}
        </div>
      </div>
    );
  }
}

class SingleImage extends Component {
  render() {
    const img = this.props.item.img
    return (
      <img src={img} alt="SingleImage" className="modal-left__main-image" />
    )
  }
}