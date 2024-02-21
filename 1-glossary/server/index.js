require("dotenv").config();
const express = require("express");
const path = require("path");
const glossary = require('./db.js')

const app = express();

// Serves up all static and generated assets in in a specified folder.
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(express.json())

/****
 *
 *
 * Other routes here....
 *
 *
 */
app.post('/test', (req, res) => {
  let entry = new glossary({
    word: req.body.word,
    definition: req.body.definition
  });
  entry.save()
  .then(() => {
    res.sendStatus(200);
  })
  .catch((err) => {
    console.error('Error saving entry ', err);
    res.sendStatus(500);
  })
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
