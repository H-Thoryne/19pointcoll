import React, { Component } from "react"
import { HashRouter, Route, Switch } from "react-router-dom";

import PointCollection from "./containers/PointCollection"
import RedeemPoints from "./containers/RedeemPoints";
import Accordion from "./components/Accordion"

import styled from "styled-components"

require('dotenv').config()

class App extends Component {
  render() {
    return (
      <HashRouter>
        <AppContainer>
          <img src="http://www.avon.hu/REPSuite/static/_minisites/19pointcollection/img/banner.jpg" alt="Banner" />
          <Switch>
            <Route exact path="/" component={PointCollection} />
            <Route path="/pontgyujtes" component={PointCollection} />
            <Route path="/pontbevaltas" component={RedeemPoints} />
          </Switch>
          <Accordion />
        </AppContainer>
      </HashRouter>
    );
  }
}

export default App;

const AppContainer = styled.div`
  font-family: "Roboto", sans-serif !important;
  font-weight: normal;
  font-size: 14px;
  line-height: 1.2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  text-align: initial;

  /* color: #444444; */
  color: #646464;

  box-sizing: border-box;
  
  list-style: none;
`;