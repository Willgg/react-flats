import React, { Component } from 'react';

class Flat extends Component {
  handleClick = (event) => {
    this.props.selectFlat(this.props.flat);
  }

  render () {
    const { name, imageUrl, price, priceCurrency } = this.props.flat;
    const style = {
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2))',
      backgroundImage: `url(${imageUrl})`
    }

    return (
      <div className={`card${this.props.selected ? ' active': '' }`} style={style}>
        <div className="card-category">
          {price} {priceCurrency}
        </div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick}></a>
      </div>
    )
  }
}

export default Flat;
