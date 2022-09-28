import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const Footer = ({ footerObject }) => {
    return (
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="footer-left col-sm-6 d-flex justify-content-center">
                        <div className="footer-left-container text-center py-4">
                            <i className="ion-map"></i>
                            <p>İnöncü Caddesi, No: 47/4, PK: 34437 Gümüşsuyu, Beyoğlu  istanbul</p>
                        </div>
                    </div>
                    <div className="footer-right col-sm-6 d-flex justify-content-center">
                        <div className="footer-right-container text-center py-4">
                            <p className="mt-3">Sosyal Medya bağlantılarımız</p>
                            <ul className="social-links px-0">
                                <li className="facebook">
                                    <a className="facebook" href="https://www.facebook.com/MaycoMarine" target="_blank"><FaFacebookF className="social-icon"/></a>
                                </li>
                                <li className="instagram">
                                    <a className="instagram" href="https://www.instagram.com/maycomarine" target="_blank"><BsInstagram className="social-icon"/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex h-75 border-top justify-content-center py-4">
                            <p className="text-center text-muted">&copy; 1984 Mayco Textile, Inc</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;