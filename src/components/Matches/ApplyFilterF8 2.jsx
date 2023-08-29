import React, { useState, useEffect } from 'react';
import '../Matches/MatchesStyle.css';
import axios from 'axios';
import convert from 'convert-units';

const ApplyFilterF8 = () => {

    const [getSmokeData, setSmokeData] = useState([]);
    const [getDrinkData, setDrinkData] = useState([]);
    const [getDiet, setDiet] = useState([]);
    const [getHeight, setHeight] = useState([]);
    const [getReligion, setReligion] = useState([]);
    const [getCaste, setCaste] = useState([]);

    const getApiData = async () => {

        await axios.get(`${process.env.REACT_APP_FILTER}/get-smoke`
        ).then((res) => {
            setSmokeData(res?.data?.data)
            console.log(res.data.data);
        })
            .catch(err => err
            )

        await axios.get(`${process.env.REACT_APP_FILTER}/get-drink`
        ).then((res) => {
            setDrinkData(res?.data?.data)
        })
            .catch(err => err
            )

        await axios.get(`${process.env.REACT_APP_FILTER}/get-diet`
        ).then((res) => {
            setDiet(res?.data?.data)
        })
            .catch(err => err
            )

        await axios.get(`${process.env.REACT_APP_FILTER}/get-family-height`
        ).then((res) => {
            setHeight(res?.data?.data)
        })
            .catch(err => err
            )

        await axios.get(`${process.env.REACT_APP_FILTER}/get-caste`
        ).then((res) => {
            setCaste(res?.data?.data)
        })
            .catch(err => err
            )

        await axios.get(`${process.env.REACT_APP_FILTER}/get-religion`
        ).then((res) => {
            setReligion(res?.data?.data)
        })
            .catch(err => err
            )
    }

    useEffect(() => {
        getApiData();
    }, []);


    return (
        <>
            <div className="container">
                <div class="row Matches">
                    <div class="col-12 col-lg-3 LHS pt-5">
                        <div className="row">
                            <div className='fw-bold'>
                                <h2>Apply Filter</h2>
                            </div>
                            <div className='Apply_Filter_box'>
                                <select class="form-select div1_Caste " aria-label="Default select example" >
                                    <option selected disabled value="">Select Manglik</option>
                                    <option value="0">Yes</option>
                                    <option value="1">No</option>
                                    <option value="2">Doesn't Matter</option>
                                    <option value="3">Don't Know</option>
                                </select>

                                <select class="form-select div1_Caste " aria-label="Default select example" >
                                    <option selected disabled value="">Religions</option>
                                    {
                                        getReligion.map((element) => {
                                            return (
                                                <option value="0">{element?.r_title}</option>
                                            )
                                        })
                                    }
                                </select>
                                <select class="form-select div1_Caste " aria-label="Default select example" >
                                    <option selected disabled value="">Caste</option>
                                    {
                                        getCaste.map((element) => {
                                            return (
                                                <option value="0">{element?.c_title}</option>
                                            )
                                        })
                                    }
                                </select>
                                <select class="form-select div1_Caste " aria-label="Default select example" >
                                    <option selected disabled value="">Marial Status</option>
                                    <option value="0">Married</option>
                                    <option value="0">Unmarried</option>
                                    <option value="1">Divorce</option>
                                    <option value="2">Windower</option>
                                    <option value="3">Annulled</option>
                                </select>
                                <select class="form-select div1_Caste " aria-label="Default select example" >
                                    <option selected disabled value="">Smoking Habits</option>
                                    {
                                        getSmokeData.map((element) => {
                                            return (
                                                <option value="0">{element?.s_title}</option>
                                            )
                                        })
                                    }
                                </select>

                                <select class="form-select div1_Caste " aria-label="Default select example" >
                                    <option selected disabled value="">Drinkings Habits</option>
                                    {
                                        getDrinkData.map((element) => {
                                            return (
                                                <option value="0">{element?.d_title}</option>
                                            )
                                        })
                                    }
                                </select>
                                <select class="form-select div1_Caste " aria-label="Default select example" >
                                    <option selected disabled value="">Diet Habits</option>
                                    {
                                        getDiet.map((element) => {
                                            return (
                                                <option value="0">{element?.d_title}</option>
                                            )
                                        })
                                    }
                                </select>

                                <select class="form-select div1_Caste " aria-label="Default select example" >
                                    <option selected disabled value="">Height</option>
                                    {
                                        getHeight.map((element) => {
                                            // const cmValue = element?.h_title;
                                            const converted = convert(element?.h_title).from('cm').to('ft');
                                            const feetValue = Math.floor(converted);
                                            const inchesValue = Math.round((converted - feetValue) * 12);

                                            return (
                                                <option value="0">{feetValue} Feet {inchesValue} Inch</option>
                                            )
                                        })
                                    }
                                </select>

                                {/* 

                                <select class="form-select div1_Caste " aria-label="Default select example" >
                                    <option selected disabled>Height</option>
                                    <option value="0">4 ft</option>
                                    <option value="1">4.5 ft</option>
                                    <option value="2">5 ft</option>
                                    <option value="3">5.5 ft</option>
                                    <option value="3">6 ft</option>
                                    <option value="3">6.5 ft</option>
                                </select>

                                <div className="row d-flex ">
                                    <div className='col-4 fs-4 INR'>INR</div>
                                    <div className='col-4'>
                                        <select class="form-select div1_Caste" aria-label="Default select example" >
                                            <option selected disabled>2-3L</option>
                                            <option value="0">3-4L</option>
                                            <option value="1">4-5L</option>
                                            <option value="2">5-6L</option>
                                            <option value="3">6-7L</option>
                                        </select>
                                    </div>
                                    <div className='col-4'>
                                        <select class="form-select div1_Caste " aria-label="Default select example" >
                                            <option selected disabled>PA</option>
                                            <option value="0">Punjabi</option>
                                            <option value="1">Muslim</option>
                                            <option value="2">Maheshwari</option>
                                            <option value="3">Sindhi</option>
                                        </select>
                                    </div>
                                </div> */}
                                <button type='button' className='btn ApplyFilterBtn'>Apply Filter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default ApplyFilterF8;
