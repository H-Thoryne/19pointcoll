import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom";

import "../styles/btn.scss"

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
  width: 200px;
  display: block;
  margin: 10px auto;
`;

/* <Button to={props.to}>{props.text} </Button> */

/*
    <div to={props.to} className="button" >
      <p class="btnText" > {props.text}</p >
      <div class="btnTwo">
        <p class="btnText2">></p>
      </div>
    </div >
*/