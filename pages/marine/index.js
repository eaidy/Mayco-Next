import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MarineObject from "../../site-data/marine-tr.json"

const Marine = () => {
    return (
        <div>
            <Header headerObject={MarineObject.header}/>
            Marine
            <Footer footerObject={MarineObject.footer} />
        </div>
    );
}
 
export default Marine;