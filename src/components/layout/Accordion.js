import React, { Component } from 'react'
import styled from "styled-components"

class Accordion extends Component {
  state = {
    accordionOpen: false,
  }

  accordionClick = () => {
    this.setState(prevState => ({
      accordionOpen: !prevState.accordionOpen
    }))
  }

  render() {
    return (
      <TermsAndConditions>
        <Header onClick={this.accordionClick}>
          <TealBackground>
            <svg xmlns="http://www.w3.org/2000/svg" width="224px" height="30px">
              <path fillRule="evenodd" fill="rgb(63, 188, 161)" d="M17.195,-0.000 C25.984,-0.000 165.299,-0.000 173.183,-0.000 C196.214,-0.000 199.420,30.000 222.313,30.000 C245.206,30.000 23.634,29.969 17.195,29.969 C10.757,29.969 0.000,31.678 0.000,13.985 C0.000,0.468 8.407,-0.000 17.195,-0.000 Z" />
            </svg>
          </TealBackground>
          <Title>További információk <span>&rsaquo;</span></Title>
        </Header>
        {
          this.state.accordionOpen ? (
            <List>
              <li className="redtext">A program visszavonásig érvényes. A program zárása előtt legalább 30 nappal e-mailben és a Tanácsadói oldaladon tájékoztatunk. A pontbeváltásra a programzárás napjától számítva további 30 napig lesz lehetőséged.</li>
              <li>Amennyiben szeptember, október, november kampányok alatt összmegrendelésed meghaladja a 225 000 Ft-ot, úgy addigi pontjaidat tovább viheted az 1. negyedévre.</li>
              <li> Amennyiben ezen időszak alatt az összemegrendelésed nem éri el a 225 000 Ft-ot, úgy addigi pontjaidat 2019. decemberi kampány végéig felhasználhatod. Azt követően törlődnek. </li>
              <li>Egyéni összmegrendelés célkitűzésed meghatározásánál korábbi megrendeléseidet vettük figyelembe.</li>
              <li>Minél nagyobb az átlagmegrendelésed, annál több pontra lehetsz jogosult.</li>
              <li>A megrendelések kampányonként adódnak össze.</li>
              <li>Egyéni célkitűzéseidet minden kampány elején küldjük e-mailben.</li>
              <li className="redtext">Az a Tanácsadó, aki 3 egymást követő kampányban nem ad le megrendelést, az addig összegyűjtött pontjai törlődnek.</li>
              <li>A programban Koordinátorok és Zone Managerek is részt vehetnek.</li>
              <li>A program során keletkezett visszáru jóváírások levonásra kerülnek az összmegrendelés értékéből.</li>
              <li>Az ösztönző kiértékelésekor csak és kizárólag az AVON-hoz beérkezett és a Tanácsadó egyenlegén könyvelt befizetéseket vizsgáljuk. Sem a függőben lévő bankkártyás fizetéseket, sem a befizetett, de le nem könyvelt összegeket nem tudjuk figyelembe venni.</li>
              <li>A programban szereplő termékek önállóan nem rendelhetőek meg.</li>
              <li>Az ajánlat a készlet erejéig érvényes. Esetleges készlethiány esetén megteszünk mindent, hogy hasonló színvonalú termékekkel kárpótoljunk.</li>
              <li>A kedvezményes árak további árengedményt nem tartalmaznak, nem számítanak bele az összmegrendelésbe, nem számítanak bele az árengedmény-számítás alapjába és nem számítanak bele a meghatározott költési határba sem.</li>
              <li>A <a href="http://www.avon.hu/REPSuite/static/downloads/Tanacsadoi_ASZF.pdf" target="_blank" rel="noopener noreferrer">Tanácsadói szerződés 13.</a> pontjában foglalt rendelkezések jelen ösztönző programra is irányadóak.</li>
            </List>
          ) : null
        }
      </TermsAndConditions>
    );
  }
}

export default Accordion;

const TermsAndConditions = styled.div`
  height: auto;
  width: 80%;
  margin: 40px auto;
  font-size: 12px;
  font-weight: normal;

  @media(max-width: 700px) {
    width: 95%;
  }
`;

const Header = styled.div`
  background-color: #636363;
  border-radius: 12px;
  height: 30px;
  position: relative;
  cursor: pointer;
`;

const TealBackground = styled.div`
  height: auto;
  position: absolute;
  line-height: 0;
`;

const Title = styled.div`
  position: absolute;
  font-size: 14px;
  font-weight: 500;
  height: 28px;
  color: white;
  left: 10px;
  text-align: center;
  align-content: center;
  vertical-align: middle;
  line-height: 28px;
  text-transform: uppercase;

  span {
    font-size: 20px;
    line-height: 28px;
    height: 28px;
  }
`;

const List = styled.ul`
  margin: 10px 20px;
  line-height: 1.4;
  padding: 0;
  text-align: justify;
  text-justify: inter-word;

  a {
    color: #ff336d;
  }

  .redtext {
    color: #ff336d;
  }
`;