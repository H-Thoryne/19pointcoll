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

  // Check if we clicked on modal content.
  // If not (for example black background), we close the modal.
  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      return;
    }
    this.props.onClose()
  }

  render() {
    const item = this.props.item;
    return ReactDOM.createPortal(
      <div onClick={this.handleClick} className="modal-bkg">
        <div className="modal" ref={node => this.node = node} >
          <div>
            <div>
              {
                item.img_alt.length > 0 ? <ImageCarousel item={item} /> : <SingleImage item={item} />
              }
            </div>
            <div>
              <div>{item.name}</div>
              <div>{item.ln}</div>
            </div>
          </div>
          <hr />
          <button onClick={() => this.handleOrder(item.ln, this.state.itemAmount)}>Megrendel</button>
          <button onClick={this.props.onClose}>Bezár</button>
        </div>
      </div>,
      this.modalRoot,
    )
  }
}

class ImageCarousel extends Component {
  render() {
    const img_alt = this.props.item.img_alt
    return (
      <div className="modal-carousel">
        <img src={img_alt[0]} alt="MainProduct" className="modal-carousel__main" />
        <div className="modal-carousel__container">
          {img_alt.map(function (img, i) {
            return <img key={i} src={img} alt="AltProduct" className="modal-carousel__carouselImg" />
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
      <img src={img} alt="SingleImage" className="modal-singleimage" />
    )
  }
}