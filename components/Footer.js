import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { BiMapAlt } from 'react-icons/bi'
import {BsTelephoneFill} from 'react-icons/bs'
import Link from 'next/link'

const Footer = ({ footerObject }) => {
    return (
        <footer>
            <div className="container-fluid border-top">
                <div className="row">
                    <div className="col-12 px-5 d-flex footer-icon">
                        <img className="mt-3 mx-3" src="/logos/mayco-textile-3.png" width={50} height={50}/>
                    </div>
                </div>
                <div className="row">
                    <div className="footer-left col-sm-4 d-flex justify-content-center">
                        <div className="info-list-container p-5 pt-2">
                            <h6 className="border-bottom mb-3 py-2">{footerObject.contactheader}</h6>
                            <ul className="footer-info-list">
                                <li className="footer-info-item">
                                    <p>{footerObject.address}</p>
                                </li>
                                <li className="footer-info-item">
                                    <p>
                                        {footerObject.email}
                                    </p>
                                </li>
                                <div className="footer-info-item">
                                    <div className="footer-info-phones">
                                        <p className="phone-item">
                                            <BsTelephoneFill className="telephone-icon"/>
                                            {footerObject.phone.no1}
                                        </p>
                                        <p className="phone-item">
                                            <BsTelephoneFill className="telephone-icon inactive-icon"/>
                                            {footerObject.phone.no2}
                                        </p>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-right col-sm-4 d-flex justify-content-center">
                        <div className="info-list-container p-5 pt-2">
                            <h6 className="border-bottom mb-3 py-2">{footerObject.contractsheader}</h6>
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
                    <div className="footer-right col-sm-4 d-flex justify-content-center">
                        <div className="info-list-container p-5 pt-2">
                            <h6 className="border-bottom mb-3 py-2">{ footerObject.socialexp }</h6>
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
                        <div className="d-flex h-75 justify-content-center py-3">
                            <p className="text-center text-muted company">&copy; {footerObject.company}</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;