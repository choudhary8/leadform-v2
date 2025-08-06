export const verifyOtp=(gOtp:number, eOtp:number)=>{
    if(gOtp===eOtp){
        return true;
    }else{
        return false;
    }
}

export const generateOtp=():number=>{
    const otp=Math.random()*9000+1000;
    
    return otp;
}