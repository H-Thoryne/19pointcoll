import React, { Component } from 'react';
import Modal from './Modal';

import "../styles/Productcard.css"

class Productcard extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  openModal = () => {
    this.setState({
      isOpen: true
    });
  }

  closeModal = () => {
    this.setState({
      isOpen: false
    });
  }

  render() {
    return (
      <div className="innerDiv" >
        <figure className="carouselItem hovereffect2">
          <img src={this.props.item.img} alt="Product img" />
          <div className="dontDeleteMe"></div>
          <figcaption>
            <button onClick={this.openModal}>Toggle modal</button>
          </figcaption>
        </figure>
        {
          this.state.isOpen ? (<Modal onClose={this.closeModal} item={this.props.item} />) : null
        }
      </div>
    );
  }
}

export default Productcard;