import { useState } from "react"
import { CustomerDetails } from "./CustomerDetails"
import { PersonDetails } from "./PersonDetails"
import { InfoTab } from "./InfoTab"
import { MobileOtp } from "./MobileOtp"
import { ThankYou } from "./ThankYou"
import { useCountryDetails } from "../hooks/useCountryDetails"

export const CustomerForm=()=>{
   
    const [mobCode,countriesNames]=useCountryDetails();
    const [openCustomer,setOpenCustomer]=useState<boolean>(false);
    const [openPerson,setOpenPerson]=useState<boolean>(false);
    const [openOtp,setOpenOtp]=useState<boolean>(false);
    const [openThank,setThank]=useState<boolean>(false);


    return (
        <div className="h-full flex justify-center items-center">
            <div className="fixed top-15 right-0 left-0 h-1/2 bg-[#e9822e] -z-1"></div>
            <InfoTab onClick={()=>{setOpenCustomer(true)}}></InfoTab>
            <CustomerDetails mobCode={mobCode} isOpen={openCustomer} onClick={(event)=>{ event.preventDefault(); setOpenCustomer(false); setOpenOtp(true)}} />
            <MobileOtp isOpen={openOtp} setOpenOtp={setOpenOtp} setOpenPerson={setOpenPerson}/>
            <PersonDetails mobCode={mobCode} countriesNames={countriesNames} isOpen={openPerson} onClick={(event)=>{event.preventDefault(); setOpenPerson(false);setThank(true)}} />
            <ThankYou isOpen={openThank} />
        </div>
    )
}