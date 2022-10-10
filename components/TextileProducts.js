import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Image from "next/image";
import { useEffect, useState } from "react";

const TextileProducts = ({ productsObject }) => {

    return (
        <>
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
                                <Image className="rounded-1" src="/images/textileproductimages/curtain.jpg" height={350} width={700} />
                            </div>
                        </div>
                    </div>
                    <div id="fabric" className="row my-5 py-4 border-bottom border-light product-row">
                        <div className="col-sm-6 product-item">
                            <div className={"product-image-left"}>
                                <Image className="rounded-1" src="/images/textileproductimages/fabric.jpg" height={350} width={700}/>
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
                                <Image className="rounded-1" src="/images/textileproductimages/towel.jpg" height={350} width={700}/>
                            </div>
                        </div>
                    </div>
                    <div id="tshirt" className="row my-5 py-4 border-bottom border-light product-row">
                        <div className="col-sm-6 d-flex justify-content-center align-items-center product-item">
                            <div className={"product-image-right"}>
                                <Image className="rounded-1" src="/images/textileproductimages/tshirt.jpg" height={350} width={700}/>
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
                                        <img src="/images/curtain-color.jpeg" />
                                    </div>
                                    <div>
                                        <img src="/images/production.jpeg" />
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