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
            <div className="container-fluid m-0 p-0">
                <div className="row">
                    <div className="col-sm-4 d-flex justify-content-start">
                        <Image src="/images/marinerental/archimedes.jpeg" height={480} width={360} alt="..."/>
                    </div>
                    <div className="col-sm-8">
                        <div>
                            <h2 className="text-center">
                                ARCHIMEDES ile tanışın!
                            </h2>
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
                    <div className="col-sm-12">
                        <Gallery photos={photos} onClick={(e, { index }) => openLightBox(index)} />
                    </div>
                </div>
            </div>
        </main>
    );
}
 
export default MarineRental;