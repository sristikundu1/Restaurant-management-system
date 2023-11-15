import { Helmet } from "react-helmet-async";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";
import Banner from "./Banner/Banner";
import BistroBoss from "./BistroBos/BistroBoss";
import Category from "./Category/Category";
import ChefMenu from "./ChefMenu/ChefMenu";
import Featured from "./Featured/Featured";
import Menu from "./Menu/Menu";
import Phone from "./Phone/Phone";
import Testimonial from "./Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            
            <NavBar></NavBar>
            <Banner></Banner>
            <Category></Category>
            <BistroBoss></BistroBoss>
            <Menu></Menu>
            <Phone></Phone>
            <ChefMenu></ChefMenu>
            <Featured></Featured>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;