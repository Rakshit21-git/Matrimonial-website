import React, { useEffect, useState } from 'react'
import './membership.css'
import axios from 'axios';
import AddOn from './AddOn';
function Membershipcard() {
  const [getData, setData] = useState([]);

  const getApiData = async () => {
    await axios.get(`${process.env.REACT_APP_FRONT}/user-comman-api/get-membership-plan`).then((res) => {

      setData(res.data.data)
      // console.table(res.data.data);
    }).catch(err => console.log(err))
  }
  function calculateMonthsAndDays(days) {
    const daysInMonth = 30;

    const months = Math.floor(days / daysInMonth);
    const remainingDays = days % daysInMonth;

    return { months, remainingDays };
  }



  useEffect(() => {
    getApiData();
  }, [])

  return (
    <>a
      <div className="container">
        <div className="row justify-content-center mt-5 mb-2 ">
          <div className="membership_head justify-content-center d-flex">
            <h2> Membership <span>Plan</span> <img src="../images/download.png" alt="" /></h2>
          </div>
        </div>
        <div className="row">


          {
            getData.length > 0 ?
              getData.map((element) => {
                if (element.mp_dis_price == 0) {
                  element.mp_dis_price = element.mp_price;
                }

                let inputDays = 0;
                inputDays = element.mp_duration

                if (!isNaN(inputDays)) {
                  const result = calculateMonthsAndDays(inputDays);
                  if (result.months == 0) {
                    var time = `${result.remainingDays} Days`;
                  }
                  else {
                    time = `${result.months} Month ${result.remainingDays} Days`;
                  }

                } else {
                  console.log("Invalid input. Please enter a valid number of days.");
                }

                return (<div className="col-lg-4 col-md-6 col-12 p-0 my-2 ">
                  <div className='membership_main_col mx-1'> <div className="membership_col1 py-5">
                    <h4 className='text-white'>{element.mp_name}</h4>
                    <h4 className='text-white ' id='price'><sup>₹</sup>{element.mp_dis_price}<span>/ month</span></h4>
                    <h4 id="membership_h4_3"
                    // className={`${element.mp_price === element.mp_dis_price && "d-none"}`}
                    ><sup>₹</sup>
                      {element.mp_price}
                    </h4>
                  </div>
                    <div className="membership_col2 py-4">
                      <ul >
                        <li>View unlimited profiles</li>
                        <li>Send unilimited Express interest invites</li>
                        <li>{time}</li>
                        <li>View {element?.mp_dir_contact_count} contact for direct communication</li>
                        <li style={{ textDecoration: "line-through" }} >Highlight your profile for greater visibility</li>
                        <li style={{ textDecoration: "line-through" }}>View Kundalis for compatibility</li>
                        <li style={{ textDecoration: "line-through" }}>Get Priority listing in search results</li>
                      </ul>
                      <button type="button" class="btn mt-5 px-5 py-2  membership_btn">Buy Now</button>
                    </div>
                  </div></div>
                )
              }) : <h1>Data Not Found</h1>
          }

        </div>
      </div>
      <AddOn />
    </>
  )
}

export default Membershipcard