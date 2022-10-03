import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import TextileObjectEN from "../../../site-data/textile-en.json"

const ProductsTextileEN = () => {
    return (
        <>
            <Header headerObject={TextileObjectEN.header}/>
            <div>
                Products Textile
            </div>
            <Footer footerObject={TextileObjectEN.footer}/>
        </>
    );
}
 
export default ProductsTextileEN;