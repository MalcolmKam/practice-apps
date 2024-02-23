import React, {useState, useEffect} from "react";

const Shipping = () => {

  return (
    <div>
      <form>
        <input name="address1" placeholder="address1"/>
        <input name="address2" placeholder="address2"/>
        <input name="city" placeholder="city"/>
        <input name="state" placeholder="state"/>
        <input name="zipcode" placeholder="zipcode"/>
      </form>
    </div>
  );
}

export default Shipping;