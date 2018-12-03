import React, { Component } from "react"

//Redux
import { bindActionCreators } from 'redux';
import { connect } from "react-redux"
import fetchIpPoints from "./actions/ipActions"

//Navigation
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import PointCollection from "./components/PointCollection"
import RedeemPoints from "./components/RedeemPoints";

class App extends Component {
  componentDidMount = () => {
    const ipPoints = window.rIP;
    //console.log(ipPoints);
    this.props.fetchIpPoints(ipPoints);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app-container">
        <h1>Catchy title on the image</h1>
        <img src="http://placekitten.com/750/350" alt="hero"/>
          <div>
            <NavLink to="/pontgyujtes">Point Collection </NavLink>
            <NavLink to="/pontbevaltas">Redeem Points</NavLink>
          </div>
          <Switch>
            <Route exact path="/" component={PointCollection} />
            <Route path="/pontgyujtes" component={PointCollection} />
            <Route path="/pontbevaltas" component={RedeemPoints} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ipPoints: state.ipPoints
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchIpPoints }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

