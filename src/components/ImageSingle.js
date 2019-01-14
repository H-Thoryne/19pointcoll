import React from "react"
import styled from "styled-components"

const ImageSingle = (props) => {
  return (
    <Image src={props.item.img} alt="SingleImage" />
  );
};

export default ImageSingle;

const Image = styled.img`
    height: 300px;
    width: 300px;
    margin: 20px auto;
    display: block;
`;