import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import TextileCorporate from "../../../components/TextileCorporate";
import TextileObject from "../../../site-data/textile-tr.json"

const Corporate = () => {
    return (
        <>
            <Header headerObject={TextileObject.header}/>
            <TextileCorporate corporateObject={TextileObject.corporate}/>
            <Footer footerObject={TextileObject.footer}/>
        </>
    );
}
 
export default Corporate;