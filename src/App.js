import React, { Component } from "react"
import Accordion from "./components/Accordion"

//Navigation
import { HashRouter, Route, NavLink, Switch } from "react-router-dom";
import PointCollection from "./PointCollection"
import RedeemPoints from "./RedeemPoints";
import "./banner.jpg"

import "./styles/App.scss"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ipPoints: {},
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
            <img src="http://www.avon.hu/REPSuite/static/_minisites/19pointcollection/img/banner.jpg" alt="hero" />
            {/* <img src={require("./banner.jpg")} alt="banner" /> */}
          </div>

          <div className="navLinks">
            <NavLink to="/pontgyujtes">Point Collection</NavLink>
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