import { useEffect, useState } from "react"

interface Iparam{
    isOpen:boolean,
    onClick:(event:React.MouseEvent<HTMLButtonElement>)=>void
}
export const MobileOtp=({isOpen,onClick}:Iparam)=>{
    const [timer,setTimer]=useState<number>(10);
    const [start,setStart]=useState<boolean>(false);
    const [msg,setMsg]=useState<boolean>(true);
    const [btn,setBtn]=useState<boolean>(false);

    useEffect(()=>{setStart(isOpen);},[isOpen])
    useEffect(()=>{if(timer<=0){setStart(false);setMsg(false); setBtn(true)}},[timer])
    // if(timer<0)
    // {
        
    //     console.log(timer);
        
    // }
    useEffect(()=>{
        const interval=setInterval(()=>{
            if(start)
            setTimer(prev=>(prev-1));
        },1000)
        return ()=>{
            clearInterval(interval)
        }
    },[start])
    return (
        <>
            {isOpen && <div className="fixed flex justify-center top-0 items-center bottom-0 z-2">
                <div className="fixed top-0 bottom-0 right-0 left-0 bg-black/70 z-20"></div>
                <div className="bg-white sm:h-[45%] h-[55%] rounded-3xl pt-10 shadow-xl z-30 relative overflow-y-auto">
                    <div className="text-center underline font-semibold text-md maroon sticky top-0 mb-4">
                        <div className="absolute -top-10 right-0 left-0 bg-gray-200  py-4">OTP Verification</div>
                    </div>
                    <div className="sm:px-20 px-8 py-5 w-full">
                        <div>We've sent an otp to your mobile number.</div>
                        <div>Please enter it below to verify and proceed.</div>
                        <label htmlFor="otp"></label>
                        <input className="mt-10" type="text" name="" id="otp" placeholder="xxxx" required/>
                        {msg && <div>Didn't receive the otp? Resend in {Math.trunc(timer/60)}:{timer%60}</div>}
                        {btn && <div><button className="text-blue-500 hover:text-blue-800 cursor-pointer" onClick={()=>{setMsg(true); setBtn(false); setTimer(10); setStart(true)}}>Resend</button></div>}
                        {/* <div></div> */}
                        <button type="submit" onClick={onClick} className="mt-6 py-4 px-10 bg-[#f27b1a] rounded-lg shadow-xl hover:bg-[#d36103] cursor-pointer">Verify</button>
                    </div>
                </div>
                </div>
            }
        </>
    )
}