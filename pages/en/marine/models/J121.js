import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Image from "next/image";
import { useState } from "react";
import MarineObject from "../../../../site-data/marine-en.json"
import ReactPlayer from "react-player"
import { useWindowDimensions } from "../../../../hooks/useWindowDimensions";
import MovingText from 'react-moving-text'

const J45 = () => {

    const [videoDisplay, setVideoDisplay] = useState(false)

    const { deviceHeight, deviceWidth } = useWindowDimensions();

    return (
        <>
            <Header headerObject={MarineObject.header}/>
            <main className="wrapper bg-light">
                <div className="model-image-top">
                    <Image onClick={() => setVideoDisplay(true)} src="/images/marinemodels/J121/J121-1.jpg" height={800} width={1600} alt="..."/>
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
                                <i>J-121</i> ELEGANCE YACHT
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
                                    <Image src="/images/marinemodels/J121/J121-logo.jpeg" height={160} width={80} alt="..."/>
                                </div>
                            </div>
                            <div className="col-sm-10 d-flex align-items-center">
                                <article>
                                    <h1 style={{ fontSize: 23, marginBottom: 15}}>
                                    J 121 SPORT SAILBOAT
                                    </h1>
                                    <h2 style={{ fontSize: 28, marginBottom: 15}}>
                                    THE 40-FOOTER DESIGNED FOR SHORTHANDED SAILING.
                                    </h2>
                                    <p>
                                    The new J 121 has been optimised for sailing long distances with a crew of 5 or less. She satisfies the growing need to simplify the organisation of your racing season by limiting the number of crew aboard.                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J121/J121-2.jpeg" width={1200} height={600} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    SIMPLIFY THE WAY YOU SAIL!                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    The J 121 is the answer for those who are looking for a boat offering enjoyment and perfomance in shorthanded configuration. She features ballast tanks that can be easily controlled from the cockpit and is able to compete against honed crews of 8 to 10 people!                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J121/J121-3.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    MAKE THE MOST OF THE OPEN, SPACIOUS INTERIOR                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    The boat’s interior is simple, bright and offers a genuine sense of space.
The L-shaped galley features an oven and a refrigeration unit, enabling you to head offshore with all the comfort you need.
Forward of the main bulkhead, you’ll find space to stow your sails, which is practical for hoisting or dumping your spinnaker!                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-column-reverse mb-2 py-4 border-bottom">
                            <div className="col-12 py-2 d-flex justify-content-center">
                                <Image src="/images/marinemodels/J121/J121-4.jpeg" width={1200} height={650} alt="..." />
                            </div>
                            <div className="col-12 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    EXPLOIT ITS ERGONOMIC COCKPIT                                   </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    With a large space to manoeuvre and good protection from the elements, the J 121 has been definitively designed for offshore sailing! The helmsman can very easily access the mainsheet.                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J121/J121-5.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    ADMIRE THE PRECISION                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    To achieve such performance, the construction of the boat has involved great attention to detail.
                                    Some precision tooling has been developed by Symmetrix, one of the most highly specialised American firms in terms of the realisation of machined parts. Indeed, the volumetric tolerance is below 0.1mm.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J121/J121-6.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    HANDLE THE SAILS WITH EASE                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Handling a 40-footer with the minimum crew requires a simplification of the sail plan. That’s why this yacht features equipment designed to facilitate manoeuvres, particularly in tough weather conditions.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-column-reverse mb-2 py-4 border-bottom">
                            <div className="col-12 py-3">
                                <Image src="/images/marinemodels/J121/J121-7.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-12 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    ENTER THE REALMS OF ADVENTURE!                                   </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    The Rolex Fastnet Race or the Rolex Middle Sea Race, sign up for the famous offshore races and effortlessly sail a boat at her full potential!
                                    The J 121 will surprise you with her power and her ability to accelerate away, whilst being very easy to control.
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
 
export default J45;