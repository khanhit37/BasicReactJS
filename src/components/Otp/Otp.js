import React, { useState } from "react";
import GenerateOtp from "./GenerateOtp";
import InputOtp from "./InputOtp";
import "./Otpp.scss";

function Otp() {
  const [orgPrOtp, setOrgPrOtp] = useState("");
  const [userOtp, setUserOtp] = useState("");
  const [isDisableBtn, setIsDIsableBtn] = useState(false);
  const [clearOtp, setClearOtp] = useState("");

  const handleSumbitOpt = () => {
    if (+orgPrOtp === +userOtp) {
      alert("Correct");
    } else {
      alert("Wrong");
    }
  };

  const handleClearOtp = () => {
    if (+orgPrOtp !== +clearOtp) {
      setOrgPrOtp("");
    }
  };
  return (
    <div className="otp-container">
      <GenerateOtp setOrgPrOtp={setOrgPrOtp} />
      <InputOtp
        setUserOtp={setUserOtp}
        handleSumbitOpt={handleSumbitOpt}
        isDisableBtn={isDisableBtn}
        setIsDIsableBtn={setIsDIsableBtn}
        clearOtp={clearOtp}
        handleClearOtp={handleClearOtp}
      />
    </div>
  );
}

export default Otp;
