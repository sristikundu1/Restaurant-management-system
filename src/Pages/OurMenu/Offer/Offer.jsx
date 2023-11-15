import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const Offer = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'offer')
                setMenu(popularItems)
            })
    }, [])

    return (
        <div className='max-w-5xl mx-auto mb-24'>
            <section>
                <SectionTitle
                    subHeading={"---Don't miss---"}
                    heading={"TODAY'S OFFER"}>

                </SectionTitle>

                {/* show the item */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    {
                        menu.map(item => <MenuItem
                            key={item._id}
                            item={item}>
                        </MenuItem>)
                    }

                </div>
                <button className="btn text-[#1F2937] ml-[420px] bg-white  border-b-4 border-x-0 border-t-0 border-[#1F2937] hover:bg-[#D99904] mt-11">ORDER YOUR FAVOURITE FOOD</button>


            </section>

        </div>
    );
};

export default Offer;