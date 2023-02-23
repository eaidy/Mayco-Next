import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import MarineObject from "../../../site-data/marine-tr.json"
import { useState } from "react";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import ReactPlayer from "react-player";
import MovingText from 'react-moving-text'
import Image from "next/image";
import ImageGallery from 'react-image-gallery';
import Head from "next/head";
import "react-image-gallery/styles/css/image-gallery.css";

const images = () => {
    const images = []
    for(let i = 2; i < 19; i ++ ) {
        images.push({
            original: '/images/marinemodels/J110/J110-' + i + '.webp',
            thumbnail: '/images/marinemodels/J110/J110-' + i + '.webp'
        })
    }
    return images
}

const J110 = () => {

    const [videoDisplay, setVideoDisplay] = useState(false)

    const { deviceHeight, deviceWidth } = useWindowDimensions();
    const [J9Images, ] = useState(images)

    return (
        <>
            <Head>
                <title>J-110</title>
            </Head>
            <Header headerObject={MarineObject.header}/>
            <main className="wrapper">
                <div className="model-image-top">
                    <Image onClick={() => setVideoDisplay(true)} src="/images/marinemodels/J110/J110-1.webp" height={1500} width={3000} alt="J-110 Sport Sailboat"/>
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
                                <i>J-110</i> ELEGANCE YAT
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
                    <div className="container model-under p-3 border-bottom">
                        <div className="row my-3">
                            <div className="col-12">
                                <h2 className="text-center py-3">
                                Son Derece Konforlu, Çift Elle Kullanılabilen Performans Gezi Teknesi
                                </h2>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-sm-6">
                                <article>
                                    <h4>
                                    Üstün Seyir Performansı
                                    </h4>
                                    <p>
                                    <br />
                                    VMG, yelkenli performansının en iyi ölçüsüdür; Hız İyileştirildi, kontra veya savurma açılarından bağımsız olarak, doğrudan rüzgara doğru veya rüzgardan uzağa doğru. 6,6 knot hızla, gerçek rüzgardan 41 derece saparak (27 derece görünür rüzgar açısı) seyreden bir J/110, doğrudan rüzgara doğru 5,0 knot&apos;luk iyi bir hız (VMG) sağlar. Bu, Aldens, Hinckleys, Sabres veya Little Harbors gibi daha büyük 42-46 fitlik yatların ulaştığı hızdır. <br /> <br />
                                    J/110&apos;un performansı, düşük dikey ağırlık merkezinin (VCG), dar su hattının, su çekiminin ve daha yüksek yelken alanı/yer değiştirme oranının bir fonksiyonudur. Tasarımdaki ağırlığın düşürülmesine önemli bir katkı, TPI&apos;nin patentli SCRIMP reçine infüzyon sürecinden elde edilen %65-70 cam içeriğine sahip yüksek teknolojili Baltek laminat yapısıdır. Ve sahipler, isteğe bağlı bir Hall Spars karbon fiber direk ile VCG&apos;yi düşürmek için bir adım daha ileri gidebilirler. 100 pound. Yüksek tasarruf, rüzgar yönüne doğru yelken açarken ray üzerinde yürüyen iki 180 lb. mürettebata sahip olmaya eşdeğerdir. J/Sprit ve asimetrik hava balonları ile J/110&apos;da 8+ düğüme ulaşmak neredeyse günlük bir olay haline gelir.
                                    </p>
                                </article>
                                <article>
                                    <h4>
                                    Güvertede Konfor
                                    </h4>
                                    <p>
                                    <br />
                                    &quot;J/110&apos;un kokpiti seyir için idealdir, çünkü bir kişi ana yelken, cenova ve arka payanda ayarlayıcısı elinizin altındayken teknede seyredebilir. Ve dümenci cankurtaran halatlarına rahatça yaslanabilir, dümeni ön yelkeni görürken yönlendirmek için tutabilir. &quot; <br /><br />
                                     Dodger, yolcu yolunu ve kokpitin ön koltuklarını tamamen kaplar. Dodger yan perdeleri ve bir otomatik pilot uzaktan kumandası ile burası, &quot;iç&quot; bir pilot istasyonu veya giyinmek zorunda kalmadan bir fincan kahve içmek için kaptana katılmak üzere güverteye çıkmak için harika bir konumdur.
                                    </p>
                                </article>
                            </div>
                            <div className="col-sm-6">
                                <article>
                                    <p>
                                    İki kişi, 5,5 fitlik geri çekilebilir karbon fiber J/Sprit üzerinde asimetrik balonu güvenle uçurabilir. Balon balon konuşlandırıldığında kimsenin güverteye çıkması gerekmez. Kokpitten çalıştırılan bir enfiye çorabında bulunur. Jibing, eski çarşafı bırakıp yenisini çekmek kadar kolaydır. <br /> <br />
                                    Rüzgar yönünde seyreden balon, ana yelkenin rüzgar gölgesinin arkasından rüzgar yönüne doğru çıkıntı yaparak görünen rüzgarı gerçek rüzgar yönünün 45 derece ilerisine kadar sürer.
                                    </p>
                                </article>
                                <article>
                                    <h4>
                                    Klasik Bir Yatın Yaşanabilir İç Mekanı
                                    </h4>
                                    <p>
                                        <br />
                                    Bir deniz yolunda açık denizlere çıktığınızda veya gemide birkaç gün geçirdiğinizde, J/110&apos;un iç tasarımını beğeneceksiniz. Hafif ve açık. İzlenim temiz ve işlevseldir. Göz, klasik bir kano gibi, gövdenin şeklini aşağıdan görebilir. Yine de, aşağıdan dışarıya bakıldığında, manzara, büyük limanlardan güverte üzerindedir. Güverte altına hiç inilmemiş gibi. <br /> <br />
                                    Ferahlık hissi, J/110&apos;un klasik Amerikan seyir yat dekoru tarafından yaratılmıştır: Soğuk kalıplanmış tik ağacından güzelce işlenmiş &quot;Antika beyaz&quot; paneller. <br /> <br />
                                    Sahibinin kamarası, insanların deniz yolculuklarında daha fazla zaman geçirdikleri 1920&apos;lere kadar uzanan geleneksel bir favori olan ön tepede yer almaktadır. Ana bölmenin önünde daha az hareket ve daha az gürültü olduğunu öğrendiler. Gece geç saatlerde hikaye anlatıcıları, yan yana rafting yapılan tekneye binen gürültülü ekip veya sabah erken saatlerde esrar çalan kişiler uykunuzu bölmez. Sağlam bir tik ve paslanmaz çelik ana kabin açılır kanatlı masası, daha iyi erişim için ve denizde kabin içinde hareket ederken bir destek olarak bölmeden uzağa ve kanepelerin arasına yerleştirilmiştir.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-12">
                                <h2 className="text-center py-3">
                                J/110 - Teknik Özellikler
                                </h2>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center my-5">
                            <div className="col-10 d-flex align-items-center">
                                <Image src="/images/marinemodels/J110/J110-schema.webp" height={375} width={665} alt=""/>
                                <Image src="/images/marinemodels/J110/J110-specs.png" height={600} width={250} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="container model-under">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="text-center my-3 py-2">
                                GALERİ
                                </h2>
                                <ImageGallery items={J9Images}/>
                            </div>
                        </div>
                    </div>
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
                                url='https://www.youtube.com/watch?v=qe6gijPDQZs&ab_channel=CharlotteKinkade'
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
 
export default J110;