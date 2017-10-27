var express= require("express");
var router = express.Router();
var Article = require("../models/Article");
var Note = require("../models/Note");
var scraper = require("../controller/scraper");

