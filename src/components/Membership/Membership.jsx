import React from 'react'
import Membershipcard from './membershipcard'

function Membership() {
  
  return (
    <>
      <br />
      <div className="container">
        <div className="row justify-content-center mt-5 mb-2 ">
          <div className="membership_head justify-content-center d-flex">
            <h2> Membership <span>Plan</span> <img src="../images/download.png" alt="" /></h2>
          </div>
        </div>
        <div className="row">
          <Membershipcard sign="₹" price="33" total="33" title="dsfdfd" days="3 Days" contact="3" />
          <Membershipcard price="33" sign="₹" total="33" title="dfdfds" days="1 Month 3 Days " contact="33" />
          <Membershipcard price="3" sign="₹" total="3" title="dfdsfds" days="1 Month 2 Days" contact="3" />
          <Membershipcard title="fdfdfsfds" price="3" sign="₹" total="333" days="3 Days" contact="3" />
          <Membershipcard title="1-day plan" price="50" sign="₹" total="100" days="1 Days" contact="10" />
          <Membershipcard title="asdas" price="2000" sign="₹" total="6000" days="1 Month 0 Days" contact="20" />
          <Membershipcard title="adsasd" price="121" sign="₹" total="213" days="7 Month 3 Days" contact="123" />
          <Membershipcard title="premdsss" price="4000" total="" days="22 Days" contact="10" />
          <Membershipcard title="buyyy" price="2000" sign="₹" total="5000" days="20 Days" contact="300" />
          <Membershipcard title="ABCD" price="200000" total="" days="20 Days" contact="3" />
          <Membershipcard title="wewwer" price="2000" sign="₹" total="4000" days="2 Month 16 Days" contact="34324 " />
        </div>
        <div className="row justify-content-center mt-5 mb-2 ">
          <div className="membership_head justify-content-center d-flex">
            <h2> Add-On Package  <img src="../images/download.png" alt="" /></h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12   p-0 my-2">
            <div className='membership_main_col mx-2'> <div className="membership_col1 py-5">
              <h4 className='text-white'>Special Standout</h4>
              <h4 className='text-white'><sup>₹</sup>100<span>/ month</span></h4>
              <h4 className='membership_h4_3'><sup>₹</sup>200</h4>
            </div>
              <div className="membership_col2 py-4">
                <ul >
                  <li>View unlimited profiles</li>
                  <li>Send unilimited Express interest invites</li>
                  <li >Highlight your profile for greater visibility</li>
                  <li style={{ textDecoration: "line-through" }}>View Kundalis for compatibility</li>
                  <li style={{ textDecoration: "line-through" }}>Get Priority listing in search results</li>
                </ul>
                <button type="button" class="btn mt-5 px-5 py-2 btn-primary  membership_btn">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12   p-0 my-2">
            <div className='membership_main_col mx-2'> <div className="membership_col1 py-5">
              <h4 className='text-white'>Randowm</h4>
              <h4 className='text-white'><sup>₹</sup>9800<span>/ month</span></h4>
              <h4 className='membership_h4_3'><sup>₹</sup>12000</h4>
            </div>
              <div className="membership_col2 py-4">
                <ul >
                  <li>View unlimited profiles</li>
                  <li>Send unilimited Express interest invites</li>
                  <li style={{ textDecoration: "line-through" }} >Highlight your profile for greater visibility</li>
                  <li style={{ textDecoration: "line-through" }}>View Kundalis for compatibility</li>
                  <li style={{ textDecoration: "line-through" }}>Get Priority listing in search results</li>
                </ul>
                <button type="button" class="btn mt-5 px-5 py-2 btn-primary  membership_btn">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12   p-0 my-2">
            <div className='membership_main_col mx-2'> <div className="membership_col1 py-5">
              <h4 className='text-white'>Top Placement</h4>
              <h4 className='text-white'><sup>₹</sup>9800<span>/ month</span></h4>
              <h4 className='membership_h4_3'><sup>₹</sup>10000</h4>
            </div>
              <div className="membership_col2 py-4">
                <ul >
                  <li>View unlimited profiles</li>
                  <li>Send unilimited Express interest invites</li>
                  <li style={{ textDecoration: "line-through" }} >Highlight your profile for greater visibility</li>
                  <li >View Kundalis for compatibility</li>
                  <li >Get Priority listing in search results</li>
                </ul>
                <button type="button" class="btn mt-5 px-5 py-2 btn-primary  membership_btn">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12   p-0 my-2">
            <div className='membership_main_col mx-2'> <div className="membership_col1 py-5">
              <h4 className='text-white'>Special Profile</h4>
              <h4 className='text-white'><sup>₹</sup>6000<span>/ month</span></h4>
            </div>
              <div className="membership_col2 py-4">
                <ul >
                  <li>View unlimited profiles</li>
                  <li>Send unilimited Express interest invites</li>
                  <li >Highlight your profile for greater visibility</li>
                  <li style={{ textDecoration: "line-through" }}>View Kundalis for compatibility</li>
                  <li style={{ textDecoration: "line-through" }}>Get Priority listing in search results</li>
                </ul>
                <button type="button" class="btn mt-5 px-5 py-2 btn-primary  membership_btn">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Membership