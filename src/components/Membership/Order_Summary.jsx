import React, { useEffect, useState } from 'react'
import './order_summary.css'
import Select from 'react-select'
import axios from 'axios'


function Order_Summary() {
    const [getvalue, setValue] = useState([])
    const [getData, setData] = useState([])

    // var addonId;

    const userIdHandler = async (event) => {
        const addonId = [];
        event.map((data, index) => addonId.push(data.value));
        const data = await axios.get(
            `${process.env.REACT_APP_FRONT}/user-comman-api/get-membership-planById?getAddonId=${addonId.toString()}`
        );
        setData(data.data.data);
    };

    const getApiData = async () => {
        const res = await axios.get(`${process.env.REACT_APP_FRONT}/user-comman-api/get-addon-plans`);
        // setvalue(res.data.data)
        console.log(res.data.data);
        const result = [];
        const resulted = res.data.data
        resulted?.map((res) => {
            result.push({ value: res._id, label: res.adp_name })
        })

        setValue(result)
    }
    useEffect(() => {
        getApiData()
    }, [])
    return (
        <>
            <div className="container">
                <div className="row text-center my-4">
                    <h4>Order Summary</h4>
                </div>
                <div className="row mt-5">
                    <div className="col-md-8 mb-3 ">
                        <div className="order_sum_input_div px-4 py-1  order_sum_div  ">
                            <div className="row mt-4 ">
                                <div className="col-lg-4 col-12">
                                    <label htmlFor="">First Name</label>
                                    <input type="text" className='w-100 order_sum_input' placeholder='Arun' readOnly />
                                </div>
                                <div className="col-lg-4 col-12">
                                    <label htmlFor="" >Middle Name</label>
                                    <input type="text" className='w-100 order_sum_input' placeholder='Deep Singh' readOnly />
                                </div>
                                <div className="col-lg-4 col-12">
                                    <label htmlFor="">Last Name</label>
                                    <input type="text" className='w-100 order_sum_input' placeholder='Choudhary' readOnly />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-lg-6 col-12">
                                    <label htmlFor="">Email</label>
                                    <input type="text" className='w-100 order_sum_input' placeholder='arun@openinnovationslab.com' readOnly/>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <label htmlFor="" >Mobile Number</label>
                                    <input type="text" className='w-100 order_sum_input' placeholder='8000979661' readOnly/>
                                </div>

                            </div>
                            <div className="row my-4 ">
                                <div className="col-12">
                                    <Select
                                        // defaultValue={value}
                                        isMulti
                                        options={getvalue}
                                        // labelField = 'id'
                                        // isSearchable={true}
                                        // value={0}
                                        // valueField = 'label'
                                        onChange={userIdHandler}
                                    ></Select>
                                    <div className="row">
                                        {
                                            getData?.map((d, index) => {
                                                return (

                                                    <div key={d._id} className="col-4 order_sum_select">
                                                        <p style={{ fontWeight: 'bold' }}>Add-on : {d.adp_name}</p>
                                                        <p>Price : {d.adp_price}</p>
                                                        <p>Discount Price : {d.adp_dis_price}</p>
                                                        <p>View {d.adp_kundali_match_count
                                                        } Kundalis</p>
                                                        <p>Profile Standout</p>
                                                        <p>Top Placement</p>
                                                        <p>select</p>
                                                    </div>

                                                )
                                            })
                                        }
                                    </div>


                                </div>
                            </div>

                            <button type="button" className="btn order_sum_btn w-100 mx-0 p-2">Proceed</button>

                        </div>
                    </div>
                    <div className="col-md-4 col-12  ">
                        <div className="order_sum_input_div p-4 order_sum_div">
                            <h5>dsfdfd Plan</h5>
                            <div className=" d-flex justify-content-between">
                                <span>Package Amount</span>
                                <span>33.00</span>
                            </div>
                            <div className=" d-flex justify-content-between">
                                <span>Discounted Amount</span>
                                <span>33.00</span>
                            </div>
                            <div className="mt-5 d-flex justify-content-between order_sum_dark">
                                <span>Sub Total</span>
                                <span>33.00</span>
                            </div>
                            <div className=" d-flex justify-content-between order_sum_dark">
                                <span>IGST (18%)</span>
                                <span>5.94</span>
                            </div>
                            <div className=" d-flex justify-content-between order_sum_dark">
                                <span>IGST (18%)</span>
                                <span>5.94</span>
                            </div>
                            <div className='w-100 ' style={{ backgroundColor: "rgb(216, 212, 212)", height: "1px" }}></div>
                            <div className='mt-3 mb-1' style={{ color: "gray", fontWeight: "bold" }}>
                                Coupon Code
                            </div>
                            <input type="text" className='w-100 p-2' placeholder='Enter Coupon Code' />
                            <button type="button" className="btn mt-3 order_sum_btn w-100 mx-0 ">Apply Coupon</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Order_Summary