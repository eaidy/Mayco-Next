import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { BiMapAlt } from 'react-icons/bi'
import Link from 'next/link'

const Footer = ({ footerObject }) => {
    return (
        <footer>
            <div className="container-fluid border-top">
                <div className="row">
                    <div className="footer-left col-sm-4 d-flex justify-content-center">
                        <div className="info-list-container p-5">
                            <h6>{footerObject.contactheader}</h6>
                            <ul className="footer-info-list">
                                <li className="footer-info-item">
                                    <p>{footerObject.address}</p>
                                </li>
                                <li className="footer-info-item">
                                    <ul className="footer-info-phones">
                                        <li className="phone-item">
                                            <p>{footerObject.phone.no1}</p>
                                        </li>
                                        <li className="phone-item">
                                            <p>{footerObject.phone.no2}</p>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-right col-sm-4 d-flex justify-content-center">
                        <div className="info-list-container p-5">
                            <h6>{footerObject.contractsheader}</h6>
                            <ul className="footer-info-list">
                                <li className="contracts-list-item">
                                    <Link href={footerObject.contracts.corporate.href}><a className="contract-link" target="_blank" rel="noreferrer">{footerObject.contracts.corporate.text}</a></Link>
                                </li>
                                <li className="contracts-list-item">
                                    <Link href={footerObject.contracts.personaldata.href}><a className="contract-link" target="_blank" rel="noreferrer">{footerObject.contracts.personaldata.text}</a></Link>
                                </li>
                                <li className="contracts-list-item">
                                    <Link href={footerObject.contracts.privacy.href}><a className="contract-link" target="_blank" rel="noreferrer">{footerObject.contracts.privacy.text}</a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-right col-sm-4 d-flex justify-content-center align-items-center">
                        <div className="footer-right-container text-center py-4">
                            <h6 className="my-3">{ footerObject.socialexp }</h6>
                            <ul className="social-links px-0">
                                <li className="facebook">
                                    <a className="facebook" href={footerObject.facebooklink} target="_blank" rel="noreferrer"><FaFacebookF className="social-icon"/></a>
                                </li>
                                <li className="instagram">
                                    <a className="instagram" href={footerObject.instagramlink} target="_blank" rel="noreferrer"><BsInstagram className="social-icon"/></a>
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