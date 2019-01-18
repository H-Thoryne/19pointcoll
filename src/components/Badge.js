import React, { Component } from 'react';

import styled from "styled-components"


class Badge extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container bgColor={this.props.bgColor}>
        <Button>{this.props.text}</Button>
      </Container>
    );
  }
}

export default Badge;

const Container = styled.div`
  background-color: ${props => props.bgColor || "red"};
  color: white;
  font-weight: 400;
  padding: 3px;
  position: absolute;
  top: 45px;
  width: 100%;
  text-align: center;
`;

const Button = styled.div`

`;