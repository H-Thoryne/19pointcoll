import React from "react"
// import { Link } from "react-router-dom";

import styled from "styled-components"

const NaviButton = (props) => {
  return (
    <Button href={props.to}>{props.text} </Button>
  );
};

export default NaviButton;

const Button = styled.a`
  background: #ff336d;
  color: white;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bolder;
  text-decoration: none;
  text-align: center;

  padding: 10px 15px;
  border-radius: 5px;
  width: 280px;
  display: block;
  margin: 40px auto;
  transition: all 0.3s;

  &:hover {
    text-decoration: none;
    transform: scale(1.05, 1.05);
    transition: all 0.3s;
  }
`;