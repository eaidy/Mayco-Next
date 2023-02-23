import Contact from "../../../components/Contact";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import MarineObjectEN from "../../../site-data/marine-en.json"
import Head from "next/head";

const ContactMarineEN = () => {
    return (
        <>
            <Head>
                <title>MAYCO | Contact</title>
            </Head>
            <Header headerObject={MarineObjectEN.header}/>
            <Contact contactObject={MarineObjectEN.contact}/>
            <Footer footerObject={MarineObjectEN.footer}/>
        </>
    );
}
 
export default ContactMarineEN;