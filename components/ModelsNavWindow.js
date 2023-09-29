const ModelsNavWindow = () => {
    return (
        <li key={index} className="nav-item dropdown mx-xl-2 nav-item-mine">
        <a className={"nav-link pe-md-4 dropdown-toggle mx-2 py-4 " + "nav-link-" + headerObject.site + " " + isNavActive(nav.path) } style={{ position: "relative" }} role="button" data-bs-toggle="dropdown" aria-expanded="false">
            { nav.label }
            <RiArrowDownSFill className="dropdown-below-icon" size={23} style={{ position: "absolute", right: 1, bottom: 2, top: 25 }} />
        </a>
        <ul className="dropdown-menu list-inline marine-list-override text-center p-0">
            {   
                nav.dropdown.map((dnav, dindex) => 
                (
                    <li key={dindex} className="p-2 fs-6 dropdown-li-models">
                        <Link href={'/' + lang + headerObject.site + nav.path + dnav.path}>
                            <a className="dropdown-item"><Image src={dnav.linkimg} height={135} width={180} alt="boat link"/><br />{ dnav.label }</a>
                        </Link>
                    </li>
                )
                )
            }
        </ul>
    </li>

    );
}
 
export default ModelsNavWindow;