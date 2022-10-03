import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import MarineObjectEN from "../../../site-data/marine-en.json"

const BoatRentalEN = () => {
    return (
        <>
            <Header headerObject={MarineObjectEN.header}/>
            <Footer footerObject={MarineObjectEN.footer}/>
        </>
    );
}
 
export default BoatRentalEN;