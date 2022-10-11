import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Image from "next/image";
import { useEffect, useState } from "react";

import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const imagesTowel = [
    "/images/textileproducts/towel/J45-1.jpg",
    "/images/textileproducts/towel/J80.jpg",
    "/images/textileproducts/towel/J121-2.jpg"
]

const imagesCurtain = [
    "/images/textileproducts/towel/J45-1.jpg",
    "/images/textileproducts/towel/J80.jpg",
    "/images/textileproducts/towel/J121-2.jpg"
]

const imagesTshirt = [
    "/images/textileproducts/towel/J45-1.jpg",
    "/images/textileproducts/towel/J80.jpg",
    "/images/textileproducts/towel/J121-2.jpg"
]

const imagesFabric = [
    "/images/textileproducts/towel/J45-1.jpg",
    "/images/textileproducts/towel/J80.jpg",
    "/images/textileproducts/towel/J121-2.jpg"
]

const TextileProducts = ({ productsObject }) => {

    const [isOpenTowel, setIsOpenTowel] = useState(false)
    const [isOpenCurtain, setIsOpenCurtain] = useState(false)
    const [isOpenFabric, setIsOpenFabric] = useState(false)
    const [isOpenTshirt, setIsOpenTshirt] = useState(false)

    const [photoIndex, setPhotoIndex] = useState(0)

    return (
        <>
            <div>
                {
                    isOpenCurtain && (
                    <Lightbox
                        mainSrc={imagesCurtain[photoIndex]}
                        nextSrc={imagesCurtain[(photoIndex + 1) % imagesCurtain.length]}
                        prevSrc={imagesCurtain[(photoIndex + imagesCurtain.length - 1) % imagesCurtain.length]}
                        onCloseRequest={() => setIsOpenCurtain(false)}
                        onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + imagesCurtain.length - 1) % imagesCurtain.length)
                        }
                        onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % imagesCurtain.length)
                        }
                    />
                    )
                }
                {
                    isOpenTowel && (
                    <Lightbox
                        mainSrc={imagesTowel[photoIndex]}
                        nextSrc={imagesTowel[(photoIndex + 1) % imagesTowel.length]}
                        prevSrc={imagesTowel[(photoIndex + imagesTowel.length - 1) % imagesTowel.length]}
                        onCloseRequest={() => setIsOpenTowel(false)}
                        onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + imagesTowel.length - 1) % imagesTowel.length)
                        }
                        onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % imagesTowel.length)
                        }
                    />
                    )
                }
                {
                    isOpenFabric && (
                    <Lightbox
                        mainSrc={imagesFabric[photoIndex]}
                        nextSrc={imagesFabric[(photoIndex + 1) % imagesFabric.length]}
                        prevSrc={imagesFabric[(photoIndex + imagesFabric.length - 1) % imagesFabric.length]}
                        onCloseRequest={() => setIsOpenFabric(false)}
                        onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + imagesFabric.length - 1) % imagesFabric.length)
                        }
                        onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % imagesFabric.length)
                        }
                    />
                    )
                }
                {
                    isOpenTshirt && (
                    <Lightbox
                        mainSrc={imagesTshirt[photoIndex]}
                        nextSrc={imagesTshirt[(photoIndex + 1) % imagesTshirt.length]}
                        prevSrc={imagesTshirt[(photoIndex + imagesTshirt.length - 1) % imagesTshirt.length]}
                        onCloseRequest={() => setIsOpenTshirt(false)}
                        onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + imagesTshirt.length - 1) % imagesTshirt.length)
                        }
                        onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % imagesTshirt.length)
                        }
                    />
                    )
                }
            </div>
            <section className="text-center mt-sm-5">
                <h1 className="my-3">
                    <span className="px-3 py-1">
                    { productsObject.header }
                    </span>
                </h1>
                <div className="sidebar d-flex justify-content-center mt-2">
                    <ul>
                    {
                        productsObject.scrollNavs.map((scrollNav, index) => (
                            <li
                                key={index}
                                className={"sidebar-nav p-1" + " " + "sidebar-" + scrollNav.path }
                            >
                                <div className="">
                                    <a href={"#" + scrollNav.path} className="m-4">
                                        { scrollNav.text }
                                    </a>
                                </div>
                            </li>    
                        ))
                    }
                    </ul>
                </div>
            </section>

            <section className="p-3">
                <div className="container-fluid p-3">
                    <div id="curtain" className="row my-5 py-4 border-bottom border-light product-row">
                        <div className="col-sm-6 d-flex justify-content-center align-items-center product-item">
                            <div className="text-center">
                                <h3>
                                    { productsObject.products.curtain.header }
                                </h3>
                                <p>
                                    { productsObject.products.curtain.text }
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-6 d-flex justify-content-center align-items-center product-item">
                            <div className={"product-image-right"}>
                                <Image onClick={() => setIsOpenCurtain(true)} className="rounded-1" src="/images/textileproductimages/curtain.jpg" height={350} width={700} alt="..." />
                            </div>
                        </div>
                    </div>
                    <div id="fabric" className="row my-5 py-4 border-bottom border-light product-row">
                        <div className="col-sm-6 product-item">
                            <div className={"product-image-left"}>
                                <Image onClick={() => setIsOpenFabric(true)} className="rounded-1" src="/images/textileproductimages/fabric.jpg" height={350} width={700} alt="..."/>
                            </div>
                        </div>
                        <div className="col-sm-6 d-flex justify-content-center align-items-center product-item">
                            <div className="text-center">
                                    <h3>
                                        { productsObject.products.fabric.header }
                                    </h3>
                                    <p>
                                        { productsObject.products.fabric.text }
                                    </p>
                                </div>
                            </div>
                    </div>
                    <div id="towel" className="row my-5 py-4 border-bottom border-light product-row">
                        <div className="col-sm-6 d-flex justify-content-center align-items-center product-item">
                            <div className="text-center">
                                    <h3>
                                        { productsObject.products.towel.header }
                                    </h3>
                                    <p>
                                        { productsObject.products.towel.text }
                                    </p>
                                </div>
                            </div>
                        <div className="col-sm-6 d-flex justify-content-center align-items-center product-item">
                            <div className={"product-image-right"}>
                                <Image onClick={() => setIsOpenTowel(true)} className="rounded-1" src="/images/textileproductimages/towel.jpg" height={350} width={700} alt="..."/>
                            </div>
                        </div>
                    </div>
                    <div id="tshirt" className="row my-5 py-4 border-bottom border-light product-row">
                        <div className="col-sm-6 d-flex justify-content-center align-items-center product-item">
                            <div className={"product-image-right"}>
                                <Image onClick={() => setIsOpenTshirt(true)} className="rounded-1" src="/images/textileproductimages/tshirt.jpg" height={350} width={700} alt="..."/>
                            </div>
                        </div>
                        <div className="col-sm-6 d-flex justify-content-center align-items-center product-item">
                            <div className="text-center">
                                <h3>
                                    { productsObject.products.tshirt.header }                                </h3>
                                <p>
                                    { productsObject.products.tshirt.text }
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center my-5 py-4">
                        <div className="col-sm-11 text-center">
                            <h4>
                                { productsObject.galleryheader}
                            </h4>
                            <div className="textile-home-slider mt-4">
                                <Carousel
                                    autoPlay={false}
                                    interval={5000}
                                    infiniteLoop={true}
                                    stopOnHover={false}
                                    dynamicHeight={false}
                                    showThumbs={true}
                                    emulateTouch={true}
                                    swipeable={true}
                                    showStatus={false}
                                    transitionTime={1000}
                                    animationHandler={"fade"}
                                >
                                    <div>
                                        <Image src="/images/curtain-color.jpg" width={1200} height={500} alt="..."/>
                                    </div>
                                    <div>
                                        <Image src="/images/production.jpg" width={1200} height={500} alt="..."/>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default TextileProducts;