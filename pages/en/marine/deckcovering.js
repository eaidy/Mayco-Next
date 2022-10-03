import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import MarineObjectEN from "../../../site-data/marine-en.json"

const DeckCoveringEN = () => {
    return (
        <>
            <Header headerObject={MarineObjectEN.header}/>
            <Footer footerObject={MarineObjectEN.footer}/>
        </>
    );
}
 
export default DeckCoveringEN;