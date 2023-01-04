import { useEffect, useState } from 'react';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import MovingText from 'react-moving-text'
import Iframe from 'react-iframe';
import Link from 'next/link';

const TextileHome = ({ homeObject }) => {

    return (
        <>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center p-0">
                            <div className="carousel-edit">
                                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="85000" data-bs-pause="true">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    {/* <progress className="marine-progress" value={progress} max={carouselInterval}></progress> */}
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <Image src="/images/textileorijinals/shadowed/3.jpg" className="d-flex h-100 w-100" alt="..." width={3000} height={1300}/>
                                            <div className="marine-carousel-header">
                                                <MovingText
                                                    type="fadeInFromTop"
                                                    duration="3600ms"
                                                    delay="0s"
                                                    direction="normal"
                                                    timing="ease"
                                                    iteration="1"
                                                    fillMode="none"
                                                >
                                                    <h1>
                                                        { homeObject.sliderText1.main }
                                                    </h1>
                                                </MovingText>
                                                <MovingText
                                                    type="fadeInFromBottom"
                                                    duration="3000ms"
                                                    delay="0s"
                                                    direction="normal"
                                                    timing="ease"
                                                    iteration="1"
                                                    fillMode="none"
                                                >
                                                    <p>
                                                        { homeObject.sliderText1.sub }
                                                    </p>
                                                </MovingText>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <Image src="/images/textileorijinals/shadowed/5.jpg" className="d-block w-100" alt="..." width={3000} height={1300}/>
                                            <div className="marine-carousel-header">
                                                <MovingText
                                                    type="fadeInFromTop"
                                                    duration="3400ms"
                                                    delay="0s"
                                                    direction="normal"
                                                    timing="ease"
                                                    iteration="1"
                                                    fillMode="none"
                                                >
                                                    <h1>
                                                        { homeObject.sliderText2.main }
                                                    </h1>
                                                </MovingText>
                                                <MovingText
                                                    type="fadeInFromBottom"
                                                    duration="3400ms"
                                                    delay="0s"
                                                    direction="normal"
                                                    timing="ease"
                                                    iteration="1"
                                                    fillMode="none"
                                                >
                                                    <p>
                                                        { homeObject.sliderText2.sub }
                                                    </p>
                                                </MovingText>
                                            </div>
                                            {/* <div className="carousel-item-text-2">
                                                MAYCO Tekstil sektörde 36 yıllık güvenilir tecrübe...
                                            </div> */}
                                        </div>
                                        <div className="carousel-item">
                                            <Image src="/images/textileorijinals/shadowed/1.jpg" className="d-block w-100" alt="..." width={3000} height={1300}/>
                                            <div className="marine-carousel-header">
                                                <MovingText
                                                    type="fadeInFromTop"
                                                    duration="3400ms"
                                                    delay="0s"
                                                    direction="normal"
                                                    timing="ease"
                                                    iteration="1"
                                                    fillMode="none"
                                                >
                                                    <h1>
                                                        { homeObject.sliderText3.main }
                                                    </h1>
                                                </MovingText>
                                                <MovingText
                                                    type="fadeInFromBottom"
                                                    duration="3400ms"
                                                    delay="0s"
                                                    direction="normal"
                                                    timing="ease"
                                                    iteration="1"
                                                    fillMode="none"
                                                >
                                                    <p>
                                                        { homeObject.sliderText3.sub }
                                                    </p>
                                                </MovingText>
                                            </div>
                                            {/* <div className="carousel-item-text-3">
                                                Üretimde bilinçi ve profesyonel yaklaşım...
                                            </div> */}
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

            <section className="marine-home-section p-md-3">
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
                            </article>
                        </div>
                    </div>
                    <div className="row px-md-4 products-textile-home">
                        <div className="col-sm-4 d-flex justify-content-center border-end">
                            <div className="marine-sub-article d-flex justify-content-center p-2">
                                <article className='d-flex flex-column align-items-center text-center'>
                                    <figure className='d-flex'>
                                        <Image className="img-responsive rounded-1" src="/images/textilehome/curtain-splash.png" width={360} height={360} alt="..."/>
                                    </figure>
                                    <h6 className="my-3">{ homeObject.subarticles.sub1.title }</h6>
                                    <p className="mx-3">
                                        { homeObject.subarticles.sub1.text }
                                    </p>
                                    <Link href={homeObject.subarticles.sub1.path}>
                                        <a className="mt-md-auto">Gözat</a>
                                    </Link>
                                </article>
                            </div>
                        </div>
                        <div className="col-sm-4 d-flex justify-content-center border-end">
                            <div className="marine-sub-article d-flex justify-content-center p-2">
                                <article className='d-flex flex-column align-items-center text-center'>
                                    <figure className='d-flex'>
                                        <Image className="img-responsive rounded-1" src="/images/textilegeneral/kumas6.jpg" width={360} height={360} alt="..."/>
                                    </figure>
                                    <h6 className="my-3">{ homeObject.subarticles.sub2.title }</h6>
                                    <p className="mx-3">
                                        { homeObject.subarticles.sub2.text }
                                    </p>
                                    <Link href={homeObject.subarticles.sub2.path}>
                                        <a className="mt-md-auto">Gözat</a>
                                    </Link>
                                </article>
                            </div>
                        </div>
                        <div className="col-sm-4 d-flex justify-content-center">
                            <div className="marine-sub-article d-flex justify-content-center p-2">
                                <article className='d-flex flex-column align-items-center text-center'>
                                    <figure className='d-flex'>
                                        <Image className="img-responsive rounded-1" src="/images/textileproducts/towel/5.jpg" width={360} height={360} alt="..."/>
                                    </figure>
                                    <h6 className="my-3">{ homeObject.subarticles.sub3.title }</h6>
                                    <p className="mx-4 px-4">
                                        { homeObject.subarticles.sub3.text }
                                    </p>
                                    <Link href={homeObject.subarticles.sub3.path}>
                                        <a className="mt-md-auto">Gözat</a>
                                    </Link>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div style={{ height: '50vh', width: '100%' }}>
                    <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.498995847303!2d28.98719071541492!3d41.036215679298024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab77ae98fbef5%3A0x4ca4ccfe1861a966!2sMayco%20Tekstil%20End%C3%BCstri%20ve%20Ticaret%20A.%C5%9E.!5e0!3m2!1str!2str!4v1670249206582!5m2!1str!2str"
                        width="100%" 
                        height="100%"
                        style="border:0;" 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </section>
        </>
    );
}
 
export default TextileHome;