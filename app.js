var express = require('express'),
       path = require('path');
var app = express();

//app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, 'CostCalculator/www')));

/*

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', '*');
    res.header("Access-Control-Allow-Headers", "*");
    if ('OPTIONS' == req.method){
        return res.send(200);
    }
    next();
});

*/


app.listen(3000);
console.log('Listening on port 3000.........');
