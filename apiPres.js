//create api with express to expose from business layer
var express = require("express");
const business = require("./business");
var app = express();

const apiServ = {

    start : function(port) {
        
        app.use(express.json());

        app.get("/test", function(req, res) {

            console.log(req.query);

            res.json (
                {
                    "test" : "test"
                }
            );

        });

        app.get("api/customers", function(req,res) {
            const customers = business.getAllCustomers();
            res.json(customers);
        });


        app.listen(port, function() {
            console.log("serveur running on port " + port);
        });

    }
};

module.exports = apiServ;
