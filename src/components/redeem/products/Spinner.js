import React from "react"

import styled, { keyframes } from "styled-components"

export default function Spinner() {
  return (
    <Circle />
  )
}

const rotate = keyframes`
  0% {transform: rotate(0deg); }
  100% {transform: rotate(360deg); }
`;

const Circle = styled.div`
  display: block;
  width: 100px;
  height: 100px;
  margin: 150px auto;

  &::after{
    content: "";
    display: block;
    width: 80px;
    height: 80px;
    margin: 1px;
    border-radius: 50%;
    border: 10px solid #FF336D;
    border-color: #FF336D transparent #FF336D transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`;