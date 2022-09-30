import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const Footer = ({ footerObject }) => {
    return (
        <footer>
            <div className="container-fluid border-top">
                <div className="row">
                    <div className="footer-left col-sm-6 d-flex justify-content-center">
                        <div className="footer-left-container text-center py-4">
                            <i className="ion-map"></i>
                            <p>{ footerObject.address }</p>
                        </div>
                    </div>
                    <div className="footer-right col-sm-6 d-flex justify-content-center">
                        <div className="footer-right-container text-center py-4">
                            <p className="mt-3">{ footerObject.socialexp }</p>
                            <ul className="social-links px-0">
                                <li className="facebook">
                                    <a className="facebook" href={footerObject.facebooklink} target="_blank"><FaFacebookF className="social-icon"/></a>
                                </li>
                                <li className="instagram">
                                    <a className="instagram" href={footerObject.instagramlink} target="_blank"><BsInstagram className="social-icon"/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-12 border-top border-bottom">
                        <div className="d-flex h-75 justify-content-center py-4">
                            <p className="text-center text-muted company">&copy; {footerObject.company}</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;