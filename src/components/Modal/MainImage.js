import React from "react"
import styled from "styled-components"

const MainImage = (props) => {
  return (
    <Image src={props.src} alt="Main Image" />
  );
};

export default MainImage;

const Image = styled.img`
    height: 300px;
    width: 300px;
    margin: 20px auto;
    display: block;
`;