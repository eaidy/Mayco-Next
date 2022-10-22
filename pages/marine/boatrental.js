import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MarineRental from "../../components/MarineRental";
import MarineObject from "../../site-data/marine-tr.json"

const BoatRental = () => {
    return (
        <>
            <Header headerObject={MarineObject.header}/>
            <MarineRental rentalObject={MarineObject.rental}/>
            <Footer footerObject={MarineObject.footer}/>
        </>
    );
}
 
export default BoatRental;