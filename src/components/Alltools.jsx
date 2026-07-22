import { useState } from "react";
import Carts from "./Carts";
import Productcard from "./Productcard";

const Tools = ({carts, setCarts}) => {

    const [activeTab,setActiveTab] = useState('tools')
    return (



        <div className="my-15 mx-20">


            {/* Tools Heading */}
            <div>

                <h1 className="font-extrabold text-[48px] text-center">Premium Digital Tools</h1>

                <p className="text-center mt-5 text-[16px] text-[#627382] ">Choose from our curated collection of premium digital products designed <br></br> to boost your productivity and creativity.</p>

                {/* Button */}
                <div className="space-x-4 flex justify-center mt-8">

                <button className="btn" onClick={() => setActiveTab('tools')}>Products</button>

                <button className="btn" onClick={() => setActiveTab('carts')}>Carts</button>

                </div>

            </div>


            {/* Dynamic Content*/}

            <div>
                {/* <Productcard  carts={carts} setCarts={setCarts}/>
                <Carts carts={carts} /> */}

                {activeTab == 'tools' ?(<Productcard  carts={carts} setCarts={setCarts}/>) : <Carts setCarts ={setCarts} carts={carts} />  }
            </div>

        </div>
    );
};

export default Tools;