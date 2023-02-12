import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import MarineObject from "../../../site-data/marine-tr.json"
import { useState } from "react";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import ReactPlayer from "react-player";
import MovingText from 'react-moving-text'
import Image from "next/image";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const images = () => {
    const images = []
    for(let i = 1; i < 10; i ++ ) {
        images.push({
            original: '/images/marinemodels/J9/J9-' + i + '.webp',
            thumbnail: '/images/marinemodels/J9/J9-' + i + '.webp'
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
            <Header headerObject={MarineObject.header}/>
            <main className="wrapper">
                <div className="model-image-top">
                    <Image onClick={() => setVideoDisplay(true)} src="/images/marinemodels/J9/J9-1.webp" height={1500} width={3000} alt="J-9 Elegance Yacht"/>
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
                                <i>J-9</i> ELEGANCE YAT
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
                                J/9 - Şimdiye Kadarki En Konforlu Kokpit!
                                </h2>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-sm-6">
                                <p>
                                Denizcilerin daha rahat, daha basit ve sahip olması kolay bir gündüz yelkenlisine yönelik artan ihtiyaca yanıt veren J/Boats, bu boyut aralığındaki belki de en rahat kokpite ve yönetimi en kolay yelken planına sahip şık yeni J-9 modelini duyurmaktan heyecan duyuyor. .                                </p>
                                <p>
                                J/Boats&apos;tan Jeff Johnstone, &quot;J/9 ile yelkenciliği nasıl daha kolay, daha rahat ve daha kapsayıcı hale getireceğimizi yeniden tasarlamak için yola çıktık&quot; dedi. &quot;Bu, sadece birkaç dakika içinde tek başına yelken açabileceğin ya da tüm çeteni bol bol yerle birlikte getirebileceğin bir tekne. Suya kaçmak ve ortak aile macerasının tadını çıkarmak hiç bu kadar önemli olmamıştı ve J/9 mükemmel bir platform.&quot;                               </p>
                                <p>
                                J/9 kokpitinde, içine girip günün tadını çıkarmak için dört harika köşe koltuğu vardır. Gemide arkadaşlarınız ve ailenizle herkes dinlenmek için mükemmel bir yer bulabilir. Ve gemiye erişim hiç bu kadar kolay olmamıştı. Kokpitin arkasındaki yüzme platformu, içinden geçerek binişe izin verir ve rüzgar yönündeki yelkenlerde, ayaklarınızı suda sürükleyerek serinleyebilirsiniz.                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p>
                                J/9 ile yelken açmak, ana yelkeni kaldırmak ve yelkeni düzeltmek kadar kolaydır. Neden daha karmaşık hale getirelim? Suya bakın ve yelkenli teknelerin %80&apos;inin tek yelkenle gittiğini fark edeceksiniz. Cevap, basit tutun! Bir yeke, bir çarşaf. J/9&apos;un en büyük farkı, tek yelkenle diğer birçok çift yelkenli veya motora göre daha rahat ve daha hızlı yelken açacak olmanızdır. Art yakıcılar için hazır mısınız? Sadece jib&apos;i açın ve şimdiye kadarki en iyi J/Boats kokpitinin konforunda zahmetsiz, dengeli ve pürüzsüz yelkenin tadını çıkarın.                                </p>
                                <p>
                                Günlük yelken topluluğu, J&apos;lerin en çok aranan modellerinden biri olmaya devam eden ödüllü J/100&apos;den (33&apos;) bu yana J/Boats&apos;un özel bir tasarımından faydalanamadı. YENİ J/9, daha büyük bir teknenin kokpit konforunu ve seyir özelliklerini, çoğu kişinin en iyi komisyonculuk tekliflerine göre rekabetçi bulacağı bir fiyata sunar.                                </p>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-12">
                                <h2 className="text-center py-3">
                                J/9 - Teknik Özellikler
                                </h2>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center my-5">
                            <div className="col-10">
                                <Image src="/images/marinemodels/J9/J9-schema.webp" height={359} width={1154} alt="J-9 Schema"/>
                                <Image src="/images/marinemodels/J9/J9-schema-2.webp" height={359} width={1154} alt="J-9 Schema"/>
                                <Image src="/images/marinemodels/J9/J9-specs.png" height={550} width={1100} alt="J-9 Technical Specifications"/>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-12">
                                <h2 className="text-center py-3">
                                J/9 Önemli Özellikler
                                </h2>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center my-5">
                            <div className="col-10">
                                <ul>
                                    {
                                        MarineObject.models.J9.specs.map((spec, index) => (
                                            <li
                                                key={index}
                                            >
                                                <p>
                                                    { spec }
                                                </p>
                                            </li>
                                        ))
                                    }
                                </ul>
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