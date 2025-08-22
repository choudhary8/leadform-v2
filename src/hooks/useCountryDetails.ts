import { useEffect, useState } from "react"

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
export const useCountryDetails=()=>{
    const [mobCode,setMobCode]=useState<detailsInterface>({});
    const [countriesNames,setCountriesNames]=useState<detailsInterface>({});

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

    return [mobCode,countriesNames];
}