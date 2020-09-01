// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
const fs = require("fs");
const path = require("path");
var db = require("../../db/db.json");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/notes", function(req, res) {
    res.json(db);
  });

  app.post("/api/notes", function (req, res) {
      var newNote = req.body;
      db.push(newNote);
      editdb();
      console.log(newNote);
      return console.log("This note was added =" + newNote.title);
  });

  app.delete("/api/note/:id", function (req, res) {

  })

  function editdb() {
    fs.writeFile("db/fb.json", JSON.stringify(db, '\t'), err => {
      if (err) throw err;
      return true;
    })
  }


//   // ---------------------------------------------------------------------------
//   // I added this below code so you could clear out the table while working with the functionality.
//   // Don"t worry about it!

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
 });
};