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
  let cookie = req.params.cookie;
  new Promise((resolve, reject) => {
    connection.query('select name, email, password from accountInfo where id = ?', [cookie], (err, results) => {
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
    res.sendStatus(500);
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
    res.sendStatus(500);
  })
};


exports.findShipping = (req, res) => {
  let cookie = req.params.cookie;
  new Promise((resolve, reject) => {
    connection.query('select address1, address2, city, state, zipcode from shippingInfo where account = ?', [cookie], (err, results) => {
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
    res.sendStatus(500);
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
    res.sendStatus(500);
  })
};

exports.findBilling = (req, res) => {
  let cookie = req.params.cookie;
  new Promise((resolve, reject) => {
    connection.query('select card_number, expiry_date, CVV, billing_zip_code from billingInfo where account = ?', [cookie], (err, results) => {
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
    res.sendStatus(500);
  })
}
