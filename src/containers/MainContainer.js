import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    displayedStocks: [],
    myPortfolio: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(json => this.setState({
      stocks: json,
      displayedStocks: json
    }))
  }

  addToPortfolio = stock => {
    let myPortfolio = [...this.state.myPortfolio]
    if (!myPortfolio.includes(stock)) {
      myPortfolio.push(stock)
      this.setState({ myPortfolio })
    }
  }

  removeFromPortfolio = selectedStock => {
    let myPortfolio = this.state.myPortfolio.filter(stock => stock !== selectedStock)
    this.setState({ myPortfolio })
  }

  handleSortChange = e => {
    if (e.target.value === 'Price') {
      let displayedStocks = this.state.displayedStocks.sort((a,b) => (a.price - b.price))
      this.setState({ displayedStocks })
    } else if (e.target.value === 'Alphabetically') {
      let displayedStocks = this.state.displayedStocks.sort((a,b) => (a.name > b.name ? 1 : -1))
      this.setState({ displayedStocks })
    }
  }

  handleFilterChange = e => {
    if (e.target.value === 'All') {
      let displayedStocks = [...this.state.stocks]
      this.setState({ displayedStocks })
    } else {
      let displayedStocks = this.state.stocks.filter(stock => stock.type === e.target.value)
      this.setState({ displayedStocks })
    }
  }

  render() {
    return (
      <div>
        <SearchBar handleSortChange={this.handleSortChange} handleFilterChange={this.handleFilterChange}/>

          <div className="row">
            <div className="col-8">

              <StockContainer displayedStocks={this.state.displayedStocks} addToPortfolio={this.addToPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer myPortfolio={this.state.myPortfolio} removeFromPortfolio={this.removeFromPortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
