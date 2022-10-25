import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import MarineDeck from "../../../components/MarineDeck";
import MarineObjectEN from "../../../site-data/marine-en.json"

const DeckCoveringEN = () => {
    return (
        <>
            <Header headerObject={MarineObjectEN.header}/>
            <MarineDeck deckObject={MarineObjectEN.deckcovering}/>
            <Footer footerObject={MarineObjectEN.footer}/>
        </>
    );
}
 
export default DeckCoveringEN;