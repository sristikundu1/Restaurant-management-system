import Cover from "../../Shared/Cover/Cover";
import Footer from "../../Shared/Footer/Footer";
import NavBar from "../../Shared/NavBar/NavBar";
import banner from "../../../assets/contact/banner.jpg"
import { Helmet } from "react-helmet-async";
import Location from "../Location/Location";
import Form from "../Form/Form";

const ContactUs = () => {
    return (
        <div>
             <Helmet>
                <title>Bistro Boss | Contact Us</title>
            </Helmet>

            <NavBar></NavBar>

            <Cover
            img={banner}
            title="CONTACT US"
            para="Would you like to try a dish?"></Cover>

            <Location></Location>

            <Form></Form>
            <Footer></Footer>
        </div>
    );
};

export default ContactUs;