// import nodemailer from 'nodemailer'
// require('dotenv').config();
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

// export const senDOtp=(otp:number)=>{
//     const transporter=nodemailer.createTransport({
//         service:"gmail",
//         auth: {
//             user: process.env.USER,
//             pass: process.env.PASS,
//           },
//     });

//     (async () => {
//         const info = await transporter.sendMail({
//           from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
//           to: "manojbhichchhar8@gmail.com, manojbhichchhar8@gmail.com",
//           subject: "Hello ✔",
//           text: "Hello world?", // plain‑text body
//           html: "<b>Hello world?</b>", // HTML body
//         });
      
//         console.log("Message sent:", info.messageId);
//       })();
// }