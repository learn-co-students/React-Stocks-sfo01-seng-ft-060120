import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

  state = {
    stocks: [],
    portfolio: [],
    filteredStocks: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(json => {
      this.setState ({
        stocks: json,
        filteredStocks: json
      })
    })
  }

  addStock = (selectedStock) => {
    if(!this.state.portfolio.includes(selectedStock)) {
      this.setState ({
        portfolio: [...this.state.portfolio, selectedStock]
      })
    }
  }

  removeStock = (selectedStock) => {
    let updatedPortfolio = this.state.portfolio.filter (stock => {
      return stock.name !== selectedStock.name
    })
    this.setState ({
      portfolio: updatedPortfolio
    })
  }

  sortStock = (event) => {
    if (event.target.value === "Alphabetically") {
      let updatedStocks = this.state.filteredStocks.sort ((a,b) => a.name < b.name ? -1 : 1)
      this.setState ({
        filteredStocks: updatedStocks
      })
    } else if (event.target.value === "Price") {
      let updatedStocks = this.state.filteredStocks.sort ((a,b) => a.price < b.price ? -1 : 1)
      this.setState ({
        filteredStocks: updatedStocks
      })
    }
  }

  filterStock = (event) => {
    let updatedStocks = this.state.stocks.filter (stock => {
      return stock.type == event.target.value
    })
    this.setState ({
      filteredStocks: updatedStocks
    })
  }

  render() {
    return (
      <div>
        <Header/>
        <MainContainer stocks={this.state.filteredStocks} portfolio={this.state.portfolio} addStock={this.addStock} removeStock={this.removeStock} sortStock={this.sortStock} filterStock={this.filterStock}/>
      </div>
    );
  }
}

export default App;
