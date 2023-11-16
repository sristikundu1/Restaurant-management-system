import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import SubSection from "../../Shared/SubSection/SubSection";


const MenuCategory = ({ items, title, img, para1, para2 }) => {
    return (
        <div className=' mb-24 mt-28'>
            {title && <SubSection
                img={img}
                title={title}
                para1={para1}
                para2={para2}></SubSection>}

            {/* show the item */}
            <div className="max-w-5xl mx-auto mt-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    {
                        items.map(item => <MenuItem
                            key={item._id}
                            item={item}>
                        </MenuItem>)
                    }

                </div>
                <Link to={`/shop/${title}`}>
                    <button className="btn text-[#1F2937] ml-[420px] bg-white  border-b-4 border-x-0 border-t-0 border-[#1F2937] hover:bg-[#D99904] mt-11">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>

        </div>
    );
};

export default MenuCategory;