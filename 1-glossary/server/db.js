const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/dictionary')

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
const { Schema } = mongoose

const glossarySchema = new Schema( {
  word: {type: String, unique: true},
  definition: String,
})

const glossary = mongoose.model(process.env.DB_NAME, glossarySchema)
// 3. Export the models

module.exports = glossary
// 4. Import the models into any modules that need them
