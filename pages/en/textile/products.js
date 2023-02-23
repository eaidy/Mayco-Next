import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import TextileObjectEN from "../../../site-data/textile-en.json"
import TextileProducts from "../../../components/TextileProducts"
import Head from "next/head";

const ProductsTextileEN = () => {
    return (
        <>
            <Head>
                <title>MAYCO | Products</title>

                <meta name="description" content="Mayco Textile has been founded in 1984 by Mr. Bulent Icgoren in Istanbul, Turkey. With over 35 years of experience in home textiles and wowen fabrics, Mayco is specialized in curtain, upholstery and terry cloths." />
                <meta name="keywords" content="Textile, Drapery, Curtain, Towel, towel, curtain, drapery, textile" />
            </Head>
            <Header headerObject={TextileObjectEN.header}/>
            <TextileProducts productsObject={TextileObjectEN.products}/>
            <Footer footerObject={TextileObjectEN.footer}/>
        </>
    );
}
 
export default ProductsTextileEN;