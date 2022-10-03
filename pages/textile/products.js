import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TextileObject from "../../site-data/textile-tr.json"

const ProductsTextile = () => {
    return (
        <>
            <Header headerObject={TextileObject.header}/>
            <div>
                Products Textile
            </div>
            <Footer footerObject={TextileObject.footer}/>
        </>
    );
}
 
export default ProductsTextile;