import React from "react"
import styled from "styled-components"

const MainImage = (props) => {
  return (
    <Container>
      <Image src={props.src} alt="Main Image" />
      <Text>A kép csak illusztráció</Text>
    </Container>
  );
};

export default MainImage;

const Container = styled.div`
  position: relative;
`;

const Image = styled.img`
  height: 300px;
  width: 300px;
  margin: auto;
  display: block;
  position: relative;
`;

const Text = styled.div`
  font-size: 12px;
  font-style: italic;
  position: absolute;
  bottom: 0;
  left: 50%;
  padding: 3px 5px;
  background: rgba(255,255,255,0.5);
  transform: translate(-50%, 0);
`;