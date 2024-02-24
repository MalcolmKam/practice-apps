import React, {useState, useEffect} from "react";
import Billing from "./billing.jsx"

const Shipping = () => {

  let [showF3, setShowF3] = useState(false);

  const toggleF3 = () => {
    event.preventDefault();
    setShowF3(!showF3);
  }

  return (
    <div>
      {!showF3 && (
        <form>
        <input name="address1" placeholder="address1"/>
        <input name="address2" placeholder="address2"/>
        <input name="city" placeholder="city"/>
        <input name="state" placeholder="state"/>
        <input name="zipcode" placeholder="zipcode"/>
        <button onClick={toggleF3}>Next</button>
      </form>
      )}
      {showF3 && <Billing />}
    </div>
  );
}

export default Shipping;