import React, { Component } from 'react'
import ReactDOM from "react-dom"

import ImageSingle from "./ImageSingle"

import "../styles/Modal.scss"

export default class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemAmount: 1,
    }
  }

  modalRoot = document.getElementById('modal-root')
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
      <div className="modal__background" onClick={this.handleClick}>
        <div className="modal__body" ref={node => this.node = node} >
          <div className="modal-lc">
            {
              /* Only render the ImageCaroousel if there are secondary images available */
              item.img_alt.length > 0 ? <ImageCarousel item={item} /> : <ImageSingle item={item} />
            }
          </div>
          <div className="modal-rc">
            <div className="modal-rc__close-x" onClick={this.props.onClose}></div>
            <div className="modal-rc__name">{item.name}</div>
            <div className="modal-rc__description">{item.description}</div>
            <div className="modal-rc__ln">Cikkszám: {formatted_ln}</div>
            <div className="modal-rc__price">{item.price_points} pont és {item.price_huf} Ft</div>
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
      <div className="modal-lc__images">
        {/* <img src={this.state.mainImg} alt="MainProduct" className="modal-lc__main-image" /> */}
        <ImageSingle src={this.state.mainImg} />
        <div className="modal-lc__carousel-container">
          {img_alt.map((img, i) => {
            return <img className="modal-lc__carousel-item" key={i} src={img} onClick={this.handleClick} alt="AltProduct" />
          })}
        </div>
      </div>
    )
  }
}

/* class ImageSingle extends Component {
  render() {
    const img = this.props.item.img
    return (
      <img src={img} alt="SingleImage" className="modal-lc__main-image" />
    )
  }
} */