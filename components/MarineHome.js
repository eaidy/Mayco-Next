import { Carousel } from 'react-responsive-carousel';
import GoogleMapReact from 'google-map-react';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { resolve } from 'styled-jsx/css';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MarineHome = ({ homeObject }) => {

    const defaultProps = {
        center: {
          lat: 41.036230,
          lng: 28.989316
        },
        zoom: 18
      };

    const interval = 5000

    const next = useRef(null)
    const prev = useRef(null)
    const [progress, setProgress] = useState(0)
    const [myInterval, setMyInterval] = useState(0)
    
    // class intervalTracker {

    //     constructor(callback, interval, samplingFreq, presentCount = 0){
    //         this.callback = callback
    //         this.interval = interval
    //         this.presentCount = presentCount
    //         this.samplingFreq = samplingFreq
    //     }

    //     getInterval() {
    //         return this.interval
    //     }

    //     getPresentCount() {
    //         return this.presentCount
    //     }

    //     async timeout(callback, time) {
    //         return new Promise((resolve) => setTimeout(() => { 
    //             callback && callback()
    //             resolve(0)
    //         }, time ))
    //     }

    //     startInterval = () => {
    //         let refTrack,
    //             leadingTrack
            
    //         setMyInterval(() => this.getInterval())
            
    //         const carouselInterval = setTimeout(async () => {
    //             refTrack = new Date()

    //             for(let i = 0; i < this.samplingFreq; i++) {
    //                 await this.timeout(() => {

    //                     leadingTrack = new Date()
    //                     this.presentCount = leadingTrack - refTrack
    //                     setProgress(() => this.getPresentCount())
    //                     console.log(progress)

    //                 }, this.interval / this.samplingFreq)

    //                 if(this.presentCount > this.interval) {
    //                     this.presentCount = 0
    //                 }
    //             }

    //             this.callback && this.callback()

    //         }, this.interval)
    //     }
    // }

    useEffect(() => {
        // const myTrack = new intervalTracker(() => {
        //     next.current.click()
        // }, 10000, 1000)
        // myTrack.startInterval()
    }, [])

    return (
        <>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center p-0">
                            <div className="carousel-edit">
                                <div id="carouselExampleFade" className="carousel slide carousel-fade">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        {/* <progress style={{ borderRadius: 0 , color: "#4a5", background: "#fff", height: 5}} className="d-flex w-100" value={progress} max={myInterval}></progress> */}
                                        <div className="carousel-item active">
                                            <Image src="/images/marinehome/J45-1.jpg" className="d-block w-100" alt="..." width={1500} height={650}/>
                                            <div className="carousel-item-text-1">
                                                MAYCO Tekstil sektörde 36 yıllık güvenilir tecrübe...
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <Image src="/images/marinehome/J121-2.jpg" className="d-block w-100" alt="..." width={1500} height={650}/>
                                            <div className="carousel-item-text-2">
                                                MAYCO Tekstil sektörde 36 yıllık güvenilir tecrübe...
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <Image src="/images/marinehome/J80.jpg" className="d-block w-100" alt="..." width={1500} height={650}/>
                                            <div className="carousel-item-text-3">
                                                Üretimde bilinçi ve profesyonel yaklaşım...
                                            </div>
                                        </div>
                                    </div>
                                    <button ref={prev} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button ref={next} className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="marine-home-section p-md-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 pb-5 d-flex justify-content-center">
                            <article className="marine-about text-center py-3" style={{ width: "90%"}}>
                                <h4 className="mb-4 py-3">
                                    { homeObject.article1.title}
                                </h4>
                                <p>
                                    { homeObject.article1.paragraph1}
                                </p>
                                <p>
                                    { homeObject.article1.paragraph2 }
                                </p>
                            </article>
                        </div>
                    </div>
                    <div className="row px-md-3">
                        <div className="col-sm-4 d-flex justify-content-center">
                            <div className="marine-sub-article d-flex justify-content-center p-2">
                                <article>
                                    <figure>
                                        <Image className="img-responsive" src="/images/marinehome/about-1.jpeg" width={360} height={360} alt="..."/>
                                    </figure>
                                    <h6 className="my-3">{ homeObject.subarticles.sub1.title }</h6>
                                    <p>
                                        { homeObject.subarticles.sub1.text }
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="col-sm-4 d-flex justify-content-center">
                            <div className="marine-sub-article d-flex justify-content-center p-2">
                                <article className="">
                                    <figure>
                                        <Image className="img-responsive" src="/images/marinehome/J121-3.jpg" width={360} height={360} alt="..."/>
                                    </figure>
                                    <h6 className="my-3">{ homeObject.subarticles.sub2.title }</h6>
                                    <p>
                                        { homeObject.subarticles.sub2.text }
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="col-sm-4 d-flex justify-content-center">
                            <div className="marine-sub-article d-flex justify-content-center p-2">
                                <article className="">
                                    <figure>
                                        <Image className="img-responsive" src="/images/marinehome/about-2.jpeg" width={360} height={360} alt="..."/>
                                    </figure>
                                    <h6 className="my-3">{ homeObject.subarticles.sub3.title }</h6>
                                    <p>
                                        { homeObject.subarticles.sub3.text }
                                    </p>
                                </article>
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
                        text="MAYCO Inc"
                        />
                    </GoogleMapReact>
                </div>
            </section>
        </>
    );
}
 
export default MarineHome;