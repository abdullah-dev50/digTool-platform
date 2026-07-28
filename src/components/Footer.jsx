

const Footer = () => {
    return (
        <div className="bg-[#101727] pt-30 pb-7.5 px-25">

            {/* Topbar */}
            <div className="h-47 flex gap-15 mb-20">

                   {/* child one logo */}
                   <div className="w-87.5">
                        <h1 className="text-white text-[40px] font-extrabold">DigiTools</h1>

                        <p className="text-[#9FA2A9] text-[16px] font-light pt-4">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                   </div>
                     
                      {/* child two Product */}
                      <div className="w-30">
                           <h1 className="text-[20px] text-white font-medium pb-5 pt-6">Product</h1>

                            <p className="text-[#9FA2A9] pb-4">Features</p>
                            <p className="text-[#9FA2A9] pb-4">Pricing</p>
                            <p className="text-[#9FA2A9] pb-4">Templates</p>
                            <p className="text-[#9FA2A9] pb-4">Integrations</p>
                      </div>
                       
                          
                          {/* child three company */}
                           <div className="w-40">
                                  
                                  <h1 className="text-[20px] text-white font-medium pb-5 pt-6">Company</h1>

                            <p className="text-[#9FA2A9] pb-4">About</p>
                            <p className="text-[#9FA2A9] pb-4">Blog</p>
                            <p className="text-[#9FA2A9] pb-4">Careers</p>
                            <p className="text-[#9FA2A9] pb-4">Press</p>

                           </div>


                             {/* child four rousreses */}
                             <div className="w-40">
                                   
                                   <h1 className="text-[20px] text-white font-medium pb-5 pt-6">Resources</h1>

                            <p className="text-[#9FA2A9] pb-4">Documentation</p>
                            <p className="text-[#9FA2A9] pb-4">Help Center</p>
                            <p className="text-[#9FA2A9] pb-4">Community</p>
                            <p className="text-[#9FA2A9] pb-4">Contact</p>

                             </div>


                                  {/* child five social icon */}
                                  <div className="w-55">

                                        <h1 className="text-[20px] text-white font-medium pb-5 pt-6">Social Links</h1>

                                        {/* social icon */}
                                        <div className="flex gap-3">

                                            <img className="bg-white py-2 px-2 rounded-full" src="/src/assets/Instagram.png" alt="" />

                                            <img className="bg-white py-2 px-2 rounded-full" src="/src/assets/Facebook.png" alt="" />

                                            <img className="bg-white py-2 px-2 rounded-full" src="/src/assets/fi_5968958.png" alt="" />
                                        </div>

                                  </div>

            </div>

            {/* Buttom parent */}
            <div>

            </div>
        </div>
    );
};

export default Footer;