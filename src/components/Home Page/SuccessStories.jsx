import { useEffect, useState } from "react";
import "./SuccessStories.css";
import axios from "axios";

function SuccessStories() {
  const [getStory, setStory] = useState([]);
  const successStoriesapi = () => {
    axios
      .get(
        "http://52.66.191.213:5000/api/front/user-comman-api/get-success-story"
      )
      .then((res) => {
        console.log(res);
        setStory(res.data.data);
        // console.log(setStory)
        console.log(res.data?.data);
      });
  };
  useEffect(() => {
    successStoriesapi();
  }, []);
  {
    
      // console.log(element);
      return (
        <section className="successStories mt-5 container">
          <h2 className="text-center mb-3">
            <span className="text-rose"> Success</span> Stories{" "}
            <img src="3heart.png" alt="" />
          </h2>
          <p className="text-center mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
            eiusmod tempor incididunt ut labore et <br />
            dolore magna aliqua.
          </p>
          {getStory.slice(0,3).map((element,index) => {
            console.log(element)
            
            return(
          <div key={index} className={index%2===0 ? "row h-75 " : "row h-75 flex-row-reverse"}  >    
            <div className="col-md-6 col-12 mt-5 pl-5 ">
              <img
                src={`${process.env.REACT_APP_IMG}/${element?.story_img}`}
                className="client-img w-100 h-75 p-2"
                alt=""
              />
            </div>
            <div className="col-md-6 col-12 mt-5 about-client">
              <div className="ml-5 mt-5">
                <h4 >
                  {element.story_name}
                  <img
                    src="3heart.png"
                    alt=""
                    width="40px"
                    className="mb-5 pb-5"
                  />
                </h4>
                
                <p className="pb-4 pe-5">
                {/* {element.story_review} */}
                <div dangerouslySetInnerHTML={{ __html: element.story_review  }}></div>
                </p>
                <a
                  href=""
                  className="text-light text-center bg-rose py-2 px-5 border-rounded"
                >
                  Know More
                </a>
              </div>
            </div>
          </div>
          )
          })}
        </section>
      )
    
  }
}

export default SuccessStories;
