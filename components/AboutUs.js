import Image from "next/image";

const AboutUs = ({ corporotePageObject }) => {
    return (
            <div className="p-2">
                <article className="">
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
                    <div>
                        <Image src={corporotePageObject.img} width={1200} height={350}/>
                    </div>
                </article>
            </div>
    );
}
 
export default AboutUs;