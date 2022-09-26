import Link from "next/link";
import Image from "next/image";
import Logo from '../assets/images/logov2.svg'
import { useRouter } from "next/router";

const Header = ({ headerObject }) => {

    const router = useRouter()

    return (
        <>
            <div className="">
                
            </div>
            <nav className="navbar navbar-expand-lg bg-light border-bottom">
                <div className="container-fluid p-1 mx-4">
                    <Link href="/">
                        <Image src={Logo} className="comp-logo" alt="MAYCO" height="70" width="184"/>
                    </Link>

                    <button className="navbar-toggler my-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse d-flex-xl align-items-xl-center justify-content-xl-center" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            {
                                headerObject.navbar.map((nav, index) => !nav.dropdown ?
                                (
                                    <li key={index} className="nav-item mx-xl-3 nav-item-mine">
                                        <Link href={'/' + headerObject.site + nav.path}>
                                            <a className="nav-link fw-semibold" aria-current="page">{ nav.label }</a>
                                        </Link>
                                    </li>
                                ) 
                                : 
                                (
                                    <li key={index} className="nav-item dropdown mx-xl-4 nav-item-mine">
                                        <a className="nav-link dropdown-toggle fw-semibold" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            { nav.label }
                                        </a>
                                        <ul className="dropdown-menu">
                                            {   
                                                nav.dropdown.map((dnav, dindex) => 
                                                (
                                                    <li key={dindex}>
                                                        <Link href={'/' + headerObject.site + dnav.path}>
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
        </>
    );
}
 
export default Header;