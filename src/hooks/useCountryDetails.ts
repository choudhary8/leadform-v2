import { useEffect, useState } from "react"

interface countryInterface{
    "names.common":string,
    "codes.alpha_2":string,
    "calling_codes":string[]
}

interface countriesResponseInterface{
    data?:{
        objects?:countryInterface[],
        meta?:{
            more?:boolean,
            offset?:number,
            limit?:number
        }
    },
    errors?:{
        message:string
    }[]
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
            let offset=0;
            const limit=100;
            let hasMore=true;
            let codeMap:detailsInterface={};
            let countryMap:detailsInterface={};

            while(hasMore){
                const url=new URL('https://api.restcountries.com/countries/v5');
                url.searchParams.set('response_fields','names.common,codes.alpha_2,calling_codes');
                url.searchParams.set('limit',limit.toString());
                url.searchParams.set('offset',offset.toString());

                const response=await fetch(url,
                    { headers: { 'Authorization': 'Bearer rc_live_904f95519d6448e58b863322d4c3bf07'}}
                )
                const result:countriesResponseInterface=await response.json();

                if(!response.ok){
                    const apiError=result.errors?.map((error)=>error.message).join(", ");
                    throw new Error(apiError || `Failed to fetch country details: ${response.status} ${response.statusText}`);
                }

                const countries=result.data?.objects;
                if(!Array.isArray(countries)){
                    throw new Error("Country details response did not include data.objects");
                }

                countries.forEach((country:countryInterface)=>{
                    const countryCode=country["codes.alpha_2"];
                    const countryName=country["names.common"];
                    const callingCode=country.calling_codes?.[0] ? `+${country.calling_codes[0]}` : "";

                    if(!countryCode || !countryName){
                        return;
                    }

                    codeMap[countryCode]=callingCode;
                    countryMap[countryCode]=countryName;
                })

                hasMore=result.data?.meta?.more ?? false;
                offset=(result.data?.meta?.offset ?? offset)+limit;
            }

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
