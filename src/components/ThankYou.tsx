import { useEffect, useState } from "react"

interface Iparam{
    isOpen:boolean
}
export const ThankYou=({isOpen}:Iparam)=>{
    const [isLoading, setIsLoading]=useState<boolean>(true)
    useEffect(()=>{
        const timer=setTimeout(()=>{
            setIsLoading(!isLoading);
        },1000)

        // return clearTimeout(timer);
    },[isOpen])
    return (
        <>
            {isOpen && (
                    <div className="fixed flex justify-center top-0 items-center bottom-0 z-2">
                    <div className="fixed top-0 bottom-0 right-0 left-0 bg-black/70 z-20"></div>
                    {!isLoading?<div className="z-70 loader"></div>:<div className="bg-white sm:w-[42%] sm:h-[33%] h-[40%] rounded-xl pt-10 shadow-xl z-30 relative  overflow-y-auto">
                        <div className="text-center underline font-semibold text-md maroon sticky top-0 mb-4">
                            <div className="absolute -top-10 right-0 left-0 bg-gray-200  py-4">Thank You</div>
                        </div>
                        <div className="sm:px-18 px-8 py-8 w-full">
                            Thank You for filling out the form my bank team will reach to the referred person and will assist them for their account requirement.
                        </div>
                    </div>}
                </div>)
            
            }
        </>
    )
}