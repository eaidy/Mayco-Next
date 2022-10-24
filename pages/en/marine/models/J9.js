import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import MarineBoatModel from "../../../../components/MarineBoatModel";
import MarineObject from "../../../../site-data/marine-en.json"

const J9 = () => {
    return (
        <>
            <Header headerObject={MarineObject.header}/>
            <MarineBoatModel modelObject={MarineObject.models.J9}/>
            <Footer footerObject={MarineObject.footer}/>
        </>
    );
}
 
export default J9;