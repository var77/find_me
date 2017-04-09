import React, { Component } from 'react';

import './App.css';

class App extends Component {
    state = {number: '', info: {}};

    getInfo() {
        fetch(`http://localhost:3001/?number=${this.state.number}`)
            .then(response => response.json())
            .then(info => this.setState({info: info, status: true}));
    }

    changeNumber(event) {
        var reg = /^\d+$/;
        if(!reg.test(event.target.value) && event.target.value) return;

        this.setState({number: event.target.value});
    }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Find Me</h2>
        </div>
        <div className="container">
            <input type="text" onChange={this.changeNumber.bind(this)} value={this.state.number} className="search-input"/>
            <button onClick={this.getInfo.bind(this)} className="search-button">Search</button>
        </div>
          <div className="flex-center">
              <img src={this.state.info.image} alt=""/>
              <span>{this.state.info.name}</span>
          </div>
      </div>
    );
  }
}

export default App;
