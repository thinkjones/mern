var express = require('express')
var app = express()

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

app.listen(4000, function () {
    console.log('Example app listening on port 4000!')
})
