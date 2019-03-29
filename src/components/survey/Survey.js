
import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkLocalStorage } from '../../actions/surveyActions'

import Products from './Products'

import styled from 'styled-components'

export class Test extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  componentDidMount = () => {
    this.props.checkLocalStorage()
  }

  clearStorage = () => {
    localStorage.clear()
  }

  render() {
    let voteContent

    if (this.props.status === "notyetvoted") {
      voteContent =
        <Products />
    } else if (this.props.status === "alreadyvoted") {
      voteContent =
        <Message>Ebben a hónapban már játszottál. <br></br> Látogass vissza a következő kampányban!</Message>
    } else if (this.props.status === "freshlyvoted") {
      voteContent =
        <Message>Köszönjük, hogy részt veszel játékunkban!</Message>
    }

    return (
      <div>
        <Title>Gyere és játssz velünk!</Title>
        <Description>
          Az alábbi termékek közül jelölj meg legalább egyet, amelyet a következő kampányok során a választható termékek közé sorolhatunk. Kattints a termékekre a kiválasztáshoz, majd az oldal alján taláható Elküldés gombbal véglegesítsd a szavazatodat!
        </Description>
        <>{voteContent}</>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  status: state.survey.status
})

const mapDispatchToProps = {
  checkLocalStorage
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)

const Title = styled.div`
  font-size: 26px;
  font-weight:500;
  margin: 30px 0;
  text-align: center;
  color:#ff336d;
`;

const Description = styled.div`
  margin: 40px 60px;
  text-align: justify;
  line-height: 1.3;
`;

const Message = styled.div`
  font-size:22px;
  font-weight: bold;
  margin: 40px 0;
  text-align: center;
`;