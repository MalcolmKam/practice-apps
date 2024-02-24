import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ReactDom from 'react-dom';
import App from './app.jsx'

const Summary = ({cookie, toggleF1, toggleF2, toggleF3, toggleSummary}) => {

  const [profileData, setProfileData] = useState([]);
  const [shippingData, setShippingData] = useState([]);
  const [billingData, setBillingData] = useState([]);

  useEffect(() => {
    axios.get(`/form1/${cookie}`).then((response) => {
      setProfileData(response.data[0]);
    })
    .then(() => {
      return axios.get(`/form2/${cookie}`)
    }).then((response) => {
      setShippingData(response.data[0]);
    })
    .then(() => {
      return axios.get(`/form3/${cookie}`)
    }).then((response) => {
      setBillingData(response.data[0]);
    })
  }, []);

  const renderHome = () => {
    toggleF1();
    toggleF2();
    toggleF3();
    toggleSummary();
  };

  return (
    <div>
      <div>
        <h1>Profile Information</h1>
        <div><b>Name:</b> {profileData.name}</div>
        <div><b>Email:</b> {profileData.email}</div>
      </div>
      <div>
        <h1>Shipping Information</h1>
        <div><b>Address Line 1:</b> {shippingData.address1}</div>
        <div><b>Address Line 2:</b> {shippingData.address2}</div>
        <div><b>City:</b> {shippingData.city}</div>
        <div><b>State:</b> {shippingData.state}</div>
        <div><b>Zipcode:</b> {shippingData.zipcode}</div>
      </div>
      <div>
        <h1>Billing Information</h1>
        <div><b>Card Number:</b> {billingData.card_number}</div>
        <div><b>Expiration Date:</b> {billingData.expiry_date}</div>
        <div><b>CVV:</b> {billingData.CVV}</div>
        <div><b>Billing Zip Code:</b> {billingData.billing_zip_code}</div>
      </div>
      <button onClick={renderHome}>Purchase</button>
    </div>
  );
}



export default Summary;