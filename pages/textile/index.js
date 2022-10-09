import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TextileHome from "../../components/TextileHome";
import TextileObject from "../../site-data/textile-tr.json"

const Textile = () => {


    return (
        <div>
            <Header headerObject={TextileObject.header} />
            <TextileHome homeObject={TextileObject.home}/>
            <Footer footerObject={TextileObject.footer} />
        </div>
    );
}
 
export default Textile;