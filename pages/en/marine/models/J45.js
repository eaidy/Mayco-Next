import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Image from "next/image";
import { useState } from "react";
import MarineBoatModel from "../../../../components/MarineBoatModel";
import MarineObject from "../../../../site-data/marine-en.json"
import ReactPlayer from "react-player"

const J45 = () => {

    const [videoDisplay, setVideoDisplay] = useState(false)

    return (
        <>
            <Header headerObject={MarineObject.header}/>
            <main className="wrapper bg-light">
                <div className="model-image-top">
                    <Image onClick={() => setVideoDisplay(true)} src="/images/marinehome/J45-1.jpg" height={800} width={1600} alt="..."/>
                </div>
                <div className="content-model">
                    {/* <div className="container-fluid model-top">
                        <div className="row">
                            <div className="col-12">
                                <ReactPlayer 
                                    light={false} 
                                    url="https://www.youtube.com/watch?v=1SpbIhH34XM&ab_channel=JComposites"
                                    width="100%"
                                    height={260}
                                />
                            </div>
                        </div>
                    </div> */}
                    <section className="container model-under">
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-sm-2 d-flex justify-content-center">
                                <div className="p-3">
                                    <Image src={MarineObject.models.J45.logo} height={160} width={80} alt="..."/>
                                </div>
                            </div>
                            <div className="col-sm-10 d-flex align-items-center">
                                <article>
                                    <h1 style={{ fontSize: 23, marginBottom: 15}}>
                                        NEW J 45
                                    </h1>
                                    <h2 style={{ fontSize: 28, marginBottom: 15}}>
                                        PAVING THE WAY FOR NEW STANDARDS IN CRUISING
                                    </h2>
                                    <p>
                                        Exciting 45’ offshore sailing yacht that may change all of your sailing plans. Leading edge hull design meets refined interior design to raise the bar on cruising comfort and performance like no J before it.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src={MarineObject.models.J45.article1.img} width={1200} height={600} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                        A UNIQUE DESIGN
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                        The association of J Boats’ American pragmatism and J Composites’ French flair is well documented, but somehow it has really taken on its full meaning in the J/45. It has taken over 3 years of collaborative work, mulling over every detail together in the constant search for the best possible balance.
                                        The guiding principle involved maximising the interior volume and comfort whilst retaining an elegant silhouette, a minimal wetted surface area and by far the lowest weight estimate of its category.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src={MarineObject.models.J45.article2.img} width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                        COMBINING A SKILLED INTERIOR DESIGN AND INTERIOR SPACE
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                        The interior coherence and ergonomics of J/ boats at sea is an absolute given. For the J/45 the aim was to push back the boundaries in this regard.
                                        To do this, we teamed up with Isabelle Racoupeau for the interior design. She was able to bring to bear her vast experience in the cruising yacht domain to maximise comfort and elegance aboard the J/45.
                                        The result is an interior beyond compare where natural light accentuates a resolutely modern design that affords both comfort and functionality whilst sailing.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-column-reverse mb-2 py-4 border-bottom">
                            <div className="col-12 py-2 d-flex justify-content-center">
                                <Image src={MarineObject.models.J45.article3.img} width={1200} height={650} alt="..." />
                            </div>
                            <div className="col-12 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                        COMBINING A SKILLED INTERIOR DESIGN AND INTERIOR SPACE
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                        The interior coherence and ergonomics of J/ boats at sea is an absolute given. For the J/45 the aim was to push back the boundaries in this regard.
                                        To do this, we teamed up with Isabelle Racoupeau for the interior design. She was able to bring to bear her vast experience in the cruising yacht domain to maximise comfort and elegance aboard the J/45.
                                        The result is an interior beyond compare where natural light accentuates a resolutely modern design that affords both comfort and functionality whilst sailing.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src={MarineObject.models.J45.article4.img} width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                        COMBINING A SKILLED INTERIOR DESIGN AND INTERIOR SPACE
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                        The interior coherence and ergonomics of J/ boats at sea is an absolute given. For the J/45 the aim was to push back the boundaries in this regard.
                                        To do this, we teamed up with Isabelle Racoupeau for the interior design. She was able to bring to bear her vast experience in the cruising yacht domain to maximise comfort and elegance aboard the J/45.
                                        The result is an interior beyond compare where natural light accentuates a resolutely modern design that affords both comfort and functionality whilst sailing.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4">
                            <div className="col-sm-8 py-3">
                                <Image src={MarineObject.models.J45.article5.img} width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                        COMBINING A SKILLED INTERIOR DESIGN AND INTERIOR SPACE
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                        The interior coherence and ergonomics of J/ boats at sea is an absolute given. For the J/45 the aim was to push back the boundaries in this regard.
                                        To do this, we teamed up with Isabelle Racoupeau for the interior design. She was able to bring to bear her vast experience in the cruising yacht domain to maximise comfort and elegance aboard the J/45.
                                        The result is an interior beyond compare where natural light accentuates a resolutely modern design that affords both comfort and functionality whilst sailing.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4 border-bottom">
                            <div className="col-sm-8 py-3">
                                <Image src={MarineObject.models.J45.article6.img} width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                        COMBINING A SKILLED INTERIOR DESIGN AND INTERIOR SPACE
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                        The interior coherence and ergonomics of J/ boats at sea is an absolute given. For the J/45 the aim was to push back the boundaries in this regard.
                                        To do this, we teamed up with Isabelle Racoupeau for the interior design. She was able to bring to bear her vast experience in the cruising yacht domain to maximise comfort and elegance aboard the J/45.
                                        The result is an interior beyond compare where natural light accentuates a resolutely modern design that affords both comfort and functionality whilst sailing.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-2 py-4 border-bottom ">
                            <div className="col-sm-8 py-3">
                                <Image src={MarineObject.models.J45.article7.img} width={1200} height={700} alt="..." />
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <article>
                                    <h2 style={{ fontSize: 28 }}>
                                        COMBINING A SKILLED INTERIOR DESIGN AND INTERIOR SPACE
                                    </h2>
                                    <p style={{ lineHeight: 2 }}>
                                        The interior coherence and ergonomics of J/ boats at sea is an absolute given. For the J/45 the aim was to push back the boundaries in this regard.
                                        To do this, we teamed up with Isabelle Racoupeau for the interior design. She was able to bring to bear her vast experience in the cruising yacht domain to maximise comfort and elegance aboard the J/45.
                                        The result is an interior beyond compare where natural light accentuates a resolutely modern design that affords both comfort and functionality whilst sailing.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="row mb-2 py-4 border-bottom ">
                            <div className="col-12 d-flex justify-content-center">
                                <div className="table-container text-center p-4">
                                    <h3>
                                        { MarineObject.models.J45.table.header }
                                    </h3>
                                    <br />
                                    <table className="table table-hover table-bordered">
                                        <thead className="align-middle">
                                            <tr className="table-row table-header table-primary">
                                                <th scope="col">
                                                    { MarineObject.models.J45.table.thisHeader }
                                                </th>
                                                <th scope="col">
                                                    { MarineObject.models.J45.table.othersHeader }
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                MarineObject.models.J45.table.rows.map((spec, index) => (
                                                    <tr key={index} className="table-row">
                                                        <td>
                                                            { spec.this }
                                                        </td>
                                                        <td>
                                                            { spec.others }
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        
                    </section>
                </div>
            </main>
            <Footer footerObject={MarineObject.footer}/>
        </>
    );
}
 
export default J45;