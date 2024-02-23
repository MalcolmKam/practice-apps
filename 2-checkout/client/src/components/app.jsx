import React, {useState, useEffect} from "react";
import Profile from "./profile.jsx"

const App = () => {

  const [pageCookie, setPageCookie] = useState("");

  useEffect(() => {
    setPageCookie(JSON.stringify(document.cookie, undefined, "\t"))
  }, []);

  const [showF1, setShowF1] = useState(false);

  const toggleF1 = () => {
    setShowF1(!showF1);
  };

  return (
    <div>
      {!showF1 && (
      <div>
         <p>Complete Your Purchase!</p>
         <p>
           <code>Page Cookie: {pageCookie}</code>
         </p>
         <div>
           <button name="checkout" onClick={toggleF1}>Checkout</button>
         </div>
      </div>
      )}
      {showF1 && <Profile cookie={pageCookie}/>}
  </div>
  )
};

export default App;