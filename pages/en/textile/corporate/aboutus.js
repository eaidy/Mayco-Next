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

                <meta name="description" content="Mayco Textile has been founded in 1984 by Mr. Bulent Icgoren in Istanbul, Turkey. With over 35 years of experience in home textiles and wowen fabrics, Mayco is specialized in curtain, upholstery and terry cloths." />
                <meta name="keywords" content="Textile, Drapery, Curtain, Towel, towel, curtain, drapery, textile" />
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