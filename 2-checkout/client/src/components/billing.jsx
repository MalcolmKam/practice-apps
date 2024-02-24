import React, {useState, useEffect} from "react";
import Summary from "./summary.jsx";

const Billing = () => {

  let [showSummary, setShowSummary] = useState(false);

  const toggleSummary = () => {
    event.preventDefault();
    setShowSummary(!showSummary);
  }

  return (
    <div>
      {!showSummary && (
        <form>
        <input name="card number" placeholder="card number"/>
        <input name="card expiration" placeholder="card expiration"/>
        <input name="CVV" placeholder="CVV"/>
        <input name="billing zipcode" placeholder="billing zipcode"/>
        <button onClick={toggleSummary}>Proceed to Summary</button>
      </form>
      )}
      {showSummary && <Summary />}
    </div>
  );
}

export default Billing;