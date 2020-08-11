import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  generateAllStocks = () => {
    return this.props.stocks.map((stock, index) => {
      return <Stock key={index} stock={stock} addOrRemove={this.props.addPortfolio}/>
    })
  }
  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.generateAllStocks()
        }
      </div>
    );
  }

}

export default StockContainer;
