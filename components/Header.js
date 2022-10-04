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
            <nav className="navbar navbar-expand-lg bg-white border-bottom py-3 border">
                <div className="container-fluid p-1 mx-4">
                    <Link href={"/" + headerObject.lang === "en" ? "en" : "" + headerObject.site}>
                        <Image src="/images/logov2.svg" className="comp-logo" alt="MAYCO" height="70" width="184"/>
                    </Link>

                    <button className="navbar-toggler my-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse d-flex-xl align-items-xl-center justify-content-xl-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            {
                                headerObject.navbar.map((nav, index) => !nav.dropdown ?
                                (
                                    <li key={index} className="nav-item mx-xl-1 nav-item-mine">
                                        <Link href={'/' + lang + headerObject.site + nav.path}>
                                            <a className="nav-link fw-normal" aria-current="page">{ nav.label }</a>
                                        </Link>
                                    </li>
                                ) 
                                : 
                                (
                                    <li key={index} className="nav-item dropdown mx-xl-4 nav-item-mine">
                                        <a className="nav-link dropdown-toggle fw-normal" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            { nav.label }
                                        </a>
                                        <ul className="dropdown-menu">
                                            {   
                                                nav.dropdown.map((dnav, dindex) => 
                                                (
                                                    <li key={dindex}>
                                                        <Link href={'/' + lang + headerObject.site + dnav.path}>
                                                            <a className="dropdown-item" href="#">{ dnav.label }</a>
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