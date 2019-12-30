import React, { Component } from "react"
import ProductCard from "../redeem/products/Product"

import styled from "styled-components"

class Calendar extends Component {
  state = {
    active: false,
    products: []
  }

  toggleItem = event => {
    this.setState({
      active: !this.state.active
    })
    console.log(this.state.active)
  }

  // componentWillMount() {
  //   this.setState({
  //     products: window.calendarProducts
  //   })
  // }


  // products = [{
  //   "name": "Advent 1",
  //   "description": "UTALVÁNY! Lélegezzen be egészségesebb levegőt a Philips kombinált 2 az 1-ben készülékkel. Egészséges levegő a VitaShield IPS tisztító és a NanoCloud párásító technológiának köszönhetően. Az intelligens érzékelő méri és kijelzi a beltéri levegőminőséget az automatikus mód szabályozása érdekében. Valós idejű beltéri PM2, 5 és páratartalom numerikus visszajelzése.Okostelefonnal is vezérelhető.",
  //   "ln": 12345,
  //   "priceHUF": 94999,
  //   "pricePoints": 100,
  //   "available": true,
  //   "img": "https://www2.avon.hu/dam/hu-home/minisites/pointcollection/img/88765.jpg"
  // }, {
  //   "name": "Advent 2",
  //   "description": "UTALVÁNY! 2600W, 50g/perces gőzölés, 250g-os gőzlövet. 2m vezeték és  SteamGlide Advanced vasalótalp. ",
  //   "ln": 88849,
  //   "priceHUF": 16999,
  //   "pricePoints": 100,
  //   "available": true,
  //   "img": "https://www2.avon.hu/dam/hu-home/minisites/pointcollection/img/88849.jpg"
  // }, {
  //   "name": "Advent 3",
  //   "description": "UTALVÁNY! 6-szor hatékonyabb tisztítás, mint kézzel. Vezeték nélkül használható, vízálló.  Rendelkezik töltöttségjelzővel, beépített időzítővel. Tartozék: 1 kefefej. ",
  //   "ln": 12345,
  //   "priceHUF": 11999,
  //   "pricePoints": 80,
  //   "available": true,
  //   "img": "https://www2.avon.hu/dam/hu-home/minisites/pointcollection/img/88476.jpg"
  // }, {
  //   "name": "Advent 4",
  //   "description": "UTALVÁNY! Könnyen kombinálható a szoptatás és a cumisüvegből való táplálás. Az egyedülálló szirmok biztosítják az etetőcumi puhaságát, rugalmasságát, és nem engedik összetapadni. Meggátolja, hogy a levegő a baba pocakjába kerüljön. Fejlett, hasfájást csökkentő rendszer, innovatív ikerszeleppel. Ergonomikus kialakítás a maximális kényelem érdekében. Kompatibilis a Philips Avent Natural termékválasztékkal. Egyszerűen használható és tisztítható, gyorsan és könnyen összeállítható",
  //   "ln": 12345,
  //   "priceHUF": 6999,
  //   "pricePoints": 100,
  //   "available": false,
  //   "img": "https://www2.avon.hu/dam/hu-home/minisites/pointcollection/img/86694.jpg"
  // }]

  render() {
    const date = new Date().toISOString()
    console.log(`Current ISOString date: ${date}`)
    let content = [];

    switch (true) {
      case (date > "2019-12-20T07:00:00.000Z"):
        content.push(window.calendarProducts[12])
        content.push(window.calendarProducts[13])
        content.push(window.calendarProducts[14])
        content.push(window.calendarProducts[15])
        break;
      case (date > "2019-12-19T07:00:00.000Z"):
        content.push(window.calendarProducts[11])
        break
      case (date > "2019-12-18T011:00:00.000Z"):
        content.push(window.calendarProducts[10])
        break
      case (date > "2019-12-17T07:00:00.000Z"):
        content.push(window.calendarProducts[9])
        break
      case (date > "2019-12-16T07:00:00.000Z"):
        content.push(window.calendarProducts[8])
        break
      case (date > "2019-12-13T07:00:00.000Z"):
        content.push(window.calendarProducts[8])
        content.push(window.calendarProducts[9])
        content.push(window.calendarProducts[10])
        content.push(window.calendarProducts[11])
        break;
      case (date > "2019-12-12T07:00:00.000Z"):
        content.push(window.calendarProducts[7])
        break
      case (date > "2019-12-11T07:00:00.000Z"):
        content.push(window.calendarProducts[6])
        break
      case (date > "2019-12-10T07:00:00.000Z"):
        content.push(window.calendarProducts[5])
        break
      case (date > "2019-12-09T07:00:00.000Z"):
        content.push(window.calendarProducts[4])
        break
      case (date > "2019-12-06T07:00:00.000Z"):
        content.push(window.calendarProducts[4])
        content.push(window.calendarProducts[5])
        content.push(window.calendarProducts[6])
        content.push(window.calendarProducts[7])
        break;
      case (date > "2019-12-05T07:00:00.000Z"):
        content.push(window.calendarProducts[3])
        break;
      case (date > "2019-12-04T07:00:00.000Z"):
        content.push(window.calendarProducts[2])
        break;
      case (date > "2019-12-03T07:00:00.000Z"):
        content.push(window.calendarProducts[1])
        break;
      case (date > "2019-12-02T07:00:00.000Z"):
        content.push(window.calendarProducts[0])
        break;
      default:
        console.log("Vadim blyat")
        break;
    }

    return (
      <div>
        <Header>Újdonság! Adventi kalendárium!</Header>
        <Descr> Nézz fel minden nap a Tanácsadói oldaladra, mert az Adventi kalendárium minden nap meglepetést tartogat Számodra! <br></br>
          <strong>A termékek korlátozott számban elérhetőek, siess, le ne maradj róla!</strong>
        </Descr>
        <Column>
          <Row>
            {content.map((item, i) => {
              return <ProductCard calendar={true} item={item} key={i} available={item.available} />
            })}
          </Row>
          <Row>
            {null}
          </Row>
        </Column>
      </div>
    )
  }
}

export default Calendar

const Header = styled.div`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin: 60px 0 40px 0;
  color: #ff9170;

  & span {
    font-weight: bolder;
    text-transform: uppercase;
  }
`;

const Descr = styled.p`
  text-align: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const MoreInfo = styled.div`
  text-align: justify;
  margin: 60px auto;
  max-width: 80%;
  display: block;

  & .gored {
    color: #ff336d;
  }

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