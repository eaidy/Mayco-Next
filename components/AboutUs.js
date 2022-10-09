const AboutUs = ({ aboutObject }) => {
    return (
        <section className="container-fluid about-us-section py-5 px-1">
            <div className="row"></div>
            <div className="col-12 d-flex justify-content-center">
                <article className="text-center">
                    <h4 className="mb-4">
                        { aboutObject.header }
                    </h4>
                    <p>
                        { aboutObject.text }
                    </p>
                </article>
            </div>
        </section>
    );
}
 
export default AboutUs;