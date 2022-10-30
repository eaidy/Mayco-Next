import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Image from "next/image";
import { useState } from "react";
import MarineBoatModel from "../../../../components/MarineBoatModel";
import MarineObject from "../../../../site-data/marine-en.json"
import ReactPlayer from "react-player"

const J45 = () => {

    const [videoDisplay, setVideoDisplay] = useState(false)

    return (
        <>
            <Header headerObject={MarineObject.header}/>
            <main className="wrapper bg-light">
                <div className="model-image-top">
                    <Image onClick={() => setVideoDisplay(true)} src="/images/marinemodels/J112/J112-1.jpeg" height={800} width={1600} alt="..."/>
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
                                    <Image src="/images/marinemodels/J112/J112-logo.jpeg" height={160} width={80} alt="..."/>
                                </div>
                            </div>
                            <div className="col-sm-10 d-flex align-items-center">
                                <article>
                                    <h1 style={{ fontSize: 23, marginBottom: 15}}>
                                    J 112 ELEGANCE YACHT
                                    </h1>
                                    <h2 style={{ fontSize: 28, marginBottom: 15}}>
                                    GO FORTH AND CONQUER THE OCEAN.                                   </h2>
                                    <p>
                                    The J 112 Elegance is the fruit of two years of thought and consideration with a view to finding the best possible balance between performance and interior comfort. No other yacht will offer you such charm, however you use her. Book your J 112e test.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J112/J112-2.jpeg" width={1200} height={600} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    AWAKEN THE SAILOR IN YOU
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    The qualities of this boat at sea are second to none.
                                    Her V-shaped bow provides increased directional stability, enhancing her ability to slip through the waves.
                                    The forward freeboard and the gunwale help to limit the spray across the deck.
                                    Her long waterline, associated with a low centre of gravity, give the boat a gentler, more seaworthy motion, akin to that of a 40-footer.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J112/J112-3.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    BASK IN COMFORT                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Designed to recreate the sense of well-being of home, the J 112 Elegance has every detail covered to ensure you have all the comfort you need. The varnished walnut joinery adds an essential classic touch without detracting from the incredible sensation of space.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-column-reverse mb-2 py-4 border-bottom">
                            <div className="col-12 py-2 d-flex justify-content-center">
                                <Image src="/images/marinemodels/J112/J112-4.jpeg" width={1200} height={650} alt="..." />
                            </div>
                            <div className="col-12 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    FALL FOR HER INTERIOR CHARM                                 </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    The boat’s interior aesthetics reveal an uncluttered atmosphere thanks to a fine selection of wood that gives it a particularly luxurious feel.
The Roséo Design firm has created the perfect blend of open water functionality and aesthetic design.
She boasts a bright interior with her large deck hatches and hull portholes opening onto the sky and the sea. The natural light subtly blends with the distinctive interior lighting.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J112/J112-5.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    BRAVE THE SEA WITH CONFIDENCE                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    For increased safety on deck, the J 112 Elegance boasts long, stainless steel handrails, a full bulwark along her entire length associated with a powerful non-skid deck covering to ensure you have good grip whatever the angle of heel.
                                    The cockpit can be closed off by a removable platform offered as an option.
                                    The life raft is located nearby, in a dedicated, easy-to-access cockpit locker.                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J112/J112-6.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    MAKE YOURSELF AT HOME!                                </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    The boat’s optimised L-shaped galley is perfectly set up so it is intuitive to use.
                                    Her stowage is both practical and accessible.
                                    Every element is secure for use at sea.

                                    With her two spacious private cabins and her ergonomic and comfortable cockpit, this yacht is as much geared up for long-haul cruises as a trip out to sea in tough conditions, even in shorthanded configuration.
                                    She’ll surprise you with how easily she can pick up the pace!
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-column-reverse mb-2 py-4 border-bottom">
                            <div className="col-12 py-3">
                                <Image src="/images/marinemodels/J112/J112-7.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-12 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    MODESTLY MANOEUVRE DOUBLE-HANDED                                   </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    The positioning of the deck hardware on the J 112 Elegance has been carefully studied and selected to make manoeuvring as easy as possible.
                                    A double-handed configuration is all that’s required to control her and the efforts involved mean that even a child can sail her!
                                    The size and positioning of the winchs make every manoeuvre safe and the quality of the deck hardware enables effortless sail trimming.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4 border-bottom ">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J112/J112-8.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    SAIL ECOLOGICALLY                                </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Sailing is certainly the most pleasant and ecological way to get around with the utmost freedom. The Js’ unique ability to sustain performance will reduce your engine use by at least 15% leading to fewer polluting emissions.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J112/J112-9.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    UNLEASH PERFORMANCE                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Performance is the primary guarantee of comfort when cruising.
                                    This yacht has been designed for high quality navigation, with the best possible balance of comfort and living space.
                                    You’ll appreciate being able to plan an exact time of arrival on stopover with children.
                                    You’ll also enjoy being able to catch up with your sailing companions despite casting off later!
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4 border-bottom ">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J112/J112-10.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    EXPERIENCE EXCELLENCE                                   </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Your yacht is a J!
                                    What makes it a top of the range boat is her infusion construction technology. This absolutely unique development provides an unrivalled standard of excellence.
                                    Solely a J can offer the serenity of the most solid and rigid construction on the market, whilst retaining its unrivalled lightweight design, which establishes its reputation as a high-performance yacht.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J112/J112-11.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    YOUR STANDARD YACHT READY TO SAIL                                 </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    In contrast to the majority of the other models on the market, J/ chooses to offer a comprehensive, ready-to-sail boat.
                                    The standard yacht equipment includes spinnaker hardware on a retractable carbon bowsprit and high-quality standing and running rigging.
                                    The finish of the profiles and their adjustment is unrivalled, ensuring the best possible glide without any add-ons being required.
                                    </p>
                                </article>
                            </div>
                        </div>
                    </section>
                    <section>
                        
                    </section>
                </div>
            </main>
            <Footer footerObject={MarineObject.footer}/>
        </>
    );
}
 
export default J45;