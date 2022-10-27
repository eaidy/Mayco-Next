import Image from "next/image";
import Gallery from "react-photo-gallery";
import { useState } from "react";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const MarineRental = ({ rentalObject }) => {

    const [isOpenRental, setIsOpenRental] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)

    const photos = [
        {
            src: '/images/marinerental/6169.jpg',
            width: 4,
            height: 3
        },
        {
            src: '/images/marinerental/6177.jpg',
            width: 4,
            height: 3
        },
        {
            src: '/images/marinerental/6197.jpg',
            width: 4,
            height: 3
        },
        {
            src: '/images/marinerental/6225.jpg',
            width: 4,
            height: 3
        },
        {
            src: '/images/marinerental/6242.jpg',
            width: 4,
            height: 3
        },
        {
            src: '/images/marinerental/6260.jpg',
            width: 4,
            height: 3
        },
        {
            src: '/images/marinerental/6273.jpg',
            width: 4,
            height: 3
        },
        {
            src: '/images/marinerental/6304.jpg',
            width: 4,
            height: 3
        },
        {
            src: '/images/marinerental/6312.jpg',
            width: 4,
            height: 3
        },
      ];

    const imagesRental = [
        "/images/marinerental/6169.jpg",
        "/images/marinerental/6177.jpg",
        "/images/marinerental/6197.jpg",
        "/images/marinerental/6225.jpg",
        "/images/marinerental/6242.jpg",
        "/images/marinerental/6260.jpg",
        "/images/marinerental/6273.jpg",
        "/images/marinerental/6304.jpg",
        "/images/marinerental/6312.jpg",
    ]

    const openLightBox = (index) => {

        setPhotoIndex(index)
        setIsOpenRental(true)
    }
    return (
        <main>
            <div>
                {
                    isOpenRental && (
                    <Lightbox
                        mainSrc={imagesRental[photoIndex]}
                        nextSrc={imagesRental[(photoIndex + 1) % imagesRental.length]}
                        prevSrc={imagesRental[(photoIndex + imagesRental.length - 1) % imagesRental.length]}
                        onCloseRequest={() => setIsOpenRental(false)}
                        onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + imagesRental.length - 1) % imagesRental.length)
                        }
                        onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % imagesRental.length)
                        }
                    />
                    )
                }
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="carousel-edit">
                            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="ride" data-bs-interval="6000" data-bs-pause="false">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <Image src="/images/marinerental/6169.jpg" className="d-block w-100" alt="..." width={1500} height={650}/>
                                        {/* <div className="carousel-item-text-1">
                                            MAYCO Tekstil sektörde 36 yıllık güvenilir tecrübe...
                                        </div> */}
                                    </div>
                                    <div className="carousel-item">
                                        <Image src="/images/marinerental/6177.jpg" className="d-block w-100" alt="..." width={1500} height={650}/>
                                        {/* <div className="carousel-item-text-2">
                                            MAYCO Tekstil sektörde 36 yıllık güvenilir tecrübe...
                                        </div> */}
                                    </div>
                                    <div className="carousel-item">
                                        <Image src="/images/marinerental/6197.jpg" className="d-block w-100" alt="..." width={1500} height={650}/>
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
                <div className="row">
                    <div className="col-12 p-4 d-flex flex-column justify-content-center text-center">
                        <br />
                        <h2>
                            J-120 Elegance Yacht For Rental
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales neque est, quis dictum eros ullamcorper aliquam. Nulla at nunc libero. Donec feugiat eros in venenatis hendrerit. Sed a elementum.
                        </p>
                        <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">

                    </div>
                    <div className="col-sm-6">

                    </div>
                </div>
                <div className="row d-flex justify-content-sm-center">
                    <div className="col-sm-11">
                        <Gallery photos={photos} onClick={(e, { index }) => openLightBox(index)} />
                    </div>
                </div>
            </div>
        </main>
    );
}
 
export default MarineRental;