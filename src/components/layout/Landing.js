import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchPoints } from '../../actions/ipActions'

import Collection from "../collection/Collection"

class Landing extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  componentDidMount = () => {
    this.props.fetchPoints()
  }

  render() {
    return (
      <Collection />
    )
  }
}

const mapStateToProps = (state) => ({
  ip: state.ip
})

export default connect(mapStateToProps, { fetchPoints })(Landing)
