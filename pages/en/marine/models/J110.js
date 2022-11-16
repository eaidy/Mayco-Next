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
    for(let i = 2; i < 19; i ++ ) {
        images.push({
            original: '/images/marinemodels/J110/J110-' + i + '.webp',
            thumbnail: '/images/marinemodels/J110/J110-' + i + '.webp'
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
            <main className="wrapper bg-light">
                <div className="model-image-top">
                    <Image onClick={() => setVideoDisplay(true)} src="/images/marinemodels/J110/J110-1.webp" height={800} width={1600} alt="..."/>
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
                                <i>J-110</i> ELEGANCE YACHT
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
                                Lorem Ipdsum dolor sat
                            </p>
                        </MovingText>
                    </div>
                </div>
                <div className="content-model">
                    <div className="container model-under p-3 border-bottom">
                        <div className="row my-3">
                            <div className="col-12">
                                <h2 className="text-center py-3">
                                The Superbly Comfortable, Double-Handed Performance Cruiser
                                </h2>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-sm-6">
                                <article>
                                    <h4>
                                    Superior Cruising Performance
                                    </h4>
                                    <p>
                                    <br />
                                    VMG is the best measure of sailboat performance; Velocity Made Good straight into the wind or away from the wind, regardless of tacking or jibing angles. A J/110 sailing at 6.6 knots, 41 degrees off the true wind (27 degrees apparent wind angle), makes good a velocity (VMG) of 5.0 knots straight into the wind. This is the speed attained by larger 42- 46 foot yachts such as Aldens, Hinckleys, Sabres or Little Harbors. <br /> <br />
                                    J/110's performance is a function of low vertical center of gravity (VCG), a narrow waterline, draft and a higher sail area to displacement ratio. A key contributor to lowering weight in the design is high-tech Baltek laminate construction with 65-70% glass content from TPI's patented SCRIMP resin-infusion process. And, owners can go one step further to lowering VCG with an optional Hall Spars carbon-fiber mast. The 100 lbs. saved up high is the equivalent of having two 180 lb. crew hiking out on the rail when sailing to windward. Reaching at 8+ knots becomes almost a daily occurrence on a J/110 with the J/Sprit and asymmetrical spinnakers.
                                    </p>
                                </article>
                                <article>
                                    <h4>
                                        <br/>
                                    On-Deck Comfort
                                    </h4>
                                    <p>
                                    <br />
                                    "The J/110's cockpit is ideal for cruising because one person can sail the boat with mainsheet, genoa and backstay adjuster all within reach. And, the helmsman can comfortably lean out against the lifelines, holding the wheel to steer while seeing the headsail." <br /><br />
                                    The dodger completely covers the companionway and forward seats of the cockpit. With dodger side-curtains in place and an autopilot remote control, this is a great location for an "inside" piloting station or going on deck to join the skipper for a cup of coffee, without having to suit up.
                                    </p>
                                </article>
                            </div>
                            <div className="col-sm-6">
                                <article>
                                    <p>
                                    Two people can safely fly the asymmetrical spinnaker on its 5.5 foot retractable carbon-fiber J/Sprit. No one has to go on deck when the spinnaker is deployed. It's contained in a snuffer sock operated from the cockpit. Jibing is as easy as letting go the old sheet and pulling in the new one. <br /> <br />
                                    Sailing downwind, the spinnaker projects out to windward from behind the wind shadow of the mainsail, driving the apparent wind as much as 45 degrees forward of true wind direction.
                                    </p>
                                </article>
                                <article>
                                    <h4>
                                        <br/>
                                    The Liveable Interior of A Classic Yacht
                                    </h4>
                                    <p>
                                        <br />
                                    When you go offshore in a seaway or spend several days living aboard, you will appreciate the J/110's interior design. It's light and open. The impression is clean and functional. The eye can see the shape of the hull from below, like a classic canoe. Yet, looking outside from below, the view is over the deck through large ports. It's as though one didn't go below-decks at all. <br /> <br />
                                    The sense of spaciousness is created by J/110's classic American cruising yacht decor: "Antique white" panels beautifully trimmed in cold-molded teak. <br /> <br />
                                    The owner's stateroom is located in the forepeak, a traditional favorite dating back to the 1920's when people spent more time cruising. They learned there's less action and less noise forward of the main bulkhead. One's sleep is not disrupted by late-night storytellers, noisy crew boarding the boat rafted alongside, or early morning pot-bangers. A solid teak and stainless steel main cabin drop-leaf table is placed away from the bulkhead and between settees for better access and as a brace when moving through the cabin at sea.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-12">
                                <h2 className="text-center py-3">
                                J/110 - Tech Specs
                                </h2>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center my-5">
                            <div className="col-10 d-flex align-items-center">
                                <Image src="/images/marinemodels/J110/J110-schema.webp" height={375} width={665} alt="..."/>
                                <Image src="/images/marinemodels/J110/J110-specs.png" height={600} width={250} alt="..."/>
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