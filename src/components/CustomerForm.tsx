import { useEffect, useState } from "react"
import { CustomerDetails } from "./CustomerDetails"
import { PersonDetails } from "./PersonDetails"
import { InfoTab } from "./InfoTab"

export const CustomerForm=()=>{
    interface nameInterface{
        "common":string,
        "official":string,
        "nativeName":{
            "spa":{
                "official":string,
                "common":string
            }
        }
    }
    interface iddInterface{
        "root":string,
        "suffixes":string[]
    }
    interface countryInterface{
        "name":nameInterface,
        "cca2":string,
        "idd":iddInterface
    }

    interface detailsInterface{
        [code:string]:string
    }

    const [mobCode,setMobCode]=useState<detailsInterface>({});
    const [countriesNames,setCountriesNames]=useState<detailsInterface>({});
    const [openCustomer,setOpenCustomer]=useState<boolean>(false);
    const [openPerson,setOpenPerson]=useState<boolean>(false);
    
    useEffect(()=>{
        const dataFetch=async ()=>{
           try {

            const response=await fetch("https://restcountries.com/v3.1/all?fields=name,idd,cca2")
            const data=await response.json();
            let codeMap:detailsInterface={};
            let countryMap:detailsInterface={};
            data.forEach((country:countryInterface)=>{
                codeMap[country.cca2]=(country.idd.root+country.idd.suffixes[0]);
                countryMap[country.cca2]=country.name.common;
            })
            setCountriesNames(countryMap)
            setMobCode(codeMap);
            
           } catch (error) {
            console.log("error : ", error);
            
           }
            
        }
        dataFetch();
    },[])


    return (
        <div className="sm:overflow-y-scroll h-full flex justify-center items-center bg-[#f7e6da]">
          <InfoTab onClick={()=>{setOpenCustomer(true)}}></InfoTab>
          <CustomerDetails mobCode={mobCode} isOpen={openCustomer} onClick={()=>{ setOpenCustomer(false); setOpenPerson(true)}} />
          <PersonDetails mobCode={mobCode} countriesNames={countriesNames} isOpen={openPerson} onClick={()=>{setOpenPerson(false)}} />
        </div>
    )
}