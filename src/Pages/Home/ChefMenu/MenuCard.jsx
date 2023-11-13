
const MenuCard = ({ item }) => {
    const { name, image, recipe } = item;
    return (
        <div>
            <div className="card card-compact w-80 h-[441px] bg-[#F3F3F3] rounded-none	">
                <figure><img className="w-80 text-[#151515] text-2xl font-semibold" src={image} alt="Shoes" /></figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions ">
                        <button className="btn text-[#BB8506] bg-[#E8E8E8] border-b-4 border-x-0 border-t-0 border-[#BB8506] hover:bg-[#1F2937]">ADD TO CART</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MenuCard;