
const Step = () => {
    return (

        <div className="pt-30 pb-30 bg-[#F9FAFC]">

            {/* section Heading */}
            <div>
                <h1 className="font-bold text-5xl text-center">Get Started in 3 Steps</h1>
                <p className="text-center mt-10 text-[#627382] text-[16px]">Start using premium digital tools in minutes, not hours.</p>
            </div>

            {/* Card parent div */}
            <div className="flex gap-10 pr-10 pl-20 mt-20" >



                {/* card 1 */}
                <div className="bg-white p-5 h-95 w-95 rounded-2xl border-2 border-[#F1F1F1]">

               {/* humber */}
               <div className="flex justify-end-safe">
                     <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-7 h-7 rounded-full text-center flex justify-center items-center p-5">
                    <h1 className="text-white">01</h1>
                     </div>
               </div>

                {/* icon */}
                <div className="flex justify-center mt-8">
                    <div className="bg-[#F0E9FE] rounded-full flex justify-center items-center p-4 w-30 h-30 ">
                    <img src="/src/assets/user.png" alt="" />
                    </div>
                </div>

                <h1 className="text-center font-bold text-2xl mt-4 mb-3">Create Account</h1>

                <p className="text-center text-[#627382]">Sign up for free in seconds. No credit card required to get started.</p>

                </div>

               {/* card 2 */}
                <div className="bg-white p-5 h-95 w-95 rounded-2xl border-2 border-[#F1F1F1]">

               {/* humber */}
               <div className="flex justify-end-safe">
                     <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-7 h-7 rounded-full text-center flex justify-center items-center p-5">
                    <h1 className="text-white">02</h1>
                     </div>
               </div>

                {/* icon */}
                <div className="flex justify-center mt-8">
                    <div className="bg-[#F0E9FE] rounded-full flex justify-center items-center p-4 w-30 h-30 ">
                    <img src="/src/assets/package.png" alt="" />
                    </div>
                </div>

                <h1 className="text-center font-bold text-2xl mt-4 mb-3">Choose Products</h1>

                <p className="text-center text-[#627382]">Browse our catalog and select the tools that fit your needs.</p>

                </div>


                 {/* card 3 */}
                <div className="bg-white p-5 h-95 w-95 rounded-2xl border-2 border-[#F1F1F1]">

               {/* humber */}
               <div className="flex justify-end-safe">
                     <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-7 h-7 rounded-full text-center flex justify-center items-center p-5">
                    <h1 className="text-white">03</h1>
                     </div>
               </div>

                {/* icon */}
                <div className="flex justify-center mt-8">
                    <div className="bg-[#F0E9FE] rounded-full flex justify-center items-center p-4 w-30 h-30 ">
                    <img src="/src/assets/rocket.png" alt="" />
                    </div>
                </div>

                <h1 className="text-center font-bold text-2xl mt-4 mb-3">Start Creating</h1>

                <p className="text-center text-[#627382]">Download and start using your premium tools immediately.</p>

                </div>

            </div>
        
            
        </div>
    );
};

export default Step;