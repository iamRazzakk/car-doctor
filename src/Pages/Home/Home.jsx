import Banner from "../Banner/Banner";
import About from "./About/About";
import HomePageCard from "./HomePageCard/HomePageCard";
import Services from "./Services/Services";
import Team from "./Team/Team";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <HomePageCard></HomePageCard>
            <Team></Team>
        </div>
    );
};

export default Home;