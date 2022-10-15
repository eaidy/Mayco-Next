import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import AboutUs from "../../../components/AboutUs";
import MarineObject from "../../../site-data/marine-tr.json"
import CorporateNav from "../../../components/CorporateNav";

const OurMission = () => {
    return (
        <>
            <Header headerObject={MarineObject.header}/>
            <div className="container-fluid py-3">
                <div className="row">
                    <div className="col-sm-3 d-flex justify-content-center">
                        <CorporateNav corporateObject={MarineObject.corporate}/>
                    </div>
                    <div className="col-sm-9">
                        <AboutUs corporotePageObject={MarineObject.mission}/>
                    </div>
                </div>
            </div>
            <Footer footerObject={MarineObject.footer}/>
        </>
    );
}
 
export default OurMission;