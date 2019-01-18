import React, { Component } from "react"
import { HashRouter, Route, Switch } from "react-router-dom";

import PointCollection from "./containers/PointCollection"
import RedeemPoints from "./containers/RedeemPoints";
import Accordion from "./components/Accordion"

import styled from "styled-components"

class App extends Component {
  state = {
    ip: {}
  }

  componentWillMount() {
    fetch("https://api.myjson.com/bins/65zxs")
      .then(res => res.json())
      .then(data => this.setState({ ip: data }))
  }

  render() {
    return (
      <HashRouter>
        <AppContainer>
          <img src="http://www.avon.hu/REPSuite/static/_minisites/19pointcollection/img/banner.jpg" alt="Banner" />
          <Switch>
            <Route exact path="/" render={(routeProps) => <PointCollection {...routeProps} ip={this.state.ip} />} />
            <Route path="/pontgyujtes" render={(routeProps) => <PointCollection {...routeProps} ip={this.state.ip} />} />
            <Route path="/pontbevaltas" render={(routeProps) => <RedeemPoints {...routeProps} ip={this.state.ip} />} />
          </Switch>
          <Accordion />
        </AppContainer>
      </HashRouter>
    );
  }
}

export default App;

const AppContainer = styled.div`
  /* font-family: "Helvetica Neue LT Pro" !important; */
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