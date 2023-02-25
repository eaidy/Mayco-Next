import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import MarineHome from "../../../components/MarineHome";
import MarineObjectEN from "../../../site-data/marine-en.json"
import Head from "next/head";

const MarineEN = () => {
    return (
        <>
            <Head>
                <title>MAYCO Marine</title>

                <meta name="description" content="The story of J/Boats is a classic entrepreneurial tale: With a $20,000 investment, and a speedy 24-foot sailboat that Rod Johnstone built in his garage, Rod & his brother Bob Johnstone went into business. That was 1977. Now, that boat (the J/24), has become the most popular recreational offshore keelboat in the world." />
                <meta name="keywords" content="boat, yacht, sail, sport, sailboat, marine, elegance" />
            </Head>
            <Header headerObject={MarineObjectEN.header} />
            <MarineHome homeObject={MarineObjectEN.home}/>
            <Footer footerObject={MarineObjectEN.footer} />
        </>
    );
}
 
export default MarineEN;