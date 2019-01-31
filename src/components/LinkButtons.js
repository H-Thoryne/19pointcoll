import React from "react"
import styled from "styled-components"

const LinkButtons = () => {
  return (
    <Container>
      <Button>
        <Background />
        <Link href="http://www.avon.hu/REPSuite/static/_minisites/19pointcollection/pontgyujto_szabalyzat.pdf" target="_blank" rel="noopener noreferrer">Szabályzat</Link>
      </Button>
      <Button>
        <Background />
        <Link href="http://www.avon.hu/REPSuite/static/_minisites/19pointcollection/gyakran_ismetelt_kerdesek.pdf" target="_blank" rel="noopener noreferrer">GY.I.K.</Link>
      </Button>
      <Button>
        <Background />
        <Link href="http://www.avon.hu/REPSuite/static/_minisites/19pointcollection/szorolap.pdf" target="_blank" rel="noopener noreferrer">Digitális szórólap</Link>
      </Button>
    </Container>
  );
};

export default LinkButtons;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
  margin: 20px 40px;
  padding: 0;
`;

const Background = styled.div`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: #ff336d;
  border-radius: 5px;
  transition: all 0.3s;
  transform: scale(0.5, 0.5);
  pointer-events: none;
`;

const Link = styled.a`
  color: #ff336d;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  display: block;
  transition: all 0.3s;
`;

const Button = styled.div`
  width: 200px;
  height: 50px;
  position: relative;

  line-height: 50px;
  text-align: center;
  list-style-type: none;
  color: #ff336d;

  cursor: pointer;

  transition: all 0.3s;
  
  &::before {
      content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #ff336d;
    border-radius: 5px;
    transition: all 0.3s;
    pointer-events: none
  }

  &:hover::before {
    opacity: 0;
    transform: scale(1.2, 1.2);
  }

  &:hover ${Link} {
      color: white;
      text-decoration: none;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 200px;
    }

    &:hover ${Background} {
      opacity: 1;
      transform: scale(1, 1);
    }
`;
