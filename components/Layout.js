import { useEffect, useState } from "react";
import { atom, useAtom } from 'jotai'
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import LangSelect from "./LangSelect";

export const langAtom = atom('')
export const currentSiteAtom = atom(null)

const Layout = ({ children }) => {

    const router = useRouter()

    const [langState, ] = useAtom(langAtom)
    const [currentSite,] = useAtom(currentSiteAtom)
    const [siteObject, setSiteObject] = useState()
    

    useEffect(() => {
        if(currentSite){
            if(langState === 'en'){
                setSiteObject(() => require(`../site-data/${currentSite}-en.json`))
                router.push(router.pathname.includes('/en') ? router.pathname : `/en${router.pathname}`)
            }
            else if(langState === ''){
                setSiteObject(() => require(`../site-data/${currentSite}-en.json`))
                router.push(router.pathname.includes('/en') ? router.pathname.replace('/en', '') : router.pathname)
            }
        }
    }, [,langState, currentSite])


    return (
        <>
        {
            (
            <div className="content">
                <LangSelect langAtom={langAtom} />
                {
                    router.pathname !== '/' &&
                    <Header langState={langState} currentSite={currentSite} headerObject={siteObject.header} />
                }
                { children }
                {
                    router.pathname !== '/' &&
                    <Footer footerObject={siteObject.footer}/>
                }
            </div>
            )
        }   
    </>
    );
}
 
export default Layout;