import React, { Component } from "react"

import CollectionLinks from "./Links"
import CollectionText from "./Text"
import CollectionData from "./Data"

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