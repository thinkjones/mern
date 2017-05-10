var express = require('express')
var app = express()

//Random Numbers
function random(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/api/charts/activity', function (req, res) {

    var elements = 27;
    var data1 = [];
    var data2 = [];
    var data3 = [];

    for (var i = 0; i <= elements; i++) {
        data1.push(random(50,200));
        data2.push(random(80,100));
        data3.push(65);
    }
    res.json({data1: data1, data2: data2, data3: data3});
});

app.listen(4000, function () {
    console.log('Example app listening on port 4000!')
})
