import React, { Component } from 'react';
import Scenario from './scenario/Scenario';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class Feature extends Component {
  render() {
    return (
      <div><strong>Features:</strong> {this.props.name}
        <TabList>
          {this.props.background &&
                   <Scenario background={true}
                             name={this.props.background.name}
                             steps={this.props.background.steps} />
          }

          {this.props.scenarios && this.props.scenarios.map((scenario, index) => {
            return <Scenario key={index}
                             name={scenario.name}
                             steps={scenario.steps} />;
          })}
        </TabList>
      </div>
    );
  }
}

export default Feature;
