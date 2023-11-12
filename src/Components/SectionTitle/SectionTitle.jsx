

const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className="mx-auto text-center my-8 md:w-4/12">
            <p className="text-[#D99904] italic mt-10 mb-2">{subHeading}</p>
            <h2 className="text-[#151515] text-4xl	mb-10 border-y-4 py-4 uppercase">{heading}</h2>
            
        </div>
    );
};

export default SectionTitle;