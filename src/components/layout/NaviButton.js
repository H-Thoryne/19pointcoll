import React from "react"
import { NavLink } from "react-router-dom";

import styled from "styled-components"

const NaviButton = (props) => {
  return (
    <Button to={props.to}>{props.text} </Button>
  );
};

export default NaviButton;

const Button = styled(NavLink)`
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