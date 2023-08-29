import React from 'react'
import './blog.css'
import { NavLink } from 'react-router-dom'


function Blog() {
  return (
    <><br />
        <div className="container blog_container">
            <div className="row">
                <div className="col-4 blog_col p-0">
                    <img className='blog_img mx-0' src="../images/blogimg.jpg" alt="" />
                   <div className='p-3 mt-3'>
                    <h6><i class="fa fa-user"></i>  By Shubham Mathur</h6>
                    <h6><i class="fa fa-clock"></i> Sat 06, Aug 2022</h6>
                    <h6 className='blog_name'>Shubham mathur</h6>
                    <p>Cloud gaming PC had not only made gamer's and streamers life easy but also made it possible for early-stage AI and Deep learning startups as well as Big data scientists to work on big projects without...</p>

                   <div className='d-flex justify-content-center'>
                   <NavLink to='/blog_detail' className="btn blog_btn btn-primary p-2" >Read More</NavLink>
                   </div>
                    </div>
                    
                </div>

            </div>
        </div>
    </>
  )
}

export default Blog