import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import MarineObject from "../../../site-data/marine-tr.json"
import CorporateNav from "../../../components/CorporateNav";
import Head from "next/head";

const OurMission = () => {
    return (
        <>
            <Head>
                <title>MAYCO | Kurumsal</title>
            </Head>
            <Header headerObject={MarineObject.header}/>
            <div className="container-fluid py-3">
                <div className="row">
                    <div className="col-sm-3 d-flex justify-content-center">
                        <CorporateNav corporateObject={MarineObject.corporate}/>
                    </div>
                    <div className="col-sm-9">
                    </div>
                </div>
            </div>
            <Footer footerObject={MarineObject.footer}/>
        </>
    );
}
 
export default OurMission;