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
            </Head>
            <Header headerObject={TextileObjectEN.header}/>
            <TextileProducts productsObject={TextileObjectEN.products}/>
            <Footer footerObject={TextileObjectEN.footer}/>
        </>
    );
}
 
export default ProductsTextileEN;