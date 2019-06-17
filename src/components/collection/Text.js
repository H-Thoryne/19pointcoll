import React from "react"
// import NaviButton from "../NaviButton"

import styled from "styled-components"

const Text = () => {
  return (
    <Container>
      <Generic>Egyéni célkitűzésed teljesítésével szerezz pontokat kampányról kampányra, majd váltsd be egy vagy akár több Neked tetsző termékre!</Generic>
      {/* <NaviButton to="/hu-home/product-catalog/rep-support/pointcollection-products" text="Tovább a pontbeváltáshoz" /> */}
      <Warning>Pontjaid beváltásához görgess lejjebb!</Warning>
      <Generic>A termékeket cikkszámaik rögzítésével tudod megrendelni.</Generic>
      <Header>Lehetőséged van extra pontok gyűjtésére is!</Header>
      <List >
        <div>Célkitűzésed túlteljesítésével, 2000 Ft-onként további 1 pont szerezhető, maximum 10 pontig</div>
        <div>Két egymást követő kampányban teljesített célkitűzésedért plusz 5 pont szerezhető</div>
        <div>Rendelj legalább 3500 Ft értékben az AVON Interaktív Katalóguson keresztül és szerezz 10 plusz pontot</div>
        <div>Bármelyik AVON Online Akadémiai tréning elvégzéséért cserébe 1 pontot adunk Neked ajándékba, maximum 5 plusz pontig</div>
        <div>Végezd el az összes AVON Online Akadémia tréninget és zsebelj be 10 plusz pontot!</div>
        <div>Mission termékek vásárlása esetén, termékenként 10 pontot adunk Neked ajándékba</div>
        <div>Mission kezdőcsomag vásárlásáért pedig 20 extra ponttal jutalmazunk</div>
      </List>
    </Container>
  );
};

export default Text;

const Container = styled.div`
  width: 80%;
  margin: 50px auto;
  line-height: 1.3;

  @media (max-width: 700px){
    width: 95%;
  }
`;

const Generic = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Warning = styled.div`
	font-weight: bold;
	color: #ff9170;
	text-align: center;
	font-size: 28px;
	margin-top: 50px;
`;

const Header = styled.div`
  color: #ff336d;
  font-size: 20px;
  font-weight: 500;
  margin-top: 40px;

  @media(max-width: 700px){
    font-size: 16px;
  }
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