import React, { Component } from 'react';
import ReactDOM from "react-dom"

import "../style/Modal.css"

class Modal extends Component {
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
          <div>{item.name}</div>
          <div>{item.ln}</div>
          <img src={item.img} alt="Product" />
          {item.img_alt.length > 0 ? (
            <div>{
              item.img_alt.map(function (img, i) {
                return <img key={i} src={img} />
              })
            }</div>
          ) : null}
          <hr />
          <button onClick={() => this.handleOrder(item.ln, 11, 1)}>Megrendel</button>
          <button onClick={this.props.onClose}>Bezár</button>
        </div>
      </div>,
      this.modalRoot,
    )
  }
}

export default Modal;