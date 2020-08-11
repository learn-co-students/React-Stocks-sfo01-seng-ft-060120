import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {
  state = {
    stocks: [],
    anotherStocks: [],
    portfolio: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(r => r.json())
    .then(json => {
      this.setState({ stocks: json, anotherStocks: json})
    })
  }

  addPortfolio = (stock) => {
    if(!this.state.portfolio.includes(stock)){
      this.setState({portfolio: [...this.state.portfolio, stock]})
    }
    console.log(this.state.portfolio)
  }

  removePortfolio = (stock) => {
    if(this.state.portfolio.includes(stock)){
      let newPort = this.state.portfolio.filter(item => item !== stock)
      this.setState({portfolio: newPort})
    }
  }
  sort = (e) => {
    if(e.target.value === 'Alphabetically'){
      let sorted = this.state.stocks.sort((a, b) => (a.name > b.name) ? 1 : -1)
      this.setState({stocks: sorted})
    }
    else{
      let sorted = this.state.stocks.sort((a, b) => (a.price > b.price) ? 1 : -1)
      this.setState({stocks: sorted})
    }
  }

  filter = (e) => {
    //console.log(e.target.value)
    let newPort = this.state.anotherStocks.filter(item => item.type === e.target.value)
    this.setState({stocks: newPort})
  }
  render() {
    return (
      <div>
        <Header/>
        <MainContainer stocks={this.state.stocks} addPortfolio={this.addPortfolio} portfolio={this.state.portfolio} removePortfolio={this.removePortfolio} sort={this.sort} filter={this.filter}/>
      </div>
    );
  }
}

export default App;