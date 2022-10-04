import { Carousel } from 'react-responsive-carousel';
import GoogleMapReact from 'google-map-react';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css"

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MarineHome = ({ homeObject }) => {

    const defaultProps = {
        center: {
          lat: 41.036230,
          lng: 28.989316
        },
        zoom: 18
      };

    return (
        <>
            <section>
                <Carousel
                    autoPlay={true}
                    interval={5000}
                    infiniteLoop={true}
                    stopOnHover={false}
                    dynamicHeight={true}
                    showThumbs={false}
                    emulateTouch={true}
                    swipeable={true}
                    showStatus={false}
                    transitionTime={1000}
                    animationHandler={"fade"}
                >
                    <div>
                        <img src="/images/marinehome/J121-2.jpg" />
                    </div>
                    <div>
                        <img src="/images/marinehome/J45-1.jpg" />
                    </div>
                    <div>
                        <img src="/images/marinehome/J80.jpg" />
                    </div> 
                </Carousel>
            </section>

            <section className="marine-home-section p-md-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 pb-5 d-flex justify-content-center">
                            <article className="marine-about text-center py-3 w-75">
                                <h4 className="mb-4 py-3">
                                    { homeObject.article1.title}
                                </h4>
                                <p>
                                    { homeObject.article1.paragraph1}
                                </p>
                                <p>
                                    { homeObject.article1.paragraph2 }
                                </p>
                            </article>
                        </div>
                    </div>
                    <div className="row px-md-3">
                        <div className="col-sm-4 d-flex justify-content-center">
                            <div className="marine-sub-article d-flex justify-content-center p-2 border border-seconday border-1
                            ">
                                <article className="text-center">
                                    <figure>
                                        <img className="img-responsive" src="/images/marinehome/about-1.jpeg" />
                                    </figure>
                                    <h6>{ homeObject.subarticles.sub1.title }</h6>
                                    <p>
                                        { homeObject.subarticles.sub1.text }
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="col-sm-4 d-flex justify-content-center">
                            <div className="marine-sub-article d-flex justify-content-center p-2 border border-seconday border-1">
                                <article className="text-center">
                                    <figure>
                                        <img className="img-responsive" src="/images/marinehome/J121-3.jpg" />
                                    </figure>
                                    <h6 className="my-3">{ homeObject.subarticles.sub2.title }</h6>
                                    <p>
                                        { homeObject.subarticles.sub2.text }
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="col-sm-4 d-flex justify-content-center">
                            <div className="marine-sub-article d-flex justify-content-center p-2 border border-seconday border-1">
                                <article className="text-center">
                                    <figure>
                                        <img className="img-responsive" src="/images/marinehome/about-2.jpeg" />
                                    </figure>
                                    <h6>{ homeObject.subarticles.sub3.title }</h6>
                                    <p>
                                        { homeObject.subarticles.sub3.text }
                                    </p>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div style={{ height: '50vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <AnyReactComponent
                        lat={41.036230}
                        lng={28.989316}
                        text="MAYCO Inc"
                        />
                    </GoogleMapReact>
                </div>
            </section>
        </>
    );
}
 
export default MarineHome;