require("dotenv").config();
const express = require("express");
const path = require("path");
const glossary = require('./db.js');


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

//set up post request
app.post('/test', (req, res) => {
  let entry = new glossary({
    word: req.body.word,
    definition: req.body.definition
  });
  entry.save((err) => {
    if (err) {
      console.error('oops')
    }
    res.sendStatus(201)
  })
});

// set up get request for all data
app.get('/test', (req, res) => {
  glossary.find()
  .then((items) => {
    res.send(items);
  })
})

//set up a get request for a single entry
app.get('/test/:search', (req, res) => {
  glossary.findOne({'word': req.params.search})
  .then((entry) => {
    res.send(entry);
  })
})

//set up put request
app.put('/test/:updateWord', (req, res) => {
  glossary.updateOne({'word': req.params.updateWord}, {'definition': req.body.definition})
  .then(() => {
    console.log('Entry updated!');
    res.sendStatus(200)
  })
  .catch((err) => {
    console.error('Entry failed to update: ', err);
  })
})

//set up delete request
app.delete('/test/:deleteWord', (req, res) => {
  glossary.deleteOne({'word': req.params.deleteWord})
  .then(() => {
    console.log('Entry deleted!');
    res.sendStatus(200)
  })
  .catch((err) => {
    console.error('Entry could not be deleted ', err);
  });
})



app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
