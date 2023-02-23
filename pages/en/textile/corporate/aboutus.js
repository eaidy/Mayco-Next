import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import AboutUs from "../../../../components/AboutUs";
import TextileObject from "../../../../site-data/textile-en.json"
import CorporateNav from "../../../../components/CorporateNav";
import Head from "next/head";

const AboutUsTextile = () => {
    return (
        <>
            <Head>
                <title>MAYCO | About Us</title>
            </Head>
            <Header headerObject={TextileObject.header}/>
            <div className="container-fluid py-3">
                <div className="row">
                    <div className="col-sm-3 d-flex justify-content-center">
                        <CorporateNav corporateObject={TextileObject.corporate}/>
                    </div>
                    <div className="col-sm-9">
                        <AboutUs corporotePageObject={TextileObject.about}/>
                    </div>
                </div>
            </div>
            <Footer footerObject={TextileObject.footer}/>
        </>
    );
}
 
export default AboutUsTextile;