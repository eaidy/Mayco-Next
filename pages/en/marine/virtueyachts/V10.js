import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import MarineObject from "../../../../site-data/marine-en.json"
import ReactPlayer from "react-player"
import MovingText from 'react-moving-text'
import { useWindowDimensions } from "../../../../hooks/useWindowDimensions";
import "react-image-gallery/styles/css/image-gallery.css";
import Head from "next/head";

const V10 = () => {

    const [videoDisplay, setVideoDisplay] = useState(false)

    const { deviceHeight, deviceWidth } = useWindowDimensions();

    return (
        <>  
            <Head>
                <title>The Virtue V10</title>

                <meta name="description" content="Treat yourself to a genuine icon of one design sailing! The J 70 is the perfect combination of an accessible design and unquestionable performance. It’s THE most widely distributed yacht in the world and for good reason." />
                <meta name="keywords" content="j-70, J-70, J70, j70, boat, sport, marine, sailboat" />
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
                            WATCH THE MEDIA
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
                                <h3 className="text-center py-3"><i>V10 Top</i></h3>
                                
                                <p className="text-left">
                                The smoothest and most sustainable adventure boat on the market. With a fixed roof for permanent protection from the elements, this beauty boats many features for active relaxation and fun in the water, while using every trick in the boat building book to be more efficient and ecological.
                                </p>
                                <Image src="/images/marinemodels/V10/V10-top.jpeg" width={442} height={250} alt="" />
                            </div>
                            <div className="col-lg-6 text-center p-4">
                                <h3 className="text-center py-3"><i>V10 Open</i></h3>
                                
                                <p className="text-left">
                                As beautiful as the V10 Top with all the same options, but the freedom to let your spirits reach the sky. The super-efficient hull with the possibility of fully electric propulsion for the most visionary buyer takes eco-friendly boating to another level.
                                </p>
                                <Image src="/images/marinemodels/V10/V10-open.jpeg" width={442} height={250} alt="" />
                            </div>
                        </div>
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-lg-8 py-3">
                                <Image src="/images/marinemodels/V10/1.jpeg" width={1200} height={600} alt="" />
                            </div>
                            <div className="col-lg-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    A low-emission yacht for visionaries.
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    The V10 is a high-tech, low-carbon yacht for eco-conscious consumers who expect the most contemporary products on the market and also care about tomorrow’s planet. Combining its highly spirited character with luxury standard equipment and quality, the V10 is inspired by Scandinavian style, boasts highly efficient Swedish Petestep hull technology, and powers through waves using Norwegian electric EVOY outboards (as one of the engine options).
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
                                    Concept and Highlights
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    The V10 fits comfortably in a 10×3 meter marina mooring box, a very common European marina size that often costs substantially less than above 10m length Lighter-optioned models can be towed and slipped with a 3.5to boat trailer. The V10 is your center for active fun and relaxation on the water.                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-column-reverse mb-2 py-4 border-bottom">
                            <div className="col-12 py-2 d-flex justify-content-center align-items-center">
                                <Image src="/images/marinemodels/V10/3.jpeg" width={1200} height={650} alt="" />
                            </div>
                            <div className="col-12 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    Functionality
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    The V10 features is a modern open-bow center console design. The deck allows up to 8 people to relax or be active in ultimate comfort. The bow features a double sunbed with cupholders, while aft, there is a flexible seating area on top of spaciously designed storage lockers. The area can be configured as either benches individually facing forward or backwards with the table in the middle raised, or as a comfortable sunbed with the table lowered.

The upholstered exterior elements serve as both armrests and drink holders. Between the helm and the back seating area, covered from the elements by the fixed top, is a galley generously equipped with a refrigerator, electric or gas grill, sink and food preparation board. In the bow is a full cabin that comes standard equipped with a fairly wide double bed, a wardrobe, lockers, and a bathroom with toilet and shower.

Available as an option is a 12V DC air conditioner (so it can be used without external charging or a power generator, while at rest without the engines running). The V10’s electrical system is supported by standard solar panels on its roof, charging whether moored or in use.                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4 border-bottom">
                            <div className="col-lg-8 py-3">
                                <Image src="/images/marinemodels/V10/4.jpeg" width={1200} height={700} alt="" />
                            </div>
                            <div className="col-lg-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    Powerful Propulsion
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    The V10 is powered by gasoline outboard engines – a single 300 HP in the standard version or a twin 250 HP setup in the V10R version. Additionally, the V10 BSO features twin Mercury 150 HP BSO II-certified engines for Lake Constance ).

The V10 Next is powered by electric outboard engines from the Norwegian company EVOY – forerunners in high-powered electric engine design. It can be equipped with single or dual engines up to 150 horsepower each with an option to add either one or two batteries. The EVOY’s range is up to 70 kilometers (cruising at 25 knots) for one engine with one battery
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
                                    SIMPLIFY YOUR LIFE
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    A bow thruster comes as additional equipment on V10. In twin-engine versions, it can be replaced by the optional Optimus 360 Joystick Control System. With the Optimus 360’s classic joystick design, maneuvering in port becomes simple and intuitive. Both cockpit seats are made even more comfortable by the V10’s premium ergonomic seat design, equipped with race-inspired suspension and a seating/standing conversion.
                                    </p>
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
                                    Steering
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    The V10 is not just an ambitious and agile yacht – it is your new and comfortable tool for active leisure. Quality and versatility are the elements you need when out on the water. This is why we offer a wide array of accessories beyond our standard options: windlass, easily handled canopies for much-needed shade, a water skiing pole, and even an Radinn jetboard crane.

Thinking about the soundtrack for your escape? The V10 has an option to install a an even more capable premium sound system designed specifically for its dimensions.
                                    </p>
                                </article>
                            </div>
                        </div>
                    </section>
                    <section className="d-flex align-items-center justify-content-center text-center flex-column mt-5 v10-tech">
                        <h2 className="p-3">V10 Technical Specifications</h2>
                        <div className="text-center w-50">
                            <div>
                                <div className="border-bottom py-3">
                                    <h5>TWIN ENGINE V10</h5>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Total length without engine</span>
                                        <span className="pe-4">LOA</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">9.89 m</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Total length with engine</span>
                                        <span className="pe-4">LE</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">9.95 m</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Total width</span>
                                        <span className="pe-4">Bmax</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">2.90 m</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Hull immersion</span>
                                        <span className="pe-4">T</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">0.41 m</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Immersion with dual engine</span>
                                        <span className="pe-4">Te</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">0.74 m</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Buoyancy</span>
                                        <span className="pe-4">D</span>
                                        <span className="pe-4">Light load conditions</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">3025 kg</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Max engine power</span>
                                        <span className="pe-4">P</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">600 hp</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center w-50 mt-5">
                            <div>
                                <div className="border-bottom py-3">
                                    <h5>SINGLE MOTOR V10</h5>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Total length without engine</span>
                                        <span className="pe-4">LOA</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">9.89 m</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Total length with engine</span>
                                        <span className="pe-4">LE</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">9.95 m</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Total width</span>
                                        <span className="pe-4">Bmax</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">2.90 m</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Hull immersion</span>
                                        <span className="pe-4">T</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">0.43 m</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Immersion with dual engine</span>
                                        <span className="pe-4">Te</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">0.84 m</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Buoyancy</span>
                                        <span className="pe-4">D</span>
                                        <span className="pe-4">Light load conditions</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">3025 kg</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Max engine power</span>
                                        <span className="pe-4">P</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">600 hp</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center w-50 mt-5 border border-2 border-success p-4">
                            <div>
                                <div className="border-bottom py-3">
                                    <h5>ELECTRIC DRIVE</h5>
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
                        <div className="text-center w-50 mt-5">
                            <div>
                                <div className="border-bottom py-3">
                                    <h5>ALL MODELS</h5>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Fuel tank</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">420 l</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Fresh water tank</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">100 l</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Black water tank</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">60 l</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Gray water tank</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">40 l</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Crew max</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">8</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Construction</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">GRP</span>
                                    </div>
                                </div>
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