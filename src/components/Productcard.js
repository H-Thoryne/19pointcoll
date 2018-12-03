import React, { Component } from 'react';
import "../style/Productcard.css"

class Productcard extends Component {
  handleOrder = (ln, campNr, amount) => {
    window.processOrder(ln, campNr, amount);
  }

  render() {
    return (
      <div className="innerDiv" >
        <figure className="carouselItem hovereffect2">
          <img src="http://placekitten.com/200/200" alt="Product img" />
          <div className="dontDeleteMe"></div>
          <figcaption>
            <button onClick={() => this.handleOrder('19000', 201801, 1)}> Click me </button>
          </figcaption>
        </figure>
      </div>
    );
  }
}

export default Productcard;