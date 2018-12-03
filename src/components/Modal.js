import React, { Component } from 'react';
import ReactDOM from "react-dom"

class Modal extends Component {
  componentDidMount() {
    this.modalTarget = document.createElement("div");
    this.modalTarget.className = "modal";
    document.body.appendChild(this.modalTarget);
    this._render();
  }

  componentDidUpdate() {
    this._render()
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.modalTarget)
    document.body.removeChild(this.modalTarget)
  }

  handleOrder = (ln, campNr, amount) => {
    window.processOrder(ln, campNr, amount);
  }

  _render() {
    if (this.props.isOpen === true) {
      ReactDOM.render(
        // <div>
        //   <button onClick={() => this.handleOrder(this.props.item.ln, 201801, 1)}> Click me </button>
        //   <div>Hullo!</div>
        //   <button onClick={() => this.props.closeModal}>Close me</button>
        // </div>,
        <div>{this.props.children}</div>,
        this.modalTarget
      )
    } else {
      ReactDOM.render(
        <div></div>,
        this.modalTarget
      )
    }
  }

  render() {
    return (
      <noscript />
    );
  }
}

export default Modal;