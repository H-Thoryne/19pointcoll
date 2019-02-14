
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changeView } from "../../actions/viewActions"

import styled from "styled-components"

class ChangeView extends Component {
  render() {
    return (
      <Wrapper onClick={this.props.changeView}>
        <Squares >
          <Row>
            <Square></Square>
            <Square></Square>
            <Square lastColumn></Square>
          </Row>
          <Row>
            <Square></Square>
            <Square></Square>
            <Square lastColumn></Square>
          </Row>
          <Row>
            <Square></Square>
            <Square></Square>
            <Square lastColumn></Square>
          </Row>
        </Squares>
        <Rectangles>
          <Rectangle></Rectangle>
          <Rectangle></Rectangle>
          <Rectangle lastRow></Rectangle>
        </Rectangles>
      </Wrapper>
    )
  }
}

export default connect(null, { changeView })(ChangeView)

const Wrapper = styled.div`
height: 30px;
width: 100px;
display: flex;
background: blue;
`;

const Square = styled.div`
  height: 6px;
  width: 6px;
  background: black;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25px;
`;

const Squares = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 30px;
  
  &:hover ${Square}{
    background: red;
  }
`;

const Rectangle = styled.div`
  height: 6px;
  width: 25px;
  background: black;
`;

const Rectangles = styled.div`
display: flex;
flex-wrap: wrap;

height: 30px;
width: 30px;
margin: 0;
padding: 0;

  &:hover ${Rectangle}{
    background: red;
  }
`;