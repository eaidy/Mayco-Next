import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import TextileHome from "../../../components/TextileHome";
import TextileObjectEN from "../../../site-data/textile-en.json"
import Head from "next/head";

const TextileEN = () => {
    return (
        <>
            <Head>
                <title>MAYCO Textile</title>
            </Head>
            <Header headerObject={TextileObjectEN.header} />
            <TextileHome homeObject={TextileObjectEN.home}/>
            <Footer footerObject={TextileObjectEN.footer} />
        </>
    );
}
 
export default TextileEN;