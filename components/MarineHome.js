import { Carousel } from 'react-responsive-carousel';
import GoogleMapReact from 'google-map-react';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css"

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MarineHome = ({ homeObject }) => {

    const defaultProps = {
        center: {
          lat: 41.036230,
          lng: 28.989316
        },
        zoom: 18
      };

    return (
        <>
            <section>
                <Carousel
                    autoPlay={true}
                    interval={5000}
                    infiniteLoop={true}
                    stopOnHover={false}
                    dynamicHeight={true}
                    showThumbs={false}
                    emulateTouch={true}
                    swipeable={true}
                    showStatus={false}
                    transitionTime={1000}
                    animationHandler={"fade"}
                >
                    <div>
                        <img src="/images/marinehome/J121-2.jpg" />
                    </div>
                    <div>
                        <img src="/images/marinehome/J45-1.jpg" />
                    </div>
                    <div>
                        <img src="/images/marinehome/J80.jpg" />
                    </div> 
                </Carousel>
            </section>

            <section class="marine-home-section p-md-4 my-md-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 p-md-4">
                            <article className="marine-about">
                                <h4>
                                    HAKKIMIZDA
                                </h4>
                                <p>
                                    J/Boats, Newport, Rhode Island merkezli ve 1977 yılında Rod Johnstone tarafından kurulmuş bir Amerikan tekne üreticisidir. Şirket, fiberglas yelkenli teknelerin tasarımı ve üretiminde uzmanlaşmıştır. Tüm J/Boat tasarımları, özlü sandviç fiberglastan yapılmış tek gövdeli, sloop donanımlı salma teknelerdir. Mevcut ürün hattı, J/70'den J/122E'ye, 22.75 ila 40 ft (6.9 ila 12,2 m) arasında değişen sekiz modelden oluşmaktadır.
                                    2022 yılında J Boats Türkiye Distribütörlüğünü alan yönetim kurulu başkanımız Emir İçgören, aynı zamanda profesyonel yelken sporcusudur. Çocukluğundan beri yelkenle içiçe olan İçgören, bunu profesyonel hayatına taşımak istemiş ve distribütörlüğün yanı sıra; haftalık tekne kiralama ve güverte kaplama uygulayıcılığını da şirketin iş tanımına eklemiştir.
                                </p>
                            </article>
                        </div>
                    </div>
                    <div className="row px-md-3">
                        <div className="col-sm-4 d-flex justify-content-center">
                            <div className="marine-sub-article">
                                <img className="img-responsive" src="/images/marinehome/about-1.jpeg" />
                                <h6>TASARIM</h6>
                                <p>
                                    Özünde, bir J teknesi, performansla bağlantılı spesifikasyonlar ve yelken açmanın ne kadar kolay olduğu ile ilgilidir. İkinci olarak, alanları elimizden geldiğince optimize ederek iç mekanı geliştiriyoruz. Bir yelkenli teknenin birincil varlığının, onu yelken açmaktan aldığınız zevk olduğuna inanmaya devam ediyoruz.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-4 d-flex justify-content-center">
                            <div className="marine-sub-article">
                                <img className="img-responsive" src="/images/marinehome/J121-3.jpg" />
                                <h6>STANDART EKİPMAN</h6>
                                <p>
                                    Standart versiyon, rakipsiz bir donanım standardı sunar. Geri çekilebilir bir karbon bowsprit üzerindeki standart spinnaker donanımı sadece böyle bir örnektir. Gövdenin bitişi ve eklentiler de bu pazarda benzersizdir.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-4 d-flex justify-content-center">
                            <div className="marine-sub-article">
                                <img className="img-responsive" src="/images/marinehome/about-2.jpeg" />
                                <h6>İNFÜZYON TEKNOLOJİSİ</h6>
                                <p>
                                    Sağlam ancak hafif bir tekne elde etmek için infüzyon tekniği en iyi yöntemdir! Fazla reçineyi önlemek için boşluk bırakılmaz. J'ler infüzyon açısından çığır açıcı olduğundan, başından beri ustalaştığımız bir tekniktir, bu da konuya olan ustalığımızın rakipsiz olduğu anlamına gelir.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div style={{ height: '50vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <AnyReactComponent
                        lat={41.036230}
                        lng={28.989316}
                        text="My Marker"
                        />
                    </GoogleMapReact>
                </div>
            </section>
        </>
    );
}
 
export default MarineHome;