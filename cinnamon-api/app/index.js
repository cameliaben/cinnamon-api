const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const config = require("./config");
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();
const port = process.env.PORT || config.port;
const routes = require("./config/routes");

app.use( cors() );

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use( "/", routes );

app.listen( port, () => {
    // eslint-disable-next-line no-console
    console.log( `Server Online at port :${ port } ` );
} );
