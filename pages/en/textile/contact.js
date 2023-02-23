import Contact from "../../../components/Contact";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import TextileObjectEN from "../../../site-data/textile-en.json"
import Head from "next/head";


const ContactTextileEN = () => {
    return (
        <>
            <Head>
                <title>MAYCO | Contact</title>
            </Head>
            <Header headerObject={TextileObjectEN.header} />
            <Contact contactObject={TextileObjectEN.contact}/>
            <Footer footerObject={TextileObjectEN.footer} />
        </>
    );
}
 
export default ContactTextileEN;