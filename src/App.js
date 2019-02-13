import React, { Component } from 'react'
import { Provider } from "react-redux"

import Accordion from "./components/layout/Accordion"
import Landing from "./components/layout/Landing"

import store from './store'

import styled from "styled-components"

require('dotenv').config()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer>
          <Banner src="http://www.avon.hu/REPSuite/static/_minisites/19pointcollection/img/banner.jpg" alt="Banner" />
          <Landing />
          <Accordion />
        </AppContainer>
      </Provider>
    );
  }
}

export default App

const Banner = styled.img`
`;

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