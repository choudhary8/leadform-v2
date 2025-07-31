import { AiOutlineDeliveredProcedure } from "react-icons/ai"
import { FaArrowRight } from "react-icons/fa"
import { FcAssistant } from "react-icons/fc"
import { FiPhoneCall } from "react-icons/fi"

interface propInterface{
    onClick:()=>void
}
export const InfoTab=({onClick}:propInterface)=>{
    return (
        <div className="py-8 sm:px-20 px-8 mt-24 sm:mt-0 rounded-3xl shadow-xl bg-white">
            <div className="flex">
                <div className="maroon font-bold text-2xl pb-1 border-b-1 mb-2">NRI Referral Form</div>
            </div>
            <div className="bg-[#d75b15] font-[500] text-2xl text-white p-4 mb-4">Share your banking experience with your NRI family and friends</div>

            <div className="actionInfo my-2 relative">
                <div className="flex items-center sm:w-2/3">
                    <div className="absolute -left-4 font-bold text-6xl py-4 bg-white text-[#f7a226]">1</div>
                    <div className="pl-2 font-bold text-3xl">
                    <FiPhoneCall/>
                        {/* <img src="https://buy.icicibank.com/ucj/media/iconPhone.a8ee7cc2.png" className="img-fluid ml-4" alt="icon1" width="35px" height="35px"></img> */}
                    </div>
                    <div className="p-2 px-8">
                        <div className="text-[#d75b15] font-semibold">
                            Refer your NRI family and friends
                        </div>
                        <div className="text-sm">Fill the form and get your family and friends on-call assistance for NRI account opening.</div>
                    </div>
                </div>
                <a href="https://www.icicibank.com/nri-banking/document_finder" className="flex items-center justify-end text-sm underline font-semibold">
                    See Documents
                    <div >
                    <FaArrowRight/>
                        {/* <img src="https://buy.icicibank.com/ucj/media/iconArrow.3e68e478.png" className="img-fluid pl-1" alt="arrow"/> */}
                    </div>
                </a>
            </div>
            <div className="actionInfo my-2 flex items-center relative">
                <div className="absolute -left-4 font-bold text-6xl py-4 bg-white text-[#f7a226]">2</div>
                <div className="pl-2 font-bold text-3xl">
                <FcAssistant/>
                    {/* <img src="https://buy.icicibank.com//ucj/media/iconAssistance.d4e4674b.png" className="img-fluid ml-4" alt="icon2" width="35px" height="35px"></img> */}
                </div>
                <div className="p-2 px-6">
                    <div className="text-[#d75b15] font-semibold">
                        Live Assistance from Team My Bank!
                    </div>
                    <div className="sm:w-2/3 text-sm">My Bank will call and assist in filling the Account Opening form and KYC documentation.</div>
                </div>
            </div>

            <div className="actionInfo my-2 relative">
                <div className="flex items-center sm:w-2/3">
                    <div className="absolute -left-4 font-bold text-6xl py-4 bg-white text-[#f7a226]">3</div>
                    <div className="pl-2 font-bold text-3xl">
                    <AiOutlineDeliveredProcedure/>
                        {/* <img src="https://buy.icicibank.com/ucj/media/iconAccount.851bfc35.png" className="img-fluid ml-4" alt="icon3" width="35px" height="35px"></img> */}
                    </div>
                    <div className="p-2 px-6">
                        <div className="text-[#d75b15] font-semibold">
                            NRI Account Opened
                        </div>
                        <div className="text-sm">Account is opened after successful scrutiny of KYC documents.</div>
                    </div>
                </div>
                <div className="flex items-center justify-end text-sm underline font-semibold">
                    For US customers
                    <div>
                        <FaArrowRight/>
                        {/* <img src="https://buy.icicibank.com/ucj/media/iconArrow.3e68e478.png" className="img-fluid pl-1" alt="arrow"/> */}
                    </div>
                </div>
            </div>
            
            <button onClick={onClick} className="py-4 px-10 bg-[#f27b1a] rounded-lg shadow-xl hover:bg-[#d36103] cursor-pointer">Fill Form</button>
        </div>
    )
}