import React, { Component } from "react"
// import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Circle } from "rc-progress"

import styled from "styled-components"

class CollectionData extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }
  _isMounted = false
  _started = false
  state = {
    displayPercent: 0,
    percent: 0,
  }

  componentDidMount = () => {
    this._isMounted = true
    if (!isNaN(this.props.ip.target)) {
      this.startCounter()
      console.log("Starting from CDM")
      this._started = true
    }
  }

  componentDidUpdate = () => {
    if (!this._started) {
      const { loading, aws } = this.props.ip
      if (!loading && aws > 0) {
        this.startCounter()
        console.log("Starting from CDU")
        this._started = true
      }
    }
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  startCounter = () => {
    if (this._isMounted) {
      const percentVar = this.state.percent + 0.49

      // Stop if over 100%
      if (percentVar >= 100) {
        this.setState({
          percent: 100,
          displayPercent: 100
        })
        clearTimeout(this.timeout)
        return
      }

      // Stop if over the actual calculated percent
      if (percentVar >= (this.props.ip.aws / this.props.ip.target) * 100) {
        this.setState({
          percent: percentVar,
          displayPercent: Math.round(percentVar)
        })
        clearTimeout(this.timeout)
        return
      }

      // Set the new values as state and continue
      this.setState({
        percent: percentVar,
        displayPercent: Math.round(percentVar)
      })

      this.timeout = setTimeout(this.startCounter, 25)
    }
  }

  render() {
    const { aws, target, brochures, acquiredPoints, basePoints, stillRequired } = this.props.ip

    // let brochureText
    let basePointText
    let awsText
    let targetText
    let stillRequiredText

    // isNaN(brochures)
    //   ? brochureText = <TableContent isNaN>{brochures}</TableContent>
    //   : brochureText = <TableContent>{brochures} db</TableContent>

    isNaN(basePoints)
      ? basePointText = <TableContent isNaN>{basePoints}</TableContent>
      : brochures > 1 && aws > target
        ? basePointText = <TableContentWithCheckMark>{basePoints}</TableContentWithCheckMark>
        : basePointText = <TableContent>{basePoints}</TableContent>

    isNaN(aws)
      ? awsText = <TableContent>{aws}</TableContent>
      : awsText = <TableContent>{aws} Ft</TableContent>

    isNaN(target)
      ? targetText = <TableContent>{target}</TableContent>
      : targetText = <TableContent>{target} Ft</TableContent>

    isNaN(stillRequired)
      ? stillRequiredText = <TableContent>{stillRequired}</TableContent>
      : stillRequiredText = <TableContent>{stillRequired} Ft</TableContent>

    return (
      <>
        <Table>
          <Row>
            <Column>
              <TableLabel>A kampányban szerezhető alappontok</TableLabel>
              {basePointText}
            </Column>
            <Column>
              <TableLabel>Beváltható pontjaid</TableLabel>
              <TableContent>{acquiredPoints}</TableContent>
            </Column>
          </Row>
        </Table>

        <List>
          <LeftColumn>
            <CircleLabel>{this.state.displayPercent}%</CircleLabel>
            <Circle percent={this.state.displayPercent} strokeWidth="10" strokeColor="#FF336D" trailWidth="10" trailColor="#ECECEC" />
          </LeftColumn>
          <RightColumn>
            <ListLabel>Eddigi összmegrendelésed</ListLabel>
            <ListContent>{awsText}</ListContent>
            <ListLabel>Célkitűzésed az aktuális kampányra</ListLabel>
            <ListContent>{targetText}</ListContent>
            <ListLabel>Még ennyiért rendelj a teljesítéshez</ListLabel>
            <ListContent>{stillRequiredText}</ListContent>
          </RightColumn>
        </List>
      </>
    )
  }
}


const mapStateToProps = (state) => ({
  ip: state.ip
})

export default connect(mapStateToProps, null)(CollectionData)

const Table = styled.div`
  width: 500px;
  text-align: center !important;
  box-shadow: 0px 10px 40px 1px rgba(0, 0, 0, 0.3);
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translate(-50%, 0);
  background: white;

  &::before {
    content: "";
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
  /* display: block; */
  position: relative;
  flex: 50%;
  min-width: 0;
`;

const Row = styled.div`
  margin: 15px 0;
  display: flex;
  flex-wrap: nowrap;

`;

const TableLabel = styled.div`
  height: 28px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const TableContent = styled.div`
  font-size: ${props => props.isNaN ? "20px" : "30px"};
  line-height: ${props => props.isNaN ? "36px" : "1"};
  font-weight: 100;
`;

const TableContentWithCheckMark = styled.div`
  font-size: 30px;
  font-weight: 100;
  position: relative;

  &:after{
    content: "";
    display: inline-block;
    width: 6px;
    height: 16px;
    margin: 4px 10px;
    position: absolute;
    border: solid #20ae35;
    border-width: 0 4px 4px 0;
    transform: rotate(45deg);
  }
`;




const List = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 80%;
  padding-top: 110px;
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

const ListLabel = styled.div`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.5px !important;
  color: #ff336d;
`;

const ListContent = styled.div`
  font-size: 30px;
  font-weight: 100;
  margin: 10px 0;
`;