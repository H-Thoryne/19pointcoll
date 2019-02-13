import React, { Component } from 'react'

import CollectionLinks from './CollectionLinks';
import CollectionText from './CollectionText';
import CollectionData from './CollectionData';

import styled from "styled-components"

export class PointCollection extends Component {
  render() {
    return (
      <Container>
        <CollectionData />
        <CollectionText />
        <CollectionLinks />
      </Container>
    );
  }
}


export default PointCollection

const Container = styled.div`
  position: relative;
  width: 750px;
`;