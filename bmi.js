const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
    res.render('bmi');
    });

var data;

app.post("/",(req,res) => {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    data = weight / Math.pow((height)/100,2);

    //res.send('Your BMI is ' + bmi.toFixed(2)); //send data`

    data = data.toFixed(2);

    res.render('bmi', { data });

    console.log(data);
});

app.listen(port, () => console.log(`Listening port ${port}`));

