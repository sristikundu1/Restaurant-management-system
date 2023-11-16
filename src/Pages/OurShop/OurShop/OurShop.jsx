import Cover from "../../Shared/Cover/Cover";
import Footer from "../../Shared/Footer/Footer";
import NavBar from "../../Shared/NavBar/NavBar";
import banner from "../../../assets/shop/banner2.jpg"
import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import Usemenu from "../../../Hooks/Usemenu";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";





const OurShop = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    // console.log(initialIndex);
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const [menu] = Usemenu();

    const saladItems = menu.filter(item => item.category === 'salad')
    const pizzaItems = menu.filter(item => item.category === 'pizza')
    const soupItems = menu.filter(item => item.category === 'soup')
    const dessertItems = menu.filter(item => item.category === 'dessert')
    const drinkItems = menu.filter(item => item.category === 'drinks')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Shop</title>
            </Helmet>

            <NavBar></NavBar>
            <Cover
                img={banner}
                title="OUR SHOP"
                para="Would you like to try a dish?"></Cover>

            <div className='max-w-5xl mx-auto mb-24 mt-28'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soup</Tab>
                        <Tab>dessert</Tab>
                        <Tab>drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab
                            items={saladItems}></OrderTab>

                    </TabPanel>
                    <TabPanel>
                        <OrderTab
                            items={pizzaItems}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab
                            items={soupItems}></OrderTab>

                    </TabPanel>
                    <TabPanel>
                        <OrderTab
                            items={dessertItems}></OrderTab>

                    </TabPanel>
                    <TabPanel>
                        <OrderTab
                            items={drinkItems}></OrderTab>

                    </TabPanel>
                </Tabs>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default OurShop;