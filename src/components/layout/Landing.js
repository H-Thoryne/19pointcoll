import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { HashRouter, Route, Switch } from "react-router-dom";

import { fetchPoints } from '../../actions/ipActions'

import Collection from "../collection/Collection"
import Redeem from "../redeem/Redeem";
import Survey from '../survey/Survey'

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
          <Route exact path="/" component={Collection} />
          <Route path="/pontgyujtes" component={Collection} />
          <Route path="/pontbevaltas" component={Redeem} />
          <Route path="/szavazas" component={Survey} />
        </Switch>
      </HashRouter>
    )
  }
}

const mapStateToProps = (state) => ({
  ip: state.ip
})

export default connect(mapStateToProps, { fetchPoints })(Landing)
