import Banner from "../components/Banner";
import Credibility from "../components/Credibility";
import Navbar from "../components/Navbar";
import Alltools from "../components/Alltools"
import { useState } from "react";



const Home = () => {

    const [carts,setCarts] = useState([ ])


    return (
        <div>
            <Navbar carts={carts} />

            <div className="py-4">
                <Banner />
                <Credibility />
                <Alltools carts={carts} setCarts={setCarts}/>
            </div>
        </div>
    );
};

export default Home;