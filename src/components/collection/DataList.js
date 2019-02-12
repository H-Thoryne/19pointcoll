import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Circle } from 'rc-progress'

import styled from "styled-components"
import { isNullOrUndefined } from 'util';

class DataList extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }
  state = {
    displayPercent: 0,
    percent: 0,
  }

  componentWillReceiveProps = (nextProps) => {
    if (!isNullOrUndefined(this.props.ip.aws) && this.state.percent !== nextProps.ip.aws) {
      this.startCounter()
    }
  }

  startCounter = () => {
    const percentVar = this.state.percent + 0.49;
    if (percentVar >= 100) {
      this.setState({ percent: 100 });
      this.setState({ displayPercent: 100 });
      clearTimeout(this.timeout);
      return;
    }

    if (percentVar >= (this.state.aws / this.state.target) * 100) {
      this.setState({ percent: percentVar });
      this.setState({ displayPercent: Math.round(percentVar) });
      clearTimeout(this.timeout);
      return;
    }

    this.setState({ percent: percentVar })
    this.setState({ displayPercent: Math.round(percentVar) })

    this.timeout = setTimeout(this.startCounter, 10);
  }

  render() {
    const { aws, target } = this.props.ip
    return (
      <List>
        <LeftColumn>
          <CircleLabel>{this.state.displayPercent}%</CircleLabel>
          <Circle percent={this.state.displayPercent} strokeWidth="10" strokeColor="#FF336D" trailWidth="10" trailColor="#ECECEC" />
        </LeftColumn>
        <RightColumn>
          <Label>Eddigi összmegrendelésed</Label>
          <Content>{aws} Ft</Content>
          <Label>Célkitűzésed az aktuális kampányra</Label>
          <Content>{target} Ft</Content>
          <Label>Még ennyiért rendelj a teljesítéshez</Label>
          <Content>
            {
              isNaN(target) || isNaN(aws)
                ? `Not a Number`
                : target - aws < 0
                  ? `0 Ft`
                  : `${target - aws} Ft`
            }
          </Content>
        </RightColumn>
      </List>
    )
  };
}


const mapStateToProps = (state) => ({
  ip: state.ip
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(DataList)

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