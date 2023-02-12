import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Image from "next/image";
import { useState } from "react";
import MarineObject from "../../../../site-data/marine-en.json"
import ReactPlayer from "react-player"
import MovingText from 'react-moving-text'
import { useWindowDimensions } from "../../../../hooks/useWindowDimensions";

const J45 = () => {

    const [videoDisplay, setVideoDisplay] = useState(false)

    const { deviceHeight, deviceWidth } = useWindowDimensions();
    const [navs, setNavs] = useState(MarineObject.models.J99.equipment.navs)

    return (
        <>
            <Header headerObject={MarineObject.header}/>
            <main className="wrapper">
                <div className="model-image-top">
                    <Image onClick={() => setVideoDisplay(true)} src="/images/marinemodels/J99/J99-1.jpg" height={1500} width={3000} alt="J-99 Sport Sailboat"/>
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
                                <i>J-99</i> SPORT SAILBOAT
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
                                    <Image src="/images/marinemodels/J99/J99-logo.jpeg" height={160} width={80} alt=""/>
                                </div>
                            </div>
                            <div className="col-sm-10 d-flex align-items-center">
                                <article>
                                    <h1 style={{ fontSize: 23, marginBottom: 15}}>
                                    J 99 SPORT SAILBOAT
                                    </h1>
                                    <h2 style={{ fontSize: 28, marginBottom: 15}}>
                                    UNLEASH YOUR OFFSHORE DESIRES.
                                    </h2>
                                    <p>
                                    The new J/99 completes the Sport range and aims to satisfy multiple demands. A racer that is intended to be both accessible and high-performance, the J/99 will excite your senses and her very attractive price is bound to appeal! Book your J 99 test.                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J99/J99-2.jpeg" width={1200} height={600} alt="" />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    AN OFFSHORE SPEEDSTER ACCESSIBLE TO ALL!
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    The J/99 will be the perfect boat to fulfil your desires. A racer designed for a shorthanded, coastal or offshore race programme, you’ll find a refined sports finish making her interior equally convivial for weekends away with family.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J99/J99-3.jpeg" width={1200} height={700} alt="" />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    AN UNRIVALLED EXPERIENCE IN TERMS OF PERFORMANCE                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    The J/99 is the fruit of an in-depth study that relies on the J/’s great wealth of offshore experience. Boasting significant victories and podiums across the major offshore racing circuit (Middle Sea Race / Fastnet Race / Mackinac Race / Armen Race) her architect has relied on the recognised strengths of the existing hulls while introducing even greater versatility, notably with enhanced form stability combined with minimal wetted surface.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-column-reverse mb-2 py-4 border-bottom">
                            <div className="col-12 py-2 d-flex justify-content-center">
                                <Image src="/images/marinemodels/J99/J99-4.jpeg" width={1200} height={650} alt="" />
                            </div>
                            <div className="col-12 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    THE SPORTS YACHT WITH GOOD HEADROOM                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    The J/99 features a comfortable layout for offshore passage making with perfectly adapted headroom. Her spacious interior comprises two individual and symmetrical aft cabins, enabling you to rest whatever the tack. In addition, her forward heads compartment, L-shaped galley and forward-facing chart table make her highly functional and add to your comfort on the water.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J99/J99-5.jpeg" width={1200} height={700} alt="" />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    ONE YACHT, SEVERAL PROGRAMS                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    The deck layout on the J/99 has been optimised to facilitate manoeuvres in shorthanded configuration. All the main controls are accessible from the helming station. Several configurations are available: single or twin rudders / bulbed or plain fin keel / symmetric or asymmetric version. Her light displacement combined with substantial stiffness and refined steering will enable you to sail with complete confidence.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J99/J99-6.jpeg" width={1200} height={700} alt="" />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    HIGH-QUALITY FOR THE PERFECT COMPROMISE                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Balance is key to developing a new model. The build quality comes into its own in the way everything has been thought out. The lightness of its infused composites linked to the incomparable structural stiffness allows for increased stability and hence performance whilst providing the level of comfort and finish clients have come to expect.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4">
                            <div className="col-sm-8 py-3">
                                <Image src="/images/marinemodels/J99/J99-7.jpeg" width={1200} height={700} alt="" />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    GEARED AROUND EFFICIENCY                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Considerable thought has gone into the J/99 to offer you a high-performance yacht able to adapt to your needs. In this way, you’ll have the option of a vast array of equipment to enable you to optimise your boat accordingly. Furthermore, the rig reflects the latest technological advances, which notably include a dedicated aluminium profile integrating a mixed track contributing to the stiffness of the profile. The removable fixed bowsprit is geared up for increased performance and practicality.
                                    </p>
                                </article>
                            </div>
                        </div>
                    </div>
                    <section className="tabs">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                <h2 className="text-center fs-3 my-4 py-3 border-bottom">EQUIPMENT</h2>
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
                                                <Image src={panel.img} height={380} width={440} alt="" />
                                            </figure>
                                            <h4 className="text-center">
                                                { panel.header }
                                            </h4>
                                            <p>
                                                { panel.text }
                                            </p>
                                        </article>
                                )) : navs.filter((navActive) => navActive.isActive)[0].pics.map((pic, indexPic) => (
                                    <div key={indexPic} className="col-md-5 d-flex justify-content-center flex-row">
                                        <Image src={pic} height={350} width={350} alt="" />
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
                                url='https://www.youtube.com/watch?v=LVnT3kpa2og&ab_channel=JComposites'
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