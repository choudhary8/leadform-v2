interface detailsInterface{
    [code:string]:string
}
interface propInterface{
    mobCode:detailsInterface,
    isOpen:boolean,
    onClick:(event:React.FormEvent<HTMLFormElement>)=>void
}
export const CustomerDetails=({mobCode,isOpen,onClick}:propInterface)=>{
    return (
        <>
            {isOpen && <div className="fixed flex justify-center top-0 items-center bottom-0">
                <div className="fixed top-0 bottom-0 right-0 left-0 bg-black/70 z-20"></div>
                <form onSubmit={onClick}  className="bg-white sm:w-1/2 sm:px-20 px-8 h-[85%] py-10 pt-14 rounded-3xl shadow-xl overflow-y-scroll z-30">
                    <div className="text-center underline font-semibold text-md maroon sticky top-0 mb-4">
                        <div className="absolute -top-14 -left-20 -right-20 bg-gray-200  py-4">Your Details</div>
                    </div>
                    <label htmlFor="customerFirstName">First Name<span className="text-red-500 font-thin">*</span></label>
                    <input type="text" id="customerFirstName" placeholder="Please Enter First Name" required/>

                    <label htmlFor="customerLastName">Last Name<span className="text-red-500 font-thin">*</span></label>
                    <input type="text" id="customerLastName" placeholder="Please Enter Last Name" required/>

                    <label htmlFor="customerEmail">Email<span className="text-red-500 font-thin">*</span></label>
                    <input type="email" name="customerEmail" id="customerEmail" placeholder="Please Enter Email" required/>

                    <label htmlFor="customerMobile">Mobile Number<span className="text-red-500 font-thin">*</span></label>
                    
                    <div id="customerMobile"   className="flex">
                        <select name="" id="countryCode" className="mob" required>
                            {
                                Object.entries(mobCode).map(([key,value])=>(
                                (value!=='undefined')&&<option key={key} value={key}>{value}</option>
                                )
                                )
                            }
                        </select>
                        <input type="tel" name="customerMobile" placeholder="Please Enter Mobile Number" required/>
                    </div>

                    <label htmlFor="customerAccountNumber">Account Number</label>
                    <input type="text" name="customerAccountNumber" id="customerAccountNumber" placeholder="Please Enter Account Number"/>
                    

                    <button type="submit" className="py-4 px-10 bg-[#f27b1a] rounded-lg shadow-xl hover:bg-[#d36103] cursor-pointer">Next</button>
                </form>
            </div>}
        </>
    )
}