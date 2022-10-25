import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MarineDeck from "../../components/MarineDeck"
import MarineObject from "../../site-data/marine-tr.json"

const DeckCovering = () => {
    return (
        <>
            <Header headerObject={MarineObject.header}/>
            <MarineDeck deckObject={MarineObject.deckcovering}/>
            <Footer footerObject={MarineObject.footer}/>
        </>
    );
}
 
export default DeckCovering;