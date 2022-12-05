import { FaMapMarkerAlt, FaRegEnvelope, FaMobileAlt} from "react-icons/fa"
import { useState } from "react";
import GoogleMapReact from "google-map-react";
import Iframe from "react-iframe";
import * as yup from 'yup'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const defaultProps = {
    center: {
      lat: 41.036230,
      lng: 28.989316
    },
    zoom: 18
  };

const formSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().min(10).max(10).required(),
    subject: yup.string().required(),
    message: yup.string().required(),
})

const Contact = ({ contactObject }) => {

    const [formValid, setFormValid] = useState()

    const submitForm = async (e) => {
        e.preventDefault()
        
        let formData = {
            name: e.target[0].value,
            email: e.target[1].value,
            phone: e.target[2].value,
            subject: e.target[3].value,
            message: e.target[4].value,
        }

        const isValid = await formSchema.isValid(formData)

        const formattedMessage = `${formData.message}%0D%0A%0D%0A${formData.name}%0D%0A${formData.email}%0D%0A${formData.phone}`

        setFormValid(isValid)

        if (isValid) {
            var mail = document.createElement("a");
            mail.href = `mailto:info@maycotex.com.tr?subject=${formData.subject}&body=${formattedMessage}`;
            mail.click();
        }

        console.log(isValid)
    }

    return ( 
    <section className="contact-form px-sm-3 py-sm-5">
        <div className="container-fluid my-sm-4 px-5">
            <div className="tittle">
                <h4>
                    { contactObject.title }
                </h4>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="contact-info">
                        <h5>
                            { contactObject.contactInfo }
                        </h5>
                        <ul>
                            <li className="media border-bottom">
                                <div className="media-left">
                                    <div className="icon-div"><FaMapMarkerAlt className="icon"/></div>
                                </div>
                                <div className="media-body mt-auto">
                                    <h6 className="media-heading">{ contactObject.address.header }</h6>
                                    <p>
                                        { contactObject.address.text}
                                    </p>
                                </div>
                            </li>
                            <li className="media border-bottom">
                                <div className="media-left">
                                    <div className="icon-div"><FaMobileAlt className="icon"/></div>
                                </div>
                                <div className="media-body mt-auto">
                                    <h6 className="media-heading">{ contactObject.call.header }</h6>
                                    <p>{ contactObject.call.no1 }<br />
                                    { contactObject.call.no2 }</p>
                                </div>
                            </li>
                            <li className="media border-bottom">
                                <div className="media-left">
                                    <div className="icon-div"><FaRegEnvelope className="icon"/></div>
                                </div>
                                <div className="media-body mt-auto">
                                    <h6 className="media-heading">{contactObject.email.header}</h6>
                                    <p>{contactObject.email.text}</p>
                                </div>
                            </li>    
                        </ul>
                    </div>
                </div>
                <div className="col-sm-8 pt-sm-4">
                    <div className="contact-form">
                        <form role="form" id="contact_form" className="contact-form" method="post" onSubmit={(e) => submitForm(e)}>
                            <div className="container-fluid">
                                <ul className="row mx-0 px-0">
                                    <li className="col-sm-6">
                                        <label>
                                            <input type="text" className="form-control my-3" name="name" id="name" placeholder={ contactObject.form.name } />
                                        </label>
                                    </li>
                                    <li className="col-sm-6">
                                        <label>
                                            <input type="text" className="form-control my-3" name="email" id="email" placeholder={ contactObject.form.email }/>
                                        </label>
                                    </li>
                                    <li className="col-sm-6">
                                        <label>
                                            <input type="text" className="form-control my-3" name="phone" id="phone" placeholder={ contactObject.form.phone } />
                                        </label>
                                    </li>
                                    <li className="col-sm-6">
                                        <label>
                                            <input type="text" className="form-control my-3" name="subject" id="subject" placeholder={ contactObject.form.subject } />
                                        </label>
                                    </li>
                                    <li className="col-sm-12">
                                        <label>
                                            <textarea className="form-control my-3" name="message" id="message" rows="5" placeholder={ contactObject.form.message }></textarea>
                                        </label>
                                    </li>
                                    <li className="col-sm-12">
                                        {
                                            !formValid && (
                                                <span className="form-error">
                                                    Lütfen bilgileriniz kontrol ediniz.
                                                </span>
                                            )
                                        }
                                        <input type="submit" value={ contactObject.form.buttontext } className="btn my-4" id="btn_submit" />
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-12">
                    <div style={{ height: '50vh', width: '100%' }}>
                        {/* <GoogleMapReact
                            bootstrapURLKeys={{ key: "AIzaSyDswN_NNdYrTvgHi_K11it2nujdbCWQMSE" }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                        >
                            <AnyReactComponent
                            lat={41.036230}
                            lng={28.989316}
                            text="MAYCO Inc"
                            />
                        </GoogleMapReact> */}

                        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.498995847303!2d28.98719071541492!3d41.036215679298024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab77ae98fbef5%3A0x4ca4ccfe1861a966!2sMayco%20Tekstil%20End%C3%BCstri%20ve%20Ticaret%20A.%C5%9E.!5e0!3m2!1str!2str!4v1670249206582!5m2!1str!2str"
                         width="100%" 
                         height="90%" 
                         style="border:0;" 
                         allowFullScreen="" 
                         loading="lazy" 
                         referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
 
export default Contact;