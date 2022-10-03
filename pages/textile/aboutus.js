import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TextileObject from "../../site-data/textile-tr.json"

const AboutUsTextile = () => {
    return (
        <>
            <Header headerObject={TextileObject.header}/>
            <div>
                About Us
            </div>
            <Footer footerObject={TextileObject.footer}/>
        </>
    );
}
 
export default AboutUsTextile;