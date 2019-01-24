import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Feature from './feature/Feature';
import axios from 'axios';

class App extends Component {
  state = {
    name: "",
    scenarios: {}
  }

  componentDidMount() {
    axios.get(`http://gherkin-to-json:9002/?url=https://raw.githubusercontent.com/tomatool/tomato/master/examples/features/compare.feature`)
      .then(res => {
        this.setState({
                  name: res.data.name,
                  background: res.data.background,
                  scenarios: res.data.scenarioDefinitions
                });
      })
  }

  render() {
    return (
      <div>
        { (this.state.name !== "") &&
          <Feature name={this.state.name} background={this.state.background} scenarios={this.state.scenarios}/>
        }
      </div>
    );
  }
}

export default App;
