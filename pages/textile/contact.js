import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TextileObject from "../../site-data/textile-tr.json"
import Contact from "../../components/Contact";

const ContactTextile = () => {
    return (
        <>
        <Header headerObject={TextileObject.header} />
        <Contact contactObject={TextileObject.contact}/>
        <Footer footerObject={TextileObject.footer}/>
        </>

    );
}
 
export default ContactTextile;