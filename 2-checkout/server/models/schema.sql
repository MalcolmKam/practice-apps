-- CREATE DATABASE checkout;

USE checkout;

CREATE TABLE accountInfo (
  id VARCHAR(200) PRIMARY KEY,
  name VARCHAR(200),
  email VARCHAR(500) UNIQUE KEY,
  password VARCHAR(500) UNIQUE KEY
);

CREATE TABLE shippingInfo (
  id INT PRIMARY KEY AUTO_INCREMENT,
  account VARCHAR(200),
  address1 VARCHAR(1000),
  address2 VARCHAR(1000),
  city VARCHAR(500),
  state VARCHAR(500),
  zipcode INT,
  FOREIGN KEY (account)
    REFERENCES accountInfo(id)
);

CREATE TABLE billingInfo (
  id INT PRIMARY KEY AUTO_INCREMENT,
  account VARCHAR(200),
  card_number INT,
  expiry_date DATE,
  CVV INT,
  billing_zip_code INT,
  FOREIGN KEY (account) REFERENCES accountInfo(id)
);

