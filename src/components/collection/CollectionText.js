import React from "react"
import NaviButton from "../layout/NaviButton"

import styled from "styled-components"

const CollectionText = () => {
  return (
    <Container>
      <Generic>Egyéni célkitűzésed teljesítésével szerezz pontokat kampányról kampányra, majd váltsd be egy vagy akár több Neked tetsző termékre!</Generic>
      <NaviButton to="/pontbevaltas" text="Tovább a pontbeváltáshoz" />
      <div>
        <NewSign>Újdonság!</NewSign>
        <NaviButton to="/szavazas" text="Tovább a szavazáshoz" />
      </div>
      <Header>Lehetőséged van extra pontok gyűjtésére is!</Header>
      <List >
        <div>Célkitűzésed túlteljesítésével, 2000 Ft-onként további 1 pont szerezhető, maximum 10 pontig</div>
        <div>Két egymást követő kampányban teljesített célkitűzésedért plusz 5 pont szerezhető</div>
        <div>Rendelj legalább 3500 Ft értékben az AVON Interaktív Katalóguson keresztül és szerezz 10 plusz pontot a májusi kampányban</div>
        <div>Áprilisban bármelyik AVON Online Akadémia tréning elvégzéséért cserébe 1 pontot adunk Neked ajándékba, maximum 5 plusz pontig</div>
        <div>Végezd el az <strong>összes</strong> AVON Online Akadémia tréninget áprilisban, és május elején nem 5, hanem 10 plusz pont a jutalmad, amit a pontgyűjtő programunk keretein belül használhatsz fel.</div>
      </List>
    </Container>
  );
};

export default CollectionText;

const Container = styled.div`
  width: 80%;
  margin: 50px auto;
  line-height: 1.3;
`;

const NewSign = styled.div`
  position: absolute;
  left: 10%;
  font-size: 28px;
  color: #ff336d;
`;

const Generic = styled.div`
  text-align: center;
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