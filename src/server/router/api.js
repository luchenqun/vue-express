var api = require('express').Router();
var count = 1;
api.post('/time', function (req, res) {
    console.log("data:", req.body);
    res.json({
        time: new Date().getTime(),
        count: count++
    })
});

api.post('/name', function (req, res) {
    console.log("data:", req.body);
    setTimeout(() => {
        res.json({
            name:"lcq"
        })
    }, 3000)
});

module.exports = api;
