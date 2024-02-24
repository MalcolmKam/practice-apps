import React, {useState, useEffect} from "react";
import Shipping from "./shipping.jsx";
import axios from "axios";

const Profile = ({cookie}) => {
  let [showF2, setShowF2] = useState(false);

  let [name, setName] = useState('');

  let [email, setEmail] = useState('');

  let [password, setPassword] = useState('');

  const toggleF2 = () => {
    setShowF2(!showF2);
  }

  const submitProfileInfo = () => {
    event.preventDefault();
    axios.post('/form1', {
      'id': cookie,
      'name': name,
      'email': email,
      'password': password
    })
    .then((response) => {
      console.log(response);
    })
    .then(() => {
      toggleF2();
    })
    .catch((err) => {
      console.error('Failed to post form1: ', err);
    })
  }

  return (
    <div>
      {!showF2 && (
        <form>
        <input name="name" placeholder="name" value={name} onChange={e => setName(e.target.value)}/>
        <input name="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
        <input name="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}/>
        <button onClick={submitProfileInfo}>Next</button>
      </form>
      )}
      {showF2 && <Shipping />}
    </div>
  );
}

export default Profile;