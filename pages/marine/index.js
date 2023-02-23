import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MarineHome from "../../components/MarineHome";
import MarineObject from "../../site-data/marine-tr.json"
import Head from "next/head";

const Marine = () => {
    return (
        <>
            <Head>
                <title>MAYCO Marine</title>
            </Head>
            <Header headerObject={MarineObject.header}/>
            <MarineHome homeObject={MarineObject.home}/>
            <Footer footerObject={MarineObject.footer} />
        </>
    );
}
 
export default Marine;