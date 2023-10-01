import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import MarineObject from "../../../../site-data/marine-en.json"
import ReactPlayer from "react-player"
import MovingText from 'react-moving-text'
import { useWindowDimensions } from "../../../../hooks/useWindowDimensions";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Head from "next/head";

const images = () => {
    const images = []
    for(let i = 1; i < 9; i ++ ) {
        images.push({
            original: '/images/marinemodels/900ST/gallery/' + i + '.jpeg',
            thumbnail: '/images/marinemodels/900ST/gallery/' + i + '.jpeg'
        })
    }
    return images
}

const ST900 = () => {

    const [videoDisplay, setVideoDisplay] = useState(false)

    const { deviceHeight, deviceWidth } = useWindowDimensions();
    const [navs, setNavs] = useState(MarineObject.models.ST900.specs.navs)
    const [ST900Images, ] = useState(images)

    return (
        <>  
            <Head>
                <title>FLIPPER - 900 ST</title>

                <meta name="description" content="Treat yourself to a genuine icon of one design sailing! The J 70 is the perfect combination of an accessible design and unquestionable performance. It’s THE most widely distributed yacht in the world and for good reason." />
                <meta name="keywords" content="j-70, J-70, J70, j70, boat, sport, marine, sailboat" />
            </Head>
            <Header headerObject={MarineObject.header}/>
            <main className="wrapper">
                <div className="model-image-top">
                    <Image src="/images/marinemodels/900ST/1.jpeg" height={1500} width={3000} alt="J-70 Sport Sailboat"/>
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
                                <i>900 ST</i> - THE ULTIMATE GETAWAY
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
                    <section className="container model-under">
                        <div className="row mb-2 py-5 border-bottom">
                            <div className="col-lg-12 d-flex justify-content-center align-items-center text-center">
                                <article>
                                    <h2 style={{ fontSize: 28, marginBottom: 15}}>
                                    FLIPPER 900 ST
                                    </h2>
                                    <p>
                                    Embrace fabulous opportunities for rest and relaxation with the Flipper 900 ST. This exceptional boat effortlessly accommodates larger groups, ensuring unforgettable cruises that leave no one indifferent – even in typical Finnish summer weather. Experience the agility and sporty nature of the Flipper 900 ST as it comes alive during acceleration. Indulge in the luxurious deck area, bask in ample natural light through the large windows, and savor the genuine feel of space with the roof that can be folded all the way down. Discover the epitome of comfort, style, and adventure with the Flipper 900 ST.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row specs-table">
                            <div className="text-center py-4">
                                <h5>Specifications</h5>
                            </div>
                            <div className="col-md-6 text-center w-md-50">
                                <div className="d-flex justify-content-between border-danger border-opacity-50 border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Weight</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">3000 kg + engine</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-danger border-opacity-50 border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Length</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">9,02 m</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-danger border-opacity-50 border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Beam</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">3,15 m</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-danger border-opacity-50 border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Fuel Tank</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">380 L</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-danger border-opacity-50 border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Fresh Water Tank</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">100 L</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 text-center w-md-50">
                                <div className="d-flex justify-content-between border-danger border-opacity-50 border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Draft</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">0,70 m</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-danger border-opacity-50 border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Engine power</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">300-600 hp / 224-441 kW</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-danger border-opacity-50 border-bottom py-4">
                                    <div>
                                        <span className="pe-4">Berths</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">4 + 2</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-danger border-opacity-50 border-bottom py-4">
                                    <div>
                                        <span className="pe-4">CE-category/persons</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">C / 10</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-danger border-opacity-50 border-bottom py-4">
                                    <div>
                                        <span className="pe-4">-</span>
                                    </div>
                                    <div>
                                        <span className="ps-4">-</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="tabs border-bottom">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                <h2 className="text-center fs-3 my-4 py-5 border-bottom">WHAT MAKES FLIPPER SPECIAL</h2>
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
                                    
                                        <article key={indexPanel} className="d-flex justify-content-center text-center st900-article">
                                            <div className="col-md-4 me-md-4">
                                                <figure className="d-flex">
                                                    <Image src={panel.img} height={300} width={390} alt="" />
                                                </figure>
                                            </div>
                                            <div className="col-md-6 align-items-center text-start">
                                                <h4>
                                                    { panel.header }
                                                </h4>
                                                <p>
                                                    { panel.text }
                                                </p>
                                            </div>
                                        </article>
                                )) : navs.filter((navActive) => navActive.isActive)[0].pics.map((pic, indexPic) => (
                                    <div key={indexPic} className="col-md-5 d-flex justify-content-center flex-row">
                                        <Image src={pic} height={350} width={350} alt="" />
                                    </div>
                                ))
                            }
                        </div>
                    </section>
                    <section className="p-3">
                        <h2 className="text-center my-3">
                            GALLERY
                        </h2>
                        <ImageGallery items={ST900Images}/>
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
                                url='https://www.youtube.com/watch?v=znHOBfT9Lxw&ab_channel=ALifeMoreBoaty'
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
 
export default ST900;