import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import TextileCorporate from "../../../../components/TextileCorporate";
import TextileObjectEN from "../../../../site-data/textile-en.json"

const CorporateEN = () => {
    return (
        <>
            <Header headerObject={TextileObjectEN.header}/>
            <TextileCorporate corporateObject={TextileObjectEN.corporate}/>
            <Footer footerObject={TextileObjectEN.footer}/>
        </>
    );
}
 
export default CorporateEN;