const express = require("express");
const app = express();

const bodyParser = require('body-parser');
const fs = require("fs");
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/public"));

app.listen(3000, function () {
    console.log("server started at 3000")
    // console.log(carList);
});

app.get("/", function (req, res) {
    res.sendFile("/public/index.html");
});
