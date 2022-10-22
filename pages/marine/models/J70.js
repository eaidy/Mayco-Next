import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import MarineBoatModel from "../../../components/MarineBoatModel";
import MarineObject from "../../../site-data/marine-tr.json"

const J70 = () => {
    return (
        <>
            <Header headerObject={MarineObject.header}/>
            <MarineBoatModel modelObject={MarineObject.models.J70}/>
            <Footer footerObject={MarineObject.footer}/>
        </>
    );
}
 
export default J70;