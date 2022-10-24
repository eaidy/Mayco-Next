import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import MarineBoatModel from "../../../../components/MarineBoatModel";
import MarineObject from "../../../../site-data/marine-en.json"

const J121 = () => {
    return (
        <>
            <Header headerObject={MarineObject.header}/>
            <MarineBoatModel modelObject={MarineObject.models.J121}/>
            <Footer footerObject={MarineObject.footer}/>
        </>
    );
}
 
export default J121;