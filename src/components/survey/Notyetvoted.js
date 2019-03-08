import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from "styled-components"

import { fetchSurveyProducts, toggleCheckmark, submitVotes } from '../../actions/surveyActions'


export class Notyetvoted extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  componentDidMount = () => {
    this.props.fetchSurveyProducts()
  }

  render() {
    const { votes, error, submitVotes, toggleCheckmark, products } = this.props
    return (
      <>
        <ProductList>
          {products.map(item => {
            return (
              <Product onClick={() => toggleCheckmark(votes, item, error, products)} key={item.index}>
                {item.isChecked ? <div>checked</div> : null}
                <Image src={item.img} alt="Product" />
                <Name>{item.name}</Name>
              </Product>
            )
          })}
        </ProductList>
        <SubmitButton onClick={() => submitVotes(votes)}>Submit</SubmitButton>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.survey.products,
  votes: state.survey.votes,
  error: state.survey.error
})

const mapDispatchToProps = {
  fetchSurveyProducts,
  toggleCheckmark,
  submitVotes
}

export default connect(mapStateToProps, mapDispatchToProps)(Notyetvoted)

const ProductList = styled.div`

`;

const Product = styled.div`
  display: inline-block;
  user-select: none;
  margin: 10px;
`;

const Image = styled.img`
  height: 200px;
  width: 200px;
  pointer-events: none;
`;

const Name = styled.div`
  pointer-events: none;
  user-select: none;
`;

const SubmitButton = styled.button`

`;