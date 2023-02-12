import Image from "next/image";

const AboutUs = ({ corporotePageObject }) => {
    return (
            
            <article>
                <div>
                    <h3 className="mb-3 py-3 border-bottom">
                        { corporotePageObject.header }
                    </h3>
                </div>
                <div className="my-4">
                    <p className="lh-lg">
                        { corporotePageObject.text }
                    </p>
                </div>
                <figure>
                    <div className="container-fluid d-flex justify-content-center">
                        <Image src={corporotePageObject.img} width={1000} height={500} alt={corporotePageObject.alt}/>
                    </div>
                </figure>
            </article>
    );
}
 
export default AboutUs;