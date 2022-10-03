import Contact from "../../components/Contact";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MarineObject from "../../site-data/marine-tr.json"

const ContactMarine = () => {
    return (
        <>
            <Header headerObject={MarineObject.header}/>
            <Contact contactObject={MarineObject.contact}/>
            <Footer footerObject={MarineObject.footer}/>
        </>
    );
}
 
export default ContactMarine;