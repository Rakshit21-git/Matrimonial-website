import React, { useEffect, useState } from 'react'
import '../About us page/EnquiryPage.css'
import StudentValidation from './StudentValidation';
import axios from 'axios';

const EnquiryPage = () => {
     const [values, setvalues] = useState(
        {
            name: "", email: "", mobile: "", subject: "", message: ""
        }
    )
    const [errors, setErrors] = useState({});
    function handleInput(event) {
        const newObj = { ...values, [event.target.name]: event.target.value }
        setvalues(newObj);
    }
    function handleValidation(event) {
        console.log("object");
        event.preventDefault();
        setErrors(StudentValidation(values));
        // alert("Thank You For Enquiry");
    }
    const [getData, setData] = useState([]);

    const headers = {
        Authorization:`bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjRlMmZhZmQ2MTlhZTVjNDgzMDY3YzQzIiwiZW1haWxfaWQiOiJ2YW5pdGFAb3Blbmlubm92YXRpb25zbGFiLmNvbSIsImdlbmRlciI6Im1hbGUiLCJ2ZXJpZmllZF9zdGF0dXMiOjAsImFjdGl2ZV9zdGF0dXMiOjAsImlhdCI6MTY5MjY4NTEwMCwiZXhwIjoxNjkyODU3OTAwfQ.IFA7U6PqEdtAbqyHFhIExvrqRQnXmb5KNLEAyRXPekU"`
    }
    const getApiData = async () => {
        var urlencoded = new URLSearchParams();
        urlencoded.append("name", values.name);
        urlencoded.append("email", values.email);
        urlencoded.append("mobile", values.mobile);
        urlencoded.append("subject", values.subject);
        urlencoded.append("message", values.message);
        await axios.post(`http://52.66.191.213:5000/api/front/enquiry/submit-enquiry`, urlencoded,
            {
                headers,
            }
        ).then((res) => {
            setData(res.data.message)
            console.log(res.data.result);
            alert(res.data.message)
        })
        .catch(err => err
        )
    }
    useEffect(() => {
        getApiData();
    }, 
    {} );

        return (
        <section>
            <div className=" aboutUs2 container-fluid">
                <div className="row">
                    <div className='col-md-6 col-sm-6 col-xs-12 '>
                        <img className='img-fluid sideimage w-100' src="../AboutUsImages/wedding couple.png" alt="" />
                    </div>


                    <div className='col-md-6 col-sm-6 col-xs-12 form-fields'  >
                        <h2 className='text'>We would love to hear from you</h2>
                        <p className='text2'>We are here to answer your questions. One of our dedicated team member will respond as soon as possible
                        </p>
                        <form onSubmit={handleValidation} className='form-Data' autoComplete='off'>
                            <div className='input-field'>
                                <input name='name' type='name' class='form-control' id='inputName' placeholder='Name' onChange={handleInput}></input>

                                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

                            </div>
                            <div className='input-field'>
                                <input name='email' type='email' class='form-control' id='inputEmail' placeholder='E-mail' onChange={handleInput}></input>

                                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

                            </div>
                            <div className='input-field'>
                                <input name='mobile' type='number' class='form-control' id='inputPhone' placeholder='Phone' onChange={handleInput}></input>

                                {errors.mobile && <p style={{ color: "red" }}>{errors.mobile}</p>}

                            </div>
                            <div className='input-field'>
                                <textarea name='subject' type='subject' class='form-control' id='TextArea' placeholder='Subject' rows={2} onChange={handleInput}></textarea>

                                {errors.subject && <p style={{ color: "red" }}>{errors.subject}</p>}
                            </div>
                            <div className='input-field'>
                                <textarea name='message' type='message' class='form-control' id='TextArea' placeholder='Message' rows={2} onChange={handleInput}></textarea>
                                {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
                            </div>
        
                            <button type='submit' onClick={getApiData} className=' btn btn-submit text-3xl font-semibold mt-16'>Submit</button>

                        </form>
                    </div>
                </div>

            </div>


             <div className=" aboutUs2 container-fluid">

                <div className="row background ">
                    <div className='col-sm-12 col-md-4 '>
                        <div className="row iconcolor">

                            <div className='col-12 center'>
                                <i class="fa-solid fa-location-dot"></i>
                            </div>
                            <div className='col-12'>2154 Shastri Nagar</div>
                            <div className='col-12'>H-Sector , Jodhpur</div>

                        </div>
                    </div>
                    <div className='col-sm-12 col-md-4 '>
                        <div className="row iconcolor">
                            <div className='col-12 center'>
                                <i class="fa-solid fa-envelope "></i>

                            </div>
                            <div className='col-12'>Contact@gmail.com</div>
                            <div className='col-12'>Contact@gmail.com</div>

                        </div>
                    </div>
                    <div className='col-sm-12 col-md-4 '>
                        <div className="row iconcolor">
                            <div className='col-12 center'>
                                <i class="fa-solid fa-phone"></i>

                            </div>
                            <div className='col-12'>+91 6377648233</div>
                            <div className='col-12'>+91 9413186742</div>

                        </div>

                    </div>

                </div>
            </div>

        </section>

    )
}

export default EnquiryPage