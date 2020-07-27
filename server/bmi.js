//Constants for required modules
const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

//Body parser to allow POST data from front end
app.use(bodyParser.urlencoded({extended: true}));

//Set up for PUG
app.set('view engine', 'pug');

//Set static folder
app.use(express.static('static'));

//GET for root folder
app.get('/', (req, res) => {
    res.render('bmi');
    });

//POST data from/to Front End
app.post("/",(req,res) => {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    if (weight == 0 || height == 0)
        {
            weight = 0;
            height = 1;
        }

    var data = weight / Math.pow((height)/100,2);
    data = data.toFixed(2);
    res.render('bmi', { data });
    console.log(data);

});

//Open conection for port 3000 and display on console
app.listen(port, () => console.log(`Listening port ${port}`));

