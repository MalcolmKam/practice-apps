import React, {useState, useEffect} from "react";
import Billing from "./billing.jsx";
import axios from 'axios';

const Shipping = ({cookie}) => {

  let [showF3, setShowF3] = useState(false);

  let [address1, setAddress1] = useState('');

  let [address2, setAddress2] = useState('');

  let [city, setCity] = useState('');

  let [state, setState] = useState('');

  let [zipcode, setZipCode] = useState('');


  const toggleF3 = () => {
    setShowF3(!showF3);
  };

  const submitShippingInfo = () => {
    event.preventDefault();
    axios.post('/form2', {
      'account': cookie,
      'address1': address1,
      'address2': address2,
      'city': city,
      'state': state,
      'zipcode': zipcode
    })
    .then((response) => {
      console.log(response);
    })
    .then(() => {
      toggleF3();
    })
    .catch((err) => {
      console.error('Failed to post form2: ', err);
    })
  }

  return (
    <div>
      {!showF3 && (
        <form>
        <input name="address1" placeholder="address1" value={address1} onChange={e => setAddress1(e.target.value)}/>
        <input name="address2" placeholder="address2" value={address2} onChange={e => setAddress2(e.target.value)}/>
        <input name="city" placeholder="city" value={city} onChange={e => setCity(e.target.value)}/>
        <input name="state" placeholder="state" value={state} onChange={e => setState(e.target.value)}/>
        <input name="zipcode" placeholder="zipcode" value={zipcode} onChange={e => setZipCode(e.target.value)}/>
        <button onClick={submitShippingInfo}>Next</button>
      </form>
      )}
      {showF3 && <Billing cookie={cookie}/>}
    </div>
  );
}

export default Shipping;