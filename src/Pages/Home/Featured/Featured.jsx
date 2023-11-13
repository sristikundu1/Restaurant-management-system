import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredPhoto from '../../../assets/home/featured.jpg'
import './featured.css';
const Featured = () => {
    return (
        <div className="featured-item bg-fixed py-16  h-[700px] my-24">
            <section className="bg-black bg-opacity-40 mx-24" >
                <SectionTitle
                    subHeading={"---Check it out---"}
                    heading={"FROM OUR MENU"}>

                </SectionTitle>
                <div className="flex justify-center items-center py-8 px-16 ">
                    <div>
                        <img className="w-[500px] h-[270px]" src={featuredPhoto} alt="" />
                    </div>
                    <div className="ml-14 text-[#FFF]">
                        <p>March 20, 2023</p>
                        <p>WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error <br /> voluptate facere, deserunt dolores maiores quod nobis quas <br /> quasi. Eaque repellat recusandae ad laudantium tempore <br /> consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn text-[#FFF] border-b-4 border-x-0 border-t-0 border-[#FFF] hover:bg-[#D99904] mt-11 bg-transparent">Read More</button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Featured;