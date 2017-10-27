// Require mogoose
var mongoose = require("mongoose");

// require the connection 
var db = require("../config/connection");

// Create a schema class
var Schema = mongoose.Schema;

// Create the Note schema 
var NoteSchema = new Schema({
    // Just a string 
    moreText:{
        type:String
    }
});

// Remember, Mongoose will automatically save the ObjectIds of the notes
// These ids are referred to in the Article model
var Note = mongoose.model("Note", NotEChema);

