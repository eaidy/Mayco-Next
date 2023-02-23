import Footer from "../../components/Footer";
import Head from "next/head";
import Header from "../../components/Header";
import TextileObject from "../../site-data/textile-tr.json"
import Contact from "../../components/Contact";

const ContactTextile = () => {
    return (
        <>
            <Head>
                <title>MAYCO | İletişim</title>
            </Head>
            <Header headerObject={TextileObject.header} />
            <Contact contactObject={TextileObject.contact}/>
            <Footer footerObject={TextileObject.footer}/>
        </>

    );
}
 
export default ContactTextile;