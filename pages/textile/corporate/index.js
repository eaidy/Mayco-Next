import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Head from "next/head";
import TextileObject from "../../../site-data/textile-tr.json"
import CorporateNav from "../../../components/CorporateNav";

const OurMission = () => {
    return (
        <>
            <Head>
                <title>MAYCO | Kurumsal</title>
            </Head>
            <Header headerObject={TextileObject.header}/>
            <div className="container-fluid py-3">
                <div className="row">
                    <div className="col-sm-3 d-flex justify-content-center">
                        <CorporateNav corporateObject={TextileObject.corporate}/>
                    </div>
                    <div className="col-sm-9">
                    </div>
                </div>
            </div>
            <Footer footerObject={TextileObject.footer}/>
        </>
    );
}
 
export default OurMission;