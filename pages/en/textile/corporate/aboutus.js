import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import AboutUs from "../../../../components/AboutUs";
import TextileObjectEN from "../../../../site-data/textile-en.json";

const AboutUsTextileEN = () => {
    return (
        <>
            <Header headerObject={TextileObjectEN.header}/>
            <AboutUs aboutObject={TextileObjectEN.about} />
            <Footer footerObject={TextileObjectEN.footer}/>
        </>
    );
}
 
export default AboutUsTextileEN;