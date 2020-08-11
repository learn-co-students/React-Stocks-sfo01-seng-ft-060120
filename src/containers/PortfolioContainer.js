import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  generatePortfolio = () => {
    return this.props.portfolio.map((portfolioItem, index) => {
      return <Stock key={index} stock={portfolioItem} addOrRemove={this.props.removePortfolio}/>
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.generatePortfolio()
          }
      </div>
    );
  }

}

export default PortfolioContainer;