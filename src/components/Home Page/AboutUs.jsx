import React from 'react'
import './AboutUs.css'
function AboutUs() {
  return (
    <section className='container AboutUs'> 
        <h2 className='text-center my-5 head'><span className='rose-text'>About</span> Us <img src="3heart.png" alt="" /></h2>
        <div className="row">
            <div className="col-md-7 ">
                <img src="couple1.jpg" className='couple-img w-100 h-100' alt="" />
            </div>
            <div className="col-md-5">
                <h2 className='text-center head pt-5 pb-3 '>Connect <span className='rose-text'>With</span> Us</h2>
                <p className='p-font'>
                Hi, Welcome to Unbachelor, the ultimate destination for individuals seeking a lifelong companionship and the joy of matrimony. We understand that finding the perfect life partner is a significant decision, and we are here to make the journey easier, more enjoyable, and successful for you.
                </p>
                <p className='p-font'>
                At Unbachelor, we believe that every person deserves to find love and happiness. We are dedicated to providing a safe and reliable platform where single individuals from diverse backgrounds can connect, interact, and build meaningful relationships <br /> <br />
                <a href="" className=' bg-rose p-3 text-light view-more-btn text-center' style={{textDecoration:"none" ,fontWeight:"650"}}>View More</a>
                </p>
            </div>
        </div>
    </section>
  )
}

export default AboutUs