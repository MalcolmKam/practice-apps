const connection = require('../models/db.js')

exports.postAccount = (req, res) => {
  new Promise((resolve, reject) => {
    connection.query('INSERT INTO accountInfo (id, name, email, password) VALUES (?, ?, ?, ?)', [req.body.id, req.body.name, req.body.email, req.body.password],  (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  })
  .then(() => {
    res.sendStatus(201);
  })
  .catch((err) => {
    console.error(err);
  })
};


exports.findAccount = (req, res) => {
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
};

exports.postShipping = (req, res) => {
  new Promise((resolve, reject) => {
    connection.query('INSERT INTO shippingInfo (account, address1, address2, city, state, zipcode) VALUES (?, ?, ?, ?, ?, ?)', [req.body.account, req.body.address1, req.body.address2, req.body.city, req.body.state, req.body.zipcode],  (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  })
  .then(() => {
    res.sendStatus(201);
  })
  .catch((err) => {
    console.error(err);
  })
};


exports.findShpping = (req, res) => {
  new Promise((resolve, reject) => {
    connection.query('select * from shippingInfo', (err, results) => {
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
};



exports.postBilling = (req, res) => {
  new Promise((resolve, reject) => {
    connection.query('INSERT INTO billingInfo (account, card_number, expiry_date, CVV, billing_zip_code) VALUES (?, ?, ?, ?, ?)', [req.body.account, req.body.cardNumber, req.body.expiryDate, req.body.CVV, req.body.billingZip],  (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  })
  .then(() => {
    res.sendStatus(201);
  })
  .catch((err) => {
    console.error(err);
  })
};

exports.findBilling = (req, res) => {
  new Promise((resolve, reject) => {
    connection.query('select * from billingInfo', (err, results) => {
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
