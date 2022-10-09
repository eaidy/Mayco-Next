import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TextileProducts from "../../components/TextileProducts";
import TextileObject from "../../site-data/textile-tr.json"

const ProductsTextile = () => {
    return (
        <>
            <Header headerObject={TextileObject.header}/>
            <TextileProducts productsObject={TextileObject.products} />
            <Footer footerObject={TextileObject.footer}/>
        </>
    );
}
 
export default ProductsTextile;