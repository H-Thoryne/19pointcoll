import React, { Component } from 'react'
// import NaviButton from "../NaviButton"

import styled from "styled-components"

export default class Text extends Component {
  state = {
    active: false
  }

  toggleItem = event => {
    this.setState({
      active: !this.state.active
    })
    console.log(this.state.active)
  }

  render() {
    return (
      <Container>
        {/* <Header2>Vásárolj minimum 6000 Ft-tal többért, mint az egyéni célkitűzésed és szerezz <strong>10 pluszpontot</strong> az októberi kampány elején!</Header2> */}
        <LotteryInfo><br></br>Váltsd be pontjaid sorsjegyekre! Amennyiben Neked kedvez a szerencse, akkor az alábbi nyereményekkel lehetsz gazdagabb: </LotteryInfo>
        <LotteryInfo>A sorsjegy cikkszáma: 86009</LotteryInfo>
        <LotteryImages>
          <div className="col">
            <div>
              <img src="https://www2.avon.hu/dam/hu-home/campaign/C12/pontgyujto-huaweiy5.jpg" alt="" />
              <p>2 x  Huawei Y5</p>
            </div>
            <div>
              <img src="https://www2.avon.hu/dam/hu-home/campaign/C12/pontgyujto-borond.jpg" alt="" />
              <p>2 x Elegáns bőrönd</p>
            </div>
          </div>
          <div className="col">
            <div>
              <img src="https://www2.avon.hu/dam/hu-home/campaign/C12/pontgyujto-taska.jpg" alt="" />
              <p>10 x Shakuyaku táska</p>
            </div>
            <div>
              <img src="https://www2.avon.hu/dam/hu-home/campaign/C12/pontgyujto-edenyszett.jpg" alt="" />
              <p>10 x Tefal uno edényszett</p>
            </div>
          </div>
          <div className="col">
            <div>
              <img src="https://www2.avon.hu/dam/hu-home/campaign/C12/pontgyujto-serpenyo.jpg" alt="" />
              <p>10 x Delimano serpenyő</p>
            </div>
          </div>
        </LotteryImages>
        <LotteryMoreinfo>
          <h4 onClick={this.toggleItem}>További információk a sorsjegyekkel, nyereményekkel kapcsolatban {this.state.active ? <span>&#x25B2;</span> : <span>&#x25BC;</span>}</h4>
          {
            this.state.active ?
              <div>
                <ul>
                  <li> 3 ponttért 1 db virtuális sorsjegy szerezhető. </li>
                  <li> A nyereményjáték 2019.11.29. 21.00 és 2019.12.30. 21.00 között érvényes. </li>
                  <li> A Tanácsadó - pontjai függvényében – korlátlan számú sorsjeggyel rendelkezhet. </li>
                  <li> A sorsolás várható időpontja: januári kampány első hete. </li>
                  <li> A kisorsolt Tanácsadó abban az esetben jogosult a nyereményre, ha nincs lejárt tartozása. </li>
                  <li> A sorsoláskor csak és kizárólag az AVON-hoz beérkezett és a Tanácsadó egyenlegén lekönyvelt befizetéseket vizsgáljuk. A függőben lévő bankkártyás fizetéseket nem tudjuk figyelembe venni. </li>
                  <li> A nyereményjáték ajánlat a pontgyűjtő ösztönző program ajánlat részét képezi és annak itt nem érintett feltételei változatlanok maradnak. </li>
                </ul>

                <h3>Termékinformációk:</h3>
                <ul>
                  <li>Huawei Y5 Fekete
                  <ul>
                      <li>Processzor leírás: MediaTek® MT6739 Négy magos (4x1.5 GHz Cortex-A53) processzor + IMG PowerVR GE8100 grafikus vezérlő</li>
                      <li>Operációs rendszer verzió: Android 8.0 (Oreo)</li>
                      <li>Kijelző típus: 5.45" HD (1440 x 720) Multi-Touch</li>
                      <li>Háttértár leírás: 16 GB FlashDrive + 256 GB microSD</li>
                      <li>Grafikus vezérlő: IMG PowerVR GE8100</li>
                      <li>GPS: A-GPS, GLONASS</li>
                      <li>Wifi típus: ac</li>
                      <li>Bluetooth: 4.20</li>
                      <li>Súly: 142.00</li>
                      <li>Akkumulátor leírás: 3020mAh beépített</li>
                      <li>Doboz tartalma: Telefonkészülék, Töltő, USB kábel, Gyorsútmutató, SIM tű, Garanciakártya</li>
                      <li>Beépített akkumulátor: Igen</li>
                      <li>Szélesség: 146.50x70.90x8.30</li>
                      <li>Kijelző felbontás: HD (1440 x 720)</li>
                      <li>Touch: Multi-Touch</li>
                      <li>Micro-USB: 2.0</li>
                    </ul>
                  </li>
                  <li>Tefal Uno edénykészlet:
                    <ul>
                      <li> A Tefal A701SC84 UNO Edénykészlet egy 10 db-os, hosszú élettartamú, magas minőségű nemesacél edénykészlet. Az edények szegecselt nemesacél nyéllel vannak ellátva, továbbá tarozék a gőzkieresztő nyilással ellátott üvegfedő. Többféle hőforráson használható, indukciós tűzhelyen, és sütőben egyaránt. Magas minőségű nemesacél edények </li>
                      <li>Ellenálló, 2,9 mm vastag és 3 rétegű edényalj</li>
                      <li>Tökéletes hőelosztás, keresztmetszeti szilárdság, így az edény évek múltán sem deformálódik el</li>
                      <li>0,5 mm vastag falak csillogó bevonattal</li>
                      <li>Szegecselt nemesacél nyél</li>
                      <li>Üvegfedő gőzkieresztő nyílással</li>
                      <li>Vízszintjelzés az edények belső falán</li>
                      <li>180°C-ig sütőbe tehető</li>
                      <li>Fém konyhai eszközök használata megengedett</li>
                      <li>Mosogatógépben mosható</li>
                      <li>Használható hőforrás: gáz, elektromos, kerámia, indukciós</li>
                      <li>A készlet tartalma:</li>
                      <li>1 db 16 cm átmérőjű edény, 1,2 literes, üvegfedővel</li>
                      <li>1 db 18 cm átmérőjű edény, 1,7 literes, üvegfedővel</li>
                      <li>1 db 20 cm átmérőjű edény, 2,5 literes, üvegfedővel</li>
                      <li>1 db 24 cm átmérőjű edény, 4,5 literes, üvegfedővel</li>
                      <li>1 db 22 cm átmérőjű edény, 5,1 literes, üvegfedővel</li>
                    </ul>
                  </li>
                  <li>Shakuyaku táska: 38 cm x 29 cm x 15 cm, Kenzo Takada együttműködésével tervezték, PVC anyag poliészter béléssel. </li>
                  <li>Elegáns bőrönd: Zárható, gurulós kemény külsejű utazó bőrönd, fehér színben, négy forgó kerékkel, teleszkópos fogantyúval, két zippzárral és két flexibilis füllel. Mérete: 48*27,5*64 cm</li>
                  <li>Delimano serpenyő: Tartós, praktikus és környezetbarát, tapadásmentes bevonatának köszönhetően ízletes és felejthetetlen ételeket készíthetsz szeretteid számára. Karcálló, akár fém eszközökkel is használhatod. Minden típusú tűzhelyen főzhetsz vele.</li>
                </ul>
              </div>
              : null
          }
        </LotteryMoreinfo>
        <Generic>Egyéni célkitűzésed teljesítésével szerezz pontokat kampányról kampányra, majd váltsd be egy vagy akár több Neked tetsző termékre!</Generic>
        {/* <NaviButton to="/hu-home/product-catalog/rep-support/pointcollection-products" text="Tovább a pontbeváltáshoz" /> */}
        <Warning>Pontjaid beváltásához görgess lejjebb!</Warning>
        <Generic>A termékeket cikkszámaik rögzítésével tudod megrendelni.</Generic>
        <Header>Lehetőséged van extra pontok gyűjtésére is!</Header>
        <List >
          <div className="important">Rendelj katalógust és szerezz extra pontokat novemberben! 1 darab katalógus rendelése esetén 1 extra ponttal, 3 vagy több darab katalógus esetén 3 extra ponttal ajándékozunk meg! </div>
          <div>Célkitűzésed túlteljesítésével, 2000 Ft-onként további 1 pont szerezhető, maximum 10 pontig</div>
          <div>Két egymást követő kampányban teljesített célkitűzésedért plusz 5 pont szerezhető</div>
          <div>Amennyiben októberben, novemberben vagy decemberben ünnepled a születésnapodat, akkor extra 10 pontban részesülsz. A pontok jóváírása a születésnapod kampányában történik.</div>
          <div>Bármelyik AVON Online tréning elvégzéséért cserébe 1 pontot adunk Neked ajándékba, maximum 5 plusz pontig</div>
          <div>Végezd el az összes AVON Online tréninget és zsebelj be 10 plusz pontot!</div>
          <div>Mission termékek vásárlása esetén, termékenként 10 pontot adunk Neked ajándékba</div>
          <div>Mission kezdőcsomag vásárlásáért pedig 20 extra ponttal jutalmazunk</div>
        </List>
      </Container >
    )
  }
}


const Container = styled.div`
  width: 80%;
  margin: 50px auto;
  line-height: 1.3;

  @media (max-width: 700px){
    width: 95%;
  }
`;

const LotteryInfo = styled.h4`
  text-align: center;
  margin: 30px 0;
  font-size: 18px;

  & span {
    color: rgb(255, 51, 109);
    font-size: 20px;
  }
`;

const LotteryImages = styled.div`
  display: flex;
  flex-wrap: wrap;

  & .col {
    display: flex;
    justify-content: space-around;
    width: 100%;

    div {
      width: 50%;
    }
  }

  & p {
    margin-top: 10px;
    font-size: 14px;
    font-weight: bold;
    height: 34px;
    text-align: center;
  }

  & img {
    display: block;
    margin: 0 auto;
    height: 200px;
    width: 200px;
  }
`;

const LotteryMoreinfo = styled.div`
  text-align: justify;
  margin-bottom: 60px;

  & h4 {
    text-align: center;
    color: #ff336d;
    font-size: 14px;
    
    & :hover {
      cursor: pointer;
    }
  }

  & div>ul>li {
    list-style-type: none;
    position: relative;
  
    & :before {
      content: "";
      position: absolute;
      top: 6px;
      left: -15px;
      height: 6px;
      width: 6px;
      background: rgb(255, 51, 109) none repeat scroll 0% 0%;
      border-radius: 50%;
    } 
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

// const Header2 = styled.div`
//   padding: 10px 20px;
//   border: 1px solid #ff336d;
//   border-radius: 10px;
//   color: #ff336d;
//   font-size: 20px;
//   font-weight: 500;
//   margin-top: 40px;
//   text-align: center;
//   margin: 0 0 20px 0;

//   @media(max-width: 700px){
//     font-size: 16px;
//   }
// `;

const List = styled.div`
  margin: 10px 0 0 20px;

  .important {
    font-weight: bold;
  }

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