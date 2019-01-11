import React, { Component } from 'react';
import Modal from './Modal';

import "../styles/Productcard.scss"

class Productcard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
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
      <div className="product-card" >
        <img className="product-card__image" src={this.props.item.img} alt="Product img" onClick={this.openModal} />
        <div className="product-card__text" >{this.props.item.name}</div>
        <div className="product-card__subtext">{this.props.item.price_points} pont</div>
        <div className="product-card__subtext">{this.props.item.amountCurrent} db</div>
        {
          this.props.is_new ? (<img className="product-card__badge" src="https://via.placeholder.com/80x80" alt="badge" />) : null
        }
        {
          this.state.isOpen ? (<Modal onClose={this.closeModal} item={this.props.item} />) : null
        }
      </div>
    );
  }
}

export default Productcard;