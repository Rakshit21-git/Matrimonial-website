import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AddOn() {
    const [getData, setData] = useState([]);

  const getApiData = async () => {
    await axios.get(`${process.env.REACT_APP_FRONT}/user-comman-api/get-addon-plans`).then((res) => {

      setData(res.data.data)

    })
  }
  
  useEffect(() => {
    getApiData();
  }, [])

  return (
    <>
<div className="container mt-5 mb-2">
<div className="row justify-content-center   ">
          <div className="membership_head justify-content-center d-flex">
            <h2> Add-On Package  <img src="../images/download.png" alt="" /></h2>
          </div>
        </div>
        <div className="row membership_row">
            { 
                getData.length>0 ?
                getData.map((element)=>{
                    if(element.adp_dis_price == 0){
                        element.adp_dis_price = element.adp_price;
                      }
                    return(
                    
          <div className="col-lg-4 col-md-6 col-12   p-0 my-2">
            <div className='membership_main_col mx-1'> <div className="membership_col1 py-5">
              <h4 className='text-white'>{element.adp_name}</h4>
              <h4 className='text-white'><sup>₹</sup>{element.adp_dis_price}<span>/ month</span></h4>
              <h4 id='membership_h4_3' className={`${element.adp_price === element.adp_dis_price && "d-none"}`}><sup>₹</sup>{element.adp_price > 1 ? `${element.adp_price}` : `${element.adp_dis_price}`}</h4>
            </div>
              <div className="membership_col2 py-4">
                <ul >
                  <li>View unlimited profiles</li>
                  <li>Send unilimited Express interest invites</li>
                  <li className={` ${element.adp_standout_profile === 0 && "text-decoration-line-through"} `} >
                    {element.adp_standout_profile === 1 ? "Highlight your profile for greater visibility":"Highlight your profile for greater visibility"}
                  </li>
                  <li className={`${element.adp_top_placement_search ===0 && "text-decoration-line-through"}`}>{element.adp_top_placement_search === 1 ? "Get Priority listing in search results    " : "Get Priority listing in search results"}</li>
                  <li className={`${element.adp_kundali_match_count === 0 && "text-decoration-line-through"}` }>{element.adp_kundali_match_count > 0 ? `View ${element.adp_kundali_match_count} Kundalis for compatibility` : "View Kundalis for compatibility"} </li>
                </ul>
                <button type="button" class="btn mt-5 px-5 py-2 btn-primary  membership_btn">Buy Now</button>
              </div>
            </div>
          </div>
                    )
                }) : <h1>Data Not Found</h1>
            }
        </div>
</div>
    </>
  )
}

export default AddOn