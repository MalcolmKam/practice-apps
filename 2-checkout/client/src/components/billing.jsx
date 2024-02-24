import React, {useState, useEffect} from "react";
import Summary from "./summary.jsx";
import axios from "axios";

const Billing = ({cookie, toggleF1, toggleF2, toggleF3}) => {

  let [showSummary, setShowSummary] = useState(false);

  let [cardNumber, setCardNumber] = useState('');

  let [expiryDate, setExpiryDate] = useState('');

  let [CVV, setCVV] = useState('');

  let [billingZip, setBillingZip] = useState('');

  const toggleSummary = () => {
    setShowSummary(!showSummary);
  }

  const submitBillingInfo = () => {
    event.preventDefault();
    axios.post('/form3', {
      'account': cookie,
      'cardNumber': cardNumber,
      'expiryDate': expiryDate,
      'CVV': CVV,
      'billingZip': billingZip,
    })
    .then((response) => {
      console.log(response);
    })
    .then(() => {
      toggleSummary();
    })
    .catch((err) => {
      console.error('Failed to post form3: ', err);
    })
  }

  return (
    <div>
      {!showSummary && (
        <form>
        <input name="card number" placeholder="card number" value={cardNumber} onChange={e => setCardNumber(e.target.value)}/>
        <input name="card expiration" placeholder="card expiration" value={expiryDate} onChange={e => setExpiryDate(e.target.value)}/>
        <input name="CVV" placeholder="CVV" value={CVV} onChange={e => setCVV(e.target.value)}/>
        <input name="billing zipcode" placeholder="billing zipcode" value={billingZip} onChange={e => setBillingZip(e.target.value)}/>
        <button onClick={submitBillingInfo}>Proceed to Summary</button>
      </form>
      )}
      {showSummary && <Summary cookie={cookie} toggleF1={toggleF1} toggleF2={toggleF2} toggleF3={toggleF3} toggleSummary={toggleSummary}/>}
    </div>
  );
}

export default Billing;