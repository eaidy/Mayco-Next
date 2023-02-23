import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Head from "next/head";
import TextileHome from "../../components/TextileHome";
import TextileObject from "../../site-data/textile-tr.json"

const Textile = () => {


    return (
        <>
            <Head>
                <title>MAYCO Tekstil</title>
            </Head>
            <Header headerObject={TextileObject.header} />
            <TextileHome homeObject={TextileObject.home}/>
            <Footer footerObject={TextileObject.footer} />
        </>
    );
}
 
export default Textile;