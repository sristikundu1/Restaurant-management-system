import { Parallax } from 'react-parallax';

const SubSection = ({img,title,para1,para2}) => {
    return (

        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
         <div>
              <div className="hero h-[500px]">
                <div className="hero-overlay bg-[#15151599] bg-opacity-60 w-[980px] h-80 mt-14"></div>
                <div className=" text-center ">
                    <div className=" text-[#FFF] mt-16 px-14">
                        <h1 className="mb-5 text-5xl font-semibold font-cinzel uppercase">{title}</h1>
                        <p className=" text-sm  normal-case">{para1}</p>
                        <p className=" text-sm  normal-case">{para2}</p>
                        
                    </div>
                </div>
            </div>

            
        </div>
    </Parallax>
       
    );
};

export default SubSection;