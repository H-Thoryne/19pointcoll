import React, { Component } from 'react';

import "../styles/Accordion.css"

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
      <div className="t-and-c">
        <div onClick={this.accordionClick} className="t-and-c__title">
          <div className="svg">
            <svg xmlns="http://www.w3.org/2000/svg" width="224px" height="30px">
              <path fillRule="evenodd" fill="rgb(63, 188, 161)" d="M17.195,-0.000 C25.984,-0.000 165.299,-0.000 173.183,-0.000 C196.214,-0.000 199.420,30.000 222.313,30.000 C245.206,30.000 23.634,29.969 17.195,29.969 C10.757,29.969 0.000,31.678 0.000,13.985 C0.000,0.468 8.407,-0.000 17.195,-0.000 Z" />
            </svg>
          </div>
          <div className="text">
            Terms and conditions &rsaquo;
          </div>
        </div>
        {
          this.state.accordionOpen ? (
            <ul className="t-and-c__list">
              <li>Content</li>
              <li>Content</li>
              <li>Content</li>
              <li>Content</li>
              <li>Content</li>
            </ul>
          ) : null
        }
      </div>
    );
  }
}

export default Accordion;