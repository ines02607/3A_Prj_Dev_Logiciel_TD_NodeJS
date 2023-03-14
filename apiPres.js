// création d'API avec Express
var express = require("express");
// const business = require("./business");
var app = express();

const apiServ = {
    start : function(port) {
        app.use(express.json());

        app.get("/test", function(req, res){
            console.log("test api call");

            res.json({
                "test" : "test"
            });
        });
    }
}