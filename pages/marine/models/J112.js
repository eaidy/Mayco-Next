import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Image from "next/image";
import { useState } from "react";
import MarineObject from "../../../site-data/marine-tr.json"
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import ReactPlayer from "react-player"
import Head from "next/head";
import MovingText from 'react-moving-text'
import { AiOutlinePlayCircle } from "react-icons/ai"

const J112 = () => {

    const [videoDisplay, setVideoDisplay] = useState(false)

    const { deviceHeight, deviceWidth } = useWindowDimensions();

    return (
        <>
            <Head>
                <title>J-112</title>
            </Head>
            <Header headerObject={MarineObject.header}/>
            <main className="wrapper">
                <div className="model-image-top">
                    <Image onClick={() => setVideoDisplay(true)} src="/images/marinemodels/J112/J112-1.jpg" height={1500} width={3000} alt="J-112 Elegance Yacht"/>
                    <div className="model-video-button-div">
                        <button 
                            className="model-video-button"
                            onClick={() => setVideoDisplay(!videoDisplay)}
                        >
                            MEDYAYI SEYRET
                        </button>
                    </div>
                    <div className="model-3d-link-div">
                            <AiOutlinePlayCircle color="#fff" className="play-icon"/>
                            <a className="model-3d-link" href="https://my.matterport.com/show/?m=nWXcdAWGXBH" target="_blank">
                                3D Tur
                            </a>
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
                                <i>J-112</i> ELEGANCE YAT
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
                            <div className="col-sm-2 d-flex justify-content-center">
                                <div className="p-3">
                                    <Image src="/images/marinemodels/J112/J112-logo.jpeg" height={160} width={80} alt=""/>
                                </div>
                            </div>
                            <div className="col-sm-10 d-flex align-items-center">
                                <article>
                                    <h1 style={{ fontSize: 23, marginBottom: 15}}>
                                    J 112 ELEGANCE YAT
                                    </h1>
                                    <h2 style={{ fontSize: 28, marginBottom: 15}}>
                                    İLERİ GİDİN VE OKYANUSU FETHEDİN                                </h2>
                                    <p>
                                    J 112 Elegance, performans ve iç mekan konforu arasında mümkün olan en iyi dengeyi bulmaya yönelik iki yıllık düşünce ve değerlendirmenin meyvesidir. Onu nasıl kullanırsanız kullanın, başka hiçbir yat size böyle bir çekicilik sunamaz.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J112/J112-2.jpeg" width={1200} height={600} alt="" />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    İÇİNİZDEKİ DENİZCİYİ UYANDIRIN
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Bu teknenin denizdeki nitelikleri rakipsizdir.
                                    V şeklindeki yayı, yön dengesini artırarak dalgaların arasından kayma yeteneğini geliştirir.
                                    Ön fribord ve küpeşte, güverte boyunca spreyi sınırlamaya yardımcı olur.
                                    Alçak bir ağırlık merkeziyle ilişkilendirilen uzun su hattı, tekneye 40 fitlik bir tekneye benzer şekilde daha yumuşak, daha denize elverişli bir hareket sağlıyor.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J112/J112-3.jpeg" width={1200} height={700} alt="" />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    KONFORLU GÜNEŞLENİN                                   </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Evdeki esenlik duygusunu yeniden yaratmak için tasarlanan J 112 Elegance, ihtiyacınız olan tüm konfora sahip olmanızı sağlamak için her ayrıntıyı kapsar. Cilalı ceviz doğrama, inanılmaz alan hissinden uzaklaşmadan temel bir klasik dokunuş katıyor.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-column-reverse mb-2 py-4 border-bottom">
                            <div className="col-12 py-2 d-flex justify-content-center">
                                <Image src="/images/marinemodels/J112/J112-4.jpeg" width={1200} height={650} alt="" />
                            </div>
                            <div className="col-12 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    İÇ CÜZYESİNE HAYRAN KALIN                                </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Teknenin iç estetiği, ona özellikle lüks bir his veren kaliteli ahşap seçimi sayesinde düzenli bir atmosfer ortaya koyuyor.
                                    Roséo Design firması, açık su işlevselliği ile estetik tasarımın mükemmel karışımını yarattı.
                                    Geniş güverte kapakları ve gökyüzüne ve denize açılan gövde lumbozları ile aydınlık bir iç mekana sahiptir. Doğal ışık, ayırt edici iç aydınlatma ile zarif bir şekilde karışır.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J112/J112-5.jpeg" width={1200} height={700} alt="" />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    DENİZE GÜVENLE MEYDAN OKUYUN                                </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Güvertede daha fazla güvenlik için J 112 Elegance, uzun, paslanmaz çelik korkuluklara, tüm uzunluğu boyunca tam bir sipere ve topuk açısı ne olursa olsun iyi bir tutuşa sahip olmanızı sağlamak için güçlü bir kaymaz güverte kaplamasına sahiptir.
                                    Kokpit, opsiyonel olarak sunulan çıkarılabilir bir platform ile kapatılabilir.
                                    Can salı yakınlarda, özel, erişimi kolay bir kokpit dolabında bulunur.                                  </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J112/J112-6.jpeg" width={1200} height={700} alt="" />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    KENDİNİ EVİNDE GİBİ HİSSET!                               </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Teknenin optimize edilmiş L şeklindeki mutfağı mükemmel bir şekilde ayarlanmıştır, bu nedenle kullanımı sezgiseldir.
                                    Eşya koyma yeri hem pratik hem de erişilebilir.
                                    Her unsur denizde kullanım için güvenlidir.

                                    İki geniş özel kabini ve ergonomik ve konforlu kokpiti ile bu yat, kısa süreli konfigürasyonda bile zorlu koşullarda uzun mesafeli yolculuklar kadar deniz gezileri için de uygundur.
                                    Hızını ne kadar kolay yakalayabildiğiyle sizi şaşırtacak!
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-column-reverse mb-2 py-4 border-bottom">
                            <div className="col-12 py-3">
                                <Image src="/images/marinemodels/J112/J112-7.jpeg" width={1200} height={700} alt="" />
                            </div>
                            <div className="col-12 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    ÇİFT ELLİ MÜTEVAZI MANEVRA                                  </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Güverte donanımının J 112 Elegance üzerindeki konumu dikkatli bir şekilde incelenmiş ve manevrayı olabildiğince kolay hale getirmek için seçilmiştir.
Onu kontrol etmek için gereken tek şey çift elli bir konfigürasyondur ve harcanan çaba, bir çocuğun bile onunla yelken açabileceği anlamına gelir!
Vinçlerin boyutu ve konumu her manevrayı güvenli hale getirir ve güverte donanımının kalitesi zahmetsizce yelken trimine olanak tanır.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4 border-bottom ">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J112/J112-8.jpeg" width={1200} height={700} alt="" />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    EKOLOJİK ŞEKİLDE YELKEN AÇIN                             </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Yelken, kesinlikle azami özgürlükle dolaşmanın en keyifli ve ekolojik yoludur. Js&apos;nin performansı sürdürme konusundaki benzersiz yeteneği, motor kullanımınızı en az %15 azaltarak daha az kirletici emisyona neden olur.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J112/J112-9.jpeg" width={1200} height={700} alt="" />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    PERFORMANSI ORTAYA ÇIKARIN                                   </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Performans, seyir sırasında konforun birincil garantisidir.
                                    Bu yat, mümkün olan en iyi konfor ve yaşam alanı dengesi ile yüksek kaliteli navigasyon için tasarlanmıştır.
                                    Çocuklarla mola verdiğinizde tam varış zamanını planlayabildiğiniz için memnun kalacaksınız.
                                    Ayrıca, daha sonra yola çıkmanıza rağmen yelken arkadaşlarınıza yetişebilmenin keyfine varacaksınız!
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4 border-bottom ">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J112/J112-10.jpeg" width={1200} height={700} alt="" />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    MÜKEMMELLİĞİ DENEYİMLEYİN                                  </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Yatınız bir J!
                                    Onu sınıfının en iyisi yapan şey, infüzyon yapım teknolojisidir. Bu tamamen benzersiz geliştirme, rakipsiz bir mükemmellik standardı sağlar.
                                    Yalnızca bir J, yüksek performanslı bir yat olarak ününü pekiştiren rakipsiz hafif tasarımını korurken, piyasadaki en sağlam ve rijit yapının dinginliğini sunabilir.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J112/J112-11.jpeg" width={1200} height={700} alt="" />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    STANDART YATINIZ SEYAHATA HAZIR                                </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Piyasadaki diğer modellerin çoğunun aksine J/, kapsamlı, denize açılmaya hazır bir tekne sunmayı tercih ediyor.
Standart yat ekipmanı, geri çekilebilir bir karbon bowsprit üzerinde balon donanımı ve yüksek kaliteli ayakta ve çalışır durumda arma içerir.
Profillerin bitişi ve ayarı rakipsizdir ve herhangi bir eklenti gerektirmeden mümkün olan en iyi kaymayı sağlar.
                                    </p>
                                </article>
                            </div>
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
                                url='https://www.youtube.com/watch?v=BrC9Bcd7jyE&ab_channel=JComposites'
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
 
export default J112;