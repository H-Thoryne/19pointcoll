import React from "react"
import NaviButton from "../layout/NaviButton"

import styled from "styled-components"

const ProfileText = () => {
  return (
    <Container>
      <Generic>Egyéni célkitűzésed teljesítésével és legalább 1 db katalógus vásárlásával szerezz pontokat kampányról kampányra, majd februártól váltsd be egy vagy akár több Neked tetsző termékre!</Generic>
      <NaviButton to="/pontbevaltas" text="Tovább a pontbeváltáshoz" />
      <Header>Lehetőséged van extra pontok gyűjtésére is!</Header>
      <List >
        <div>Célkitűzésed túlteljesítésével, 2000 Ft-onként további 1 pont szerezhető, maximum 10 pontig</div>
        <div>Két egymást követő kampányban teljesített célkitűzésedért plusz 5 pont szerezhető</div>
      </List>
    </Container>
  );
};

export default ProfileText;

const Container = styled.div`
  width: 80%;
  margin: 50px auto;
  line-height: 1.3;
`;

const Generic = styled.div`
  text-align: justify;
  margin-bottom: 20px;
`;

const Header = styled.div`
  color: #ff336d;
  font-size: 20px;
  font-weight: 500;
  margin-top: 40px;
`;
const List = styled.div`
  margin: 10px 0 0 20px;

  div {
  position: relative;

    ::before {
      content: '';
      position: absolute;
      top: 6px;
      left: -15px;
      height: 6px;
      width: 6px;
      background: #ff336d;
      border-radius: 50%;
    }
  }
`;