import { Helmet } from "react-helmet-async";
import Footer from "../../Shared/Footer/Footer";
import NavBar from "../../Shared/NavBar/NavBar";
import Cover from "../../Shared/Cover/Cover";
import banner from '../../../assets/menu/banner3.jpg'
import Offer from "../Offer/Offer";
import dessert from '../../../assets/menu/dessert-bg.jpeg'
import SubSection from "../../Shared/SubSection/SubSection";
import Dessert from "../Dessert/Dessert";
import pizza from "../../../assets/menu/pizza-bg.jpg"
import Pizza from "../Pizza/Pizza";
import salad from "../../../assets/menu/salad-bg.jpg"
import Salad from "../Salad/Salad";

const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Menu</title>
            </Helmet>

            <NavBar></NavBar>

            <Cover img={banner}
                title="OUR MENU"
                para="Would you like to try a dish?"></Cover>

            <Offer></Offer>

            <SubSection
                img={dessert}
                title="DESSERTS"
                para1="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer"
                para2="took a galley of type and scrambled it to make a type specimen book."></SubSection>

            <Dessert></Dessert>

            <SubSection
                img={pizza}
                title="PIZZA"
                para1="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer"
                para2="took a galley of type and scrambled it to make a type specimen book."></SubSection>

            <Pizza></Pizza>

            <SubSection
                img={salad}
                title="SALADS"
                para1="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer"
                para2="took a galley of type and scrambled it to make a type specimen book."></SubSection>

                <Salad></Salad>

            <Footer></Footer>

        </div>
    );
};

export default OurMenu;