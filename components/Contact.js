import { FaMapMarkerAlt, FaRegEnvelope, FaMobileAlt} from "react-icons/fa"
import { useState } from "react";
import GoogleMapReact from "google-map-react";
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

        setFormValid(isValid)

        if (isValid) {
            
        }

        console.log(isValid)
    }

    return ( 
    <section className="contact-form px-sm-3 py-sm-5">
        <div className="container-fluid my-sm-4">
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
                                <ul className="row">
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
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "" }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                        >
                            <AnyReactComponent
                            lat={41.036230}
                            lng={28.989316}
                            text="MAYCO Inc"
                            />
                        </GoogleMapReact>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
 
export default Contact;