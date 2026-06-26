import Banner from "../components/Banner";
import Credibility from "../components/Credibility";
import Navbar from "../components/Navbar";
import Alltools from "../components/Alltools"



const Home = () => {
    return (
        <div>
            <Navbar />

            <div className="py-4">
                <Banner />
                <Credibility />
                <Alltools />
            </div>
        </div>
    );
};

export default Home;