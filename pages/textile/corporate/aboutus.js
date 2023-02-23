import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import AboutUs from "../../../components/AboutUs";
import TextileObject from "../../../site-data/textile-tr.json"
import CorporateNav from "../../../components/CorporateNav";
import Head from "next/head";

const AboutUsTextile = () => {
    return (
        <>
            <Head>
                <title>MAYCO | Hakkımızda</title>

                <meta name="description" content="Mayco Tekstil 1984 yılında Bülent İçgören tarafından İstanbul’da kurulmuştur. Şuan ise ikinci kuşak temsilcisi olan Emir İçgören’in yönetim kurulu başkanlığında hizmet vermeye devam etmektedir. Ev Tekstili ve dokuma ürünlerinde 35 yıllık tecrübe barındıran Mayco Tekstil, Perde, Döşemelik kumaş ve havlu gruplarında uzmanlaşmıştır." />
                <meta name="keywords" content="Tekstil, Textile, Drapery, Curtain, Perde, Döşemelik, Kumaş, tekstil, textile, drapery, curtain perde, döşemelik, kumaş" />
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