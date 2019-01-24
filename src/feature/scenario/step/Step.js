import React, { Component } from 'react';
import { TabList } from 'react-tabs';

class Step extends Component {
  render() {
    return (
      <TabList>
      <strong>{this.props.keyword}</strong> {this.props.text}
      </TabList>
    );
  }
}

export default Step;
