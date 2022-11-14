import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import MarineObject from "../../../site-data/marine-tr.json"
import ReactPlayer from "react-player"
import MovingText from 'react-moving-text'
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const images = () => {
    const images = []
    for(let i = 1; i < 30; i ++ ) {
        images.push({
            original: '/images/marinemodels/J70/gallery/' + i + '.jpg',
            thumbnail: '/images/marinemodels/J70/gallery/' + i + '.jpg'
        })
    }
    return images
}

const J70 = () => {

    const [videoDisplay, setVideoDisplay] = useState(false)

    const { deviceHeight, deviceWidth } = useWindowDimensions();
    const [navs, setNavs] = useState(MarineObject.models.J70.equipment.navs)
    const [J70Images, ] = useState(images)

    return (
        <>  
            <Header headerObject={MarineObject.header}/>
            <main className="wrapper bg-light">
                <div className="model-image-top">
                    <Image src="/images/marinemodels/J70/J70-1.jpeg" height={800} width={1600} alt="..."/>
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
                                <i>J-70</i> SPORT SAILBOAT
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
                    <section className="container model-under">
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-lg-2 d-flex justify-content-center align-items-center">
                                <div className="p-3">
                                    <Image src="/images/marinemodels/J70/J70-logo.jpeg" height={160} width={80} alt="..."/>
                                </div>
                            </div>
                            <div className="col-lg-10 d-flex justify-content-center align-items-center">
                                <article>
                                    <h1 style={{ fontSize: 23, marginBottom: 15}}>
                                    J 70 SPORT SAILBOAT
                                    </h1>
                                    <h2 style={{ fontSize: 28, marginBottom: 15}}>
                                    SHIFT FROM PLEASURE TO ADRENALIN.
                                    </h2>
                                    <p>
                                    Treat yourself to a genuine icon of one design sailing! The J 70 is the perfect combination of an accessible design and unquestionable performance. It’s THE most widely distributed yacht in the world and for good reason. All is revealed in the video!
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-lg-8 py-3">
                                <Image src="/images/marinemodels/J70/J70-2.jpeg" width={1200} height={600} alt="..." />
                            </div>
                            <div className="col-lg-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    HOIST THE SAILS AND ENJOY
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    With this recreational boat, you get to choose how you want to use her: a sporty pressure-free family escapade or a race on equal terms? Her lightweight design means you can quickly enjoy the delights of slipping along and her contained sail plan makes this bestseller totally safe and accessible.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4 border-bottom">
                            <div className="col-lg-8 py-3">
                                <Image src="/images/marinemodels/J70/J70-3.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-lg-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    JOIN THE INTERNATIONAL CLASS
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Today the J 70 is considered to be the reference one design on a global scale! A record presence at every international event! The mastery of a precise and identical build process and an international organisation guarantee equal terms for every owner.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-column-reverse mb-2 py-4 border-bottom">
                            <div className="col-12 py-2 d-flex justify-content-center align-items-center">
                                <Image src="/images/marinemodels/J70/J70-4.jpeg" width={1200} height={650} alt="..." />
                            </div>
                            <div className="col-12 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    GET USED TO HAVING FUN
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    A fun craft that is both simple and technical, capable of making 20 knots under spinnaker, this yacht is supported by sociable and united national classes. Her construction is dedicated to downwind enthusiasts, while her size means you can easily head out to sea whenever you fancy.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4 border-bottom">
                            <div className="col-lg-8 py-3">
                                <Image src="/images/marinemodels/J70/J70-5.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-lg-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    BENEFIT FROM CUTTING-EDGE EQUIPMENT
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    The strengths of this yacht primarily rely on its latest generation equipment, with a carbon rig and top of the range construction technology, which make it lightweight and stiff with great longevity.                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4">
                            <div className="col-lg-8 py-3">
                                <Image src="/images/marinemodels/J70/J70-6.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-lg-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    SIMPLIFY YOUR LIFE
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    When the weather is fine, why wait to make the most of it? A lgall sportsboat measuring 7m, the J 70 is light as a feather, easy to transport and simple to launch and rig. Her keel is retractable, meaning you can reduce the height on the trailer.                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4 border-bottom">
                            <div className="col-lg-8 py-3">
                                <Image src="/images/marinemodels/J70/J70-7.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-lg-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    BE PART OF A PERFECT SPORTS ORGANISATION
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Its lgall manufacturing tolerances are a guarantee of sporting equity for all. The network of owner classes offers events of a regional and international scope in each country.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4">
                            <div className="col-lg-8 py-3">
                                <Image src="/images/marinemodels/J70/J70-8.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-lg-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    DEMAND UNFAILING RELIABILITY
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    Even when used intensively, the build quality of the J 70 guarantees unrivalled resistance and solidity, which translates as a high resale value. Thanks to a genuine ‘racer’ culture, a constant eye for detail, highly selective materials and strict production control, this boat is bordering on perfection in operating terms.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4">
                            <div className="col-lg-8 py-3">
                                <Image src="/images/marinemodels/J70/J70-9.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-lg-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    MAKE THE MOST OF HER ERGONOMIC CABIN
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    With her lgall cabin, you’re protected from bad weather. It also means all the equipment for the boat and the team can be easily stowed and transported inside. The forward deck hatch makes it brighter and enables effective ventilation of the interior volume. The outboard engine can be fully stowed down below while sailing.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4">
                            <div className="col-lg-8 py-3">
                                <Image src="/images/marinemodels/J70/J70-10.jpeg" width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-lg-4 d-flex justify-content-center align-items-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                    GET INTO RACING
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                    The characteristics of the J 70 make her accessible to all. She is perfectly suited to young and women’s crews. The strict rules on hiking mean that those who don’t take part in intensive training can still easily compete against more honed crews.
                                    </p>
                                </article>
                            </div>
                        </div>
                    </section>
                    <section className="tabs border-bottom">
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
                    <section className="p-3">
                        <ImageGallery items={J70Images}/>
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
                                url='https://www.youtube.com/watch?v=kHGQTZbNPeU&t=76s&ab_channel=JComposites'
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
 
export default J70;