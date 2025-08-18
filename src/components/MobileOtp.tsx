import { useCallback, useEffect, useRef, useState } from "react";
import { generateOtp, verifyOtp } from "../utils/otpUtils.ts";
import { OtpInfo } from "./OtpInfo.tsx";

interface Iparam {
  isOpen: boolean;
  setOpenOtp:React.Dispatch<React.SetStateAction<boolean>>;
  setOpenPerson:React.Dispatch<React.SetStateAction<boolean>>;
}
export const MobileOtp = ({ isOpen, setOpenOtp, setOpenPerson }: Iparam) => {
  const [timer, setTimer] = useState<number>(10);
  const [start, setStart] = useState<boolean>(false);
  const [msg, setMsg] = useState<boolean>(true);
  const [btn, setBtn] = useState<boolean>(false);
  const eotp = useRef<HTMLInputElement | null>(null);
  const [gotp, setGotp] = useState<number>(0);
  const [showOtp, setShowOtp] = useState<boolean>(false);

  const sendOtp = useCallback(async () => {
    await setGotp(generateOtp());
    await setShowOtp(true);
    // await senDOtp(0);
  }, []);

  useEffect(() => {
    sendOtp();
  }, []);
  useEffect(() => {
    setStart(isOpen);
  }, [isOpen]);
  useEffect(() => {
    if (timer <= 0) {
      setStart(false);
      setMsg(false);
      setBtn(true);
    }
  }, [timer]);
  // if(timer<0)
  // {

  //     console.log(timer);

  // }
  useEffect(() => {
    const interval = setInterval(() => {
      if (start) setTimer((prev) => prev - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [start]);

  const otpVerify = (gotp:number, eotp:React.RefObject<HTMLInputElement | null>) => {
    console.log(Math.floor(gotp), Number(eotp.current?.value));

    const otpverified = verifyOtp(
      Math.floor(gotp),
      Number(eotp.current?.value)
    );
    if (otpverified) {
      setOpenOtp(false);
      setOpenPerson(true);
    } else {
      alert("incorrect otp");
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed flex w-full sm:justify-center top-0 sm:items-center items-end bottom-0 z-2">
          {showOtp && (
            <OtpInfo open={showOtp} setShowOtp={setShowOtp} otp={gotp} />
          )}
          <div className="fixed top-0 bottom-0 right-0 left-0 bg-black/70 z-20"></div>
          <div className="bg-white sm:h-[42%] h-[55%] w-[35%] rounded-xl pt-10 shadow-xl z-30 relative overflow-y-auto">
            <div className="text-center underline font-semibold text-md maroon sticky top-0 mb-4">
              <div className="absolute -top-10 right-0 left-0 bg-gray-200  py-4">
                OTP Verification
              </div>
            </div>
            <div className="sm:px-16 px-8 py-3 w-full">
              <div>We've sent an otp to your mobile number.</div>
              <div>Please enter it below to verify and proceed.</div>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  otpVerify(gotp, eotp);
                }}
              >
                <label htmlFor="otp"></label>
                <input
                  ref={eotp}
                  className="mt-10"
                  type="text"
                  name=""
                  id="otp"
                  placeholder="xxxx"
                  required
                />
                {msg && (
                  <div>
                    Didn't receive the otp? Resend in {Math.trunc(timer / 60)}:
                    {timer % 60}
                  </div>
                )}
                {btn && (
                  <div>
                    <button
                      className="text-blue-500 hover:text-blue-800 cursor-pointer resend"
                      onClick={() => {
                        setMsg(true);
                        setBtn(false);
                        setTimer(10);
                        setStart(true);
                        sendOtp();
                      }}
                    >
                      Resend
                    </button>
                  </div>
                )}
                {/* <div></div> */}
                <button
                  type="submit"
                  className="mt-4 py-4 px-10 bg-[#f27b1a] rounded-lg shadow-xl hover:bg-[#d36103] cursor-pointer"
                >
                  Verify
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
