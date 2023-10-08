import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import MarineObject from "../../../site-data/marine-tr.json"
import ReactPlayer from "react-player"
import MovingText from 'react-moving-text'
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Head from "next/head";

const images = () => {
    const images = []
    for(let i = 1; i < 7; i ++ ) {
        images.push({
            original: '/images/marinemodels/V10/gallery/' + i + '.jpg',
            thumbnail: '/images/marinemodels/V10/gallery/' + i + '.jpg'
        })
    }
    return images
}

const V10 = () => {

    const [videoDisplay, setVideoDisplay] = useState(false)
    const [V10Images, ] = useState(images)

    const { deviceHeight, deviceWidth } = useWindowDimensions();

    return (
        <>  
            <Head>
                <title>The Virtue V10</title>

                <meta name="description" content="Treat yourself to a genuine icon of one design sailing! The J 70 is the perfect combination of an accessible design and unquestionable performance. It’s THE most widely distributed yacht in the world and for good reason." />
                <meta name="keywords" content="V10, v-10, v10, boat, sport, marine, sailboat" />
            </Head>
            <Header headerObject={MarineObject.header}/>
            <main className="wrapper">
                <div className="model-image-top">
                    <Image src="/images/marinemodels/V10/bg.jpeg" height={1500} width={3000} alt="J-70 Sport Sailboat"/>
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
                                <i>The Virtue V10</i>
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
                            <div className="col-lg-6 p-4 text-center border-end">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <h3 className="text-center py-3"><i>V10 Top</i></h3>
                                        
                                            <p style={{textAlign: "justify"}}>
                                            Piyasadaki sert havalarda dalgayı en az hissedceğiniz yumuşak ve en sürdürülebilir macera teknesidir. Güneş ve yağmurdan korunabileceğiniz bir hardtop’a sahip olan bu güzellik, suda aktif dinlenme ve eğlence için pek çok özelliği bünyesinde barındırırken, daha verimli ve ekolojik olmak için elinden geleni yapıyor.
                                            </p>
                                        </div>
                                        
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <Image src="/images/marinemodels/V10/V10-top.jpeg" width={442} height={250} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 text-center p-4">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <h3 className="text-center py-3"><i>V10 Open</i></h3>
                                    
                                            <p style={{textAlign: "justify"}}>
                                            V10 Top kadar güzel, aynı seçeneklere sahip, ancak ruhunuzu gökyüzüne ulaştırma özgürlüğüne sahip. En ileri görüşlü alıcılar için tamamen elektrikli motor imkanı sunan süper verimli gövde, çevre dostu tekneciliği başka bir seviyeye taşıyor.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <Image src="/images/marinemodels/V10/V10-open.jpeg" width={442} height={250} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-lg-8 py-3">
                                <Image src="/images/marinemodels/V10/1.jpeg" width={1200} height={600} alt="" />
                            </div>
                            <div className="col-lg-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    Vizyonerler için düşük emisyonlu bir yat
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    V10, piyasadaki en çağdaş ürünleri barındıran ve aynı zamanda çevreye duyarlı tüketicilere yönelik yüksek teknolojili, düşük karbonlu bir sürat teknesidir. Son derece canlı karakterini lüks standart donanım ve kaliteyle birleştiren V10, İskandinav tarzından ilham alıyor, yüksek verimli İsveç Petestep gövde teknolojisine sahip ve Norveç elektrikli EVOY dıştan takmalı motorlarını (motor seçeneklerinden biri olarak) kullanarak dalgalar boyunca güç sağlıyor.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4 border-bottom">
                            <div className="col-lg-8 py-3">
                                <Image src="/images/marinemodels/V10/2.jpeg" width={1200} height={700} alt="" />
                            </div>
                            <div className="col-lg-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    Konsept ve Öne Çıkanlar
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Virtue V10 modeli, 10 metre boya x 3 metre ene sahiptir. Marinalarda çok uygun rakamlara konaklayabileceğiniz gibi, kendi römorkunuzla 3.500 kilogram ağırlığındaki teknenizi istediğiniz yere çekebilirsiniz.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4 border-bottom">
                            <div className="col-5 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    İşlevsellik
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    V10'un özellikleri modern bir açık yaylı orta konsol tasarımıdır. Güverte, 8 kişiye kadar maksimum konforla dinlenmenize veya aktif olmanıza olanak tanır. Pruvada bardak tutuculu çift kişilik bir şezlong bulunurken, kıç tarafta geniş tasarımlı saklama dolaplarının üzerinde esnek bir oturma alanı bulunmaktadır. Alan, ortadaki masa yükseltilmiş olarak ayrı ayrı öne veya arkaya bakan banklar veya masa indirilmiş olarak rahat bir şezlong olarak yapılandırılabilir.

Döşemeli dış elemanlar hem kolçak hem de içecek tutucusu görevi görüyor. Dümen ile arka oturma alanı arasında, sabit üst kısım tarafından dış etkenlerden korunan, buzdolabı, elektrikli veya gazlı ızgara, lavabo ve yemek hazırlama masasıyla cömertçe donatılmış bir mutfak bulunmaktadır. Pruvada standart olarak oldukça geniş bir çift kişilik yatak, bir gardırop, kilitli dolaplar ve tuvalet ve duşlu bir banyo ile donatılmış tam bir kabin bulunmaktadır.
                                    </p>
                                </article>
                            </div>
                            <div className="col-7 py-2 d-flex justify-content-center align-items-center">
                                <Image src="/images/marinemodels/V10/3.jpg" width={650*1.6} height={650} alt="" />
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4 border-bottom">
                            <div className="col-lg-8 py-3">
                                <Image src="/images/marinemodels/V10/4.jpeg" width={1200} height={700} alt="" />
                            </div>
                            <div className="col-lg-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    Güçlü İtici Kuvvet
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    V10, gücünü benzinli dıştan takma motorlardan alıyor; standart versiyonda tekli 300 HP veya V10R versiyonunda çift 300 HP'lik Yamaha motorları sunabiliyor.  Çift motorlu seçenekte ıslanmadan 50 knot sürat yapabilen Virtue V10 aynı zamanda Yüksek güçlü elektrik motoru tasarımında öncü olan Norveçli şirket EVOY'un elektrikli dıştan takmalı motorlarıyla çalışabiliyor. Her biri 150 beygir gücüne kadar tek veya çift motorla donatılabiliyor ve bir veya iki akü ekleme seçeneği de mevcut. EVOY'un menzili, tek akü ile tek motorla 70 kilometreye kadardır (25 deniz mili hızda seyir)
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4">
                            <div className="col-lg-8 py-3">
                                <Image src="/images/marinemodels/V10/5.jpg" width={1200} height={700} alt="" />
                            </div>
                            <div className="col-lg-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    Hayatını Kolaylaştır
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Baş pervane, V10'da ek donanım olarak gelir. Çift motorlu versiyonlarda opsiyonel Optimus 360 Joystick Kontrol Sistemi ile değiştirilebilir. Optimus 360'ın klasik kumanda kolu tasarımıyla iskelede manevra yapmak basit ve sezgisel hale gelir. Her iki kokpit koltuğu da V10'un yarıştan ilham alan süspansiyon ve oturma/ayakta durma dönüşümüyle donatılmış birinci sınıf ergonomik koltuk tasarımıyla daha da konforlu hale getirildi.                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4 border-bottom">
                            <div className="col-lg-8 py-3">
                                <Image src="/images/marinemodels/V10/6.jpg" width={1200} height={700} alt="" />
                            </div>
                            <div className="col-lg-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    Dümen Kontrolü
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    V10 yalnızca iddialı ve çevik bir yat değildir; aktif eğlence için yeni ve konforlu aracınızdır. Kalite ve çok yönlülük, suya çıktığınızda ihtiyacınız olan unsurlardır. Bu nedenle standart seçeneklerimizin ötesinde geniş bir aksesuar yelpazesi sunuyoruz: ırgat, çok ihtiyaç duyulan gölge için kolayca taşınan kanopiler, su kayağı direği ve hatta bir Radinn jetboard vinci.

Kaçışınızın müziğini mi düşünüyorsunuz? V10'un, boyutlarına göre özel olarak tasarlanmış çok daha yetenekli, birinci sınıf bir ses sistemi kurma seçeneği vardır.
                                    </p>
                                </article>
                            </div>
                        </div>
                    </section>
                    <section className="d-flex align-items-center justify-content-center text-center flex-column mt-5 v10-tech">
                        <h2 className="p-3">V10 Teknik Özellikler</h2>
                        <div className="text-start w-md-50">
                            <div>
                                <div className="border-bottom py-3">
                                    <h5 className="text-center">ÇİFT MOTORLU V10</h5>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Motor hariç toplam uzunluk</span>
                                        <span className="pe-4">LOA</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">9.89 m</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Motorla birlikte toplam uzunluk</span>
                                        <span className="pe-4">LE</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">9.95 m</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Toplam genişlik</span>
                                        <span className="pe-4">Bmax</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">2.90 m</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Gövde dalımı</span>
                                        <span className="pe-4">T</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">0.41 m</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Çift motorla dalım</span>
                                        <span className="pe-4">Te</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">0.74 m</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Batmazlık</span>
                                        <span className="pe-4">D</span>
                                        <span className="pe-4">Hafif yük koşullarında</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">3025 kg</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Maksimum motor gücü</span>
                                        <span className="pe-4">P</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">600 hp</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-start w-md-50 mt-5">
                            <div>
                                <div className="border-bottom py-3">
                                    <h5 className="text-center">TEK MOTORLU V10</h5>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Motor hariç toplam uzunluk</span>
                                        <span className="pe-4">LOA</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">9.89 m</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Motorla birlikte toplam uzunluk</span>
                                        <span className="pe-4">LE</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">9.95 m</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Toplam genişlik</span>
                                        <span className="pe-4">Bmax</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">2.90 m</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Gövde dalımı</span>
                                        <span className="pe-4">T</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">0.43 m</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Çift motorla dalım</span>
                                        <span className="pe-4">Te</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">0.84 m</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Batmazlık</span>
                                        <span className="pe-4">D</span>
                                        <span className="pe-4">Hafif yük koşulları</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">3025 kg</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Maksimum motor gücü</span>
                                        <span className="pe-4">P</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">600 hp</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-start w-md-50 mt-5 border border-2 border-success p-4">
                            <div>
                                <div className="border-bottom py-3">
                                    <h5 className="text-center">ELECTRIC DRIVE</h5>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">EVOY Breeze 120+ HP</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">peak power 185 HP</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between py-4">
                                    <div>
                                        <span className="pe-4">2 × liquid-cooled IP67 batteries</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">3000 cycles with 70% DOD 63 kWh</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-start w-md-50 mt-5">
                            <div>
                                <div className="border-bottom py-3">
                                    <h5 className="text-center">BÜTÜN MODELLER İÇİN</h5>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Yakıt Tankı</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">420 l</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Temiz su tankı</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">100 l</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Atık su tankı</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">60 l</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Gri su tankı</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">40 l</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Maksimum mürettebat</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">8</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Yapı</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">GRP</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="p-3">
                        <h2 className="text-center my-3">
                            Galeri
                        </h2>
                        <ImageGallery items={V10Images}/>
                    </section>
                </div>
                {
                videoDisplay && (
                    <div onClick={() => setVideoDisplay(false)} className="lightbox-video">
                        <button 
                            className="lightbox-close-button"
                            onClick={() => setVideoDisplay(false)}
                        >
                            Close
                        </button>
                        <div className="lightbox-youtube">
                            <ReactPlayer 
                                url='https://www.youtube.com/watch?v=o8SrCqqA70w&ab_channel=VIRTUEYACHTS'
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
 
export default V10;