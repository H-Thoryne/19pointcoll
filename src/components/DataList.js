import React from 'react';
import { Circle } from 'rc-progress'

import styled from "styled-components"

const DataList = props => {
  return (
    <List>
      <LeftColumn>
        <CircleLabel>{props.displayPercent}%</CircleLabel>
        <Circle percent={props.displayPercent} strokeWidth="10" strokeColor="#FF336D" trailWidth="10" trailColor="#ECECEC" />
      </LeftColumn>
      <RightColumn>
        <Label>Eddigi összmegrendelésed</Label>
        <Content>{props.aws} Ft</Content>
        <Label>Célkitűzésed az aktuális kampányra</Label>
        <Content>{props.target} Ft</Content>
        <Label>Még ennyiért rendelj a teljesítéshez</Label>
        <Content>
          {
            (props.target - props.aws) < 0 ? 0 : (props.target - props.aws)
          } Ft
          </Content>
      </RightColumn>
    </List>
  );
}

export default DataList;

const List = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 80%;
  padding-top: 180px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;

const LeftColumn = styled.div`
  display: block;
  position: relative;
  flex: 0 0 30%;
  min-width: 0;

  svg path {
    stroke-linecap: butt;
  }
`;

const RightColumn = styled.div`
  display: block;
  flex: 0 0 70%;
  position: relative;
  min-width: 0;
  text-align: right;
`;

const CircleLabel = styled.div`
  font-size: 30px;
  font-weight: 700;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Label = styled.div`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.5px !important;
  color: #ff336d;
`;

const Content = styled.div`
  font-size: 30px;
  font-weight: 100;
  margin: 10px 0;
`;