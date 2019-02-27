
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changeView } from "../../actions/viewActions"

import styled from "styled-components"

class ChangeView extends Component {
  render() {
    let isCarousel = this.props.isCarousel.isCarousel ? 1 : 0
    return (
      <Wrapper >
        <Text>Nézet váltása</Text>
        <Rectangles isActive={isCarousel} onClick={this.props.changeView}>
          <Rectangle isActive={isCarousel}></Rectangle>
          <Rectangle isActive={isCarousel}></Rectangle>
          <Rectangle isActive={isCarousel} lastRow></Rectangle>
        </Rectangles>
        <Squares isActive={isCarousel} onClick={this.props.changeView}>
          <Row>
            <Square isActive={isCarousel}></Square>
            <Square isActive={isCarousel}></Square>
            <Square isActive={isCarousel} lastColumn></Square>
          </Row>
          <Row>
            <Square isActive={isCarousel}></Square>
            <Square isActive={isCarousel}></Square>
            <Square isActive={isCarousel} lastColumn></Square>
          </Row>
          <Row>
            <Square isActive={isCarousel}></Square>
            <Square isActive={isCarousel}></Square>
            <Square isActive={isCarousel} lastColumn></Square>
          </Row>
        </Squares>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  isCarousel: state.isCarousel
})

export default connect(mapStateToProps, { changeView })(ChangeView)

const Wrapper = styled.div`
  height: 30px;
  width: 88%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
`;

const Text = styled.div`
  color: #646464;
  margin: auto 10px auto 0;
`;

const Rectangle = styled.div`
  height: 7px;
  width: 25px;
  background: ${props => props.isActive ? "#FF336D" : "lightgray"};
`;

const Rectangles = styled.div`
display: flex;
flex-wrap: wrap;
height: 30px;
width: 30px;
margin: 0;
padding: 0;
cursor: pointer;

  &:hover ${Rectangle}{
    background: ${props => props.isActive ? "#FF336D" : "#646464"};
  }
`;

const Square = styled.div`
  height: 7px;
  width: 7px;
  background: ${props => props.isActive ? "lightgray" : "#FF336D"};
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
  cursor: pointer;

  &:hover ${Square}{
    background: ${props => props.isActive ? "#646464" : "#FF336D"};
  }
`;
