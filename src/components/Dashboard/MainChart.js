import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { Progress } from 'reactstrap';
import axios from 'axios';

const brandSuccess =  '#4dbd74';
const brandInfo =     '#63c2de';
const brandDanger =   '#f86c6b';

// Main Chart

// convert Hex to RGBA
function convertHex(hex,opacity) {
    hex = hex.replace('#','');
    var r = parseInt(hex.substring(0,2), 16);
    var g = parseInt(hex.substring(2,4), 16);
    var b = parseInt(hex.substring(4,6), 16);

    var result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
    return result;
}

var data1 = [];
var data2 = [];
var data3 = [];

const mainChart = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: convertHex(brandInfo,10),
            borderColor: brandInfo,
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            data: data1
        },
        {
            label: 'My Second dataset',
            backgroundColor: 'transparent',
            borderColor: brandSuccess,
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            data: data2
        },
        {
            label: 'My Third dataset',
            backgroundColor: 'transparent',
            borderColor: brandDanger,
            pointHoverBackgroundColor: '#fff',
            borderWidth: 1,
            borderDash: [8, 5],
            data: data3
        }
    ]
}

const mainChartOpts = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
            gridLines: {
                drawOnChartArea: false,
            }
        }],
        yAxes: [{
            ticks: {
                beginAtZero: true,
                maxTicksLimit: 5,
                stepSize: Math.ceil(250 / 5),
                max: 250
            }
        }]
    },
    elements: {
        point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3,
        }
    }
}

class MainChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartView: 'day'
        };
    }

    componentDidMount() {
        this.refreshData(1);
    }

    refreshData(multiplier) {
        axios.get(`api/charts/activity/` + multiplier)
            .then(res => {
                mainChart.datasets[0].data = res.data.data1;
                mainChart.datasets[1].data = res.data.data2;
                mainChart.datasets[2].data = res.data.data3;
                this.setState(() => {
                    console.log('setting state');
                    return { unseen: "does not display" }
                });
            });
    }

    shouldComponentUpdate(nextProps) {
        return true;
    }

    onChartZoom(event, zoomLevel) {
        this.setState({chartView: zoomLevel});

        var multiplierMeta = {
            'day': 1,
            'month': 4,
            'year': 12
        };

        var multiplier = multiplierMeta[zoomLevel] || 1;
        mainChartOpts.scales.yAxes[0].ticks.max = (250 * multiplier);
        mainChartOpts.scales.yAxes[0].ticks.stepSize = Math.ceil(250 / 5) * multiplier;
        this.refreshData(multiplier);

        event.preventDefault();
    };

    render() {
        return (
            <div className="card">
                <div className="card-block">
                    <div className="row">
                        <div className="col-sm-5">
                            <h4 className="card-title mb-0">Traffic</h4>
                            <div className="small text-muted">November 2015</div>
                        </div>
                        <div className="col-sm-7 hidden-sm-down">
                            <button type="button" className="btn btn-primary float-right"><i
                                className="icon-cloud-download"></i></button>
                            <div className="btn-toolbar float-right" role="toolbar"
                                 aria-label="Toolbar with button groups">
                                <div className="btn-group mr-3" data-toggle="buttons" aria-label="First group">
                                    <label onClick={(event) => this.onChartZoom(event, 'day')}
                                           className={"btn btn-outline-secondary " + (this.state.chartView === 'day' ? 'active' : '')}>
                                        <input type="radio" name="options" id="option1"/> Day
                                    </label>
                                    <label onClick={(event) => this.onChartZoom(event, 'month')}
                                           className={"btn btn-outline-secondary " + (this.state.chartView === 'month' ? 'active' : '')}>
                                        <input type="radio" name="options" id="option2" defaultChecked/> Month
                                    </label>
                                    <label onClick={(event) => this.onChartZoom(event, 'year')}
                                           className={"btn btn-outline-secondary " + (this.state.chartView === 'year' ? 'active' : '')}>
                                        <input type="radio" name="options" id="option3"/> Year
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chart-wrapper" style={{height: 300 + 'px', marginTop: 40 + 'px'}}>
                        <Line data={mainChart} options={mainChartOpts} height={300}/>
                    </div>
                </div>
                <div className="card-footer">
                    <ul>
                        <li>
                            <div className="text-muted">Visits</div>
                            <strong>29.703 Users (40%)</strong>
                            <Progress className="progress-xs mt-2" color="success" value="40"/>
                        </li>
                        <li className="hidden-sm-down">
                            <div className="text-muted">Unique</div>
                            <strong>24.093 Users (20%)</strong>
                            <Progress className="progress-xs mt-2" color="info" value="20"/>
                        </li>
                        <li>
                            <div className="text-muted">Pageviews</div>
                            <strong>78.706 Views (60%)</strong>
                            <Progress className="progress-xs mt-2" color="warning" value="60"/>
                        </li>
                        <li className="hidden-sm-down">
                            <div className="text-muted">New Users</div>
                            <strong>22.123 Users (80%)</strong>
                            <Progress className="progress-xs mt-2" color="danger" value="80"/>
                        </li>
                        <li className="hidden-sm-down">
                            <div className="text-muted">Bounce Rate</div>
                            <strong>40.15%</strong>
                            <Progress className="progress-xs mt-2" color="primary" value="40"/>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default MainChart;
