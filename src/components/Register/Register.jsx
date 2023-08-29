import React, { useState } from 'react'
import './Register.css'
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';


function Register() {
    const {
        register,
        setValue,
        watch,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const [isChecked, setIsChecked] = useState(false);
    const [isInputVisible, setInputVisible] = useState(false);
    const [MyBrother, setMyBrother] = useState('');
    const [myson, setmyson] = useState('');
    const [male, setmale] = useState('');
    const [Female, setFemale] = useState('');
    const [MyDaughter, setMyDaughter] = useState('');
    const [MySister, setMySister] = useState('');
    const [Self, setSelf] = useState('');
    const [Friend, setFriend] = useState('');



    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const self = () => {
        // Change the color when the button is clicked
        setMyBrother('');
        setMyDaughter('');
        setmale('')
        setMySister('')
        setmyson('')
        setFemale('')
        setSelf('#fe637a')
        setFriend('')
    };
    const friend = () => {
        // Change the color when the button is clicked
        setMyBrother('');
        setMyDaughter('');
        setmale('')
        setFriend("#fe637a")
        setMySister('')
        setmyson('')
        setFemale('')
        setSelf('')
    };
    const myBrother = () => {
        // Change the color when the button is clicked
        setMyBrother('#fe637a');
        setmale('#fe637a')
        setmyson('')
        setMySister('')
        setMyDaughter('');
        setFemale('')
        setFriend("")
        setSelf('')
    };
    const mySon = () => {
        // Change the color when the button is clicked
        setmyson('#fe637a');
        setmale('#fe637a')
        setMyBrother('')

        setMySister('')
        setMyDaughter('');
        setFemale('')
        setFriend("")
        setSelf('')
    };
    const mySister = () => {
        // Change the color when the button is clicked
        setMySister('#fe637a');
        setFemale('#fe637a')
        setmyson('');
        setMyBrother('')
        setmale('')
        setFriend("")
        setSelf('')
        setMyDaughter('');    
    
    };
    const myDaughter = () => {
        // Change the color when the button is clicked
        setMySister('');
        setFemale('#fe637a')
        setMyBrother('')
        setMyDaughter('#fe637a')
        setmale('')
        setmyson('');
        setFriend("")
        setSelf('')
          

    };
    const Male = () => {
        // Change the color when the button is clicked
        setMySister('');
        setFemale('')
        setMyBrother('')
        setMyDaughter('')

        setmale('#fe637a')
        setmyson('');
   
    };
    const female = () => {
        // Change the color when the button is clicked
        setMySister('');
        setFemale('#fe637a')
        setMyBrother('')
        setMyDaughter('')

        setmale('')
        setmyson('');
   
    };

    const onSubmit = (data) => {
        console.log(data);
        alert("hurrah    ")
    };

    // const a = watch("name")
    // console.log(a);

    // const validateButton = document.getElementById('validateButton');

    function validateButton() {

        const errorText = document.getElementById('errorText');
        const inputField = document.getElementById('inputField');

        const inputValue = inputField.value.trim();

        // Perform validation
        if (inputValue === '') {
            errorText.textContent = 'Input cannot be empty.';
        } else if (!isNumeric(inputValue)) {
            errorText.textContent = 'Input must be a valid number.';

        }
        else if (inputValue === '123456') {
            errorText.textContent = ''; // Clear any previous error message
            // Here, you can perform any additional validation or actions
            setInputVisible(!isInputVisible);
        }
        else {
            errorText.textContent = 'invalid input'
        }

    };
    function isNumeric(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }
    return (
        <>
            <div className=" register_container">
                <div className="container ">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row d-flex justify-content-center ">
                            <div className='d-flex justify-content-center '>
                                <img className='mt-4' src="heart.png" alt="" />
                            </div>
                            <h4 className='text-white text-center mb-5'>Register Here</h4>

                            <div className="col-lg-8 col-md-8 col-sm-9 col-10 ">
                                <input type="text" className='register_input w-100 my-4 ' placeholder='First Name'
                                    autoComplete='off'
                                    {...register('name', { required: "Name is required" })}
                                />
                                {errors.name && <p className='text-danger'>{errors.name.message}</p>}

                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-9 col-10 ">
                                <input type="text" className='register_input w-100 my-4 ' placeholder='Middle Name '
                                    name="name" autoComplete='off'
                                    {...register('Mmiddlename', { required: "Name is required" })}
                                />
                                {errors.name && <p className='
                                   text-danger'>{errors.name.message}</p>}

                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-9 col-10 ">
                                <input type="text" className='register_input w-100 my-4 ' placeholder='Last Name '
                                    name="name" autoComplete='off'
                                    {...register('lastname', { required: "Name is required" })}
                                />
                                {errors.name && <p className='
                                   text-danger'>{errors.name.message}</p>}

                            </div>
                            <div className="row ">
                                <div className="col-8 mx-auto ps-1">
                                    <h6 className='text-white ms-0'>Profile Created For</h6>
                                    <div className=" text-light my-4 d-flex flex-wrap  ">
                                        <span className='me-3'>
                                            <input type="radio" style={{ display: "none" }} />
                                            <label htmlFor="" onClick={self}  style={{backgroundColor:Self}} className='register_span  register_profile_btns px-4 py-2'>Self</label>
                                        </span>
                                        <span className='me-3'>
                                            <input type="radio" style={{ display: "none" }} />
                                            <label htmlFor="" style={{ backgroundColor: MyBrother }} onClick={myBrother} className='register_profile_btns px-2 register_span py-2'>My Brother</label>
                                        </span>
                                        <div className='me-3    '>
                                            <input type="radio" className='' style={{ display: "none" }} />
                                            <label htmlFor="" style={{backgroundColor: MySister}} onClick={mySister } className='register_profile_btns px-2 register_span py-2'>My Sister</label>
                                        </div>
                                        <div className='me-3'>
                                            <input type="radio" className='' style={{ display: "none" }} />
                                            <label htmlFor="" style={{backgroundColor: myson}} onClick={mySon} className='register_profile_btns register_span px-3 py-2'>My Son</label>
                                        </div>
                                        <div className='  me-3'>
                                            <input type="radio" className='' style={{ display: "none" }} />
                                            <label htmlFor="" onClick={myDaughter}  style={{backgroundColor: MyDaughter}} className='register_profile_btns register_span px-3 py-2 '>My Daughter</label>
                                        </div>
                                        <div className='me-3'>
                                            <input type="radio" className='' style={{ display: "none" }} />
                                            <label htmlFor=""onClick={friend}  style={{backgroundColor:Friend}} className='register_profile_btns register_span px-3 py-2'>Friend</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col-8 mx-auto ps-1 text-white ">
                                    <h6 className='mb-3'>Gender</h6>
                                    <span className='me-3'>
                                        <input type="radio" style={{ display: "none", }} />
                                        <label htmlFor="" className='register_profile_btns px-4 py-2 register_span' onClick={Male}  style={{ backgroundColor: male  }}>Male</label>
                                    </span>
                                    <span className='me-3'>
                                        <input type="radio" style={{ display: "none" }} />
                                        <label htmlFor="" onClick={female} style={{backgroundColor:Female}} className='register_profile_btns px-3  register_span py-2'>Female</label>
                                    </span>

                                </div>
                            </div>

                            <div className=" col-md-4 col-8 mb-4  callender ">
                                <input type="date" className='register_input w-100' placeholder='First Name '
                                    name="name" autoComplete='off'

                                />
                            </div>
                            <div className=" col-md-4 col-8">
                                <input type="text" name="email"
                                    autoComplete='off'
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                    className='register_input w-100 '
                                    placeholder='Email' />
                                {errors.email && <p className='text-danger'>{errors.email.message}</p>}
                            </div>

                            <div className="row my-4 col-8 px-0">
                                <div className="col-md-6 mb-4">
                                    <input type="text" name="mobile"
                                        className='register_input w-100' placeholder='Mobile' autoComplete='off'
                                        {...register("mobile", {
                                            required: "Mobile number is required",
                                            pattern: {
                                                value: /^[0-9]{10}$/,
                                                message: "Invalid mobile number"
                                            }
                                        })} />
                                    {errors.mobile && <p className='
                                    text-danger'>{errors.mobile.message}</p>}
                                </div>
                                {/* </div> */}
                                {/* <div className="row d-flex justify-content-center"> */}
                                <div className="col-md-6   input">
                                    <input type="number" name="otp" id='inputField' autoComplete='off'
                                        className='register_input w-100 ' placeholder='OTP' />
                                    {/* {errors.otp && <p className='text-danger'>{errors.otp.message}</p>} */}
                                    <p id="errorText" style={{ color: "red" }}></p>
                                </div>

                                <div className="col-md-6 col-10 my-4">
                                    {isInputVisible && (<input type="text" name="password" autoComplete='off' {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters"
                                        }
                                    })}
                                        className='register_input w-100' placeholder='Password' />)}
                                    {errors.password && <p className='text-danger'>{errors.password.message}</p>}
                                </div>
                                <div className="col-md-6   my-4">
                                    {isInputVisible && (<input type="text" name="password" autoComplete='off' {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Confirm Password must be at least 6 characters"
                                        }
                                    })}
                                        className='register_input w-100' placeholder='Confirm Password' />)}
                                    {errors.password && <p className='text-danger'>{errors.password.message}</p>}
                                </div>
                                <div className='mx-auto text-center'>
                                    <div id='validateButton' onClick={validateButton} className="btn register_btn  text-white w-100 mx-0 my-5">Get Otp</div>
                                </div>
                                <div className="col-lg-10 col-md-8 col-sm-9 col-10  d-flex justify-content-start my-4 ">
                                    <input type="checkbox" checked={isChecked}
                                        onChange={handleCheckboxChange} className='me-2 register_input' />
                                    <div className='text-white'>Agree with Terms & conditions</div>
                                </div>
                            </div>


                            <div className='mx-auto text-center'>
                                <button type='submit' id='register_btn' className="btn register_btn  text-white w-50 my-5" disabled={!isChecked}>Register</button>
                                {/* <NavLink id='register_btn' className="btn register_btn  text-white w-50 my-5" disabled={!isChecked}>Register</NavLink> */}
                            </div>

                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Register