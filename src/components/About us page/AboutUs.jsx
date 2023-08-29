import React from 'react'
import '../About us page/AboutUs.css'

const AboutUs = () => {
    return (
        <section>
            <div className='aboutUs container'>
                <div className='row'>
                    <div className='about col-md-6 col-sm-6 col-xs-12'>
                        <div className="row">
                            <div className='text1 '>
                                ABOUT US
                            </div>
                            <img className='aboutus-img col-sm-12 col-lg-6 w-100 ' src='../AboutUsImages/abotus.png'></img>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-6 col-xs-12'>
                        <h2>Lorem ipsum dolor sit amet.</h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Explicabo, sequi perferendis nesciunt, mollitia repudiandae dolore
                            deleniti molestias, est voluptas eos fugit hic amet modi laborum?
                            Rerum, inventore ullam eaque maxime deserunt repellat veniam
                            obcaecati aliquam.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Explicabo, sequi perferendis nesciunt, mollitia repudiandae dolore
                            deleniti molestias, est voluptas eos fugit hic amet modi laborum?
                            Rerum, inventore ullam eaque maxime deserunt repellat veniam
                            obcaecati aliquam.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Explicabo, sequi perferendis nesciunt, mollitia repudiandae dolore
                            deleniti molestias, est voluptas eos fugit hic amet modi laborum?
                            Rerum, inventore ullam eaque maxime deserunt repellat veniam
                            obcaecati aliquam.</p>
                    </div>
                </div>


                <div className='row aboutUs2 '>
                    <div className="col-4">
                        <h3>
                            <img className='img-fluid headingimage' src="../AboutUsImages/Rectangle heading1.png" alt="image not available" />
                            OUR MISSION
                        </h3>
                        <div className="row">
                            <div className="col-2 vertical">
                                <img className='img-fluid paraimage' src="../AboutUsImages/Rectangle l1.png" alt="" />
                            </div>
                            <div className="col-10">
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam atque corporis tenetur recusandae eaque dicta est beatae quas, quidem natus distinctio quia, labore rem id perspiciatis voluptatem quam hic earum amet impedit! Et quibusdam dolorum quo!
                                </p>
                                <div className='row'>
                                    <div className='col-4 horizontal'>
                                        <img className='img-fluid horizontally' src="../AboutUsImages/Rectangle l2.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <h3><img className='img-fluid headingimage' src="../AboutUsImages/Rectangle heading2.png" alt="" />
                            OUR VISION
                        </h3>
                        <div className="row">
                            <div className="col-2 vertical">
                                <img className='img-fluid paraimage' src="../AboutUsImages/Rectangle heading center.png" alt="" />
                            </div>
                            <div className="col-10">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam atque corporis tenetur recusandae eaque dicta est beatae quas, 
                                        quidem natus distinctio quia, labore rem id perspiciatis voluptatem quam hic earum amet impedit! Et quibusdam dolorum quo!
                                </p>
                                <div className='row'>
                                    <div className='col-4 horizontal'>
                                     <img className='img-fluid horizontally' src="../AboutUsImages/Rectangle heading center2.png" alt="" />
                                </div> 
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <h3><img className='img-fluid headingimage' src="../AboutUsImages/Rectangle heading1.png" alt="" />
                            OUR VALUES
                        </h3>
                        <div className="row">
                            <div className="col-2 vertical">
                                <img className='img-fluid paraimage' src="../AboutUsImages/Rectangle l1.png" alt="" />
                            </div>
                            <div className="col-10">

                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam atque corporis tenetur recusandae eaque dicta est beatae quas, quidem natus distinctio quia, labore rem id perspiciatis voluptatem quam hic earum amet impedit! Et quibusdam dolorum quo!

                                </p>
                                <div className='row'>
                                    <div className='col-4 horizontal'>
                                     <img className='img-fluid horizontally' src="../AboutUsImages/Rectangle l2.png" alt="" />
                                </div> 
                                </div>

                            </div>

                        </div>
                    </div>
                </div>



                <div className="row aboutUs3 d-flex justify-content-center align-items-center">
                    <div className='col-12 heading mx-auto text-center'>
                        OUR TEAM
                    </div>
                    <div className='col-12 heading1 mx-auto text-center'>
                        Lorem ipsum dolor sit amet
                    </div>


                    <div className="row aboutUs4">
                        <div className="col-4 ">
                            <img className='img-fluid' src='../AboutUsImages/Rectangle 1.png'></img>
                            <h3>NAME</h3>
                            <div className="text2">
                                Designation
                            </div>
                        </div>

                        <div className='col-4'>
                            <img className='img-fluid' src='../AboutUsImages/Rectangle 2.png'></img>
                            <h3>NAME</h3>
                            <div className="text2">
                                Designation
                            </div>


                        </div>
                        <div className='col-4'>
                            <img className='img-fluid' src='../AboutUsImages/Rectangle 3.png'></img>
                            <h3>NAME</h3>
                            <div className="text2">
                                Designation
                            </div>

                        </div>
 
                    </div>
                </div>


            </div>

        </section>
    )

}


export default AboutUs