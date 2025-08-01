interface Iparam{
    isOpen:boolean,
    onClick:(event:React.MouseEvent<HTMLButtonElement>)=>void
}
export const MobileOtp=({isOpen,onClick}:Iparam)=>{
    return (
        <>
            {isOpen && <div className="fixed flex justify-center top-0 items-center bottom-0">
                <div className="fixed top-0 bottom-0 right-0 left-0 bg-black/70 z-20"></div>
                <div className="bg-white sm: h-[45%] rounded-3xl shadow-xl z-30">
                    <div className="flex justify-center p-3 font-semibold bg-gray-200 rounded-t-3xl">OTP Verification</div>
                    <div className="sm:px-20 px-8 py-5 overflow-y-scroll">
                        <div>We've sent an otp to your mobile number.</div>
                        <div>Please enter it below to verify and proceed.</div>
                        <label htmlFor="otp"></label>
                        <input className="mt-10" type="text" name="" id="otp" placeholder="xxxx" required/>
                        <div>Didn't receive the otp? Resend in 2:00</div>
                        {/* <div></div> */}
                        <button type="submit" onClick={onClick} className="mt-6 py-4 px-10 bg-[#f27b1a] rounded-lg shadow-xl hover:bg-[#d36103] cursor-pointer">Verify</button>
                    </div>
                </div>
                </div>
            }
        </>
    )
}