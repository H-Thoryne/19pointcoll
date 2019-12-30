import React, { Component } from 'react'

import ProductCard from "../redeem/products/Product"

import styled from "styled-components"

class Philips extends Component {
  state = {
    active: false
  }

  toggleItem = event => {
    this.setState({
      active: !this.state.active
    })
    console.log(this.state.active)
  }

  products = [{
    "name": "Philips kenyérpirító",
    "description": "UTALVÁNY!  8 pirítási beállítás az egyéni ízléseknek megfelelően, 2 nagyméretű, állítható rekesz a különböző kenyérméretekhez, beépített zsemletartó péksütemények, tésztafélék, zsemlefélék felmelegítéséhez, egyszerű használat, újramelegítés és kiolvasztás egyszerre, a kiadó gombbal bármikor befejezheti a pirítást, kivehető morzsatálca az egyszerű tisztításért, magas kenyérkiemelő a kisebb méretű pirítósok biztonságos kivételéhez, extra automatikus kikapcsolás funkció",
    "ln": 86330,
    "priceHUF": 8499,
    "pricePoints": 70,
    "img": "https://www2.avon.hu/dam/hu-home/minisites/pointcollection/img/86330.jpg"
  }, {
    "name": "Philips Series automata kávégép",
    "description": "UTALVÁNY! Philips Series 2000 automata kávégép: 3 féle italvariáció, Őrlőbeállítás: 12, kerámia őrlőbetét, Manuális / Panarello tejhabosító, AquaClean filter, Memo funkció, Vízkőjelzés, Kivehető központi egység, Őrölt kávé opció, Alap LED kijelző érintőgombokkal, szürke, matt előlap és teljesen műanyag kivitel, 1 felhasználói profil, 1,8L víztartály, 275g kávébabtartály, állítható kifolyócső, 3 aromaerősség, műanyag tálca",
    "ln": 88682,
    "priceHUF": 79999,
    "pricePoints": 100,
    "img": "https://www2.avon.hu/dam/hu-home/minisites/pointcollection/img/88682.jpg"
  }, {
    "name": "Philips OneBlade borotva",
    "description": "UTALVÁNY! Philips OneBlade hibrid borotva: 3 hosszbeállítás, 1, 3, 5 mm között, 45 perc használat, 8 óra töltés NiMH Akkuval, 3 felpattintható formázó fésű, LED fényjelző",
    "ln": 86686,
    "priceHUF": 7499,
    "pricePoints": 60,
    "img": "https://www2.avon.hu/dam/hu-home/minisites/pointcollection/img/86686.jpg"
  }, {
    "name": "Philips Series 2000i AC2729/50 kombinált levegőtisztító és párásító",
    "description": "UTALVÁNY! Lélegezzen be egészségesebb levegőt a Philips kombinált 2 az 1-ben készülékkel. Egészséges levegő a VitaShield IPS tisztító és a NanoCloud párásító technológiának köszönhetően. Az intelligens érzékelő méri és kijelzi a beltéri levegőminőséget az automatikus mód szabályozása érdekében. Valós idejű beltéri PM2, 5 és páratartalom numerikus visszajelzése.Okostelefonnal is vezérelhető.",
    "ln": 88765,
    "priceHUF": 94999,
    "pricePoints": 100,
    "img": "https://www2.avon.hu/dam/hu-home/minisites/pointcollection/img/88765.jpg"
  }, {
    "name": "Philips Azur GC4566/80 gőzölős vasaló",
    "description": "UTALVÁNY! 2600W, 50g/perces gőzölés, 250g-os gőzlövet. 2m vezeték és  SteamGlide Advanced vasalótalp. ",
    "ln": 88849,
    "priceHUF": 16999,
    "pricePoints": 100,
    "img": "https://www2.avon.hu/dam/hu-home/minisites/pointcollection/img/88849.jpg"
  }, {
    "name": "Philips VisaPure Mini BSC111/06 arctisztító készülék",
    "description": "UTALVÁNY! 6-szor hatékonyabb tisztítás, mint kézzel. Vezeték nélkül használható, vízálló.  Rendelkezik töltöttségjelzővel, beépített időzítővel. Tartozék: 1 kefefej. ",
    "ln": 88476,
    "priceHUF": 11999,
    "pricePoints": 80,
    "img": "https://www2.avon.hu/dam/hu-home/minisites/pointcollection/img/88476.jpg"
  }, {
    "name": "Philips Avent Natural SCD301/01 újszülött kezdő szett",
    "description": "UTALVÁNY! Könnyen kombinálható a szoptatás és a cumisüvegből való táplálás. Az egyedülálló szirmok biztosítják az etetőcumi puhaságát, rugalmasságát, és nem engedik összetapadni. Meggátolja, hogy a levegő a baba pocakjába kerüljön. Fejlett, hasfájást csökkentő rendszer, innovatív ikerszeleppel. Ergonomikus kialakítás a maximális kényelem érdekében. Kompatibilis a Philips Avent Natural termékválasztékkal. Egyszerűen használható és tisztítható, gyorsan és könnyen összeállítható",
    "ln": 86694,
    "priceHUF": 6999,
    "pricePoints": 100,
    "img": "https://www2.avon.hu/dam/hu-home/minisites/pointcollection/img/86694.jpg"
  }]

  render() {
    return (
      <div>
        <Header>Újdonság! Váltsd be pontjaid <span>Philips utalványokra</span>!<br></br> Részletekért kattints a termékek alatt található További információkra!</Header>
        <Column>
          <Row>
            {[this.products[0], this.products[1]].map((item, i) => {
              return <ProductCard philips={true} key={i} item={item} />
            })}
          </Row>
          <Row>
            {[this.products[2], this.products[3]].map((item, i) => {
              return <ProductCard philips={true} key={i} item={item} />
            })}
          </Row>
          <Row>
            {[this.products[4], this.products[5]].map((item, i) => {
              return <ProductCard philips={true} key={i} item={item} />
            })}
          </Row>
          <Row>
            {[this.products[6]].map((item, i) => {
              return <ProductCard philips={true} key={i} item={item} />
            })}
          </Row>
        </Column>

        <MoreInfo>
          <h4 onClick={this.toggleItem}>További információk a Philips termékekkel kapcsolatban {this.state.active ? <span>&#x25B2;</span> : <span>&#x25BC;</span>}</h4>
          {
            this.state.active ?
              <div> A Philips termékek megvásárlása esetén az adott pont levonásra kerül a Tanácsadó összpontszámából. <strong className="gored">Fontos információ!</strong> A cikkszám megadásával a kiválasztott Philips termék utalványát szerzi meg a Tanácsadó. A virtuális utalványt/kuponkódot emailben fogjuk küldeni a megrendelést követő 1 héten belül, amely tartalmazza majd a további teendők pontos leírárását. A megvásárolt virtuális utalvány értékét <strong className="gored">a Tanácsadó számláján megjelenítjük</strong>, és a befizetendő összeg tartalmazza a kiválasztott Philips termék összegét. A terméket nem az AVON szállítja, hanem a Philips által, kifejezetten az AVON számára készített promóciós weboldalán tudja beváltani a Tanácsadó, egyedi kuponkódja segítségével. </div>
              : null
          }
        </MoreInfo>
      </div>
    )
  }
}

export default Philips

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