import React, { Component } from 'react';

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
      <div>
        <div onClick={this.accordionClick}>Terms and cats ></div>
        {this.state.accordionOpen ? (
          <div>Accordion content</div>
        ) : null}
      </div>
    );
  }
}

export default Accordion;