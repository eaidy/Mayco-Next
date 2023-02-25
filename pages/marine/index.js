import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MarineHome from "../../components/MarineHome";
import MarineObject from "../../site-data/marine-tr.json"
import Head from "next/head";

const Marine = () => {
    return (
        <>
            <Head>
                <title>MAYCO Marine</title>

                <meta name="description" content="J/Boats'un hikayesi klasik bir girişimcilik hikayesidir: 20.000 $'lık bir yatırım ve Rod Johnstone'un garajında ​​inşa ettiği 24 metrelik hızlı bir yelkenli ile Rod ve kardeşi Bob Johnstone ticarete atıldı. Bu 1977'ydi. Şimdi, o tekne (J/24), dünyadaki en popüler eğlence amaçlı açık deniz omurga teknesi haline geldi." />
                <meta name="keywords" content="bot, yat, spor, yelkenli, yelken, elegant" />
            </Head>
            <Header headerObject={MarineObject.header}/>
            <MarineHome homeObject={MarineObject.home}/>
            <Footer footerObject={MarineObject.footer} />
        </>
    );
}
 
export default Marine;