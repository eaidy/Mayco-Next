import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import TextileObjectEN from "../../../site-data/textile-en.json";

const AboutUsTextileEN = () => {
    return (
        <>
            <Header headerObject={TextileObjectEN.header}/>
            <div>
                About Us
            </div>
            <Footer footerObject={TextileObjectEN.footer}/>
        </>
    );
}
 
export default AboutUsTextileEN;