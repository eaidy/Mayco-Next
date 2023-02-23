import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Image from "next/image";
import { useState } from "react";
import MarineObject from "../../../site-data/marine-tr.json"
import ReactPlayer from "react-player"
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import MovingText from 'react-moving-text'
import Head from "next/head";

const J121 = () => {

    const [videoDisplay, setVideoDisplay] = useState(false)

    const { deviceHeight, deviceWidth } = useWindowDimensions();

    return (
        <>
            <Head>
                <title>J-121</title>
            </Head>
            <Header headerObject={MarineObject.header}/>
            <main className="wrapper">
                <div className="model-image-top">
                    <Image onClick={() => setVideoDisplay(true)} src="/images/marinemodels/J121/J121-1.jpg" height={1500} width={3000} alt="J-121 Sport Sailboat"/>
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
                                <i>J-121</i> SPOR YELKENİ
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
                    <div className="container model-under">
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-sm-2 d-flex justify-content-center">
                                <div className="p-3">
                                    <Image src="/images/marinemodels/J121/J121-logo.jpeg" height={160} width={80} alt=""/>
                                </div>
                            </div>
                            <div className="col-sm-10 d-flex align-items-center">
                                <article>
                                    <h1 style={{ fontSize: 23, marginBottom: 15}}>
                                    J 121 SPOR YELKENİ
                                    </h1>
                                    <h2 style={{ fontSize: 28, marginBottom: 15}}>
                                    KISALTILMIŞ YOLCULUK İÇİN TASARLANMIŞ 40 FOOTER.
                                    </h2>
                                    <p>
                                    Yeni J 121, 5 veya daha az mürettebatla uzun mesafelerde yelken açmak için optimize edilmiştir. Gemideki mürettebat sayısını sınırlayarak yarış sezonunuzun organizasyonunu basitleştirmeye yönelik artan ihtiyacı karşılar.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J121/J121-2.jpeg" width={1200} height={600} alt="" />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    YOLCULUĞUNUZU BASİTLEŞTİRİN!                                   </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    J 121, kısa konfigürasyonda keyif ve performans sunan bir tekne arayanlar için cevaptır. Kokpitten kolayca kontrol edilebilen ve 8 ila 10 kişilik usta ekiplere karşı rekabet edebilen safra tanklarına sahiptir!                                  </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J121/J121-3.jpeg" width={1200} height={700} alt="" />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    AÇIK, FERAH İÇ MEKANDAN EN FAZLA FAYDALANIN                                   </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Teknenin içi sade, aydınlık ve gerçek bir ferahlık hissi sunuyor.
L şeklindeki mutfakta bir fırın ve bir soğutma ünitesi bulunur ve ihtiyacınız olan tüm konforla açık denizlere çıkmanıza olanak tanır.
Ana bölmenin ilerisinde, yelkenlerinizi yerleştirmek için alan bulacaksınız, bu balon balonunuzu çekmek veya boşaltmak için pratiktir!
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-column-reverse mb-2 py-4 border-bottom">
                            <div className="col-12 py-2 d-flex justify-content-center">
                                <Image src="/images/marinemodels/J121/J121-4.jpeg" width={1200} height={650} alt="" />
                            </div>
                            <div className="col-12 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    ERGONOMİK KOKPİTİNDEN FAYDALANIN                                  </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Manevra yapmak için geniş bir alana ve dış etkenlerden iyi korumaya sahip olan J 121, kesinlikle açık denizde yelkencilik için tasarlanmıştır! Dümenci, ana sayfaya çok kolay bir şekilde erişebilir.                                  </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J121/J121-5.jpeg" width={1200} height={700} alt="" />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    HASSASİYET&apos;E HAYRAN OLUN                                  </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Böyle bir performansı elde etmek için, teknenin yapımında detaylara büyük özen gösterilmiştir.
Bazı hassas takımlar, işlenmiş parçaların gerçekleştirilmesi açısından en yüksek düzeyde uzmanlaşmış Amerikan firmalarından biri olan Symmetrix tarafından geliştirilmiştir. Gerçekten de, hacimsel tolerans 0,1 mm&apos;nin altındadır.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J121/J121-6.jpeg" width={1200} height={700} alt="" />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    YELKENLERİ KOLAY KULLANIN                                   </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    40-footer&apos;ı minimum mürettebatla idare etmek, yelken planının basitleştirilmesini gerektirir. Bu nedenle yat, özellikle zorlu hava koşullarında manevraları kolaylaştırmak için tasarlanmış donanıma sahiptir.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-column-reverse mb-2 py-4 border-bottom">
                            <div className="col-12 py-3">
                                <Image src="/images/marinemodels/J121/J121-7.jpeg" width={1200} height={700} alt="" />
                            </div>
                            <div className="col-12 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    MACERA ÂLEMLERİNE GİRİN!                                  </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Rolex Fastnet Race veya Rolex Middle Sea Race, ünlü offshore yarışlarına kaydolun ve bir tekneyi tam potansiyeliyle zahmetsizce kullanın!
J 121, gücü ve hızlanabilme yeteneği ve kontrolü çok kolay olmasıyla sizi şaşırtacak.
                                    </p>
                                </article>
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
                                url='https://www.youtube.com/watch?v=ob_lG7jGPLA&ab_channel=UKSailmakersIreland'
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
 
export default J121;