import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCard from "./MenuCard";


const ChefMenu = () => {

    const [chefMenu, setChefMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'chef')
                setChefMenu(popularItems)
            })
    }, [])


    return (
        <div className='max-w-5xl mx-auto mb-10'>
            <section>
                <SectionTitle
                    subHeading={"---Should Try---"}
                    heading={"CHEF RECOMMENDS"}>
                </SectionTitle>
            </section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:grid-cols-3 lg:gap-3">
                {
                    chefMenu.map(item => <MenuCard
                        key={item._id}
                        item={item}>
                    </MenuCard>)
                }

            </div>

        </div>
    );
};

export default ChefMenu;