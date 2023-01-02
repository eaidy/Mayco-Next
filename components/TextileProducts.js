import "react-responsive-carousel/lib/styles/carousel.min.css"
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { FcCheckmark } from'react-icons/fc'

import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app


const setImages = (dir, count) => {
    let images = []

    for(let i = 1; i <= count; i++){
        images.push(dir + '/' + i + '.jpg')
    }

    return images
}

const imagesTowel = setImages('/images/textileproducts/towel', 3)

const imagesCurtain = setImages('/images/textileproducts/curtain', 7)

const imagesOthers = setImages('/images/textileproducts/others',8)

const imagesFabric = setImages('/images/textileproducts/fabric',18)

const TextileProducts = ({ productsObject }) => {

    const [isOpenTowel, setIsOpenTowel] = useState(false)
    const [isOpenCurtain, setIsOpenCurtain] = useState(false)
    const [isOpenFabric, setIsOpenFabric] = useState(false)
    const [isOpenOthers, setIsOpenOthers] = useState(false)

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
                    isOpenOthers && (
                    <Lightbox
                        mainSrc={imagesOthers[photoIndex]}
                        nextSrc={imagesOthers[(photoIndex + 1) % imagesOthers.length]}
                        prevSrc={imagesOthers[(photoIndex + imagesOthers.length - 1) % imagesOthers.length]}
                        onCloseRequest={() => setIsOpenOthers(false)}
                        onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + imagesOthers.length - 1) % imagesOthers.length)
                        }
                        onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % imagesOthers.length)
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
                            productsObject.scrollNavs.map((nav, index) => (
                                <div key={index} className="col-sm-3 d-flex justify-content-center align-items-center p-2">
                                    <a href={"#" + nav.path} style={{   backgroundImage: `url('/images/textileproductnavs/${nav.path}.jpg')`, backgroundRepeat: 'no-repeat' }}>
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
                                    <h3 className="my-3">
                                        { product.header }
                                    </h3>
                                    <p className="my-3 d-flex">
                                        { product.exp }
                                    </p>
                                </div>
                            </div>
                            <div className="row flex-row-reverse product-row-3 px-4 mx-2">
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
                                        <div onClick={
                                                () => {
                                                    if(product.id === "curtain"){
                                                        setIsOpenCurtain(true)
                                                    }
                                                    else if(product.id === "fabric"){
                                                        setIsOpenFabric(true)
                                                    }
                                                    else if(product.id === "towel"){
                                                        setIsOpenTowel(true)
                                                    }
                                                    else if(product.id === "others"){
                                                        setIsOpenOthers(true)
                                                    }
                                                }
                                            }
                                            className="textile-home-product-card"
                                        >
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
                                                        else if(product.id === "others"){
                                                            setIsOpenOthers(true)
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