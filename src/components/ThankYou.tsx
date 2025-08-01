interface Iparam{
    isOpen:boolean
}
export const ThankYou=({isOpen}:Iparam)=>{
    return (
        <>
            {isOpen && <div className="fixed flex justify-center top-0 items-center bottom-0 z-2">
                    <div className="fixed top-0 bottom-0 right-0 left-0 bg-black/70 z-20"></div>
                    <div className="bg-white sm:w-[40%] sm:h-[35%] h-[40%] rounded-3xl pt-10 shadow-xl z-30 relative  overflow-y-auto">
                        <div className="text-center underline font-semibold text-md maroon sticky top-0 mb-4">
                            <div className="absolute -top-10 right-0 left-0 bg-gray-200  py-4">Thank You</div>
                        </div>
                        <div className="sm:px-20 px-8 py-10 w-full">
                            Thank You for filling out the form my bank team will reach to the referred person and will assist them for their account requirement.
                        </div>
                    </div>
                </div>
            }
        </>
    )
}