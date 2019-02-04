import React from 'react';

import styled, { keyframes } from "styled-components"

const Spinner = () => {
  return (
    <Circle />
  );
};

export default Spinner;

const rotate = keyframes`
  0% {transform: rotate(0deg); }
  100% {transform: rotate(360deg); }
`;

const Circle = styled.div`
  display: block;
  width: 64px;
  height: 64px;
  margin: 40px auto;

  &::after{
    content: "";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #FF336D;
    border-color: #FF336D transparent #FF336D transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`;