import React, { useState } from "react";

function GenerateOtp(props) {
  const [orgOtp, setOrgOtp] = useState("");

  const handleClick = () => {
    let otp = Math.floor(100000 + Math.random() * 900000);
    setOrgOtp(otp);
    props.setOrgPrOtp(otp);
  };
  return (
    <div>
      <button onClick={() => handleClick()}>Generate Otp</button>
      <div>Your Otp: {orgOtp}</div>
    </div>
  );
}

export default GenerateOtp;
