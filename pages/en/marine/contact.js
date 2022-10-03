import Contact from "../../../components/Contact";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import MarineObjectEN from "../../../site-data/marine-en.json"

const ContactMarineEN = () => {
    return (
        <>
            <Header headerObject={MarineObjectEN.header}/>
            <Contact contactObject={MarineObjectEN.contact}/>
            <Footer footerObject={MarineObjectEN.footer}/>
        </>
    );
}
 
export default ContactMarineEN;