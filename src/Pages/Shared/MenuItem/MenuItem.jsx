

const MenuItem = ({item}) => {
    const {name,image,price,recipe} = item;
    return (
        <div className="flex gap-10">
            <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[120px]" src={image} alt="" />
            <div>
                <h2 className="text-[#151515] uppercase">{name}------------------</h2>
                <p className="text-[#737373] ">{recipe}</p>
            </div>
            <p className="text-[#BB8506] text-xl	">${price}</p>
        </div>
    );
};

export default MenuItem;