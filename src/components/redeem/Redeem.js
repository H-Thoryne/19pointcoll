import React, { Component } from "react"
// import PropTypes from "prop-types"
import { connect } from "react-redux"
import { fetchProducts } from "../../actions/productActions"


import Products from "./products/Products"
import WeekendProducts from "./products/WeekendProducts"
import ChangeView from "./ChangeView"
// import NaviButton from "../layout/NaviButton"

import styled from "styled-components"

class RedeemPoints extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    const { high, mid, low, weekend, loading } = this.props.products
    // const { acquiredPoints } = this.props.ip
    return (
      <Redeem>
        <Spacer />
        {/* <NaviButton to="/pontgyujtes" text="Vissza a pontgyűjtéshez" /> */}
        <ChangeView />
        {
          window.weekendOffer === true
            ? <WeekendProducts section="weekend" loading={loading} data={weekend} />
            : null
        }
        <Products section="high" loading={loading} data={high} />
        <Products section="mid" loading={loading} data={mid} />
        <Products section="low" loading={loading} data={low} />
      </Redeem>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
  ip: state.ip
})

export default connect(mapStateToProps, { fetchProducts })(RedeemPoints);

const Redeem = styled.div`
  position: relative;
`;

const Spacer = styled.div`
padding-top: 60px
`;