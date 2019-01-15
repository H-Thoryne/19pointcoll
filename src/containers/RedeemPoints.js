import React, { Component } from "react"
import SimpleSlider from "../components/SimpleSlider"
import NaviButton from "../components/NaviButton"

import "../styles/RedeemPoints.scss"

class RedeemPoints extends Component {
  state = {
    low: [],
    mid: [],
    high: []
  }
  
  seededCountdown = (seed, startingAmount) => {
    const dateStart = "2019-01-10T0:0:0";
    const dateToday = new Date();
    const dateToEmpty = "2019-01-21T0:0:0";
    const daysUntilEmpty = Math.ceil((Date.parse(dateToEmpty) - Date.parse(dateStart)) / 86400000);
    /* const daysUntilEmpty = Math.ceil((Date.parse(dateToEmpty) - dateToday) / 86400000); */ /* 1000 * 3600 * 24 */
    const daysPassed = Math.floor((dateToday - Date.parse(dateStart)) / 86400000); /* 1000 * 3600 * 24 */

    let actual = startingAmount;

    let min = Math.round((startingAmount / daysUntilEmpty) - (startingAmount / 100));
    let max = Math.round((startingAmount / daysUntilEmpty) + (startingAmount / 100)) + 1;
    /* console.log("###############################################");
    console.log("days until empty: " + daysUntilEmpty);
    console.log("days passed: " + daysPassed);
    console.log("min: " + min);
    console.log("max: " + max);
    console.log("_______________________________________________"); */

    const seededRandom = (min, max) => {
      seed = (seed * 9301 + 49297) % 233280;
      const rnd = seed / 233280;

      return min + rnd * (max - min);
    }

    if (daysPassed > daysUntilEmpty) {
      actual = 0;
      console.log("0db - elfogyott");
    } else {
      /* console.log("starting: " + startingAmount) */
      for (let x = 0; x <= daysPassed; x++) {
        const result = Math.round((seededRandom(min, max)) - 0.5);
        actual -= result;

        if (actual < 0) {
          actual = 0;
          break;
        }

        /* console.log("rng: " + result + " stock: " + actual) */
      }
    }
    return actual;
  }

  /* Get the data from server. then send it off to get the amounts updated from 0 to their actual fake amounts. */
  componentDidMount() {
    fetch("https://api.myjson.com/bins/wqec8")
      .then(res => res.json())
      .then(json => this.setState({ low: json.low, mid: json.mid, high: json.high }, () => this.updateAmount()))
  }

  /* Iterates through all 3 arrays' elements to update the value of amountCurrent */
  updateAmount = () => {
    let low = this.state.low.map(item => ({ ...item, amountCurrent: this.seededCountdown(item.ln, item.amountAll) }))
    let mid = this.state.mid.map(item => ({ ...item, amountCurrent: this.seededCountdown(item.ln, item.amountAll) }))
    let high = this.state.high.map(item => ({ ...item, amountCurrent: this.seededCountdown(item.ln, item.amountAll) }))
    this.setState({ low: low, mid: mid, high: high })
  }

  render() {
    return (
      <div>
        <NaviButton to="/pontgyujtes" text="Fixme, I'm ugly" />
        <div>Beváltható pontjaid: 666</div>
        <div className="sliderWrapper-1">
          <SimpleSlider section="high" data={this.state.high} />
          <SimpleSlider section="mid" data={this.state.mid} />
          <SimpleSlider section="low" data={this.state.low} />
        </div>
      </div>
    );
  }
}

export default RedeemPoints;



