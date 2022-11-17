import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Image from "next/image";
import { useState } from "react";
import MarineObject from "../../../site-data/marine-tr.json"
import ReactPlayer from "react-player"
import MovingText from 'react-moving-text'
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";

const J45 = () => {

    const [videoDisplay, setVideoDisplay] = useState(false)

    const { deviceHeight, deviceWidth } = useWindowDimensions();
    const [navs, setNavs] = useState(MarineObject.models.J99.equipment.navs)

    return (
        <>
            <Header headerObject={MarineObject.header}/>
            <main className="wrapper">
                <div className="model-image-top">
                    <Image onClick={() => setVideoDisplay(true)} src="/images/marinemodels/J99/J99-1.jpg" height={800} width={1600} alt="..."/>
                    <div className="model-video-button-div">
                        <button 
                            className="model-video-button"
                            onClick={() => setVideoDisplay(!videoDisplay)}
                        >
                            MEDYAYI SEYRET
                        </button>
                    </div>
                    <div className="model-top-text">
                        <MovingText
                            type="fadeInFromTop"
                            duration="2400ms"
                            delay="0s"
                            direction="normal"
                            timing="ease"
                            iteration="1"
                            fillMode="none"
                        >
                            <h1>
                                <i>J-99</i> SPOR YELKENLİ
                            </h1>
                        </MovingText>
                        <MovingText
                            type="fadeInFromBottom"
                            duration="2400ms"
                            delay="0s"
                            direction="normal"
                            timing="ease"
                            iteration="1"
                            fillMode="none"
                        >
                            <p>
                                Lorem Ipdsum dolor sat
                            </p>
                        </MovingText>
                    </div>
                </div>
                <div className="content-model">
                    {/* <div className="container-fluid model-top">
                        <div className="row">
                            <div className="col-12">
                                <ReactPlayer 
                                    light={false} 
                                    url="https://www.youtube.com/watch?v=1SpbIhH34XM&ab_channel=JComposites"
                                    width="100%"
                                    height={260}
                                />
                            </div>
                        </div>
                    </div> */}
                    <div className="container model-under">
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-sm-2 d-flex justify-content-center">
                                <div className="p-3">
                                    <Image src="/images/marinemodels/J99/J99-logo.jpeg" height={160} width={80} alt="..."/>
                                </div>
                            </div>
                            <div className="col-sm-10 d-flex align-items-center">
                                <article>
                                    <h1 style={{ fontSize: 23, marginBottom: 15}}>
                                    J 99 SPOR YELKENLİ
                                    </h1>
                                    <h2 style={{ fontSize: 28, marginBottom: 15}}>
                                    DENİZDEKİ İSTEKLERİNİZİ SERBEST BIRAKIN.
                                    </h2>
                                    <p>
                                    Yeni J/99, Sport serisini tamamlıyor ve birçok talebi karşılamayı amaçlıyor. Hem erişilebilir hem de yüksek performanslı olması amaçlanan bir yarışçı olan J/99, duyularınızı harekete geçirecek ve çok cazip fiyatı kesinlikle sizi cezbedecek!                                   </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J99/J99-2.jpeg" width={1200} height={600} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    HERKES İÇİN ERİŞİLEBİLİR BİR AÇIK DENİZ SPEEDSTER!
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    J/99 arzularınızı yerine getirmek için mükemmel bir tekne olacak. Kısa süreli, kıyı veya açık deniz yarış programı için tasarlanmış bir yarışçının iç mekanını aileyle hafta sonları için aynı derecede keyifli hale getiren zarif bir spor kaplama bulacaksınız.                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J99/J99-3.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    PERFORMANS AÇISINDAN RAKİPSİZ BİR DENEYİM                                   </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    J/99, J/&apos;nin denizaşırı deneyim zenginliğine dayanan derinlemesine bir çalışmanın meyvesidir. Büyük açık deniz yarış pistinde (Orta Deniz Yarışı / Fastnet Yarışı / Mackinac Yarışı / Armen Yarışı) önemli zaferler ve podyumlar elde eden mimarı, mevcut gövdelerin bilinen güçlü yanlarına güvenirken, özellikle gelişmiş form stabilitesi ile birlikte daha da fazla çok yönlülük sunar. minimum ıslak yüzey.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-column-reverse mb-2 py-4 border-bottom">
                            <div className="col-12 py-2 d-flex justify-content-center">
                                <Image src="/images/marinemodels/J99/J99-4.jpeg" width={1200} height={650} alt="..." />
                            </div>
                            <div className="col-12 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    ZARİF MEKANLI SPOR YATI                                   </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    J/99, mükemmel bir şekilde uyarlanmış boşluk payı ile açık deniz geçişi için rahat bir yerleşim planına sahiptir. Ferah iç mekanı, her koşulda dinlenmenizi sağlayan iki ayrı ve simetrik kıç kabinden oluşur. Ayrıca ön baş bölmesi, L şeklindeki mutfağı ve öne bakan harita masası onu son derece işlevsel kılıyor ve sudaki konforunuzu artırıyor.                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J99/J99-5.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    BİR YAT, BİRÇOK PROGRAM                                   </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    J/99&apos;daki güverte düzeni, kısaltılmış konfigürasyonda manevraları kolaylaştırmak için optimize edilmiştir. Tüm ana kontrollere dümen istasyonundan erişilebilir. Çeşitli konfigürasyonlar mevcuttur: tek veya çift dümen / bombeli veya düz kanatlı salma / simetrik veya asimetrik versiyon. Hafif yer değiştirmesi, önemli sertlik ve rafine yönlendirme ile birleştiğinde, tam bir güvenle yelken açmanızı sağlayacaktır.                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J99/J99-6.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    KUSURSUZ ÖDÜN İÇİN YÜKSEK KALİTE                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Denge, yeni bir model geliştirmenin anahtarıdır. Yapı kalitesi, her şeyin düşünüldüğü şekilde kendini gösterir. Eşsiz yapısal sertliğe bağlı aşılanmış kompozitlerinin hafifliği, artan stabiliteye ve dolayısıyla performansa izin verirken, müşterilerin beklediği konfor ve bitiş seviyesini sağlar.                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J99/J99-7.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    VERİMLİLİK ETRAFINDA TASARLANMIŞTIR                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    İhtiyaçlarınıza uyum sağlayabilen yüksek performanslı bir yat sunmak için J/99&apos;a büyük bir emek harcandı. Bu şekilde, teknenizi buna göre optimize etmenizi sağlayacak geniş bir ekipman yelpazesine sahip olacaksınız. Ayrıca donanım, profilin sertliğine katkıda bulunan karışık bir paleti entegre eden özel bir alüminyum profil içeren en son teknolojik gelişmeleri yansıtıyor. Çıkarılabilir sabit bowsprit, daha fazla performans ve pratiklik için tasarlanmıştır.                                    </p>
                                </article>
                            </div>
                        </div>
                    </div>
                    <section className="tabs">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                <h2 className="text-center fs-3 my-4 py-3 border-bottom">EKİPMAN</h2>
                                    <ul className="nav nav-tabs my-3 py-2 d-flex justify-content-center flex-md-row flex-column border-0">
                                        {
                                            navs.map((nav, indexTab) => (
                                                <li key={indexTab} className="mx-md-4 d-flex justify-content-center equipment-nav">
                                                    <a
                                                        onClick={() => {
                                                            setNavs((prev) => {
                                                                const buffer = prev
                                                                buffer.map((navb, indexb) => {
                                                                    if(indexb === indexTab) {
                                                                        navb.isActive = true
                                                                    } else {
                                                                        navb.isActive = false
                                                                    }
                                                                })
                                                                console.log(buffer)
                                                                return [
                                                                    ...buffer
                                                                ]
                                                            })
                                                        }}
                                                        style={nav.isActive ? { color: "#5F9DF7" } : {}}
                                                    >
                                                    {
                                                        nav.label
                                                    }
                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center mx-0 my-4">
                            {   
                                navs.filter((navActive) => navActive.isActive)[0].panels ?
                                navs.filter((navActive) => navActive.isActive)[0].panels.map((panel, indexPanel) => (
                                    
                                        <article key={indexPanel} className="col-md-3 justify-content-center text-center equipment-panel">
                                            <figure className="d-flex equipment-image">
                                                <Image src={panel.img} height={380} width={440} alt="..." />
                                            </figure>
                                            <h4 className="text-center">
                                                { panel.header }
                                            </h4>
                                            <p>
                                                { panel.text }
                                            </p>
                                        </article>
                                )) : navs.filter((navActive) => navActive.isActive)[0].pics.map((pic, indexPic) => (
                                    <div key={indexPic} className="col-md-5 d-flex justify-content-center flex-row">
                                        <Image src={pic} height={350} width={350} alt="..." />
                                    </div>
                                ))
                            }
                        </div>
                    </section>
                </div>
                {
                videoDisplay && (
                    <div onClick={() => setVideoDisplay(false)} className="lightbox-video">
                        <button 
                            className="lightbox-close-button"
                            onClick={() => setVideoDisplay(false)}
                        >
                            Çıkış
                        </button>
                        <div className="lightbox-youtube">
                            <ReactPlayer 
                                url='https://www.youtube.com/watch?v=LVnT3kpa2og&ab_channel=JComposites'
                                controls={true}
                                width={16*(deviceWidth/20)}
                                height={9*(deviceWidth/20)}
                            />
                        </div>
                    </div>
                )
            }
            </main>
            <Footer footerObject={MarineObject.footer}/>
        </>
    );
}
 
export default J45;