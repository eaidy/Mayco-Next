import { GB, TR } from 'country-flag-icons/react/3x2'
import { BsTelephoneFill } from'react-icons/bs'
import { HiMail } from'react-icons/hi'
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

const LangSelect = ({ currentSite, currentLang}) => {

    const router = useRouter()

    const [currentSiteState, ] = useState(currentSite)

    return (
        <div className="container-fuild d-flex justify-content-between align-items-center px-2">
            
            {/* <div className="header-phones d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 p-1 d-flex align-items-center">
                            <BsTelephoneFill className="telephone-icon"/>
                            <a href="tel:+90212-251-0895">+90 212 251 0895</a>
                        </div>
                        <div className="col-sm-6 p-1 d-flex align-items-center">
                            <HiMail className="telephone-icon"/>
                            <a href="mailto:info@maycotex.com.tr">info@maycotex.com.tr</a>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="header-phones d-flex">
                <div className="px-2">
                    <a href="tel:+90212-251-0895"><BsTelephoneFill className="telephone-icon"/>+90 212 251 0895</a>
                </div>
                <div className="px-2">
                    <a href="mailto:info@maycotex.com.tr"><HiMail className="mail-icon"/>info@maycotex.com.tr</a>
                </div>
            </div>

            <div className="d-flex">
                {/* <div>
                    <button onClick={() => router.push('/')} className="btn btn-secondary bg-transparent text-secondary" id="dropdownMenuButton1" type="button">
                        {
                            currentLang === 'en' ? "Enterence Page" : "Giriş Sayfası"
                        }
                    </button>
                </div> */}
                <div className="dropdown">
                    <button className={"p-1 bg-transparent d-sm-inline-block text-secondary dropdown-toggle dropdownMenuButton-" + currentSiteState} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        {
                            currentLang === 'en' ? 'English' : 'Türkçe'
                        }
                    </button>
                    <ul className="dropdown-menu lang-list" aria-labelledby="dropdownMenuButton1">
                        <li className="text-center lang-list-item mb-2"> 
                            <div 
                                onClick={() => router.push(currentLang === 'tr' ? `/en/${router.pathname}` : router.pathname)}
                                className="lang-select-button py-1 mx-auto"
                            >
                                <p className="px-1">English</p>
                                <span>
                                    <GB 
                                        title="English" 
                                        className="flagIcon"
                                    />
                                </span>
                            </div>
                        </li>
                        <li className="text-center lang-list-item">
                            <div
                                onClick={() => router.push(currentLang === 'en' ? router.pathname.replace('/en', '') : router.pathname)}
                                className="lang-select-button py-1 mx-auto"
                            >
                                <p className="px-1">
                                    Türkçe
                                </p>
                                <span>
                                    <TR 
                                        title="Turkish" 
                                        className="flagIcon"
                                    />
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        // <span className="langSelect">
        //     <GB 
        //         onClick={() => router.push(currentLang === 'tr' ? `/en/${router.pathname}` : router.pathname)}
        //         title="English" 
        //         className="flagIcon"
        //     />
        //     <TR 
        //         onClick={() => router.push(currentLang === 'en' ? router.pathname.replace('/en', '') : router.pathname)}
        //         title="Turkish" 
        //         className="flagIcon"
        //     />
        // </span>
    );
}
 
export default LangSelect;