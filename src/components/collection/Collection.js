import React, { Component } from 'react'

import CollectionLinks from './CollectionLinks';
import CollectionText from './CollectionText';
import CollectionData from './CollectionData';

import styled from "styled-components"

export class PointCollection extends Component {
  render() {
    return (
      <Collection>
        <CollectionData />
        <CollectionText />
        <CollectionLinks />
      </Collection>
    );
  }
}


export default PointCollection

const Collection = styled.div`
  position: relative;
`;