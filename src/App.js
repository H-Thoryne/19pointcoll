import React, { Component } from "react"
import Accordion from "./components/Accordion"

//Navigation
import { HashRouter, Route, NavLink, Switch } from "react-router-dom";
import PointCollection from "./PointCollection"
import RedeemPoints from "./RedeemPoints";
import "./banner.jpg"

import "./styles/App.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ipPoints: {},
    }
  }

  componentWillMount() {
    const hostname = window.location.hostname;
    let url;
    if (hostname === "www.avon.com") {
      url = "NotYetConfigured"
    } else {
      url = "https://api.myjson.com/bins/kaike"
    }
  }

  /*   componentDidMount = () => {
      this.setState({ ipPoints: window.rIP })
    } */

  render() {
    return (
      <HashRouter>
        <div className="app-container">

          <div>
            {/* <img src="http://placekitten.com/750/350" alt="hero" /> */}
            <img src={require("./banner.jpg")} alt="banner" />
          </div>

          <div className="navLinks">
            <NavLink to="/pontgyujtes">Point Collection </NavLink>
            <NavLink to="/pontbevaltas">Redeem Points</NavLink>
          </div>

          <Switch>
            <Route exact path="/" component={PointCollection} />
            <Route path="/pontgyujtes" component={PointCollection} />
            <Route path="/pontbevaltas" component={RedeemPoints} />
          </Switch>

          <Accordion />

        </div>
      </HashRouter>
    );
  }
}

export default App;