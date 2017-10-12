import React, { Component } from 'react';
import './App.css';
import charts from 'fusioncharts/fusioncharts.charts'
import ReactFC from 'react-fusioncharts'
import FusionCharts from 'fusioncharts'

charts(FusionCharts)

class App extends Component {
  render() {
    var myDataSource = {
      chart: {
        caption: 'Hair Growth',
        subCaption: 'Lengths Over Time (Inches)',
        theme: 'ocean',
      },
      data: [{
        label: 'Day 1',
        value: '0.1',
      }, {
        label: 'Day 2',
        value: '0.2',
      }, {
        label: 'Day 3',
        value: '0.5',
      }, {
        label: 'Day 4',
        value: '0.9',
      }, {
        label: 'Day 5',
        value: '1.8',
      }]
    };
    var chartConfigs = {
      type: 'column2d',
      width: '80%',
      height: 400,
      dataFormat: 'json',
      dataSource: myDataSource,
    };
    return (
      <div id='chart-row'><ReactFC{...chartConfigs}/></div>
    );
  }
}

export default App;
