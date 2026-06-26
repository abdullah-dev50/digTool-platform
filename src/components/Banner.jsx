
import BannerImg from"../assets/banner.png"
import Icon from"../assets/Group 5.png"
import BtnIcon from "../assets/Play.png"
const Banner = () => {
    return (

        <div className="grid grid-cols-2 items-center gap-25 my-15 mx-20">
            

            {/* Left Container */}
            <div>

                <div className="flex bg-[#E1E7FF] py-2 px-4 h-9.5 rounded-2xl w-80 ">
                    <img src={Icon} alt="" />
                    <p className="ml-1.5 text-base bg-linear-to-r from-[#4F39F6] from-0% to-[#9514FA] to-100% bg-clip-text text-transparent ">New: AI-Powered Tools Available</p>
                </div>
                
                <h1 className="my-4 text-[60px] font-extrabold">Supercharge Your Digital Workflow</h1>

                <p className="text-[4.2] leading-loose font-light">Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today.<br /> Explore Products</p>

                {/* Button */}
                <div className="my-8 space-x-5 grid grid-cols-2 w-95">

                    <button className="btn-gradient">Explore Products</button>
                    
                    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]  rounded-full grid  items-center justify-center py-0.5">

                        <button className=" bg-white rounded-full flex items-center justify-center gap-2.5 px-8 py-4"> 

                       <img src={BtnIcon}alt="" />
                       <span>Watch Demo</span>

                        </button>

                    </div>

                </div>

            </div>


    
            {/* Right Container */}

            <div className="">
               <img className="flex justify-end" src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;