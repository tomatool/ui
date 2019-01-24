import React, { Component } from 'react';
import Step from './step/Step';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class Scenario extends Component {
  title() {
    if (this.props.background) {
      return <strong>Background:</strong>;
    }
    return <strong>Scenario:</strong>;
  }

  render() {
    return (
      <Tabs>
        {this.title()} {this.props.name}<br/>
        {this.props.steps.map((step, index) => {
          return <Step key={index}
                       keyword={step.keyword}
                       text={step.text} />
        })}
        <br/>
      </Tabs>
    );
  }
}

export default Scenario;
