import { Helmet } from "react-helmet-async";
import Footer from "../../Shared/Footer/Footer";
import NavBar from "../../Shared/NavBar/NavBar";
import Cover from "../../Shared/Cover/Cover";
import banner from '../../../assets/menu/banner3.jpg'
// import Offer from "../Offer/Offer";
import dessert from '../../../assets/menu/dessert-bg.jpeg'
// import SubSection from "../../Shared/SubSection/SubSection";
// import Dessert from "../Dessert/Dessert";
import pizza from "../../../assets/menu/pizza-bg.jpg"
// import Pizza from "../Pizza/Pizza";
import salad from "../../../assets/menu/salad-bg.jpg"
import soup from "../../../assets/menu/soup-bg.jpg"
// import Salad from "../Salad/Salad";
import Usemenu from "../../../Hooks/Usemenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const OurMenu = () => {
    const [menu] = Usemenu();
    const saladItems = menu.filter(item => item.category === 'salad')
    const pizzaItems = menu.filter(item => item.category === 'pizza')
    const soupItems = menu.filter(item => item.category === 'soup')
    const dessertItems = menu.filter(item => item.category === 'dessert')
    const offerItems = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Menu</title>
            </Helmet>

           

            <Cover img={banner}
                title="OUR MENU"
                para="Would you like to try a dish?"></Cover>

            <SectionTitle
                subHeading={"---Don't miss---"}
                heading={"TODAY'S OFFER"}></SectionTitle>

            {/* <Offer></Offer> */}
            <MenuCategory
                items={offerItems}></MenuCategory>


            {/* <Dessert></Dessert> */}
            <MenuCategory
                items={dessertItems}
                img={dessert}
                title={"dessert"}
                para1={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer"}
                para2={"took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>



            {/* <Pizza></Pizza> */}
            <MenuCategory
                items={pizzaItems}
                img={pizza}
                title="pizza"
                para1="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer"
                para2="took a galley of type and scrambled it to make a type specimen book."></MenuCategory>


            {/* <Salad></Salad> */}
            <MenuCategory
                items={saladItems}
                img={salad}
                title="salad"
                para1="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer"
                para2="took a galley of type and scrambled it to make a type specimen book."></MenuCategory>


            {/* <Salad></Salad> */}
            <MenuCategory
                items={soupItems}
                img={soup}
                title="soup"
                para1="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer"
                para2="took a galley of type and scrambled it to make a type specimen book."></MenuCategory>

          

        </div>
    );
};

export default OurMenu;