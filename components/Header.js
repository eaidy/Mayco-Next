import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import LangSelect from '../components/LangSelect'
import { RiArrowDownSFill } from 'react-icons/ri'
import { useEffect, useState, useRef } from "react";

const Header = ({ headerObject }) => {

    const router = useRouter()

    const [lang, ] = useState(() => headerObject.lang === "en" ? "en/" : "")
    const [currentNav, setCurrentNav ] = useState(null)
    const [currentSite, setCurrentSite] = useState(headerObject.site)

    const [activeModels, setActiveModels] = useState(null)

    useEffect(() => {
        setCurrentNav(router.pathname)
        setCurrentSite(headerObject.site)
        console.log(router.pathname)
    }, [router.pathname])

    const isNavActive = (navPath) => {
        if(navPath === '/' && (router.pathname === `/${headerObject.site}` || router.pathname === `/en/${headerObject.site}`)) { 
            return `${headerObject.site}-active`
        } else {
            if(router.pathname.includes(navPath) && navPath !== '/'){
                return `${headerObject.site}-active`
            } else {
                return null
            }
        }
    }

    const brandClickHandle = (dropdown) => {
        if(dropdown == activeModels)
            setActiveModels(null)
        else
            setActiveModels(dropdown)
    }

    const handleClick = (event) => {
        event.stopPropagation();
    };  

    return (
        <header>
            <LangSelect currentSite={headerObject.site} currentLang={headerObject.lang}/>
            <nav className="navbar navbar-expand-lg py-2 bg-white border-top border-bottom navbar-mobile">
                <div className="container-fluid">
                    <Link href={'/' + lang + currentSite}>
                        <Image src={`/logos/${currentSite}-logo-text.svg`} className="comp-logo" alt="logo" height="65" width="210"/>
                    </Link>

                    <button className="navbar-toggler my-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse d-lg-flex align-items-lg-center justify-content-lg-end  navbar-mine" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            {
                                headerObject.navbar.map((nav, index) => !nav.dropdown ?
                                (
                                    <li key={index} className="nav-item mx-xl-2 nav-item-mine">
                                        <Link href={'/' + lang + headerObject.site + nav.path}>
                                            <a className={"nav-link mx-2 py-4 " + "nav-link-" + headerObject.site + " " + isNavActive(nav.path)} aria-current="page">
                                                { nav.label }
                                            </a>
                                        </Link>
                                    </li>
                                ) 
                                : 
                                (
                                    <li key={index} className="nav-item dropdown mx-xl-2 nav-item-mine">
                                        <a className={"nav-link pe-md-4 dropdown-toggle mx-2 py-4 " + "nav-link-" + headerObject.site + " " + isNavActive(nav.path) } style={{ position: "relative" }} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            { nav.label }
                                            <RiArrowDownSFill className="dropdown-below-icon" size={23} style={{ position: "absolute", right: 1, bottom: 2, top: 25 }} />
                                        </a>
                                        <ul onClick={handleClick} className="dropdown-menu list-inline marine-list-override text-center p-0">
                                            {   
                                                <div className="pt-3">
                                                    <div>
                                                    {     
                                                    nav.dropdown.map((dnav, dindex) => dnav.dropdown &&
                                                        (
                                                            <li key={dindex} className="p-2 fs-6 dropdown-li-models">
                                                                <a 
                                                                    onClick={() => brandClickHandle(dnav.dropdown)}
                                                                    className="dropdown-item"
                                                                >
                                                                    <Image src={dnav.linkimg} height={65} width={85} alt="brand"/>
                                                                    <br />
                                                                    <span className="my-4">
                                                                    { dnav.label }
                                                                    </span>
                                                                </a>
                                                            </li>
                                                        )
                                                        )
                                                    }  
                                                    </div>
                                                    
                                                    {
                                                        activeModels && (
                                                        <>
                                                            <hr />
                                                            <div>
                                                                <ul className="list-inline marine-list-override text-center p-0">
                                                                    {
                                                                    activeModels && activeModels.map((model, mindex) => (
                                                                        <li key={mindex} className="p-2 fs-6 dropdown-li-models">
                                                                            <Link href={'/' + lang + headerObject.site + model.path}>
                                                                                <a
                                                                                    className={"nav-link mx-2 py-4 "}
                                                                                >
                                                                                    { model.linkimg && (<Image src={model.linkimg} height={80} width={120} alt="boat link"/>)}
                                                                                    <br />
                                                                                    { model.label }
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                    ))
                                                                    } 
                                                                </ul>
                                                            </div>
                                                        </>
                                                        )
                                                    }
                                                </div>
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