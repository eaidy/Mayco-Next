import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MarineHome from "../../components/MarineHome";
import MarineObject from "../../site-data/marine-tr.json"

const Marine = () => {
    return (
        <div>
            <Header headerObject={MarineObject.header}/>
            <MarineHome homeObject={MarineObject.home}/>
            <Footer footerObject={MarineObject.footer} />
        </div>
    );
}
 
export default Marine;