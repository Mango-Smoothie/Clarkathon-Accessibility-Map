const express = require("express");
const app = express();

const bodyParser = require('body-parser');
const fs = require("fs");


app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/public"));

app.listen(3000, function () {
    console.log("server started at 3000")
    const rawData=fs.readFileSync(__dirname+"/public/data/feedback.json");
    feedback=JSON.parse(rawData);
    // console.log(carList);
});

app.get("/", function (req, res) {
    res.sendFile("/public/index.html");
});

app.get("/path", function (req, res) {
    res.redirect("path.html");
});

app.get('/feedback', (req, res) => {
        res.redirect("/feedback.html");
});

app.post('/new-message', (req, res) =>{
    message = {
        building: req.body.building,
        feedback: req.body.feedback
    }
    feedback.push(message)
    const feedbackJSON=JSON.stringify(feedback);
    // console.log(carJSON);
    fs.writeFile(__dirname + "/public/data/feedback.json", feedbackJSON,
        function(err){
            if(err){ // if error is not empty
                console.log("JSON writing failed")
            }
            else{
                res.redirect('/feedback');
            }
        });
});