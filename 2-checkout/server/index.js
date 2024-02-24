require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
const controllers = require("./controllers/query.js")

// Establishes connection to the database on server start
const db = require("./models/db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in a specified folder.
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(express.json());
/****
 *
 *
 * Other routes here....
 *
 *
 */

//test
app.get('/form1', controllers.findAccount);

app.post('/form1', controllers.postAccount);

app.post('/form2', controllers.postShipping);

app.post('/form3', controllers.postBilling);

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
