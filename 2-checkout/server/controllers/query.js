const Promise = require("bluebird");
const connection = require('../models/db.js')

let queryAsync = Promise.promisify(connection.query);

exports.find = (req, res) => {
  queryAsync('select * from accountInfo')
  .then((response) => {
    res.send(response);
  })
  .catch((err) => {
    console.error(err);
    res.sendStatus(500);
  })
}

exports.find = (req, res) => {
  new Promise((resolve, reject) => {
    connection.query('select * from accountInfo', (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  })
  .then((response) => {
    res.send(response);
  })
  .catch((err) => {
    console.error(err);
  })
}
