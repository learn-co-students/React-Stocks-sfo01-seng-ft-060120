import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar sort={this.props.sort} filter={this.props.filter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.props.stocks} addPortfolio={this.props.addPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.props.portfolio} removePortfolio={this.props.removePortfolio}/>

            </div>
          </div>
      </div>
    );
  }
}

export default MainContainer;