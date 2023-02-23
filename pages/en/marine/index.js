import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import MarineHome from "../../../components/MarineHome";
import MarineObjectEN from "../../../site-data/marine-en.json"
import Head from "next/head";

const MarineEN = () => {
    return (
        <>
            <Head>
                <title>MAYCO Marine</title>
            </Head>
            <Header headerObject={MarineObjectEN.header} />
            <MarineHome homeObject={MarineObjectEN.home}/>
            <Footer footerObject={MarineObjectEN.footer} />
        </>
    );
}
 
export default MarineEN;