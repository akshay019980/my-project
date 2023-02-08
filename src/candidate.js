import React, { useState } from "react";
import swal from "sweetalert";
import { Link } from "react-router-dom";


const Candi = () => {
    let [fullname, pickFullname] = useState('');
    let [lastname, pickLastname] = useState('');
    let [mobileno, pickMobileno] = useState('');
    let [emaild, pickEmailid] = useState('');
    let [password, pickPassowrd] = useState('');
    let [confirmpassword, pickConfirmpassword] = useState('');
    let [dateofbirth, pickDateofbirth] = useState('');
    let [address, pickFAddress] = useState('');
    let [pincode, pickPincode] = useState('');
    let [State, pickState] = useState('');
    let [district, pickDistrick] = useState('');
    let [term, pickTerm] = useState('');


    const save = () => {

        

        const url = "http://localhost:1234/personaldetailes";

        const candidateInfo = {
            "fullname": fullname,
            "lastname": lastname,
            "mobileno": mobileno,
            "emaild": emaild,
            "password": password,
            "confirmpasword": confirmpassword,
            "dob": dateofbirth,
            "address": address,
            "pincode": pincode,
            "state": State,
            "district": district,
            "t&C": term
        }

        const postOption = {
            headers: { 'Content-Type': 'Application/json' },
            method: 'POST',
            body: JSON.stringify(candidateInfo)
        }

        fetch(url,postOption)
            .then(response => response.json())
            .then(serverArray => {
                swal("added succesfully")
            })
    }

    const clear =()=>{
        pickFullname('');
        pickLastname('');pickEmailid('');
        pickMobileno('');pickFAddress('');
        pickPassowrd('');pickConfirmpassword('');
        pickDateofbirth('');pickPincode('');
        pickState('');pickDistrick('');
        pickTerm('');


    }

    return (
        <>
            <div className="container bg-light">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="text-center m-2">
                            <h3> REGISTER AS CANDIDATE </h3>
                        </div>
                        <div className="row m-2 ">
                            <div className="col-lg-3">First Name:</div>
                            <div className="col-lg-9 ">
                                <input className="form-control" type="text" value={fullname} onChange={obj => pickFullname(obj.target.value)}>
                                </input></div>
                        </div>
                        <div className="row m-2">
                            <div className="col-lg-3">Last Name:</div>
                            <div className="col-lg-9">
                                <input className="form-control" type="text" value={lastname} onChange={obj => pickLastname(obj.target.value)}>
                                </input></div>
                        </div>

                        <div className="row m-2">
                            <div className="col-lg-3">Mobile No: </div>
                            <div className="col-lg-9">
                                <input className="form-control" type="Number" value={mobileno} onChange={obj => pickMobileno(obj.target.value)}>
                                </input></div>
                        </div>

                        <div className="row m-2">
                            <div className="col-lg-3">Email Id:</div>
                            <div className="col-lg-9">
                                <input className="form-control" type="emaild" value={emaild} onChange={obj => pickEmailid(obj.target.value)}>
                                </input></div>
                        </div>
                        <div className="row m-2">
                            <div className="col-lg-3">Password:</div>
                            <div className="col-lg-9">
                                <input className="form-control" type="password"
                                    value={password} onChange={obj => pickPassowrd(obj.target.value)} placeholder="Password max 8 character">
                                </input></div>
                        </div>
                        <div className="row m-2">
                            <div className="col-lg-3"> Confirm Password: </div>
                            <div className="col-lg-9">
                                <input className="form-control" type="password"
                                    value={confirmpassword} onChange={obj => pickConfirmpassword(obj.target.value)}
                                    placeholder="confirm Password max 8 character">
                                </input></div>
                        </div>
                        <div className="row m-2">
                            <div className="col-lg-3">Date Of Birth:</div>
                            <div className="col-lg-9">
                                <input className="form-control" type="date"
                                    value={dateofbirth} onChange={obj => pickDateofbirth(obj.target.value)}>
                                </input></div>
                        </div>
                        <div className="row m-3">
                            <div className="col-lg-3">Full Address:</div>
                            <div className="col-lg-9">
                                <textarea className="form-control" type="text"
                                    value={address} onChange={obj => pickFAddress(obj.target.value)}>
                                </textarea></div>
                        </div>

                        <div className="row m-2">
                            <div className="col-lg-3">Pincode:</div>
                            <div className="col-lg-9">
                                <input className="form-control" type="text"
                                    value={pincode} onChange={obj => pickPincode(obj.target.value)}>
                                </input></div>
                        </div>

                        <div className="row m-2">
                            <div className="col-lg-3 form-group" ><label>State:</label></div>
                            <div className="col-lg-9">
                                <select id="inputState" className="form-select" type="text"
                                    value={State} onChange={obj => pickState(obj.target.value)}>
                                    <option className="selected">Choose State</option>
                                    <option>Karnataka</option>
                                    <option>Maharastra</option>
                                    <option>Odisha</option>

                                </select>
                            </div>
                        </div>

                        <div className="row m-2">
                            <div className="col-lg-3 form-group" ><label>District:</label></div>
                            <div className="col-lg-9">
                                <select id="inputState" className="form-select" type="text"
                                    value={district} onChange={obj => pickDistrick(obj.target.value)}>
                                    <option className="selected">Choose District</option>
                                    <option>Belgavi</option>
                                    <option>Banglore</option>
                                    <option>Hubbali</option>
                                    <option>Dharwad</option>

                                </select>
                            </div>
                        </div>

                        <div className="row m-2">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-9">
                                <label className="text-primary form-check-label">
                                    <input className="form-check-input" type="checkbox"
                                        checked={term} onChange={obj => pickTerm(obj.target.checked)} />
                                    Agree On Terms Conditions
                                </label>
                            </div>
                        </div>
                        <div className="row m-2">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-2">
                                <button className="btn btn-primary" onClick={save}>Register</button>
                            </div>
                            <div className="col-lg-2">
                                <button className="btn btn-primary" onClick={clear}>Clear</button>
                            </div>
                        </div>


                    </div>
                    <div className="col-lg-6">
                        <div className="text-center mt-2">
                            <h3>YOUR DETAILS</h3>
                        </div>
                        <div className="row m-2 ">
                            <div className="col-lg-6"><h6>First Name: {fullname}</h6></div>
                            <div className="col-lg-6"></div>
                        </div>
                        <div className="row m-2">
                            <div className="col-lg-6"><h6>Last Name: {lastname}</h6></div>
                            <div className="col-lg-6"></div>
                        </div>
                        <div className="row m-2">
                            <div className="col-lg-6"><h6>Mobile No:{mobileno}</h6></div>
                            <div className="col-lg-6"></div>
                        </div>
                        <div className="row m-2">
                            <div className="col-lg-3"><h6>Email-ID:{emaild}</h6></div>
                            <div className="col-lg-10"></div>
                        </div>
                        <div className="row m-2">
                            <div className="col-lg-3"><h6>Password:{password}</h6></div>
                            <div className="col-lg-10"></div>
                        </div>
                        <div className="row m-2">
                            <div className="col-lg-6"><h6>Confirm Password:{confirmpassword}</h6></div>
                            <div className="col-lg-6"></div>
                        </div>
                        <div className="row m-2">
                            <div className="col-lg-6"><h6>Date Of Birth :{dateofbirth}</h6></div>
                            <div className="col-lg-6"></div>
                        </div>
                        <div className="row m-2">
                            <div className="col-lg-6"><h6>Full Address :{address}</h6></div>
                            <div className="col-lg-6"></div>
                        </div>
                        <div className="row m-2">
                            <div className="col-lg-6"><h6>Pincode :{pincode}</h6></div>
                            <div className="col-lg-6"></div>
                        </div>
                        <div className="row m-2">
                            <div className="col-lg-6"><h6>State :{State}</h6></div>
                            <div className="col-lg-6"></div>
                        </div>
                        <div className="row m-2">
                            <div className="col-lg-6"><h6>District :{district}</h6></div>
                            <div className="col-lg-6"></div>
                        </div>
                        <div className="row m-2">
                            <div className="col-lg-6"><h6>T&C :{term ? 'Agree' : null}</h6></div>
                            <div className="col-lg-6"></div>
                        </div>

                    </div>
                </div>

                <Link to="/person">user</Link>

            </div>
        </>

        
    )


}
export default Candi;