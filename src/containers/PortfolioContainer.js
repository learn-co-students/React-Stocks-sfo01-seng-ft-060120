import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    // debugger
    return (
      <div>
        <h2>My Portfolio</h2>
          {
           this.props.portfolio.map (stock => {
            return <Stock stock={stock} stockId={stock.id} addOrRemoveStock={this.props.removeStock}/>
           })
          }
      </div>
    );
  }

}

export default PortfolioContainer;
