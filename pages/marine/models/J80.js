import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Image from "next/image";
import { useState } from "react";
import MarineObject from "../../../site-data/marine-tr.json"
import ReactPlayer from "react-player"
import MovingText from 'react-moving-text'
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";

const J80 = () => {

    const [videoDisplay, setVideoDisplay] = useState(false)

    const { deviceHeight, deviceWidth } = useWindowDimensions();

    return (
        <>  
            <Header headerObject={MarineObject.header}/>
            <main className="wrapper">
                <div className="model-image-top">
                    <Image src="/images/marinemodels/J80/J80-2.jpg" height={1500} width={3000} alt="..."/>
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
                                <i>J-80</i> SPOR YELKENİ
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
                            <div className="col-sm-2 d-flex justify-content-center align-items-center">
                                <div className="p-3">
                                    <Image src="/images/marinemodels/J80/J80-logo.jpeg" height={160} width={80} alt="..."/>
                                </div>
                            </div>
                            <div className="col-sm-10 d-flex justify-content-center align-items-center">
                                <article>
                                    <h1 style={{ fontSize: 23, marginBottom: 15}}>
                                    J 80 SPOR YELKENİ
                                    </h1>
                                    <h2 style={{ fontSize: 28, marginBottom: 15}}>
                                    GÜVENLİ BİR BAHİS İÇİN ADIM ATIN.                               </h2>
                                    <p>
                                    20 yıllık uzmanlığa sahip olan J 80, bariz seçimdir!
                                    Gücünü kontrol et, dengesinin tadını çıkar, içindeki yarışçıyı serbest bırak!
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J80/J80-7.jpeg" width={1200} height={600} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    GÜVENLE YELKEN AÇIN!
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Her koşulda güven veren sağlam bir teknedesiniz.
Denize doğru yola çıkın! Basit ve keyifli manevra kabiliyetinin keyfini çıkarın. Macera başlasın!
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J80/J80-5.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    ROTANIZI TUTUN                                   </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    J 80&apos;in çok yüksek yük oranı, etkileyici dengesiyle onu en güvenli spor tekne yapar.
                                    Dümende üstün esnekliğe sahip olan ve yüksek hız yapabilen bu araç, aynı zamanda rüzgar yönündeki koşullarda da oldukça eğlencelidir.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-column-reverse mb-2 py-4 border-bottom">
                            <div className="col-12 py-2 d-flex justify-content-center align-items-center">
                                <Image src="/images/marinemodels/J80/J80-3.jpeg" width={1200} height={650} alt="..." />
                            </div>
                            <div className="col-12 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    POTANSİYELİNİ GERÇEKLEŞTİRİN                                   </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Yelkenleri açın ve şimdiden potansiyelinizin %95&apos;inde performans gösteriyor olacaksınız.
                                    Hafif tasarımı, rüzgar koşullarında uçağa çok hızlı bir şekilde çıkabileceğiniz anlamına gelir.
                                    Rüzgarda 16/18 knot tekne hızına tamamen güvenli bir şekilde ulaşabilen, heyecan verici bir sürüş garantiniz var!
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J80/J80-4.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    YARIŞMAYA MÜKEMMEL BAŞLANGIÇ YAPIN!                                  </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Jib furler ve asimetrik balon teknesi, bu tek tasarımlı yatı hissetmeyi kolaylaştırıyor ve her tür parkurda yarış hakkında bilgi edinmenin tamamen eğlenceli bir yolunu sunuyor.                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J80/J80-6.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    STİL İLE YELKEN AÇ                                 </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    J 80&apos;in zamansız tasarımı, bu 8 metrelik tek gövdeli tekneyi gerçek bir stil ikonu haline getirmek amacıyla Rod Johnstone tarafından tasarlanmıştır. Markanın tüm ayırt edici unsurlarını bir araya getirerek, benzersiz bir tasarım ile çığır açan bir ruhun mükemmel karışımını ortaya çıkarıyor.                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J80/J80-8.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    DERS ALMAK MI İSTİYORSUNUZ ?                                   </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Dünya çapında dağıtılan yaklaşık 1.500 tekne ile bu tekne, oldukça aktif bir sahipler sınıfından yararlanıyor.
                                    Sportmenlik ve sosyallik bu sınıfın anahtar kelimeleridir..
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J80/J80-1.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    GÜCÜNÜ TEST ET                                   </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    1993 yılında üretilen ilk model, yeni bir modele karşı yarış kazanma şansına hâlâ sahip.
                                    Malzeme seçimi yıllar içinde kalite açısından azalmadı. O halde J 80&apos;in referans spor teknesi olmasına şaşmamalı.
                                    </p>
                                </article>
                            </div>
                        </div>
                    </section>
                    <section>
                        
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
                                url='https://www.youtube.com/watch?v=ewd9v2EHbQg&ab_channel=JComposites'
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
 
export default J80;