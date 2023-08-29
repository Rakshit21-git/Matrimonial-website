import React, { useState, useEffect } from 'react';
import '../Matches/MatchesStyle.css';
import axios from 'axios';
import convert from 'convert-units';

const ApplyFilterBox = () => {

    const [getSmokeData, setSmokeData] = useState([]);
    const [getDrinkData, setDrinkData] = useState([]);
    const [getDiet, setDiet] = useState([]);
    const [getHeight, setHeight] = useState([]);
    const [getReligion, setReligion] = useState([]);
    const [getSelectedReligion, setSelectedReligion] = useState();

    const [getCaste, setCaste] = useState([]);

    const [getTentativeTime, setTentativeTime] = useState([]);
    const [getAnnualIncome, setAnnualIncome] = useState([]);
    const [getResidencialStatus, setResidencialStatus] = useState([]);
    const [getSpecialisationAbility, setSpecialisationAbility] = useState([]);
    const [getBodyType, setBodyType] = useState([]);
    const [getCountry, setCountry] = useState([]);
    const [getState, setState] = useState([]);
    const [getCity, setCity] = useState([]);
    const [getSelectedCountry, setSelectedCountry] = useState();
    const [getSelectedState, setSelectedState] = useState();

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

        // await axios.get(`${process.env.REACT_APP_FILTER}/get-caste`
        // ).then((res) => {
        //     setCaste(res?.data?.data)
        // })
        //     .catch(err => err
        //     )

        await axios.get(`${process.env.REACT_APP_FILTER}/get-religion`
        ).then((res) => {
            setReligion(res?.data?.data)
        })
            .catch(err => err
            )

        // Aryan

        await axios.get(`${process.env.REACT_APP_FRONT}/user-comman-api/get-tentative-time`
        ).then((res) => {
            setTentativeTime(res?.data?.data)
            // console.log(res.data.data);
        })
            .catch(err => err
            )
        await axios.get(`${process.env.REACT_APP_FRONT}/user-comman-api/get-annual-income`
        ).then((res) => {
            setAnnualIncome(res?.data?.data)
            // console.log(res.data.data);
        })
            .catch(err => err
            )
        await axios.get(`${process.env.REACT_APP_FRONT}/user-comman-api/get-residencial-status`
        ).then((res) => {
            setResidencialStatus(res?.data?.data)
            // console.log(res.data.data);
        })
            .catch(err => err
            )
        await axios.get(`${process.env.REACT_APP_FRONT}/user-comman-api/get-specialisation-ability`
        ).then((res) => {
            setSpecialisationAbility(res?.data?.data)
            // console.log(res.data.data);
        })
            .catch(err => err
            )
        await axios.get(`${process.env.REACT_APP_FRONT}/user-comman-api/get-body-type`
        ).then((res) => {
            setBodyType(res?.data?.data)
            // console.log(res.data.data);
        })
            .catch(err => err
            )
        await axios.get(`${process.env.REACT_APP_FRONT}/user-comman-api/get-country`
        ).then((res) => {
            setCountry(res?.data?.data)
            // console.log(res.data.data);
        })
            .catch(err => err
            )
    }

    const getCasteApi = async () => {
        await axios.get(`${process.env.REACT_APP_FRONT}/user-comman-api/get-caste?c_religion=${getSelectedReligion}`
        ).then((res) => {
            setCaste(res?.data?.data)
            // console.log(res.data.data);
        })
            .catch(err => err
            )
    }
    const getStateApi = async () => {
        await axios.get(`${process.env.REACT_APP_FRONT}/user-comman-api/get-state?country_id=${getSelectedCountry}`
        ).then((res) => {
            setState(res?.data?.data)
            // console.log(res.data.data);
        })
            .catch(err => err
            )
    }
    const getCityApi = async () => {
        await axios.get(`${process.env.REACT_APP_FRONT}/user-comman-api/get-city?ct_state_id=${getSelectedState}`
        ).then((res) => {
            console.log(res.data)
            setCity(res?.data?.data)
        })
            .catch(err => err
            )
    }

    useEffect(() => {
        getCasteApi();
    }, [setSelectedReligion]);

    useEffect(() => {
        getStateApi();
    }, [getSelectedCountry]);

    useEffect(() => {
        getCityApi();
    }, [getSelectedState]);


    useEffect(() => {
        getApiData();
    }, []);


    return (
        <>
            <div className="container">
                <div class="row">
                    <div class="col-12 col-lg-3 LHS pt-5">
                        <div className="row">
                            <div className='fw-bold'>
                                <h2>Apply Filter</h2>
                            </div>
                            <div className='Apply_Filter_box'>
                                <select class="form-select div1_Caste " aria-label="Default select example">
                                    <option selected disabled value="">Select Manglik</option>
                                    <option value="0">Yes</option>
                                    <option value="1">No</option>
                                    <option value="2">Doesn't Matter</option>
                                    <option value="3">Don't Know</option>
                                </select>

                                <select class="form-select div1_Caste " aria-label="Default select example" onChange={(e) => setSelectedReligion(e.target.value) } >
                                    <option selected disabled value="">Religions</option>
                                    {
                                        getReligion.map((element) => {
                                            return (
                                                <option value={element._id}>{element?.r_title}</option>
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

                                <select
                                    class="form-select div1_Caste "
                                    aria-label="Default select example"
                                >
                                    <option selected disabled value="">
                                        Tentative Time to Marry
                                    </option>
                                    {getTentativeTime.map((element) => {
                                        // console.log(element)
                                        return (
                                            <option value="0">{element?.ti_title}</option>
                                        )
                                    })
                                    }
                                </select>
                                <select
                                    class="form-select div1_Caste "
                                    aria-label="Default select example"
                                >
                                    <option selected disabled value="">
                                        Annual Income
                                    </option>
                                    {getAnnualIncome.map((element) => {
                                        // console.log(element)
                                        return (
                                            <option value="0">{element?.ai_title}</option>
                                        )
                                    })
                                    }
                                </select>
                                <select
                                    class="form-select div1_Caste "
                                    aria-label="Default select example"
                                >
                                    <option selected disabled value="">
                                        Residencial Status
                                    </option>
                                    {getResidencialStatus.map((element) => {
                                        // console.log(element)
                                        return (
                                            <option value="0">{element?.rs_title}</option>
                                        )
                                    })
                                    }
                                </select>
                                <select
                                    class="form-select div1_Caste "
                                    aria-label="Default select example"
                                >
                                    <option selected disabled value="">
                                        Specialisation Ability
                                    </option>
                                    {getSpecialisationAbility.map((element) => {
                                        // console.log(element)
                                        return (
                                            <option value="0">{element?.sa_title}</option>
                                        )
                                    })
                                    }
                                </select>
                                <select
                                    class="form-select div1_Caste "
                                    aria-label="Default select example"
                                >
                                    <option selected disabled value="">
                                        Body Type
                                    </option>
                                    {getBodyType.map((element) => {
                                        // console.log(element)
                                        return (
                                            <option value="0">{element?.bt_title}</option>
                                        )
                                    })
                                    }
                                </select>
                                <select
                                    class="form-select div1_Caste "
                                    aria-label="Default select example"
                                    onChange={(e) => setSelectedCountry(e.target.value)}
                                >
                                    <option selected disabled value="">
                                        Country
                                    </option>
                                    {getCountry.map((element) => {
                                        return (
                                            <option value={element._id}>{element?.name}</option>
                                        )
                                    })
                                    }
                                </select>
                                <select
                                    class="form-select div1_Caste "
                                    aria-label="Default select example"
                                    onChange={(e) => setSelectedState(e.target.value)}
                                >
                                    <option selected disabled value="">
                                        State
                                    </option>
                                    {getState.map((element) => {
                                        return (
                                            <option value={element._id}>{element?.state}</option>
                                        )
                                    })
                                    }
                                </select>
                                <select
                                    class="form-select div1_Caste "
                                    aria-label="Default select example"
                                >
                                    <option selected disabled value="">
                                        City
                                    </option>
                                    {getCity.map((element) => {
                                        return (
                                            <option value="0">{element?.ct_city}</option>
                                        )
                                    })
                                    }
                                </select>
                                <button type='button' className='btn ApplyFilterBtn'>Apply Filter</button>
                            </div>
                        </div>
                    </div>
                </div>
             </div>


        </>
    );
}

export default ApplyFilterBox;
