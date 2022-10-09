import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AboutUs from "../../components/AboutUs";
import TextileObject from "../../site-data/textile-tr.json"

const AboutUsTextile = () => {
    return (
        <>
            <Header headerObject={TextileObject.header}/>
            <AboutUs aboutObject={TextileObject.about}/>
            <Footer footerObject={TextileObject.footer}/>
        </>
    );
}
 
export default AboutUsTextile;