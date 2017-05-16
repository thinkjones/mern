import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import axios from 'axios';


class GeneChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            bar: {
                labels: props.labels,
                datasets: [
                    {
                        label: props.chartName,
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        data: props.data
                    }
                ]
            }
        };
    }

    componentWillUpdate(nextProps, nextState) {
        this.setState(() => {
            var datasets = nextState.bar.datasets;
            datasets[0].data = nextProps.data;
            return { bar: {datasets: datasets}};
        });
        return true;
    }

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
                        <Bar data={this.state.bar}
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
    constructor(props) {
        super(props);
        this.state = {
            totalCharts: 6,
            charts: [],
            labels: []
        };
    }

    componentDidMount() {
        this.refreshData();
    }

    refreshData() {
        axios.get(`api/charts/dynamic/` + this.state.totalCharts)
            .then(res => {
                this.setState(() => {
                    return {charts: res.data.data, labels: res.data.labels}
                });
            });
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        return (
            <div className="animated fadeIn">
                <h1>Prop Vs State</h1>
                <div>
                    Interesting article on Props vs State was interesting in how these two components interact
                    <a href="https://github.com/uberVU/react-guide/blob/master/props-vs-state.md">Github props-vs-state</a>
                </div>

                <button type="button" className="btn btn-primary"
                        onClick={(event) => this.refreshData()}>Refresh Charts</button>


                {this.state.charts.map((item, idx) =>
                    <div className="card-columns cols-2" key={idx}>
                        <GeneChart key={idx} chartName={item.label} data={item.data} labels={this.state.labels} />
                    </div>
                )}
            </div>
        )
    }
}

export default DynamicCharts;
