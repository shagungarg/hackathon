const express = require('express');

const handlers = require("../controllers/general");
const generalrouter = express.Router();


generalrouter.post("/getDiseases" ,handlers.getDiseases);

module.exports= generalrouter;


