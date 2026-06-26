const Credibility = () => {
    return (
        <div className="grid grid-cols-3 place-items-center  bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-15">

            {/* user container */}
            <div className="flex flex-col place-items-center items-center border-r border-[#AD79FB] pr-35 pl-10">
                <h1 className="text-white font-extrabold text-[60px]">50k+</h1>
                <p className="text-[#E2D4FE] text-[24px] font-normal">Active Users</p>
            </div>

            

            {/* Tools Container */}
            <div className="flex flex-col items-center justify-center border-r border-[#AD79FB] pr-40  pl-10">
                <h1 className="text-white font-extrabold text-[60px]">200+</h1>
                <p className="text-[#E2D4FE] text-[24px] font-normal">Premium Tools</p>
            </div>

           

            {/* Rating container */}
            <div className="flex flex-col items-center ">
                <h1 className="text-white font-extrabold text-[60px]">4.9</h1>
                <p className="text-[#E2D4FE] text-[24px] font-normal">Rating</p>
            </div>


        </div>
    );
};

export default Credibility;