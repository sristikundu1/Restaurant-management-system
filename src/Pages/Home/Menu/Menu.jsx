import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Usemenu from "../../../Hooks/Usemenu";


const Menu = () => {

    const [menu] = Usemenu();
    const popularItems = menu.filter(item => item.category === 'popular')
    
    
    return (
        <div className='max-w-5xl mx-auto mb-10'>
            {/* show the title  */}
            <section>
                <SectionTitle
                    subHeading={"---Check it out---"}
                    heading={"FROM OUR MENU"}>
                </SectionTitle>
            </section>

            {/* show the item */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {
                    popularItems.map(item => <MenuItem
                        key={item._id}
                        item={item}>
                    </MenuItem>)
                }

            </div>
            <button className="btn text-[#1F2937] ml-[420px] bg-white  border-b-4 border-x-0 border-t-0 border-[#1F2937] hover:bg-[#D99904] mt-11">VIEW FULL MENU</button>

        </div>
    );
};

export default Menu;