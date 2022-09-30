import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TextileObject from "../../site-data/textile-tr.json"
import { FaMapMarkerAlt, FaRegEnvelope, FaMobileAlt} from "react-icons/fa"

const ContactTextile = () => {
    return (
        <>
        <Header headerObject={TextileObject.header} />
            <section className="contact-form px-sm-3 py-sm-5">
                <div className="container-fluid my-sm-4">
                    <div className="tittle">
                        <h4>
                            { TextileObject.contact.title }
                        </h4>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="contact-info">
                                <h5>
                                    { TextileObject.contact.contactInfo }
                                </h5>
                                <ul>
                                    <li className="media border-bottom">
                                        <div className="media-left">
                                            <div className="icon-div"><FaMapMarkerAlt className="icon"/></div>
                                        </div>
                                        <div className="media-body mt-auto">
                                            <h6 class="media-heading">{ TextileObject.contact.address.header }</h6>
                                            <p>
                                                { TextileObject.contact.address.text}
                                            </p>
                                        </div>
                                    </li>
                                    <li class="media border-bottom">
                                        <div className="media-left">
                                            <div className="icon-div"><FaMobileAlt className="icon"/></div>
                                        </div>
                                        <div className="media-body mt-auto">
                                            <h6 class="media-heading">{ TextileObject.contact.call.header }</h6>
                                            <p>{ TextileObject.contact.call.no1 }<br />
                                            { TextileObject.contact.call.no2 }</p>
                                        </div>
                                    </li>
                                    <li class="media border-bottom">
                                        <div className="media-left">
                                            <div className="icon-div"><FaRegEnvelope className="icon"/></div>
                                        </div>
                                        <div className="media-body mt-auto">
                                            <h6 class="media-heading">{TextileObject.contact.email.header}</h6>
                                            <p>{TextileObject.contact.email.text}</p>
                                        </div>
                                    </li>    
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-8 pt-sm-4">
                            <div className="contact-form">
                                <form role="form" id="contact_form" class="contact-form" method="post" onSubmit="return false">
                                    <div className="container-fluid">
                                        <ul className="row">
                                            <li className="col-sm-6">
                                                <label>
                                                    <input type="text" class="form-control my-3" name="name" id="name" placeholder={ TextileObject.contact.form.name } />
                                                </label>
                                            </li>
                                            <li className="col-sm-6">
                                                <label>
                                                    <input type="text" class="form-control my-3" name="email" id="email" placeholder={ TextileObject.contact.form.email }/>
                                                </label>
                                            </li>
                                            <li className="col-sm-6">
                                                <label>
                                                    <input type="text" class="form-control my-3" name="phone" id="phone" placeholder={ TextileObject.contact.form.phone } />
                                                </label>
                                            </li>
                                            <li className="col-sm-6">
                                                <label>
                                                    <input type="text" class="form-control my-3" name="subject" id="subject" placeholder={ TextileObject.contact.form.subject } />
                                                </label>
                                            </li>
                                            <li className="col-sm-12">
                                                <label>
                                                    <textarea class="form-control my-3" name="message" id="message" rows="5" placeholder={ TextileObject.contact.form.message }></textarea>
                                                </label>
                                            </li>
                                            <li className="col-sm-12">
                                                <button type="submit" value="submit" class="btn my-4" id="btn_submit" onClick="proceed();">{ TextileObject.contact.form.buttontext }</button>
                                            </li>
                                        </ul>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <Footer footerObject={TextileObject.footer}/>
        </>

    );
}
 
export default ContactTextile;