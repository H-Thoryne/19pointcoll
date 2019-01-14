import React, { Component } from 'react'

import styled from "styled-components"
/* import "../styles/Accordion.scss" */

class Accordion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      accordionOpen: false,
    }
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
              <li>
                <div>A program érvényessége:</div>
                <ul>
                  <li>pontgyűjtés: 2019. december 28. 21:00 – 2019. március 29. 21:00</li>
                  <li>pontbeváltás: 2019. február 6. 12:00 – 2019. április 30. 21:00.</li>
                </ul>
              </li>
              <li>Egyéni összmegrendelés célkitűzésed meghatározásánál korábbi megrendeléseidet vettük figyelembe.</li>
              <li>Minél nagyobb az átlagmegrendelésed, annál több pontra lehetsz jogosult.</li>
              <li>A megrendelések kampányonként adódnak össze.</li>
              <li>Egyéni célkitűzéseidet minden kampány elején küldjük e-mailben.</li>
              <li>A programban Koordinátorok és Zone Managerek is részt vehetnek.</li>
              <li>A program során keletkezett visszáru jóváírások levonásra kerülnek az összmegrendelés értékéből.</li>
              <li>Az ösztönző kiértékelésekor csak és kizárólag az AVON-hoz beérkezett és a Tanácsadó egyenlegén könyvelt befizetéseket vizsgáljuk. Sem a függőben lévő bankkártyás fizetéseket, sem a befizetett, de le nem könyvelt összegeket nem tudjuk figyelembe venni.</li>
              <li>A programban szereplő termékek önállóan nem rendelhetőek meg.</li>
              <li>Az ajánlat a készlet erejéig érvényes. Esetleges készlethiány esetén megteszünk mindent, hogy hasonló színvonalú termékekkel kárpótoljunk.</li>
              <li>A kedvezményes árak további árengedményt nem tartalmaznak, nem számítanak bele az összmegrendelésbe,nem számítanak bele az árengedmény-számítás alapjába és nem számítanak bele a meghatározott költési határba sem.</li>
              <li>A Tanácsadói szerződés 13. pontjában foglalt rendelkezések jelen ösztönző programra is irányadóak.</li>
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
  margin: 20px auto;
  font-size: 12px;
  font-weight: normal;
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
  height: 30px;
  color: white;
  left: 10px;
  text-align: center;
  align-content: center;
  vertical-align: middle;
  line-height: 30px;
  text-transform: uppercase;

  span {
    font-size: 20px;
    line-height: 30px;
    height: 30px;
  }
`;

const List = styled.ul`
  margin: 10px 20px;
  line-height: 1.2;

  ul li {
    margin-left: 20px;
  }
`;