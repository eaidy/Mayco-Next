import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Head from "next/head";
import TextileHome from "../../components/TextileHome";
import TextileObject from "../../site-data/textile-tr.json"

const Textile = () => {


    return (
        <>
            <Head>
                <title>MAYCO Tekstil</title>

                <meta name="description" content="Mayco Tekstil 1984 yılında Bülent İçgören tarafından İstanbul’da kurulmuştur. Şuan ise ikinci kuşak temsilcisi olan Emir İçgören’in yönetim kurulu başkanlığında hizmet vermeye devam etmektedir. Ev Tekstili ve dokuma ürünlerinde 35 yıllık tecrübe barındıran Mayco Tekstil, Perde, Döşemelik kumaş ve havlu gruplarında uzmanlaşmıştır." />
                <meta name="keywords" content="Tekstil, Textile, Drapery, Curtain, Perde, Döşemelik, Kumaş, tekstil, textile, drapery, curtain perde, döşemelik, kumaş" />
            </Head>
            <Header headerObject={TextileObject.header} />
            <TextileHome homeObject={TextileObject.home}/>
            <Footer footerObject={TextileObject.footer} />
        </>
    );
}
 
export default Textile;