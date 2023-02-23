import Contact from "../../components/Contact";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MarineObject from "../../site-data/marine-tr.json"
import Head from "next/head";

const ContactMarine = () => {
    return (
        <>
            <Head>
                <title>MAYCO | İletişim</title>
            </Head>
            <Header headerObject={MarineObject.header}/>
            <Contact contactObject={MarineObject.contact}/>
            <Footer footerObject={MarineObject.footer}/>
        </>
    );
}
 
export default ContactMarine;