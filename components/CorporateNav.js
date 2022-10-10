import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const CorporateNav = ({ corporateObject }) => {

    const router = useRouter()

    const [lang, ] = useState(() => corporateObject.lang === "en" ? "en/" : "")

    return (
        <>
            <nav className="corporate-navbar">
                {
                    corporateObject.navbar.map((nav, index) => (
                        <Link key={index} href={'/' + lang + corporateObject.site + "/corporate/" + nav.path}>
                            <a className="corporate-nav d-flex justify-content-between align-items-center border-bottom py-4">
                                { nav.label }
                                {
                                    router.pathname.includes(nav.path) &&
                                    (
                                        <i className="fas fa-chevron-right chevron-icon"></i>
                                    )
                                }
                            </a>
                        </Link>
                    ))
                }
            </nav>
        </>
    );
}
 
export default CorporateNav;