import React from "react";
import "./HomePage.css";
import AboutUs from "./AboutUs";
import Slider1 from "./Slider1";
import SuccessStories from "./SuccessStories";
import Slider2 from "./Slider2";

function HomePage() {
  return (
    <>
    <section className="homepage ">
      <div className="bg-img ">
        <div className="container">
          <div className="row ">
            <div className="col-md-6 col-12 pt-3  h2text">
              <h2 className="text-light mb-5 ">
                We bring <b>PEOPLE</b> together
                <br />
                <br />
                <b>LOVE</b> unites them...
              </h2>
              <div className="outerLFS ">
                <a class="bg-white LFS-btn mt-3 " href="#">
                  Let's Find Someone
                  <i
                    class="fa fa-arrow-right"
                    aria-hidden="true"
                    style={{ marginLeft: "10px" }}
                  ></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-12">
              
              <img className="couple-img my-3 " src="Group 29.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section className="container  section-2_container">
    <div class="card card-filter pt-5 details ">
      <div class="row d-flex justify-content-center mx-3">
        <div class="col-xl-2 col-lg-3 col-md-6 col-12  ">
          <div class="form-group">
            
            <select name="" id=""  class="form-select py-2 pl-4 inputs">
              <option value="" disabled selected>I am Looking for </option>
              <option value="Bride" >Bride</option>
              <option value="Groom"> Groom</option>
            </select>
          </div>
        </div>
        <div class="col-xl-2 col-lg-3 col-md-6 col-12 ">
          <div class="form-group inputs-num">
        
            <input type="number" placeholder="Enter Age Form" class="age py-2 pl-4 inputs" />
          </div>
        </div>
        <div class="col-xl-2 col-lg-3 col-md-6 col-12 ">
          <div class="form-group inputs-num">
            
            
            
            <input type="number" Placeholder="Enter Age Form" class="age py-2 pl-4 inputs"/>
          
          </div>
        </div>
        <div class="col-xl-2 col-lg-3 col-md-6 col-12">
          <div class="form-group">
            
            <select name="" id=""  class="form-select py-2 pl-4 inputs">
              <option value="" disabled selected>Religion </option>
              <option value="Jains" >Jains</option>
              <option value="Sikh"> Sikh</option>
              <option value="Christain"> Christain</option>
              <option value="Hindu"> Hindu</option>
              <option value="Muslims"> Muslims</option>
            </select>
          </div>
        </div>
        <div class="col-xl-2 col-lg-3 col-md-6 col-12">
          <div class="form-group">
            
            <select name="" id=""  class="form-select py-2 pl-4 inputs">
              <option value="" disabled selected>Caste </option>
              <option value="Bride" >Bride</option>
              <option value="Groom"> Groom</option>
            </select>
          </div>
        </div>
        
        
      </div>
      <div className="container-btn col-6 mx-auto py-2 my-4">
        <a href="#" className="py-5 text-center">Let's begin</a>
      </div>
      {/* <div class="row d-flex justify-content-center">
        <div class="col-lg-2 col-md-2 col-6 mt-4 d-flex justify-content-center">
          <div class="form-group container-btn py-2 d-flex justify-content-center">
            <a href="" className="text-center">Let's Begin</a>
          </div>
        </div>
        </div> */}
    </div>
    </section>
    {/* <AboutUs/> */}
    <Slider1/>
    <SuccessStories/>
    <Slider2/>
  </>
  );
}

export default HomePage;
