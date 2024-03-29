import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Image from "next/image";
import { useState } from "react";
import MarineObject from "../../../../site-data/marine-en.json"
import ReactPlayer from "react-player"
import MovingText from 'react-moving-text'
import { useWindowDimensions } from "../../../../hooks/useWindowDimensions";
import Head from "next/head";

const J45 = () => {

    const [videoDisplay, setVideoDisplay] = useState(false)

    const { deviceHeight, deviceWidth } = useWindowDimensions();

    return (
        <>  
            <Head>
                <title>J-80 | Sport Sailboat</title>

                <meta name="description" content="Boasting 20 years of expertise, the J 80 is the obvious choice! Control its power, savour its stability, release the inner racer in you! Book your J 80 test." />
                <meta name="keywords" content="j-80, J-80, J80, j80, boat, sport, marine, sailboat" />
            </Head>
            <Header headerObject={MarineObject.header}/>
            <main className="wrapper">
                <div className="model-image-top">
                    <Image src="/images/marinemodels/J80/J80-2.jpg" height={1500} width={3000} alt="J-80 Sport Sailboat"/>
                    <div className="model-video-button-div">
                        <button 
                            className="model-video-button"
                            onClick={() => setVideoDisplay(!videoDisplay)}
                        >
                            WATCH THE VIDEO
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
                                <i>J-80</i> SPORT SAILBOAT
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
                            <div className="col-sm-2 d-flex justify-content-center align-items-center">
                                <div className="p-3">
                                    <Image src="/images/marinemodels/J80/J80-logo.jpeg" height={160} width={80} alt=""/>
                                </div>
                            </div>
                            <div className="col-sm-10 d-flex justify-content-center align-items-center">
                                <article>
                                    <h1 style={{ fontSize: 23, marginBottom: 15}}>
                                    J 80 SPORT SAILBOAT
                                    </h1>
                                    <h2 style={{ fontSize: 28, marginBottom: 15}}>
                                    STEP ABOARD A SAFE BET.                                    </h2>
                                    <p>
                                    Boasting 20 years of expertise, the J 80 is the obvious choice!
                                    Control its power, savour its stability, release the inner racer in you! Book your J 80 test.                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J80/J80-7.jpeg" width={1200} height={600} alt="" />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                        SET SAIL WITH CONFIDENCE!
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    You’re aboard a sound boat, inspiring confidence in all conditions.
Head out to sea! Enjoy its simple and pleasant manoeuvrability. The adventure begins.</p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J80/J80-5.jpeg" width={1200} height={700} alt="" />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    HOLD YOUR COURSE!                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    The J 80’s very high ballast ratio makes it the safest sportsboat around with its impressive stability.
                                    Featuring supreme flexibility at the helm and capable of high speeds, she’s also a lot of fun in downwind conditions.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-column-reverse mb-2 py-4 border-bottom">
                            <div className="col-12 py-2 d-flex justify-content-center align-items-center">
                                <Image src="/images/marinemodels/J80/J80-3.jpeg" width={1200} height={650} alt="" />
                            </div>
                            <div className="col-12 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    FULFIL HER POTENTIAL                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Sheet on the sails and you’ll already be performing at 95% of your potential.
Her lightweight design means you can very quickly get up on the plane in downwind conditions.
Able to reach 16/18 knots of boat speed in the breeze in complete safety, you’re guaranteed a thrilling ride!
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J80/J80-4.jpeg" width={1200} height={700} alt="" />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    GET OFF TO THE PERFECT START IN COMPETITION!                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    The jib furler and the asymmetric spinnaker make this one design yacht easy to get a feel for and a thoroughly entertaining way to learn about racing on all types of courses.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J80/J80-6.jpeg" width={1200} height={700} alt="" />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    SAIL WITH STYLE                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    The timeless design of the J 80 was designed by Rod Johnstone with a view to making this 8m monohull a genuine style icon. It groups together all the brand’s distinctive elements, resulting in the perfect blend of a unique design and a trail-blazing spirit.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J80/J80-8.jpeg" width={1200} height={700} alt="" />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    KEEN TO HAVE CLASS?                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    With nearly 1,500 boats distributed around the world, this craft benefits from a highly active owners’ class.
Sportsmanship and sociability are the key words of this class.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J80/J80-1.jpeg" width={1200} height={700} alt="" />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    TEST HER STRENGTH                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    The first model built in 1993 still has every chance of winning a race against a recent model.
The choice of materials has not diminished in terms of quality over the years. Little wonder then that the J 80 is the reference sportsboat.
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
                            Close
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
 
export default J45;