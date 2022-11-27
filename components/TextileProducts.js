import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { FcCheckmark } from'react-icons/fc'

import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const imagesTowel = [
    "/images/textilegeneral/kumas6.jpg",
    "/images/textilegeneral/kumas7.jpg",
    "/images/textilegeneral/kumas12.jpg"
]

const imagesCurtain = [
    "/images/textilegeneral/kumas6.jpg",
    "/images/textilegeneral/kumas7.jpg",
    "/images/textilegeneral/kumas12.jpg"
]

const imagesTshirt = [
    "/images/textilegeneral/kumas6.jpg",
    "/images/textilegeneral/kumas7.jpg",
    "/images/textilegeneral/kumas12.jpg"
]

const imagesFabric = [
    "/images/textilegeneral/kumas6.jpg",
    "/images/textilegeneral/kumas7.jpg",
    "/images/textilegeneral/kumas12.jpg"
]

const TextileProducts = ({ productsObject }) => {

    const [isOpenTowel, setIsOpenTowel] = useState(false)
    const [isOpenCurtain, setIsOpenCurtain] = useState(false)
    const [isOpenFabric, setIsOpenFabric] = useState(false)
    const [isOpenTshirt, setIsOpenTshirt] = useState(false)

    const [photoIndex, setPhotoIndex] = useState(0)

    return (
        <div className="products-wrapper">
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
            <section className="products-section text-center">
                {/* <h1 className="py-3">
                    { productsObject.header }
                </h1> */}
                <div className="container my-1">
                    <div className="row d-flex justify-content-center">
                        {
                            productsObject.scrollNavs.map((nav) => (
                                <div className="col-sm-3 d-flex justify-content-center align-items-center p-2">
                                    <a href={"#" + nav.path} style={{   backgroundImage: `url('/images/textileproductnavs/${nav.path}.jpeg')`, backgroundRepeat: 'no-repeat' }}>
                                        { nav.text }
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <section>
                <div className="container flex-column d-flex justify-content-center products-main py-1">
                    {
                        productsObject.productsArray.map((product, index) => (
                        <div className="product-row bg-light mb-4 pb-3" key={index}>
                            <div 
                                id={product.id} 
                                className="row mt-3 py-2 px-4 product-row-2 mx-sm-2"
                            >
                                <div className="col-12 py-3 d-flex flex-column">
                                    <h3 className="my-3 ms-md-5">
                                        { product.header }
                                    </h3>
                                    <p className="my-3 d-flex px-sm-3">
                                        { product.exp }
                                    </p>
                                </div>
                            </div>
                            <div className="row product-row-3 px-4 mx-2">
                                <div className="col-sm-6 d-flex justify-content-start align-items-center">
                                    <ul className="mt-2">
                                        {
                                            product.specs.map((spec, indexA) => (
                                                <li className="d-flex" key={indexA}>
                                                    <span>
                                                    <FcCheckmark size={20}/>
                                                    </span>
                                                    <p>
                                                    { spec }
                                                    </p>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className="col-sm-6 p-sm-3 d-flex justify-content-start align-items-center">
                                        {/* <div className="product-img">
                                            <Image src={product.img} height={350} width={600} alt="..."/>
                                        </div> */}
                                        <div className="textile-home-product-card">
                                            <div className="product-card-img" style={{ backgroundImage: `url("${product.img}")`}}></div>
                                            <div className="product-card-detail">
                                                <span>
                                                    { product.header }
                                                </span>
                                                <a
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
                                                    className="detail-button text-center"
                                                >
                                                    { product.imgExp }
                                                </a>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    );
}
 
export default TextileProducts;