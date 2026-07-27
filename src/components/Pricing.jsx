

const Pricing = () => {
    return (
        <div className="pt-30 pb-30">

            {/* section heading and short description */}
           <div className="flex flex-col  items-center mb-10 ">

            <h1 className="text-[48px] font-bold pb-4">Simple, Transparent Pricing</h1>
            <p className="text-[16px] text-[#627382]">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

           </div>

           {/* Pricing Cart */}
           <div className="flex gap-7 pt-10 justify-center relative item">

                   {/* card one */}
                   <div className="bg-[#F2F2F2] p-6 w-95 h-112 rounded-2xl border-2 border-[#F1F1F1]">

                         <h1 className="text-[24px] font-bold pb-2">Starter</h1>
                         <p className="font-light text-[#627382] text-[16px]pb-6">Perfect for getting started</p>

                         <div className="flex pt-6 items-baseline-last">
                            <h1 className="font-bold text-[40px]">$0</h1>
                            <p className="text-[20px] text-[#627382]">/Month</p>
                         </div>

                          <ul className="mt-6 flex flex-col gap-2 text-xs text-[#627382] text-[16px] pb-6">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="">Access to 10 free tools</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Basic templates</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Community support</span>
                </li>

                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>1 project per month</span>
                </li>
    
    
                           </ul>

                           <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white mt-10 w-full pt-2 pb-2 rounded-full text-[16px] font-bold">Get Started Free</button>
                   </div>



                   {/* card Two */}
                   <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-6 w-95 h-112 rounded-2xl border-2 border-[#F1F1F1]  pb-3 ">

                    <button className="text-[#BB4D00] bg-[#FEF3C6] py-1.5 px-2.5 rounded-full absolute top-5 left-1/2 -translate-x-1/2  ">Most Popular</button>

                         <h1 className="text-[24px] font-bold pb-2 text-white">Pro</h1>
                         <p className="font-light text-white text-[16px]pb-6">Best for professionals</p>

                         <div className="flex pt-3 items-baseline-last">
                            <h1 className="font-bold text-[40px] text-white">$29</h1>
                            <p className="text-[20px] text-white">/Month</p>
                         </div>

                          <ul className="mt-6 flex flex-col gap-2 text-xs text-white text-[16px] pb-6">
                <li>
                  <svg
                
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block  text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="">Access to all premium tools</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block  text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Unlimited templates</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block  text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Priority support</span>
                </li>

                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block  text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Unlimited projects</span>
                </li>


                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block  text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Cloud sync</span>
                </li>


                 <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block  text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Advanced analytics</span>
                </li>
    
    
                           </ul>

                           <button className="bg-white w-full py-2 rounded-full text-[16px] font-bold ">

                            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">Start Pro Trial</span>

                           </button>
                   </div>


                    {/* card Three */}
                   <div className="bg-[#F2F2F2] p-6 w-95 h-112 rounded-2xl border-2 border-[#F1F1F1]">

                         <h1 className="text-[24px] font-bold pb-2">Enterprise</h1>
                         <p className="font-light text-[#627382] text-[16px]pb-6">For teams and businesses</p>

                         <div className="flex pt-6 items-baseline-last">
                            <h1 className="font-bold text-[40px]">$99</h1>
                            <p className="text-[20px] text-[#627382]">/Month</p>
                         </div>

                          <ul className="mt-6 flex flex-col gap-2 text-xs text-[#627382] text-[16px] pb-6">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="">Everything in Pro</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Team collaboration</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Custom integrations</span>
                </li>

                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Dedicated support</span>
                </li>


                 <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>SLA guarantee</span>
                </li>


                 <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Custom branding</span>
                </li>
    
                           </ul>

                           <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white  w-full pt-2 pb-2 rounded-full text-[16px] font-bold">Get Started Free</button>
                   </div>

           </div>
        </div>
    );
};

export default Pricing;