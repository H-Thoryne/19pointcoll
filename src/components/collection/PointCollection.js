import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import LinkButtons from '../common/LinkButtons';
import DataTable from './DataTable';
import DataList from './DataList';
import InfoText from './InfoText';

import styled from "styled-components"

export class PointCollection extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  render() {
    const { aws, target, brochures, acquiredPoints, basePoints } = this.props.ip
    return (
      <Container>
        <DataTable brochures={brochures} aws={aws} target={target} basePoints={basePoints} acquiredPoints={acquiredPoints} />
        <DataList aws={aws} target={target} />
        <InfoText />
        <LinkButtons />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  ip: state.ip
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PointCollection)


const Container = styled.div`
  position: relative;
  width: 750px;
`;