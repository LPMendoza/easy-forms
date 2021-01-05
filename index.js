const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

let PORT = process.env.PORT || 3001;

const server = express();

server.listen(() => {
    console.log("Server running on " + PORT);
});

