import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import MarineHome from "../../../components/MarineHome";
import MarineObjectEN from "../../../site-data/marine-en.json"

const MarineEN = () => {
    return (
        <div>
            <Header headerObject={MarineObjectEN.header} />
            <MarineHome homeObject={MarineObjectEN.home}/>
            <Footer footerObject={MarineObjectEN.footer} />
        </div>
    );
}
 
export default MarineEN;