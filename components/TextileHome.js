import { Carousel } from "react-responsive-carousel";
import GoogleMapReact from 'google-map-react';
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai"
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { useState } from "react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const TextileHome = ({ homeObject }) => {

    const [lang, ] = useState(() => homeObject.lang === "en" ? "en/" : "")

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
                {/* <div className="container-fluid px-0">
                    <div className="row px-0">
                        <div className="col-12 px-0">
                            <div className="textile-home-slider">
                            <Carousel
                                autoPlay={true}
                                interval={5000}
                                infiniteLoop={true}
                                stopOnHover={false}
                                dynamicHeight={false}
                                showThumbs={false}
                                emulateTouch={true}
                                swipeable={true}
                                showStatus={false}
                                transitionTime={2000}
                                animationHandler={"fade"}
                            >
                                <div>
                                    <img src="/images/textileabout/about-1.jpeg" />
                                </div>
                                <div>
                                    <img src="/images/textileabout/about-2.jpeg" />
                                </div>
                            </Carousel>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center p-0">
                            <div className="carousel-edit">
                                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="6000" data-bs-pause="false">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="/images/curtain-color.jpeg" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="/images/production.jpeg" className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container-fluid p-5 my-3">
                <div className="row">
                    <div className="col-sm-6 d-flex align-items-center text-center">
                        <article className="lh-lg">
                            <h4>
                                { homeObject.article1.header }
                            </h4>
                            <p>
                                { homeObject.article1.text }
                            </p>
                        </article>
                    </div>
                    <div className="col-sm-6">
                        <Image src="/images/textilehome/home-2.jpg" width={650} height={350}/>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-sm-6">
                        <figure>
                            <Image src="/images/textilehome/home-3.jpg" width={650} height={350}/>
                        </figure>
                    </div>
                    <div className="col-sm-6 d-flex align-items-center text-center">
                        <article className="lh-lg">
                                <h4>
                                    { homeObject.article2.header }
                                </h4>
                                <p>
                                    { homeObject.article2.text }
                                </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="design px-4 py-5">
                <div className="container-fluid p-4">
                    <h2 className="py-2 border-bottom border-secondary">
                        { homeObject.design.header }
                    </h2>
                    <p>
                        { homeObject.design.text }
                    </p>
                    <Link href={'/' + lang + homeObject.site + '/' + homeObject.design.link.path}>
                        <a>{ homeObject.design.link.label } <AiOutlineArrowRight /></a>
                    </Link>
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
 
export default TextileHome;