import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import uservalidation from "../uservalidation"
import "../Styles/form.css";

function RegCustomer()
{
    const [user,setUser]=useState({
        "name":"",
        "city":"",
        "userid":"",
        "pwd":"",
        "cpwd":"",
        "phone":"",
        "gender":""
    })
    const [errors,setErrors]=useState({})
    const history=useHistory()
    const [submitted,setSubmitted]=useState(false)
 
    const handleInput=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setErrors(uservalidation(user)) 
        if(!user.gender){
            errors.gender="Gender is required"
        }
        setSubmitted(true)      
    }

    useEffect(()=>{
        if(!user.gender){
            errors.gender="Gender is required"
        }
        console.log(errors)
        
        if(Object.keys(errors).length===0 && submitted){
            console.log(user)
            axios.post("http://localhost:8080/api/customers",user)
            .then(resp=>{
                console.log(resp)
                alert("Customer registered successfully")
                history.push("/clogin")
            })
            .catch(error=>console.log("Error",error))            
        }
    },[errors])
    return (
        <section className="cr-image ">
        <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center  h-100" >
                <div className="col-sm-10 col-lg-5">
                  <div className="container rounded-3 text-balck op-1 sform ">
                    <div className="col-sm">
                        <div className="fs-2 text-center mb-4"> Customer Registration</div>
                      
                    <form className="Form-control "onSubmit={handleSubmit}>
                    <div className="form-group form-row">
                        <label  className="form-label text-dark"><b>Customer Name</b></label>
                        <div className="col-sm-8">
                            <input type="text" name="name" value={user.name} onChange={handleInput} pattern="[A-Za-z\s]*$"
                                 className="form-control  mb-2 mt-1" min="3" required   />
                            {errors.name && <small className="text-danger float-right">{errors.name}</small>}
                        </div>
                        
                    </div>
                   
                    <div className="form-group form-row">
                        <label  className="form-label text-dark"><b>Gender</b></label>
                        <div className="col-sm-8">
                            <select name="gender" value={user.gender} onChange={handleInput}  className="form-control  mb-2 mt-1">
                                <option value="">Select Gender</option>
                                <option>Male</option>     
                                <option>Female</option>     
                            </select> 
                            {errors.gender && <small className="text-danger float-right">{errors.gender}</small>}                      
                        </div>                        
                    </div>
                    <div className="form-group form-row">
                        <label  className="form-label text-dark"><b>Email Id</b></label>
                        <div className="col-sm-8">
                            <input type="email" name="userid" value={user.userid} onChange={handleInput}  pattern='[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}' className="form-control  mb-2 mt-1" required   />
                            {errors.userid && <small className="text-danger float-right">{errors.userid}</small>}
                        </div>
                        
                    </div>
                    <div className="form-group form-row">
                        <label  className="form-label text-dark"><b>Phone</b></label>
                        <div className="col-sm-8">
                            <input type="text" maxLength="10" pattern="[6-9]\d{9}" required  name="phone" value={user.phone} onChange={handleInput}  className="form-control  mb-2 mt-1" />
                            {errors.phone && <small className="text-danger float-right">{errors.phone}</small>}
                        </div>
                        
                    </div>
                    <div className="form-group form-row">
                        <label  className="form-label text-dark"><b>City</b></label>
                        <div className="col-sm-8">
                            <input type="text" name="city" value={user.city} onChange={handleInput}  className="form-control  mb-2 mt-1" pattern="[a-zA-Z]{3,}"
                             required/>
                            {errors.city && <small className="text-danger float-right">{errors.city}</small>}
                        </div>                        
                    </div>
                    <div className="form-group form-row">
                        <label  className="form-label text-dark"><b>Password</b></label>
                        <div className="col-sm-8">
                            <input type="password" name="pwd" value={user.pwd} onChange={handleInput}  className="form-control  mb-2 mt-1" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required />
                            {errors.pwd && <small className="text-danger float-right">{errors.pwd}</small>}
                        </div>
                    </div>
                    <div className="form-group form-row">
                        <label  className="form-label text-dark"><b>Confirm Password</b></label>
                        <div className="col-sm-8">
                            <input type="password" name="cpwd" value={user.cpwd} onChange={handleInput}  className="form-control  mb-2 mt-1"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required />
                            {errors.cpwd && <small className="text-danger float-right">{errors.cpwd}</small>}
                        </div>
                    </div>
                    <div className="d-felx justify-content-center">
                        <button className="btn btn-primary ">Register</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
        </div>
        </section>
    )
}

export default RegCustomer;
