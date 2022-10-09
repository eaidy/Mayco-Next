import { GB, TR } from 'country-flag-icons/react/3x2'
import { BsTelephoneFill } from'react-icons/bs'
import { useRouter } from 'next/router';

const LangSelect = ({ currentSite, currentLang}) => {

    const router = useRouter()

    return (
        <div className="container-fuild d-flex bg-light justify-content-between py-1 px-3">
            <div className="header-phones d-flex justify-content-center align-items-center">
                <BsTelephoneFill className="telephone-icon"/>
                <a href="tel:+90212-251-0895">+90 212 251 0895</a>
            </div>
            <div className="dropdown">
                <button className="btn btn-secondary bg-transparent text-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {
                        currentLang === 'en' ? 'En' : 'Tr'
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