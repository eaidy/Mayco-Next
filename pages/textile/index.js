import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TextileObject from "../../site-data/textile-tr.json"

const Textile = () => {
    return (
        <div>
            <Header headerObject={TextileObject.header} />
            Textile
            <Footer footerObject={TextileObject.footer} />
        </div>
    );
}
 
export default Textile;