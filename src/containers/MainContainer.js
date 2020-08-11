import React, {Component} from 'react'
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    allStocks: [],
    displayStocks: [],
    portfolioStocks: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(data => this.setState({
      allStocks: data,
      displayStocks: data
    }))
  }

  addStock = (stock) => {
    if(!this.state.portfolioStocks.includes(stock)){
      this.setState({
        portfolioStocks: [...this.state.portfolioStocks, stock]
      })
    }
  }

  removeStock = (stock) => {
    let portfolioStocks = this.state.portfolioStocks.filter(stockItem => stockItem.id !== stock.id)
    this.setState({portfolioStocks})
  }

  filterStocks = (e) => {
    let displayStocks = this.state.allStocks.filter(stockItem => stockItem.type === e.target.value)
    this.setState({displayStocks})
  }

  sortStocks = (e) => {
    if(e.target.value === 'Alphabetically'){
      // sort alphabetically
      let displayStocks = this.state.allStocks.sort((a, b) => { 
        if(a.name < b.name){
          return -1
        } else {
          return 1
        }})
      this.setState({displayStocks})
    }else{
      // sort by price
      let displayStocks = this.state.allStocks.sort((a, b) => a.price - b.price)
      this.setState({displayStocks})
    }
  }

  render() {
    return (
      <div>
        <SearchBar filterStocks={this.filterStocks} sortStocks={this.sortStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer displayStocks={this.state.displayStocks} addStock={this.addStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolioStocks={this.state.portfolioStocks} removeStock={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
