import React, { Component } from 'react';
import ReactDOM from "react-dom"

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
    let str = String(item.ln);
    /* Can it be done in an even more complicated way?  Regex for "1234 5" ln format. */
    let ln_partone = str.match(/\d{4}/);
    let ln_parttwo = str.match(/\d$/);
    return ReactDOM.createPortal(
      <div className="modal__background" onClick={this.handleClick}>
        <div className="modal__body" ref={node => this.node = node} >
          <div className="modal-lc">
            {
              item.img_alt.length > 0 ? <ImageCarousel item={item} /> : <SingleImage item={item} />
            }
          </div>
          <div className="modal-rc">
            <div className="modal-rc__close-x" onClick={this.props.onClose}></div>
            <div className="modal-rc__name">{item.name}</div>
            <div className="modal-rc__description">{item.description}</div>
            <div className="modal-rc__ln">Cikkszám: {ln_partone} {ln_parttwo}</div>
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
        <img src={this.state.mainImg} alt="MainProduct" className="modal-lc__main-image" />
        <div className="modal-lc__carousel-container">
          {img_alt.map((img, i) => {
            return <img className="modal-lc__carousel-item" key={i} src={img} onClick={this.handleClick} alt="AltProduct" />
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
      <img src={img} alt="SingleImage" className="modal-lc__main-image" />
    )
  }
}


/*const startingAmount = 30;
const ln = 56123

const dateToday = new Date().getDay();
const dateToEmpty = new Date().getDay() + 30;

const daysUntilEmpty = dateToEmpty - dateToday;
const daysPassed = 30; //startdate - today

let seed = ln;
let actual = startingAmount;

let debugMin = Math.round((startingAmount / daysUntilEmpty) - (startingAmount / 100))
let debugMax = Math.round((startingAmount / daysUntilEmpty) + (startingAmount / 100)) + 1
console.log("_______________________________________________")
console.log("debugMin: " + debugMin)
console.log("debugMax: " + debugMax)

const seededRandom = (min, max) => {
  seed = (seed * 9301 + 49297) % 233280;
  const rnd = seed / 233280;

  return min + rnd * (max - min);
}

if (daysPassed > daysUntilEmpty) {
  actual = 0;
  console.log("0db - elfogyott")
} else {
  for (x = 0; x <= daysPassed; x++) {
    const result = Math.round((seededRandom(debugMin, debugMax))-0.5)
    actual -= result

    if (actual < 0) {
      actual = 0
    }

    console.log("rng: " + result)
    console.log("stock: " + actual)
  }
}*/