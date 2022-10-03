import Contact from "../../../components/Contact";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import TextileObjectEN from "../../../site-data/textile-en.json"

const ContactTextileEN = () => {
    return (
        <>
        <div className="content">
            <Header headerObject={TextileObjectEN.header} />
            <Contact contactObject={TextileObjectEN.contact}/>
            <Footer footerObject={TextileObjectEN.footer} />
        </div>
        </>
    );
}
 
export default ContactTextileEN;