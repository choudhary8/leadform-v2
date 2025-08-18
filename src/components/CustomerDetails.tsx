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
            {isOpen && <div className="fixed flex sm:justify-center top-0 sm:items-center items-end bottom-0 z-2">
                <div className="fixed top-0 bottom-0 right-0 left-0 bg-black/70 z-20"></div>
                <form onSubmit={onClick}  className="bg-white sm:w-[50%] sm:px-18 px-8 h-[85%] py-10 pt-14 rounded-xl shadow-xl overflow-y-auto z-30">
                    <div className="text-center underline font-semibold text-md maroon sticky top-0 mb-4">
                        <div className="absolute -top-14 -left-18 -right-18 bg-gray-200  py-4">Your Details</div>
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
                    

                    <button type="submit" className="py-4 px-10 bg-[#f27b1a] w-full rounded-lg shadow-xl hover:bg-[#d36103] cursor-pointer">Next</button>
                </form>
            </div>}
        </>
    )
}