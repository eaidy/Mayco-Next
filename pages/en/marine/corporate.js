import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import MarineObjectEN from "../../../site-data/marine-en.json"

const CorporateMarineEN = () => {
    return (
        <>
            <Header headerObject={MarineObjectEN.header}/>
            <Footer footerObject={MarineObjectEN.footer}/>
        </>
    );
}
 
export default CorporateMarineEN;