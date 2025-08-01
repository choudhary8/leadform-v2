interface Iparam{
    isOpen:boolean,
    onClick:(event:React.MouseEvent<HTMLButtonElement>)=>void
}
export const MobileOtp=({isOpen,onClick}:Iparam)=>{
    return (
        <>
            {isOpen && <div className="fixed flex justify-center top-0 items-center bottom-0">
                <div className="fixed top-0 bottom-0 right-0 left-0 bg-black/70 z-20"></div>
                <div className="bg-white sm: sm:h-[45%] h-[55%] rounded-3xl pt-10 shadow-xl z-30 relative overflow-y-scroll">
                    <div className="text-center underline font-semibold text-md maroon sticky top-0 mb-4 w-full">
                        <div className="absolute -top-10 -left-20 -right-20 bg-gray-200  py-4">OTP Verification</div>
                    </div>
                    <div className="sm:px-20 px-8 py-5 w-full">
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