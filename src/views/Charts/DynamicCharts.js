import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';


const bar = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

class GeneChart extends Component {
    render() {
        return (
            <genechart className="card">
              <div className="card-header">
                Bar Chart
                <div className="card-actions">
                  <a href="http://www.chartjs.org">
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </div>
              <div className="card-block">
                <div className="chart-wrapper">
                  <Bar data={bar}
                       options={{
                           maintainAspectRatio: false
                       }}
                  />
                </div>
              </div>
            </genechart>
        )
    }
}

class DynamicCharts extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="card-columns cols-2">
          <GeneChart />
        </div>
      </div>
    )
  }
}


export default DynamicCharts;
