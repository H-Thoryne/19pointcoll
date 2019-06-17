import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchPoints } from '../../actions/ipActions'
import { fetchProducts } from "../../actions/productActions"

import Collection from "../collection/Collection"
import Redeem from "../redeem/Redeem"

class Landing extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  componentDidMount = () => {
    this.props.fetchPoints()
    this.props.fetchProducts()
  }

  render() {
    return (
      <>
        <Collection />
        <Redeem />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  ip: state.ip
})

export default connect(mapStateToProps, { fetchPoints, fetchProducts })(Landing)
