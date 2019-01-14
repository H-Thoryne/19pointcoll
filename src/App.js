import React, { Component } from "react"
import Accordion from "./components/Accordion"

//Navigation
import { HashRouter, Route, NavLink, Switch } from "react-router-dom";
import PointCollection from "./PointCollection"
import RedeemPoints from "./RedeemPoints";
import "./banner.jpg"

import styled from "styled-components"
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
          <img src="http://www.avon.hu/REPSuite/static/_minisites/19pointcollection/img/banner.jpg" alt="hero" />
          <div className="navLinks">
            <NavLinkStyled to="/pontgyujtes">Point Collection</NavLinkStyled>
            <NavLinkStyled to="/pontbevaltas">Redeem Points</NavLinkStyled>
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

const NavLinkStyled = styled(NavLink)`
  color: red;
`;