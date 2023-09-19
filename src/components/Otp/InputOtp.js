import React from "react";
import { useState } from "react";
import OtpInput from "react-otp-input";
import CountDown from "./CountDown";

function InputOtp(props) {
  const [otp, setOtp] = useState("");
  console.log(otp);
  props.setUserOtp(otp);

  const handleSumbitOpt = () => {
    props.handleSumbitOpt();
  };

  const handleClearOtp = () => {
    props.setOrgPrOtp("");
    props.handleClearOtp();
  };
  return (
    <div className="input-otp-container">
      <div className="title"> Enter verification code</div>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        inputStyle={"input-customize"}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
      />
      <div className="timer">
        <CountDown setIsDIsableBtn={props.setIsDIsableBtn} />
      </div>
      <div className="action">
        <button className="clear" onClick={handleClearOtp}>
          Clear
        </button>
        <button
          className="confirm"
          onClick={handleSumbitOpt}
          disabled={props.isDisableBtn}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default InputOtp;
