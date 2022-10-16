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

            <section className="">
                <div className="container-fluid">
                    {
                        productsObject.productsArray.map((product, index) => (
                            <div 
                                key={index}
                                id={product.id} 
                                className="row my-5 py-4 border-bottom border-light product-row"
                            >
                                <div className="col-12 py-5 d-flex flex-column justify-content-center align-items-center text-center">
                                    <h4 className="my-3">
                                        { product.header }
                                    </h4>
                                    <p className="my-3 d-flex w-75 px-3">
                                        { product.exp }
                                    </p>
                                </div>
                                <div className="col-sm-6 d-flex justify-content-center align-items-center">
                                    <ul>
                                        {
                                            product.specs.map((spec, indexA) => (
                                                <li key={indexA}>
                                                    { spec }
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className="col-sm-6 d-flex justify-content-center align-items-center">
                                    <div className="textile-home-product-card">
                                        <div className="product-card-img" style={{ backgroundImage: `url("${product.img}")`, borderColor: "gray"}}></div>
                                        <div className="product-card-detail">
                                            <span
                                                onClick={() => {
                                                    if(product.id === "curtain"){
                                                        setIsOpenCurtain(true)
                                                    }
                                                    else if(product.id === "fabric"){
                                                        setIsOpenFabric(true)
                                                    }
                                                    else if(product.id === "towel"){
                                                        setIsOpenTowel(true)
                                                    }
                                                    else if(product.id === "tshirt"){
                                                        setIsOpenTshirt(true)
                                                    }
                                                }}
                                                className="textile-product-button"
                                            >
                                                { product.imgExp }
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    );
}
 
export default TextileProducts;