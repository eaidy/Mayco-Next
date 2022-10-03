import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MarineObject from "../../site-data/marine-tr.json"

const CorporateMarine = () => {
    return (
        <>
            <Header headerObject={MarineObject.header}/>
            <Footer footerObject={MarineObject.footer}/>
        </>
    );
}
 
export default CorporateMarine;