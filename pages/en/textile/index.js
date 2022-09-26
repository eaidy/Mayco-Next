import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import TextileObjectEN from "../../../site-data/textile-en.json"

const TextileEN = () => {
    return (
        <div className="content">
            <Header headerObject={TextileObjectEN.header} />
            TextileEN
            <Footer footerObject={TextileObjectEN.footer} />
        </div>
    );
}
 
export default TextileEN;