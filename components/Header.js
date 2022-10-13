import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import LangSelect from '../components/LangSelect'
import { useState } from "react";

const Header = ({ headerObject }) => {

    const router = useRouter()

    const [lang, ] = useState(() => headerObject.lang === "en" ? "en/" : "")

    return (
        <header>
            <LangSelect currentSite={headerObject.site} currentLang={headerObject.lang}/>
            <nav className="navbar navbar-expand-lg py-0 bg-white border navbar-mobile">
                <div className="container-fluid">
                    <Link href={'/' + lang + headerObject.site}>
                        <Image src="/images/logov2.svg" className="comp-logo" alt="MAYCO" height="65" width="210"/>
                    </Link>

                    <button className="navbar-toggler my-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse d-flex align-items-center justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            {
                                headerObject.navbar.map((nav, index) => !nav.dropdown ?
                                (
                                    <li key={index} className="nav-item mx-xl-1 nav-item-mine">
                                        <Link href={'/' + lang + headerObject.site + nav.path}>
                                            <a className={"nav-link mx-2 py-4 " + "nav-link-" + headerObject.site } aria-current="page">
                                                { nav.label }
                                            </a>
                                        </Link>
                                    </li>
                                ) 
                                : 
                                (
                                    <li key={index} className="nav-item dropdown mx-xl-1 nav-item-mine">
                                        <a className={"nav-link dropdown-toggle mx-2 py-4 fw-normal " + "nav-link-" + headerObject.site } role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            { nav.label }
                                        </a>
                                        <ul className="dropdown-menu">
                                            {   
                                                nav.dropdown.map((dnav, dindex) => 
                                                (
                                                    <li key={dindex}>
                                                        <Link href={'/' + lang + headerObject.site + nav.path + dnav.path}>
                                                            <a className="dropdown-item">{ dnav.label }</a>
                                                        </Link>
                                                    </li>
                                                )
                                                )
                                            }
                                        </ul>
                                    </li>
                                )
                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
 
export default Header;