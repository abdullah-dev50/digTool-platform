import Banner from "../components/Banner";
import Credibility from "../components/Credibility";
import Navbar from "../components/Navbar";
import Alltools from "../components/Alltools"
import { useState } from "react";
import Step from "../components/Step";
import Pricing from "../components/Pricing";



const Home = () => {

    const [carts,setCarts] = useState([ ])


    return (
        <div>
            <Navbar carts={carts} />

            <div className="py-4">
                <Banner />
                <Credibility />
                <Alltools carts={carts} setCarts={setCarts}/>
                <Step />
                <Pricing />
                
            </div>
        </div>
    );
};

export default Home;