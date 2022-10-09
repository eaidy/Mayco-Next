import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import TextileHome from "../../../components/TextileHome";
import TextileObjectEN from "../../../site-data/textile-en.json"

const TextileEN = () => {
    return (
        <div className="content">
            <Header headerObject={TextileObjectEN.header} />
            <TextileHome homeObject={TextileObjectEN.home}/>
            <Footer footerObject={TextileObjectEN.footer} />
        </div>
    );
}
 
export default TextileEN;