import React from "react"
import styled from "styled-components"

const DataTable = (props) => {
  return (
    <Table>
      <Column>
        <Row>
          <Label>Minimum katalógus</Label>
          <Content>1 db</Content>
        </Row>
        <Row>
          <Label>Megrendelt katalógusok</Label>
          <Content>{props.brochures} db</Content>
        </Row>
      </Column>
      <Column>
        <Row>
          <Label>Megszerzett pontjaid</Label>
          <Content>{props.acquiredPoints}</Content>
        </Row>
        <Row>
          <Label>Szerezhető alappontok</Label>
          <Content>{props.basePoints}</Content>
        </Row>
      </Column>
    </Table>
  );
};

export default DataTable;

const Table = styled.div`
  width: 500px;
  text-align: center !important;
  box-shadow: 0px 10px 40px 1px rgba(0, 0, 0, 0.3);
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translate(-50%, 0);
  background: white;
  display: flex;
  flex-wrap: nowrap;

  &::before {
    content: '';
    background: black;
    height: 80%;
    width: 1px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Column = styled.div`
  display: block;
  position: relative;
  flex: 1 50%;
  min-width: 0;
`;

const Row = styled.div`
  margin: 15px 0;

  &:first-child {
    margin-bottom: 25px;
  }

  &:first-child::before {
    content: '';
    background: lightgray;
    height: 1px;
    width: 80%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Label = styled.div`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const Content = styled.div`
  font-size: 30px;
  font-weight: 100;
`;