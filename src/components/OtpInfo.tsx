import { useEffect, useState } from "react"

interface Iparam{
    open:boolean,
    otp:number
    setShowOtp
}

export const OtpInfo=({open=true, otp,setShowOtp}:Iparam)=>{
    const [isOpen,setIsOpen]=useState<boolean>(open)
    useEffect(()=>{
        const timeout=setTimeout(()=>{
            setIsOpen(false);
            setShowOtp(false);
        },4000)
        return ()=>{
            clearTimeout(timeout);
        }
    },[])
    return (
        <>
            {isOpen&&<div className="fixed top-20 right-10 rounded-lg bg-[#f7beab] py-3 px-5 z-50">
                    <span>your otp is {Math.floor(otp)}</span>
                    <span className="pl-2 font-bold text-xl text-red-500 cursor-pointer" onClick={()=>{setIsOpen(false);setShowOtp(false);}}>&times;</span>
                </div>}
        </>
    )
}