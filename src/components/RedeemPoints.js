import React, { Component } from 'react'
import SimpleSlider from './SimpleSlider'
import "../style/RedeemPoints.css"
import Modal from "./Modal"

class RedeemPoints extends Component {
  render() {
    return (
      <div>
        <h1>Redeem Points</h1>
        <div className="sliderWrapper-1">
          <div>---=== 100 pont ===---</div>
          <SimpleSlider />
          <div>---=== 20 - 50 pont ===---</div>
          <SimpleSlider />
          <div>---=== 10 - 20 pont ===---</div>
          <SimpleSlider />
        </div>
        <Modal>
          <h1>Hullo</h1>
          <p>This is modal</p>
        </Modal>
      </div>
    );
  }
}

export default RedeemPoints;