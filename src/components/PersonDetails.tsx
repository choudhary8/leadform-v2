import { useState } from "react";

interface detailsInterface{
    [code:string]:string
}
interface propInterface{
    mobCode:detailsInterface,
    countriesNames:detailsInterface,
    isOpen:boolean,
    onClick:(event:React.FormEvent<HTMLFormElement>)=>void
}

export const PersonDetails=({mobCode,countriesNames,isOpen,onClick}:propInterface)=>{
    const [countrySelected,setCountrySelected]=useState<string>('');
    return (
        <>
        {isOpen && <div className="person fixed flex justify-center top-0 items-center bottom-0 z-2">
            <div className="fixed top-0 bottom-0 right-0 left-0 bg-black/70 z-20"></div>
            <form onSubmit={onClick} className="bg-white sm:w-[41%] sm:px-20 px-8 py-15 rounded-3xl shadow-xl overflow-y-auto h-4/5 z-30">
                <div className="text-center underline font-semibold text-md maroon sticky w-full  top-0 mb-4">
                    <div className="absolute -top-15 -left-20 -right-20 bg-gray-200  py-4">Details of the person you wish to refer</div>
                </div>
                <label htmlFor="personFirstName">First Name<span className="text-red-500 font-thin">*</span></label>
                <input type="text" id="personFirstName" placeholder="Please Enter First Name" required/>

                <label htmlFor="personLastName">Last Name</label>
                <input type="text" id="personLastName" placeholder="Please Enter Last Name"/>

                <label htmlFor="personCountry">Country<span className="text-red-500 font-thin">*</span></label>
                <select onChange={(event)=>{setCountrySelected(event.target.value)}} name="" id="personCountry" className="p-4" required>
                    <option value="">select country</option>
                    {
                        Object.entries(countriesNames).map(([key,value])=>(
                            (value!=='undefined')&&<option key={key} value={key}>{value}</option>
                        ))
                    }
                </select>

                <label htmlFor="personMobile">Mobile Number<span className="text-red-500 font-thin">*</span></label>
                <div id="personMobile" className="flex">
                    <select name="" id="countryCode" className="mob" required>
                        <option value={countrySelected}>{mobCode[countrySelected]}</option>
                    </select>
                    <input type="tel" name="personMobile" placeholder="Please Enter Mobile Number" required/>
                </div>

                <label htmlFor="personEmail">Email<span className="text-red-500 font-thin">*</span></label>
                <input type="email" name="personEmail" id="personEmail" placeholder="Please Enter Email" required/>

                <label htmlFor="preferredDate">Preferred Date</label>
                <input type="date" name="" id="preferredDate"/>

                <label htmlFor="preferredTime">Preferred Time</label>
                <select name="" id="preferredTime" className="w-full p-4">
                    <option value="ist">Preferred Time in IST</option>
                </select>

                <div className="flex justify-between">
                    <input type="radio" name="" id="consent" className="h-4 w-4" required/>
                    <div className="ml-2 text-sm">
                        <div>
                            By choosing to fill in the details of the person referred (“Referral”) here you authorize ICICI Bank to use, process or transfer the data as provided by you for the purposes of giving information to the Referral(s) regarding offers and promotions on products and services offered by ICICI Bank.
                        </div>
                        <div>
                            Additionally, I confirm that I have obtained the consent of the Referral(s) for sharing their data with ICICI Bank for the aforementioned Purpose.
                        </div>
                    </div>
                </div>

                <button type="submit" className="bg-[#f27b1a] mt-12 px-14 py-4 rounded-md text-white shadow-xl hover:bg-[#d36103] cursor-pointer">Sumbit</button>
            </form>
        </div>
        }
        </>
    )
}