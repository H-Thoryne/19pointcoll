import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../redeem/products/Spinner'

import Product from './Product'
import styled from "styled-components"

import { fetchSurveyProducts, toggleCheckmark, submitVotes } from '../../actions/surveyActions'

class Products extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  componentDidMount = () => {
    this.props.fetchSurveyProducts()
  }

  render() {
    const { votes, error, submitVotes, toggleCheckmark, products, loading, campcode } = this.props
    let surveyContent
    let errorMessage

    if (error.length !== 0) {
      errorMessage =
        <Error>{error}</Error>
    }

    if (products === null || loading) {
      surveyContent = <Spinner />
    } else {
      surveyContent =
        <>
          <ProductList>
            {products.map(item => {
              return (
                <Product onClick={() => toggleCheckmark(votes, item, error, products)} key={item.index}>
                  {item.isChecked ? <Product.Label>Kiválasztva</Product.Label> : null}
                  <Product.Image src={item.img} alt="Product" />
                  <Product.Name>{item.name}</Product.Name>
                </Product>
              )
            })}
          </ProductList>
          {
            errorMessage
              ? errorMessage
              : <EmptyError />
          }
          <SubmitButton onClick={() => submitVotes(votes, campcode)}>Elküldés</SubmitButton>
        </>
    }

    return (
      <>
        {surveyContent}
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.survey.products,
  votes: state.survey.votes,
  error: state.survey.error,
  loading: state.survey.loading,
  campcode: state.survey.campcode
})

const mapDispatchToProps = {
  fetchSurveyProducts,
  toggleCheckmark,
  submitVotes
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)

const ProductList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Error = styled.div`
  color: red;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

const EmptyError = styled.div`
  display: block;
  font-size: 16px;
  height: 19px;
`;

const SubmitButton = styled.button`
  background: #ff336d;
  color: white;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bolder;
  text-decoration: none;
  text-align: center;

border: none;
  padding: 10px 15px;
  border-radius: 5px;
  width: 280px;
  display: block;
  margin: 40px auto;
  transition: all 0.3s;
`;