// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

// var tableData = require("../data/tableData");
var notesDBJSON = require("../data/notetakerData");
// var waitListData = require("../data/notetakerData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // get all notes
  app.get("/api/notes", function(req, res) {
    res.json(notesDBJSON);
  });
// create new note
  app.post("/api/notes", function(req, res) {
      notesDBJSON.push(req.body);
  });
};