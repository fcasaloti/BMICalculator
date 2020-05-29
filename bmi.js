const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'pug');

app.use(express.static('static'));

app.get('/', (req, res) => {
    res.render('bmi');
    });

app.post("/",(req,res) => {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    data = weight / Math.pow((height)/100,2);

    var data = data.toFixed(2);

    res.render('bmi', { data });

    console.log(data);
});

app.listen(port, () => console.log(`Listening port ${port}`));

