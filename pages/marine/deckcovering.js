import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MarineObject from "../../site-data/marine-tr.json"

const DeckCovering = () => {
    return (
        <>
            <Header headerObject={MarineObject.header}/>
            <Footer footerObject={MarineObject.footer}/>
        </>
    );
}
 
export default DeckCovering;