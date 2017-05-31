var express = require('express')
var app = express()
var _ = require('lodash')

var expressLogging = require('express-logging');
var logger = require('logops');
app.use(expressLogging(logger, {}));

const LOGGED_IN_USER = {
    id: 1234,
    email: 'test@acme.com'
};

var user = false;

//Random Numbers
function random(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/api/charts/activity/:multiplier', function (req, res) {

    var elements = 27;
    var data1 = [];
    var data2 = [];
    var data3 = [];

    var multiplier = parseInt(req.params.multiplier || 1);

    for (var i = 0; i <= elements; i++) {
        data1.push(random(50 * multiplier, 200 * multiplier));
        data2.push(random(80 * multiplier, 100 * multiplier));
        data3.push(65 * multiplier);
    }
    res.json({data1: data1, data2: data2, data3: data3, multiplier: multiplier});
});

app.get('/api/charts/dynamic/:totalCharts', function (req, res) {

    var labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    var seriesTemplate = {
        label: 'Dataset',
        data: []
    };

    var chartData = [];

    var totalCharts = parseInt(req.params.totalCharts || 5);

    for (var j = 0 ; j < totalCharts ; j++) {
        var multiplier = j + 1;
        var thisSeries = _.cloneDeep(seriesTemplate);
        thisSeries.label = seriesTemplate.label + ' ' + (j+1);
        for (var i = 0 ; i < 7 ; i++) {
            console.log(random(0,100));
            thisSeries.data.push(random(0, 100 * multiplier));
        }
        chartData.push(thisSeries);
    }
    res.json({labels: labels, data: chartData, totalCharts: totalCharts});
});

app.get('/api/auth', function (req, res) {
    res.json(user);
})

app.post('/api/auth/login', function (req, res) {
    user = _.cloneDeep(LOGGED_IN_USER);
    res.json(user);
})

app.post('/api/auth/logout', function (req, res) {
    user = false;
    res.json(user);
})

app.listen(4000, function () {
    console.log('Example app listening on port 4000!')
})
