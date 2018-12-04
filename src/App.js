import React, { Component } from "react"
import Accordion from "./components/Accordion"

//Navigation
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import PointCollection from "./components/PointCollection"
import RedeemPoints from "./components/RedeemPoints";

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
      <BrowserRouter>
        <div className="app-container">
          <h1>Catchy title on the image</h1>
          <img src="http://placekitten.com/750/350" alt="hero" />
          <div>
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
      </BrowserRouter>
    );
  }
}

export default App;