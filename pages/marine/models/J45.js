import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Image from "next/image";
import { useState } from "react";
import MarineObject from "../../../site-data/marine-tr.json"
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import ReactPlayer from "react-player"
import MovingText from 'react-moving-text'

const J45 = () => {

    const [videoDisplay, setVideoDisplay] = useState(false)


    const { deviceHeight, deviceWidth } = useWindowDimensions();
    const [navs, setNavs] = useState(MarineObject.models.J45.equipment.navs)

    return (
        <>
            <Header headerObject={MarineObject.header}/>
            <main className="wrapper bg-light">
                <div className="model-image-top">
                    <Image onClick={() => setVideoDisplay(true)} src="/images/marinehome/J45-1.jpg" height={800} width={1600} alt="..."/>
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
                                <i>J-45</i> ELEGEANCE YACHT
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
                    <div className="container model-under">
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
                        <div className="row mb-2 py-4">
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
                    </div>
                    <section className="tabs">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                <h2 className="text-center fs-3 my-4 py-3 border-bottom">EQUIPMENT</h2>
                                    <ul className="nav nav-tabs my-3 py-2 d-flex justify-content-center flex-md-row flex-column border-0">
                                        {
                                            navs.map((nav, indexTab) => (
                                                <li key={indexTab} className="mx-md-4 d-flex justify-content-center equipment-nav">
                                                    <a
                                                        onClick={() => {
                                                            setNavs((prev) => {
                                                                const buffer = prev
                                                                buffer.map((navb, indexb) => {
                                                                    if(indexb === indexTab) {
                                                                        navb.isActive = true
                                                                    } else {
                                                                        navb.isActive = false
                                                                    }
                                                                })
                                                                console.log(buffer)
                                                                return [
                                                                    ...buffer
                                                                ]
                                                            })
                                                        }}
                                                        style={nav.isActive ? { color: "#5F9DF7" } : {}}
                                                    >
                                                    {
                                                        nav.label
                                                    }
                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center mx-0 my-4">
                            {   
                                navs.filter((navActive) => navActive.isActive)[0].panels ?
                                navs.filter((navActive) => navActive.isActive)[0].panels.map((panel, indexPanel) => (
                                    
                                        <article key={indexPanel} className="col-md-3 justify-content-center equipment-panel">
                                            <figure className="d-flex equipment-image">
                                                <Image src={panel.img} height={380} width={440} alt="..." />
                                            </figure>
                                            <h4 className="text-center">
                                                { panel.header }
                                            </h4>
                                            <p>
                                                { panel.text }
                                            </p>
                                        </article>
                                )) : navs.filter((navActive) => navActive.isActive)[0].pics.map((pic, indexPic) => (
                                    <div key={indexPic} className="col-md-5 d-flex justify-content-center flex-row">
                                        <Image src={pic} height={350} width={350} alt="..." />
                                    </div>
                                ))
                            }
                        </div>
                    </section>
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
                                url='https://www.youtube.com/watch?v=1SpbIhH34XM&ab_channel=JComposites'
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
 
export default J45;