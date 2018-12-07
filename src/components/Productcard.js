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
      <div className="carouselItem" >
        <img src={this.props.item.img} alt="Product img" onClick={this.openModal} />
        {
          this.props.is_new ? null : (<img className="badge_isnew" src="https://via.placeholder.com/80x80" alt="badge" />)
        }
        {
          this.state.isOpen ? (<Modal onClose={this.closeModal} item={this.props.item} />) : null
        }
      </div>
    );
  }
}

export default Productcard;