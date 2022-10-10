import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import TextileObjectEN from "../../../site-data/textile-en.json"
import TextileProducts from "../../../components/TextileProducts"

const ProductsTextileEN = () => {
    return (
        <>
            <Header headerObject={TextileObjectEN.header}/>
            <TextileProducts productsObject={TextileObjectEN.products}/>
            <Footer footerObject={TextileObjectEN.footer}/>
        </>
    );
}
 
export default ProductsTextileEN;