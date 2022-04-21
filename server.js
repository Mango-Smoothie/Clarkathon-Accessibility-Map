const express = require("express");
const app = express();

const bodyParser = require('body-parser');
const fs = require("fs");
let feedback = []

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/public"));

app.listen(3000, function () {
    console.log("server started at 3000")
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
    console.log(feedback)
    res.redirect("/");
});