import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom";

const NaviButton = (props) => {
  return (
    <Button to={props.to}>{props.text} </Button>
  );
};

export default NaviButton;

const Button = styled(NavLink)`
  background: #6d0854;
  color: white;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bolder;
  text-decoration: none;
  text-align: center;

  padding: 10px 15px;
  border-radius: 5px;
  width: 250px;
  display: block;
  margin: 10px auto;
`;