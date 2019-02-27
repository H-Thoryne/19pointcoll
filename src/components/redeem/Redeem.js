import React, { Component } from "react"
// import PropTypes from "prop-types"
import { connect } from "react-redux"
import { fetchProducts } from "../../actions/productActions"


import Products from "./products/Products"
import ChangeView from "./ChangeView"
import NaviButton from "../layout/NaviButton"

import styled from "styled-components"

class RedeemPoints extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    const { high, mid, low, loading } = this.props.products
    const { acquiredPoints } = this.props.ip
    return (
      <Redeem>
        <Table>
          <Label>Beváltható pontjaid</Label>
          <Content>{acquiredPoints}</Content>
        </Table>
        <Spacer />
        <NaviButton to="/pontgyujtes" text="Vissza a pontgyűjtéshez" />
        <ChangeView />
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

const Table = styled.div`
  padding: 20px;
  text-align: center !important;
  box-shadow: 0px 10px 40px 1px rgba(0, 0, 0, 0.3);
  background: white;
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translate(-50%, 0);
`;

const Label = styled.div`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const Content = styled.div`
  font-size: 30px;
  font-weight: 100;
`;

const Spacer = styled.div`
padding-top: 60px
`;