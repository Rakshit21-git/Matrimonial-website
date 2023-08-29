import * as React from 'react';
import '../Matches/MatchesStyle.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
// import MaleAvatar from "../../Assests/MaleAvatar.jpeg"
// import femaleAvatar from "../../Assests/femaleAvatar.png"
import ApplyFilterBox from './ApplyFilterBox';

const Matches = () => {
    const getToken = localStorage.getItem("token");
    const Token = JSON.parse(getToken);

    const [getData, setData] = useState([]);
    const [SearchTerm, setSearchTerm] = useState("");

    const headers = {
        Authorization: `Bearer ${Token?.userToken}`,
        "Content-type": "application/x-www-form-urlencoded",
    }

    const getApiData = async () => {
        await axios.get(`${process.env.REACT_APP_FILTER}/get-comman-filter-api`,
            {
                headers,
            }
        ).then((res) => {
            setData(res.data.result)
            // console.log(res.data.result);
        })
            .catch(err => err
            )

    }

    useEffect(() => {
        getApiData();
    }, []);

    return (
        <>
            <div className="container Matches">
                <div class="row heading">
                    <div class="col-12 col-md-3 col-lg-3 mt-5">
                        <h1>Matches</h1>
                    </div>
                    <div class="col-12 col-md-8 col-lg-7 pt-5 ">
                        <input className=' w-100 h-100 p-3 Search_here' type="text" placeholder='Search here...' onChange={event => { setSearchTerm(event.target.value) }} />
                    </div>
                </div>
                <div class="row">
                    {/* <div class="col-12 col-lg-3 LHS pt-5"> */}
                    {/* <div className="row"> */}
                    <ApplyFilterBox />
                    {/* </div> */}
                    {/* </div> */}
                    <div class="col-12 col-lg-8  RHS">

                        {
                            getData.length > 0 ?
                                getData.filter((element) => {
                                    if (SearchTerm === "") {
                                        return element;
                                    } else if (element.fristname.toLowerCase().includes(SearchTerm.toLowerCase())) {
                                        return element;
                                        // console.log(element);
                                    }
                                }).map((element, index, key) => {

                                    // console.log(index);
                                    const isoDate = element?.DOB;
                                    const today = new Date();
                                    const dobYear = parseInt(isoDate.substr(0, 4))
                                    const presentYear = today.getFullYear();
                                    const age = presentYear - dobYear;

                                    return (
                                        <div className="row">
                                            <div className='col-lg-4 '>
                                                <div className="card slider-card">
                                                    {/* {element.userprofilesList?.length === 0 ?
                                                        <img
                                                            className="card-img-top full_card card_image"
                                                            style={{ borderRadius: "20px" }}
                                                            src={element?.gender === "male" ? MaleAvatar : femaleAvatar}
                                                            alt="Card image"
                                                        />
                                                        :
                                                        <img
                                                            className="card-img-top full_card card_image"
                                                            style={{ borderRadius: "20px", border: "none" }}
                                                            src={`${process.env.REACT_APP_IMG}/${element?.userprofilesList[0]?.profile_multi_img}`}
                                                            alt="human Card image"
                                                        />
                                                    } */}
                                                    {/* <img className='img-fuid' src="../MatchesImagesFolder/photo1.png" alt="Image not available" /> */}
                                                </div>
                                            </div>

                                            <div className='col-lg-8'>
                                                <div className="row Name">
                                                    <div className="col-12 fw-bold" key={key}>{`${element.fristname} ${element.middlename} ${element.lastname}`}</div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12"><hr /></div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className="row mb-2">
                                                                    <div key={index} className="col-6">{`${age} Year`}</div>
                                                                    <div className="col-6">{element?.userPersonaldetails[0]?.Height[0]?.h_title ? element?.userPersonaldetails[0]?.Height[0]?.h_title + " cm" : " Not Mentioned"}</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 mb-2">
                                                                {element?.myAddressDetails[0]?.a_address ? element?.myAddressDetails[0]?.a_address : "Address Not Mentioned"}
                                                                {/* {`${element?.myAddressDetails[0]?.a_address} ? (${element?.myAddressDetails[0]?.a_address}) : Address_not`} */}
                                                                {/* return `${json.data[0].word} ? ${json.data[0].word (${json.data[0].reading}) : ${json.data[0].reading}` */}
                                                                {/* Delhi, India */}
                                                            </div>
                                                            <div className="col-12 mb-2">
                                                                {/* Khatri,  */}
                                                                {element?.userPersonaldetails[0]?.Religions[0]?.r_title ? element?.userPersonaldetails[0]?.Religions[0]?.r_title : "Not Mentioned"}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2 ">
                                                                {/* Software Engineer-Graduate */}
                                                                {`${element?.usereducationdetails[0]?.user_edu_high_subcategroy[0]?.ef_title}`}
                                                            </div>
                                                            <div className="col-12 mb-2">
                                                                6-8 LPA
                                                            </div>
                                                            <div className="col-12 mb-2">
                                                                {/* Never Married */}
                                                                {element?.userPersonaldetails[0]?.p_maritial_status ? element?.userPersonaldetails[0]?.p_maritial_status : "Not Mentioned"}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row my-5">
                                                <div className="col-7 Send_Interest">
                                                    <button><i class="fa-solid fa-heart mx-3"></i>Send Interest</button>
                                                </div>
                                                <div className="col-5 icons">
                                                    <i class="fa-solid fa-phone mx-2"></i>
                                                    <i class="fa-regular fa-message"></i>
                                                </div>
                                            </div>
                                        </div>
                                    )

                                }) :
                                <h1 style={{ textAlign: "center" }} id='showError'>Data not Found</h1>

                        }

                    </div>
                </div>
            </div>
        </>
    );
}

export default Matches;
