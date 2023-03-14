const pres = require("./consolePres");
const apiServ = require("./apiPres");
const port = 3000;

function main() {

    apiServ.start(port);
    pres.start();
    
    /*
    app.get("/", (req, res) => {
        res.send("hello!");

    });*/

/* app.listen(port, function() {
        console.log(`serveur lancé sur port ${port}`);
    });
    */
}

main();