import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slider1.css";
import axios from "axios";
import MaleAvaatar from "./../../Assets/MaleAvatar.jpeg" 
import FemaleAvaatar from "./../../Assets/femaleAvatar.png" 
function Slider1() {
  const [getYourMatches, setYourMatches] = useState([]);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const getNewMatchApi = () => {
    const headers = {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ1YTFiODI1Yjg2ZGZjZDhhZTBlYmZkIiwiZW1haWxfaWQiOiJhcnVuQG9wZW5pbm5vdmF0aW9uc2xhYi5jb20iLCJnZW5kZXIiOiJtYWxlIiwidmVyaWZpZWRfc3RhdHVzIjoxLCJhY3RpdmVfc3RhdHVzIjoxLCJreWMiOjEsImlhdCI6MTY5MjQzNzIwMSwiZXhwIjoxNjkyNjEwMDAxfQ.8E7CFxDkULE-UIgepIv5xPll0GZHsUON7lRCjbnzoVI`,
      "Content-Type": "application/x-www-form-urlencoded",
    };
    axios
      .get(
        "http://52.66.191.213:5000/api/front/user-comman-api/new-match-api",
        { headers }
      )
      .then((res) => {
        setYourMatches(res.data?.partners)
      })
      .catch((err) => console.log("Data not found "));
      // document.getElementById("showerror").innerHTML = "Data Not found"
      };
  
  useEffect(() => {
    getNewMatchApi();
  }, []);
  {
    console.log("getYourMatches.length...............");console.log(getYourMatches.length)
  }
  return (
    <>
      <section className="container slider my-5">
        <h2>Your Matches</h2>
        <h1 id="showerror"></h1>
        <Carousel responsive={responsive} className="my-5 mx-auto">
        
        
        {
        getYourMatches.length>0 ?
        getYourMatches.map((element) => {
          // console.log(element)
          return(
            
          <div className="card slider-card">

            {element.userprofilesList?.length === 0 ? 
            <img
            className="card-img-top full_card card_image"
            style={{ borderRadius: "20px" }}
            src={element?.gender === "male"? MaleAvaatar: FemaleAvaatar}
            alt="Card image"
          />
            :
            <img
            className="card-img-top full_card card_image"
            style={{ borderRadius: "20px" }}
            src={`${process.env.REACT_APP_IMG}/${element?.userprofilesList[0]?.profile_multi_img}`}
            alt="Card image"
            />
          }
            <div className="card-body ">
              <h4 className="card-head ">{element.fristname}</h4>
              <p className="">{element?.usereducationdetails[0]?.user_edu_high_subcategroy[0]?.ef_title}</p>
              <a href="#" class="btn">
                Connect
              </a>
            </div>
          </div>
       
        
          )
        }) :<h2>Data Not Found</h2>
      }
        </Carousel>
      </section>
    </>
  );
  }

export default Slider1;
