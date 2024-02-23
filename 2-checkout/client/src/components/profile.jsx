import React, {useState, useEffect} from "react";
import Shipping from "./shipping.jsx"

const Profile = () => {
  let [showF2, setShowF2] = useState(false);

  const toggleF2 = () => {
    event.preventDefault();
    setShowF2(!showF2);
  }

  return (
    <div>
      {!showF2 && (
        <form>
        <input name="name" placeholder="name"/>
        <input name="email" placeholder="email"/>
        <input name="password" placeholder="password"/>
        <button onClick={toggleF2}>Next</button>
      </form>
      )}
      {showF2 && <Shipping />}
    </div>
  );
}

export default Profile;