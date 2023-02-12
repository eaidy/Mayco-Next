import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import MarineObject from "../../../../site-data/marine-en.json"
import { useState } from "react";
import { useWindowDimensions } from "../../../../hooks/useWindowDimensions";
import ReactPlayer from "react-player";
import MovingText from 'react-moving-text'
import Image from "next/image";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const images = () => {
    const images = []
    for(let i = 1; i < 10; i ++ ) {
        images.push({
            original: '/images/marinemodels/J9/J9-' + i + '.webp',
            thumbnail: '/images/marinemodels/J9/J9-' + i + '.webp'
        })
    }
    return images
}

const J110 = () => {

    const [videoDisplay, setVideoDisplay] = useState(false)

    const { deviceHeight, deviceWidth } = useWindowDimensions();
    const [J9Images, ] = useState(images)

    return (
        <>
            <Header headerObject={MarineObject.header}/>
            <main className="wrapper">
                <div className="model-image-top">
                    <Image onClick={() => setVideoDisplay(true)} src="/images/marinemodels/J9/J9-1.webp" height={1500} width={3000} alt="J-9 Elegance Yacht"/>
                    <div className="model-video-button-div">
                        <button 
                            className="model-video-button"
                            onClick={() => setVideoDisplay(!videoDisplay)}
                        >
                            WATCH THE MEDIA
                        </button>
                    </div>
                    <div className="model-top-text">
                        <MovingText
                            type="fadeInFromTop"
                            duration="2400ms"
                            delay="0s"
                            direction="normal"
                            timing="ease"
                            iteration="1"
                            fillMode="none"
                        >
                            <h1>
                                <i>J-9</i> ELEGANCE YACHT
                            </h1>
                        </MovingText>
                        <MovingText
                            type="fadeInFromBottom"
                            duration="2400ms"
                            delay="0s"
                            direction="normal"
                            timing="ease"
                            iteration="1"
                            fillMode="none"
                        >
                            <p>
                                
                            </p>
                        </MovingText>
                    </div>
                </div>
                <div className="content-model">
                    <div className="container model-under p-3 border-bottom">
                        <div className="row my-3">
                            <div className="col-12">
                                <h2 className="text-center py-3">
                                J/9 - The Most Comfortable Cockpit Ever?
                                </h2>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-sm-6">
                                <p>
                                Responding to a growing need amongst sailors for a more comfortable, simpler and easy-to-own daysailer, J/Boats is excited to announce a sleek new 28 footer (the “J/9”) with perhaps the most comfortable cockpit and easiest-to-manage sailplan in this size range. 
                                </p>
                                <p>
                                “With the J/9, we set out to reimagine how to make sailing easier, more relaxing and more inclusive,” said Jeff Johnstone of J/Boats. “This is a boat you can sail by yourself in just a few minutes, or bring along the whole gang with plenty of room to spare. Escaping to the water and enjoying shared family adventure has never been more important, and the J/9 is the perfect platform.”
                                </p>
                                <p>
                                The J/9 cockpit has four great corner seats to nestle into and enjoy the day. With friends and family aboard, everyone can find the perfect place to relax. And access aboard has never been easier. A swim platform behind the cockpit allows walk-through boarding, and on those downwind sails home, you can cool off by dragging your feet in the water.
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p>
                                Sailing the J/9 is as easy as hoisting the mainsail and trimming the sheet. Why make it any more complicated? Look around on the water and you’ll notice 80% of the sailboats are sailing with only one sail. The answer is keep it simple!  One tiller, one sheet. The big difference with the J/9 is you will be sailing with one sail more comfortably and quicker than most others with two sails or under motor. Ready for the afterburners? Simply unroll the jib and enjoy effortless, stable & smooth sailing from the comforts of the best J/Boats cockpit ever.  
                                </p>
                                <p>
                                The daysailing community has not benefitted from a dedicated design from J/Boats since the award-winning J/100 (33’), which remains one of the most sought-after J’s created. The NEW J/9 offers the cockpit comfort and sailing features of a larger boat, at a price most will find competitive to the best brokerage offerings.
                                </p>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-12">
                                <h2 className="text-center py-3">
                                J/9 - Tech Specs
                                </h2>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center my-5">
                            <div className="col-10">
                                <Image src="/images/marinemodels/J9/J9-schema.webp" height={359} width={1154} alt="J-9 Schema"/>
                                <Image src="/images/marinemodels/J9/J9-schema-2.webp" height={359} width={1154} alt="J-9 Schema"/>
                                <Image src="/images/marinemodels/J9/J9-specs.png" height={550} width={1100} alt="J-9 Technical Specifications"/>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-12">
                                <h2 className="text-center py-3">
                                J/9 Specification Highlights
                                </h2>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center my-5">
                            <div className="col-10">
                                <ul>
                                    {
                                        MarineObject.models.J9.specs.map((spec, index) => (
                                            <li
                                                key={index}
                                            >
                                                <p>
                                                    { spec }
                                                </p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container model-under">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="text-center my-3 py-2">
                                GALLERY
                                </h2>
                                <ImageGallery items={J9Images}/>
                            </div>
                        </div>
                    </div>
                </div>
                {
                videoDisplay && (
                    <div onClick={() => setVideoDisplay(false)} className="lightbox-video">
                        <button 
                            className="lightbox-close-button"
                            onClick={() => setVideoDisplay(false)}
                        >
                            Çıkış
                        </button>
                        <div className="lightbox-youtube">
                            <ReactPlayer 
                                url='https://www.youtube.com/watch?v=qe6gijPDQZs&ab_channel=CharlotteKinkade'
                                controls={true}
                                width={16*(deviceWidth/20)}
                                height={9*(deviceWidth/20)}
                            />
                        </div>
                    </div>
                )
            }
            </main>
            <Footer footerObject={MarineObject.footer}/>
        </>
    );
}
 
export default J110;