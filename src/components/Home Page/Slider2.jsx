import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slider1.css";
import axios from "axios";
import MaleAvaatar from "./../../Assets/MaleAvatar.jpeg";
import FemaleAvaatar from "./../../Assets/femaleAvatar.png";
function Slider2() {
  const [getYourMatches, setYourMatches] = useState([]);
  const [getYourData, setYourData] = useState([]);

  const headers = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ2NjA0YWJmYmQwM2I0MzI1MTY5OWIzIiwiZW1haWxfaWQiOiJwb29qYTIzQG1haWxpbmF0b3IuY29tIiwiZ2VuZGVyIjoiZmVtYWxlIiwidmVyaWZpZWRfc3RhdHVzIjoyLCJhY3RpdmVfc3RhdHVzIjoxLCJreWMiOjEsImlhdCI6MTY5MjI1ODQ3NiwiZXhwIjoxNjkyNDMxMjc2fQ.2Rwmb5ngWe3_EjeuWb-Cr9r-qAwTbV-r4Xm15jSlpnM`,
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const MyMatchesApi = () => {
    axios
      .get(
        `http://52.66.191.213:5000/api/front/user-comman-api/new-match-by-location`,
        {
          headers,
        }
      )
      .then((res) => {
        console.log(res.data);
        const data = [];
        res.data.UserIds?.map((res) => data.push(res._id));
        setYourMatches(data);
      })
      .catch((err) => {});
  };
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

  useEffect(() => {
    MyMatchesApi();
  }, []);

  const getUserData = async (id) => {
    console.log(id)
    await axios
      .get(
        `http://52.66.191.213:5000/api/front/user-comman-api/get-user-by-id?userid=${id.toString()}`,
        {
          headers,
        }
      )
      .then((res) => {
        console.log("RESULT")
        console.log(res);
        console.log("RESULT")
        setYourData(res.data?.joindata);
      })
      .catch((err) => console.log("Data not found "));
      // document.getElementById("showerror2").innerHTML = "Data Not found"
      };
  
  
  useEffect(
    function () {
      getUserData(getYourMatches);
    },
    [getYourMatches]
  );

  return (
    <>
      <section className="container slider my-5">
        <h2>Your Matches</h2>
        {/* <h1 id="showerror2"></h1> */}
        <Carousel responsive={responsive} className="my-5 mx-auto">
        {
        getYourData.length> 0 ?
        getYourData?.map((element) => {
          console.log(element)
          return(
            
          <div className="card slider-card">
            <div className="img_container">
            {element.userprofilesImage?.length === 0 ? 
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
            src={`${process.env.REACT_APP_IMG}/${element?.userprofilesImage[0]?.profile_multi_img}`}
            alt="Card image"
            />

          
          }
          </div>
            <div className="card-body ">
              <h4 className="card-head ">{element?.fristname}</h4>
              <p className="">{element?.usereducationdetails[0]?.user_edu_high_subcategroy[0]?.ef_title}</p>
              <a href="#" class="btn">
                Connect
              </a>
            </div>
          </div>
          
          )
        }) : <h2>Data Not Found</h2>}
        </Carousel>
      </section>
    </>
  );
};

export default Slider2;
