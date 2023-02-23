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

                <meta name="description" content="Mayco Textile has been founded in 1984 by Mr. Bulent Icgoren in Istanbul, Turkey. With over 35 years of experience in home textiles and wowen fabrics, Mayco is specialized in curtain, upholstery and terry cloths." />
                <meta name="keywords" content="Textile, Drapery, Curtain, Towel, towel, curtain, drapery, textile" />
            </Head>
            <Header headerObject={TextileObjectEN.header} />
            <TextileHome homeObject={TextileObjectEN.home}/>
            <Footer footerObject={TextileObjectEN.footer} />
        </>
    );
}
 
export default TextileEN;