import React from "react"

import styled from "styled-components"

export default function Badge(props) {
  return (
    <Container bgColor={props.bgColor}>
      <Button>{props.text}</Button>
    </Container>
  )
}

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