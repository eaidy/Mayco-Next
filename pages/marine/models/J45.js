import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Image from "next/image";
import { useState } from "react";
import MarineObject from "../../../site-data/marine-tr.json"
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import ReactPlayer from "react-player"
import MovingText from 'react-moving-text'

const J45 = () => {

    const [videoDisplay, setVideoDisplay] = useState(false)


    const { deviceHeight, deviceWidth } = useWindowDimensions();
    const [navs, setNavs] = useState(MarineObject.models.J45.equipment.navs)

    return (
        <>
            <Header headerObject={MarineObject.header}/>
            <main className="wrapper">
                <div className="model-image-top">
                    <Image onClick={() => setVideoDisplay(true)} src="/images/marinemodels/J45/J45-0.jpg" height={1500} width={3000} alt="..."/>
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
                                <i>J-45</i> ELEGANCE YAT
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
                                    <Image src={MarineObject.models.J45.logo} height={160} width={80} alt="..."/>
                                </div>
                            </div>
                            <div className="col-sm-10 d-flex align-items-center">
                                <article>
                                    <h1 style={{ fontSize: 23, marginBottom: 15}}>
                                        YENİ J 45
                                    </h1>
                                    <h2 style={{ fontSize: 28, marginBottom: 15}}>
                                    SEYİRDE YENİ STANDARTLARIN ÖNÜ AÇILIYOR
                                    </h2>
                                    <p>
                                    Tüm yelken planlarınızı değiştirebilecek heyecan verici 45&apos; açık deniz yelkenli yat. Önde gelen gövde tasarımı, daha önce hiçbir J&apos;nin olmadığı şekilde seyir konforu ve performansında çıtayı yükseltmek için zarif iç tasarımla buluşuyor.                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src={MarineObject.models.J45.article1.img} width={1200} height={600} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                        EŞSİZ TASARIM
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    J Boats&apos;ın Amerikan pragmatizmi ile J Composites&apos;in Fransız yeteneği arasındaki ilişki iyi belgelenmiştir, ancak bir şekilde tam anlamını J/45&apos;te almıştır. Mümkün olan en iyi denge için sürekli arayış içinde her ayrıntıyı birlikte düşünerek 3 yılı aşkın ortak çalışma gerektirdi.
                                    Kılavuz ilke, zarif silueti, minimum ıslak yüzey alanını ve kategorisinin açık ara en düşük ağırlık tahminini korurken iç hacmi ve konforu en üst düzeye çıkarmayı içeriyordu.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src={MarineObject.models.J45.article2.img} width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    UZMAN BİR İÇ TASARIM İLE İÇ MEKANIN BİRLEŞTİRİLMESİ
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    J/ teknelerinin denizdeki iç tutarlılığı ve ergonomisi mutlak bir veridir. J/45 için amaç, bu konuda sınırları zorlamaktı.
                                    Bunu yapmak için, iç tasarım için Isabelle Racoupeau ile birlikte çalıştık. J/45&apos;te konforu ve zarafeti en üst düzeye çıkarmak için seyir yatları alanındaki engin deneyimini taşımayı başardı.
                                    Sonuç, doğal ışığın yelken yaparken hem konfor hem de işlevsellik sağlayan kararlı bir şekilde modern bir tasarımı vurguladığı, benzersiz bir iç mekandır.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-column-reverse mb-2 py-4 border-bottom">
                            <div className="col-12 py-2 d-flex justify-content-center">
                                <Image src={MarineObject.models.J45.article3.img} width={1200} height={650} alt="..." />
                            </div>
                            <div className="col-12 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    PERFORMANS, SEYİR KONFORUNUN GARANTİSİ
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Yepyeni bir standart oluşturmak ancak net ve kesin bir vizyonla mümkündür. Bu, markanın performans DNA&apos;sını renklendiren şeydir ve J/45&apos;e başka hiçbir teknede bulamayacağınız ciddi bir konfor enjeksiyonu sağlar.
                                    Bu performans avantajı, mürettebatın yorulmadan ve stressiz bir şekilde tüm avantajlardan yararlanmasını sağlarken, milleri tam bir güvenlik içinde kat etme becerisinde ifadesini bulur.
                                    Önünüzde açılan yeni daha uzak ufuklarla, olasılıklar yelpazesini genişletme yeteneğinden kesinlikle zevk alacaksınız.
                                    Ayrıca, motoru çalıştırmaya gerek kalmadan ailenizle mola varış zamanlarınızı planlayabilmenin keyfine varacaksınız.
                                    Aynı şekilde, dubadan daha sonra ayrılmanıza rağmen yelken arkadaşlarınızla tekrar bir araya gelmeyi takdir ettiğinizden emin olabilirsiniz.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src={MarineObject.models.J45.article4.img} width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    ÖZELLEŞTİRİLEBİLİR DÜZEN VE KAPLAMA
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    J/45, 2 kabinli / 2 büyük baş bölmeli ve yelkenli dolaplı bir versiyon veya ikiz yataklı kabin seçeneğine sahip 3 kabinli bir varyant olmak üzere çeşitli yerleşim seçeneklerine sahiptir.
                                    İç kaplama, üç ahşap, meşe, ceviz veya tik seçeneğiyle sunulur. Çok geniş bir üst düzey döşeme yelpazesi sayesinde J/45&apos;te daha fazla kişiselleştirme de mümkün olacak.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4">
                            <div className="col-sm-8 py-3">
                                <Image src={MarineObject.models.J45.article5.img} width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    ÖNCÜ YAPI TEKNOLOJİSİ
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Bugün J Composites, sandviç ve infüzyon yapımı konusunda dünyanın en deneyimli tersanesidir. Gerçekten de, bu teknoloji 1993&apos;ten beri tüm Fransız yapımı J/ teknelerinde kullanılmaktadır.
                                    Sonuç olarak J/45, hafif ama sağlam nitelikleri rakipsiz bir mükemmellik düzeyiyle dengeleyerek piyasadaki mümkün olan en iyi ağırlık oranlarından yararlanacaktır.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src={MarineObject.models.J45.article6.img} width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                        YAPILACAKLAR LİSTENİZİ GENİŞLETİN
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Hayalini kurduğunuz destansı bir gemi yolculuğu veya yelken açmak için her şeyinizi vereceğiniz özel bir yarış etkinliği var mı?
                                    J/45, dünyanın hemen hemen her yerine kendi üzerinde yelkenle açılabilir. Kasım ayında ARC Seyir Rallisinde Karayipler&apos;e Kanarya Adaları&apos;ndan yelken açtığınızı hayal edin.
                                    J/45, açık deniz yelkenciliğine ayrılmış çok sayıda donanımla birlikte gelir. Bu, onu yelken açmak, kullanmak veya bakımını yapmak için profesyonel bir ekip gerektirmeyen, yatırım sınıfı bir yat yapar.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4 border-bottom ">
                            <div className="col-sm-8 py-3">
                                <Image src={MarineObject.models.J45.article7.img} width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    MANEVRALAMA KEYİFLİ HALE GETİRİLDİ
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Bize göre, manevra yapmak, hızı optimize etmek için yelkenlerinizi kendiniz ayarlamak, gerçek seyir zevklerinden biri olmaya devam ediyor.
                                    Bu, standart olarak gelen benzersiz bir ekipman düzeyinde ve hassas, güvenli ve zahmetsiz manevra sağlamak için cömert oranlara sahip üst düzey güverte donanımıyla ifade edilir.
                                    Güverte etrafındaki herhangi bir hareket, çok sayıda tırabzan ve kaymaz yüzeyin eşsiz kalitesi sayesinde tam bir güvenlik içinde yapılır.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4">
                            <div className="col-12 d-flex justify-content-center">
                                <div className="table-container text-center p-4">
                                    <h3>
                                        { MarineObject.models.J45.table.header }
                                    </h3>
                                    <br />
                                    <table className="table table-hover table-bordered">
                                        <thead className="align-middle">
                                            <tr className="table-row table-header table-primary">
                                                <th scope="col">
                                                    { MarineObject.models.J45.table.thisHeader }
                                                </th>
                                                <th scope="col">
                                                    { MarineObject.models.J45.table.othersHeader }
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                MarineObject.models.J45.table.rows.map((spec, index) => (
                                                    <tr key={index} className="table-row">
                                                        <td>
                                                            { spec.this }
                                                        </td>
                                                        <td>
                                                            { spec.others }
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="tabs">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <h2 className="text-center fs-3 my-4 py-3 border-bottom">
                                        EKİPMAN
                                    </h2>
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
                                url='https://www.youtube.com/watch?v=1SpbIhH34XM&ab_channel=JComposites'
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