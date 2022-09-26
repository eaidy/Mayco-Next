import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import textileTrJson from '../site-data/textile-tr.json'

const Layout = ({ children }) => {

    const router = useRouter()

    return (
        <div className="content">
            {
                router.pathname !== '/' &&
                <Header headerObject={textileTrJson.header} />
            }
            { children }
            {
                router.pathname !== '/' &&
                <Footer />
            }
        </div>
    );
}
 
export default Layout;