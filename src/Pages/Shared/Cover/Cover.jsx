import { Parallax } from 'react-parallax';

const Cover = ({ img, title, para }) => {
    return (

        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div>
                <div className="hero h-[600px]">
                    <div className="hero-overlay bg-[#15151599] bg-opacity-60 w-[900px] h-80 mt-24"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className=" text-[#FFF] mt-28 px-14">
                            <h1 className="mb-5 text-7xl font-bold font-cinzel">{title}</h1>
                            <p className="mb-5 text-xl font-semibold font-cinzel">{para}</p>

                        </div>
                    </div>
                </div>

            </div>
        </Parallax>

    );
};

export default Cover;