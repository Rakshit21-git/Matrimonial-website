import React from 'react'

function Blog_detail() {
  return (
    <>
    <br />
        <div className="container blog_detail_container">
            <div className="row d-flex justify-content-center">
                <div className="row blog_detail_col p-0 ">
                    <img className='blog_detail_img mx-0 col-6 w-50' src="../images/blogimg.jpg" alt="" />
                   <div className='p-3 mt-3 col-6 p-4'>
                    <h6><i class="fa fa-user"></i>  By Shubham Mathur</h6>
                    <h6 className='blog_clock my-3'><i class="fa fa-clock"></i> Sat 06, Aug 2022</h6>
                    {/* <h6 className='blog_name'>Shubham mathur</h6> */}
                    <p className='blog_p'>Cloud gaming PC had not only made gamer's and streamers life easy but also made it possible for early-stage AI and Deep learning startups as well as Big data scientists to work on big projects without investing a huge amount of money in R&D.</p>

                 
                    </div>
                    
                </div>

            </div>
        </div>
    </>
  )
}

export default Blog_detail