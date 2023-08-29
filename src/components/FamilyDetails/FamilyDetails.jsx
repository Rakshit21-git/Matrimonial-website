import React from 'react';
import "./FamilyDetails.css"

const FamilyDetails = () => {
    return (
        <>
            <div className="FamilyDetails">
                <div className="container">
                    <div className="row">
                        <div className="col my-3 d-flex justify-content-center">
                            <img className='img-fluid' src="/heart.png" alt="Not available" />
                        </div>
                    </div>
                    <div className="row  heading">
                        <div className="col-12 my-3 d-flex justify-content-center">
                            <h2 className=''>Family Details</h2>
                        </div>
                    </div>
                    <form action="">
                        <div className="row my-4 ">
                            <div className="col-5">
                                <label for="FatherName" class="form-label">Father Name</label>
                                <input type="text" class="form-control" id='UserName' placeholder="Enter the Father's Name" />
                            </div>
                            <div className="col-5">
                                <label for="FatherName" class="form-label">Mother Name</label>
                                <input type="text" class="form-control" id='UserName' placeholder="Enter the Mother's Name" />
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-5">
                                <label for="FatherName" class="form-label">Hindu / Jain (Select No if Other Than Hindu/Jain)</label>
                                <input type="text" class="form-control" id='UserName' placeholder="Enter the Father's Name" />
                            </div>
                            <div className="col-5">
                                <label for="FatherName" class="form-label">Muslim / Christian (Select No if Other Than Muslim/Christian)</label>
                                <input type="text" class="form-control" id='UserName' placeholder="Enter the Father's Name" />
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-5">
                                <label for="FatherName" class="form-label">Father Gotra</label>
                                <input type="text" class="form-control" id='UserName' placeholder="" />
                            </div>
                            <div className="col-5">
                                <label for="FatherName" class="form-label">Mother Gotra</label>
                                <input type="text" class="form-control" id='UserName' placeholder="Gotra" />
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-5">
                                <label for="FatherName" class="form-label">Father's Occupation Status</label>
                                <select class="form-select " aria-label="Default select example">
                                    <option selected disabled value="">Select Occupation Status</option>
                                    <option value="0">Yes</option>
                                    <option value="1">No</option>
                                    <option value="2">Doesn't Matter</option>
                                    <option value="3">Don't Know</option>
                                </select>
                            </div>
                            <div className="col-5">
                                <label for="FatherName" class="form-label">Father's Occupation Field</label>
                                <select class="form-select " aria-label="Default select example">
                                    <option selected disabled value="">Select Occupation Field</option>
                                    <option value="0">Yes</option>
                                    <option value="1">No</option>
                                    <option value="2">Doesn't Matter</option>
                                    <option value="3">Don't Know</option>
                                </select>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-5">
                                <label for="" class="form-label">Mother's Occupation Status</label>
                                <select class="form-select " aria-label="Default select example">
                                    <option selected disabled value="">Select Occupation Status</option>
                                    <option value="0">Yes</option>
                                    <option value="1">No</option>
                                    <option value="2">Doesn't Matter</option>
                                    <option value="3">Don't Know</option>
                                </select>
                            </div>
                            <div className="col-5">
                                <label for="FatherName" class="form-label">Mother's Occupation Field</label>
                                {/* <input type="text" class="form-control" id='UserName' placeholder="" /> */}
                                <select class="form-select " aria-label="Default select example">
                                    <option selected disabled value="">Select Occupation Status</option>
                                    <option value="0">Yes</option>
                                    <option value="1">No</option>
                                    <option value="2">Doesn't Matter</option>
                                    <option value="3">Don't Know</option>
                                </select>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-5">
                                <label for="" class="form-label">Family Status</label>
                                <select class="form-select " aria-label="Default select example">
                                    <option selected disabled value="">Select Family Status</option>
                                    <option value="0">Yes</option>
                                    <option value="1">No</option>
                                    <option value="2">Doesn't Matter</option>
                                    <option value="3">Don't Know</option>
                                </select>
                            </div>
                            <div className="col-5">
                                <label for="FatherName" class="form-label">Family Income</label>
                                {/* <input type="text" class="form-control" id='UserName' placeholder="" /> */}
                                <select class="form-select " aria-label="Default select example">
                                    <option selected disabled value="">Select Family Income</option>
                                    <option value="0">Yes</option>
                                    <option value="1">No</option>
                                    <option value="2">Doesn't Matter</option>
                                    <option value="3">Don't Know</option>
                                </select>
                            </div>
                        </div>
                        <div className="row my-4">
                        <div className="col-5">
                                <label for="FatherName" class="form-label">Family Type</label>
                                {/* <input type="text" class="form-control" id='UserName' placeholder="" /> */}
                                <select class="form-select " aria-label="Default select example">
                                    <option selected disabled value="">Select Family Type</option>
                                    <option value="0">Yes</option>
                                    <option value="1">No</option>
                                    <option value="2">Doesn't Matter</option>
                                    <option value="3">Don't Know</option>
                                </select>
                            </div>
                            <div className="col-5">
                                <label for="" class="form-label">Family Cultural Value</label>
                                <select class="form-select " aria-label="Default select example">
                                    <option selected disabled value="">Select Cultural Value</option>
                                    <option value="0">Yes</option>
                                    <option value="1">No</option>
                                    <option value="2">Doesn't Matter</option>
                                    <option value="3">Don't Know</option>
                                </select>
                            </div>
                        </div>
                        <div className="row my-4">
                        <div className="col-5">
                                <label for="FatherName" class="form-label">No of Sister's</label>
                                {/* <input type="text" class="form-control" id='UserName' placeholder="" /> */}
                                <select class="form-select " aria-label="Default select example">
                                    <option selected disabled value="">Select No of Sister</option>
                                    <option value="0">1</option>
                                    <option value="1">2</option>
                                    <option value="2">3</option>
                                    <option value="3">More than 3</option>
                                </select>
                            </div>
                            <div className="col-5">
                                <label for="" class="form-label">No of Sister's Married</label>
                                <select class="form-select " aria-label="Default select example">
                                    <option selected disabled value="">Select No of Sister's Married</option>
                                    <option value="0">1</option>
                                    <option value="1">2</option>
                                    <option value="2">3</option>
                                    <option value="3">More than 3</option>
                                </select>
                            </div>
                        </div>
                        <div className="row my-4 mt-5">
                        <div className="col-5">
                                <label for="FatherName" class="form-label">No of Brother's</label>
                                {/* <input type="text" class="form-control" id='UserName' placeholder="" /> */}
                                <select class="form-select " aria-label="Default select example">
                                    <option selected disabled value="">Select No of Brother</option>
                                    <option value="0">1</option>
                                    <option value="1">2</option>
                                    <option value="2">3</option>
                                    <option value="3">More than 3</option>
                                </select>
                            </div>
                            <div className="col-5">
                                <label for="" class="form-label">No of Brother's Married</label>
                                <select class="form-select " aria-label="Default select example">
                                    <option selected disabled value="">Select No of Brother's Married</option>
                                    <option value="0">1</option>
                                    <option value="1">2</option>
                                    <option value="2">3</option>
                                    <option value="3">More than 3</option>
                                </select>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                        <button className='my-5 w-75 SaveBtn' type="submit">Save and Next</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default FamilyDetails;
