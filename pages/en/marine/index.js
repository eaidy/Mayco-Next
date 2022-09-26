import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import MarineObjectEN from "../../../site-data/marine-en.json"

const MarineEN = () => {
    return (
        <div>
            <Header headerObject={MarineObjectEN.header} />
            MarineEN
            <Footer footerObject={MarineObjectEN.footer} />
        </div>
    );
}
 
export default MarineEN;