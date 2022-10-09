const TextileProducts = ({ productsObject }) => {
    return (
        <>
            <section>
                <div className="sidebar d-flex justify-content-center mt-2">
                    <ul>
                    {
                        productsObject.scrollNavs.map((scrollNav, index) => (
                            <li
                                key={index}
                                className={"sidebar-nav p-2" + " " + "sidebar-" + scrollNav.path }
                            >
                                <div className="">
                                    <a href={"#" + scrollNav.path} className="m-4">
                                        { scrollNav.text }
                                    </a>
                                </div>
                            </li>    
                        ))
                    }
                    </ul>
                </div>
            </section>

            <section className="p-3">
                <div className="container-fluid p-3">
                    <div id="curtain" className="row my-5">
                        <div className="col-sm-6 d-flex justify-content-center align-items-center product-item text-center ">
                            <div>
                                <h3>
                                    Perde
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non bibendum eros. Sed ullamcorper imperdiet rhoncus. Vestibulum porttitor eu turpis nec ullamcorper. Duis at ornare quam, a vulputate tellus. Nunc nec ante magna. In euismod rutrum purus, non sagittis justo vulputate commodo. Integer dui turpis, malesuada vel scelerisque at, tristique et est. Aenean eu dui semper, vulputate ligula sed, venenatis turpis. Etiam laoreet leo a rhoncus auctor. Ut commodo nisl eu tincidunt tempor. Proin vitae libero quis eros bibendum ultrices efficitur eget elit. Aenean hendrerit molestie libero in venenatis. Donec elementum tincidunt porttitor.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-6 d-flex justify-content-center align-items-center product-item">

                        </div>
                    </div>
                    <div id="fabric" className="row my-5">
                        <div className="col-sm-6 product-item">
  
                        </div>
                        <div className="col-sm-6 d-flex justify-content-center align-items-center product-item text-center">
                            <div>
                                    <h3>
                                        Fabric
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non bibendum eros. Sed ullamcorper imperdiet rhoncus. Vestibulum porttitor eu turpis nec ullamcorper. Duis at ornare quam, a vulputate tellus. Nunc nec ante magna. In euismod rutrum purus, non sagittis justo vulputate commodo. Integer dui turpis, malesuada vel scelerisque at, tristique et est. Aenean eu dui semper, vulputate ligula sed, venenatis turpis. Etiam laoreet leo a rhoncus auctor. Ut commodo nisl eu tincidunt tempor. Proin vitae libero quis eros bibendum ultrices efficitur eget elit. Aenean hendrerit molestie libero in venenatis. Donec elementum tincidunt porttitor.
                                    </p>
                                </div>
                            </div>
                    </div>
                    <div id="towel" className="row my-5">
                        <div className="col-sm-6 d-flex justify-content-center align-items-center product-item text-center">
                            <div>
                                    <h3>
                                        Towel
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non bibendum eros. Sed ullamcorper imperdiet rhoncus. Vestibulum porttitor eu turpis nec ullamcorper. Duis at ornare quam, a vulputate tellus. Nunc nec ante magna. In euismod rutrum purus, non sagittis justo vulputate commodo. Integer dui turpis, malesuada vel scelerisque at, tristique et est. Aenean eu dui semper, vulputate ligula sed, venenatis turpis. Etiam laoreet leo a rhoncus auctor. Ut commodo nisl eu tincidunt tempor. Proin vitae libero quis eros bibendum ultrices efficitur eget elit. Aenean hendrerit molestie libero in venenatis. Donec elementum tincidunt porttitor.
                                    </p>
                                </div>
                            </div>
                        <div className="col-sm-6 d-flex justify-content-center align-items-center product-item">

                        </div>
                    </div>
                    <div id="tshirt" className="row my-5">
                        <div className="col-sm-6 d-flex justify-content-center align-items-center product-item">

                        </div>
                        <div className="col-sm-6 d-flex justify-content-center align-items-center product-item text-center">
                            <div>
                                <h3>
                                    T-Shirt
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non bibendum eros. Sed ullamcorper imperdiet rhoncus. Vestibulum porttitor eu turpis nec ullamcorper. Duis at ornare quam, a vulputate tellus. Nunc nec ante magna. In euismod rutrum purus, non sagittis justo vulputate commodo. Integer dui turpis, malesuada vel scelerisque at, tristique et est. Aenean eu dui semper, vulputate ligula sed, venenatis turpis. Etiam laoreet leo a rhoncus auctor. Ut commodo nisl eu tincidunt tempor. Proin vitae libero quis eros bibendum ultrices efficitur eget elit. Aenean hendrerit molestie libero in venenatis. Donec elementum tincidunt porttitor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default TextileProducts;