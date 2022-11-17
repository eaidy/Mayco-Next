import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import MarineObject from "../../../site-data/marine-tr.json"
import ReactPlayer from "react-player"
import MovingText from 'react-moving-text'
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const images = () => {
    const images = []
    for(let i = 1; i < 30; i ++ ) {
        images.push({
            original: '/images/marinemodels/J70/gallery/' + i + '.jpg',
            thumbnail: '/images/marinemodels/J70/gallery/' + i + '.jpg'
        })
    }
    return images
}

const J70 = () => {

    const [videoDisplay, setVideoDisplay] = useState(false)

    const { deviceHeight, deviceWidth } = useWindowDimensions();
    const [navs, setNavs] = useState(MarineObject.models.J70.equipment.navs)
    const [J70Images, ] = useState(images)

    return (
        <>  
            <Header headerObject={MarineObject.header}/>
            <main className="wrapper">
                <div className="model-image-top">
                    <Image src="/images/marinemodels/J70/J70-1.jpg" height={800} width={1600} alt="..."/>
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
                                <i>J-70</i> SPOR YELKENİ
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
                    <section className="container model-under">
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-lg-2 d-flex justify-content-center align-items-center">
                                <div className="p-3">
                                    <Image src="/images/marinemodels/J70/J70-logo.jpeg" height={160} width={80} alt="..."/>
                                </div>
                            </div>
                            <div className="col-lg-10 d-flex justify-content-center align-items-center">
                                <article>
                                    <h1 style={{ fontSize: 23, marginBottom: 15}}>
                                    J 70 YELKEN
                                    </h1>
                                    <h2 style={{ fontSize: 28, marginBottom: 15}}>
                                    ZEVKTEN ADRENALİNE GEÇİN.
                                    </h2>
                                    <p>
                                    Kendinizi bir tasarım yelkenin gerçek bir ikonu ile şımartın! J 70, erişilebilir bir tasarım ile tartışılmaz performansın mükemmel birleşimidir. Dünyadaki en yaygın yat ve bunun iyi bir nedeni var. Videoda her şey ortaya çıkıyor!                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-lg-8 py-3">
                                <Image src="/images/marinemodels/J70/J70-2.jpeg" width={1200} height={600} alt="..." />
                            </div>
                            <div className="col-lg-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    YELKENLERİ AÇIN VE KEYFİNİ ÇIKARIN
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Bu eğlence teknesiyle, onu nasıl kullanmak istediğinizi seçiyorsunuz: sportif, basınçsız bir aile kaçamağı mı yoksa eşit şartlarda bir yarış mı? Hafif tasarımı, kaymanın zevklerini hızla yaşayabileceğiniz anlamına gelir ve kapsamlı yelken planı, bu çok satan kitabı tamamen güvenli ve erişilebilir hale getirir.                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4 border-bottom">
                            <div className="col-lg-8 py-3">
                                <Image src="/images/marinemodels/J70/J70-3.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-lg-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    ULUSLARARASI SINIFINA KATIL
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Bugün J 70, küresel ölçekte referans bir tasarım olarak kabul ediliyor! Her uluslararası etkinlikte rekor bir varlık! Kesin ve özdeş bir yapım sürecindeki ustalık ve uluslararası bir organizasyon, her mal sahibi için eşit koşulları garanti eder.                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-column-reverse mb-2 py-4 border-bottom">
                            <div className="col-12 py-2 d-flex justify-content-center align-items-center">
                                <Image src="/images/marinemodels/J70/J70-4.jpeg" width={1200} height={650} alt="..." />
                            </div>
                            <div className="col-12 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    EĞLENCEYE ALIŞIN
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Balon teknede 20 deniz mili yapabilen, hem basit hem teknik, eğlenceli bir tekne olan bu yat, sosyal ve birleşik ulusal sınıflar tarafından destekleniyor. Yapısı, rüzgar yönü meraklılarına adanmışken, boyutu, canınız ne zaman isterse kolayca denize açılabileceğiniz anlamına gelir.                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4 border-bottom">
                            <div className="col-lg-8 py-3">
                                <Image src="/images/marinemodels/J70/J70-5.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-lg-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    SON TEKNOLOJİ EKİPMANLARDAN FAYDALANIN
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Bu yatın güçlü yanları, esas olarak, onu hafif ve sağlam, uzun ömürlü kılan bir karbon kulesi ve sınıfının en iyisi inşaat teknolojisine sahip en yeni nesil ekipmanına dayanmaktadır.
                                    </p>
                                    </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4">
                            <div className="col-lg-8 py-3">
                                <Image src="/images/marinemodels/J70/J70-6.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-lg-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    HAYATINI BASİTLEŞTİR
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Hava güzelken, neden en iyi şekilde yararlanmak için bekleyesiniz? 7 m boyunda küçük bir spor tekne olan J 70, tüy kadar hafiftir, taşıması kolaydır ve fırlatması ve teçhizatı basittir. Omurgası geri çekilebilir, yani römorktaki yüksekliği azaltabilirsiniz.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4 border-bottom">
                            <div className="col-lg-8 py-3">
                                <Image src="/images/marinemodels/J70/J70-7.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-lg-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    KUSURSUZ BİR SPOR ORGANİZASYONUNUN PARÇASI OLUN
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Küçük üretim toleransları, herkes için sportif eşitliğin garantisidir. Sahip sınıfları ağı, her ülkede bölgesel ve uluslararası kapsamda etkinlikler sunar.                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4">
                            <div className="col-lg-8 py-3">
                                <Image src="/images/marinemodels/J70/J70-8.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-lg-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    AKSAMAYAN GÜVENİLİRLİK TALEP EDİN
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Yoğun bir şekilde kullanıldığında bile, J 70'in yapı kalitesi rakipsiz direnci ve sağlamlığı garanti eder, bu da yüksek yeniden satış değeri anlamına gelir. Gerçek bir "yarışçı" kültürü, sürekli ayrıntılara gösterilen özen, son derece seçici malzemeler ve sıkı üretim kontrolü sayesinde bu tekne, kullanım açısından mükemmelliğin sınırında.                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4">
                            <div className="col-lg-8 py-3">
                                <Image src="/images/marinemodels/J70/J70-9.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-lg-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    ERGONOMİK KABİNİNDEN EN FAZLA FAYDALANIN
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Küçük kabini ile kötü hava koşullarından korunursunuz. Aynı zamanda, tekne ve ekip için tüm ekipmanın içeride kolayca istiflenebileceği ve taşınabileceği anlamına gelir. Ön güverte kapağı onu daha parlak hale getirir ve iç hacmin etkili bir şekilde havalandırılmasını sağlar. Dıştan takma motor, seyir halindeyken tamamen aşağıda istiflenebilir.                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4">
                            <div className="col-lg-8 py-3">
                                <Image src="/images/marinemodels/J70/J70-10.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-lg-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    YARIŞA KATILIN
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    J 70'in özellikleri onu herkes için erişilebilir kılar. Genç ve kadın ekipler için mükemmel şekilde uygundur. Yürüyüşle ilgili katı kurallar, yoğun eğitime katılmayanların yine de daha deneyimli ekiplere karşı kolayca rekabet edebileceği anlamına gelir.                                    </p>
                                </article>
                            </div>
                        </div>
                    </section>
                    <section className="tabs border-bottom">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                <h2 className="text-center fs-3 my-4 py-3 border-bottom">EQUIPMENT</h2>
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
                                            <h4>
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
                    <section className="p-3">
                        <h2 className="text-center my-3">
                            GALERİ
                        </h2>
                        <ImageGallery items={J70Images}/>
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
                                url='https://www.youtube.com/watch?v=kHGQTZbNPeU&t=76s&ab_channel=JComposites'
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
 
export default J70;