const pres = require("./consolePres");
const apiServ = require("./apiPres");
const port = 3000;

function main() {
    //start api server
    apiServ.start(port);

    //start console 
    //pres.start();
}

main();