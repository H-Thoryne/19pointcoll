import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { HashRouter, Route, Switch } from "react-router-dom";

import { fetchPoints } from '../../actions/ipActions'

import PointCollection from "../collection/PointCollection"
import RedeemPoints from "../redeem/RedeemPoints";

class Landing extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  componentDidMount = () => {
    this.props.fetchPoints()
  }

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={PointCollection} />
          <Route path="/pontgyujtes" component={PointCollection} />
          <Route path="/pontbevaltas" component={RedeemPoints} />
        </Switch>
      </HashRouter>
    )
  }
}

const mapStateToProps = (state) => ({
  ip: state.ip
})

export default connect(mapStateToProps, { fetchPoints })(Landing)
