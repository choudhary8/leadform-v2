import { IoHomeOutline } from "react-icons/io5"

export const Navbar=()=>{
    return (
        <div className="z-1 sticky w-screen top-0 bg-[#c95d04]">
            <div className="flex justify-between mx-3 items-center ">
                {/* <img src="https://buy.icicibank.com/ucj/media/icici3.1ed6e4c0.webp" alt="ICICI Bank" className="mb-1"></img> */}
                <div className="font-extrabold text-3xl text-blue-950 ">My Bank</div>
                <a href="https://icicibank.com" className="bg-[#e9822e] p-2 m-2 rounded-lg hover:bg-[#bf5702] shadow-xl">
                    <IoHomeOutline className="font-bold text-3xl text-black"/>
                    {/* <img loading="lazy" src="https://buy.icicibank.com/ucj/media/home-orange.85fa1234.webp" alt="ICICI Bank" className="p-2.5 bg-[#c95d04]"></img> */}
                </a>
            </div>
            {/* <div className="bg-[#f27b1a] h-12"></div> */}
        </div>
    )
}