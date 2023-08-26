import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import uservalidation from "../uservalidation"
import "../Styles/form.css";

function RegSupplier()
{
    const history=useHistory()
    const [submitted,setSubmitted]=useState(false)
    const [user,setUser]=useState({
        "name":"",
        "city":"",
        "userid":"",
        "pwd":"",
        "cpwd":"",
        "phone":""
    })
    const [errors,setErrors]=useState({})
 
    const handleInput=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setErrors(uservalidation(user))   
        setSubmitted(true)     
    }

    useEffect(()=>{
        console.log(errors)
        if(Object.keys(errors).length===0 && submitted){
            console.log(user)
            axios.post("http://localhost:8080/api/sellers",user)
            .then(resp=>{
                console.log(resp)
                alert("Seller registered successfully")
                history.push("/slogin")
            })
            .catch(error=>console.log("Error",error))            
        }
    },[errors])
    return (
        <section className="rbg-image">
        <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center  h-100" >
                <div className="col-sm-10 col-lg-5">
                  <div className="container rounded-3 text-balck op-1 sform ">
                    <div className="col-sm">
                        <div className="fs-2 text-center mb-4">Supplier Registration</div>
                    <form className="" onSubmit={handleSubmit}>
                    <div className="form-group form-row">
                        <label className="form-label text-dark"><b>Seller Name</b></label>
                        <div className="col-sm-8">
                            <input type="text" name="name" value={user.name} onChange={handleInput} className="form-control  mb-2 mt-1" min="3" pattern="[A-Za-z\s]*$" required   />
                            {errors.name && <small className="text-danger float-right">{errors.name}</small>}
                        </div>                        
                    </div>
                    <div className="form-group form-row">
                        <label className="form-label text-dark"><b>City</b></label>
                        <div className="col-sm-8">
                            <input type="text" name="city" value={user.city} onChange={handleInput} className="form-control  mb-2 mt-1" />
                            {errors.city && <small className="text-danger float-right">{errors.city}</small>}
                        </div>
                        
                    </div>
                    <div className="form-group form-row">
                        <label className="form-label text-dark"><b>Email Id</b></label>
                        <div className="col-sm-8">
                            <input type="email" name="userid" value={user.userid} onChange={handleInput} className="form-control  mb-2 mt-1"  pattern='[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}' required   />
                            {errors.userid && <small className="text-danger float-right">{errors.userid}</small>}
                        </div>
                        
                    </div>
                    <div className="form-group form-row">
                        <label className="form-label text-dark"><b>Phone</b></label>
                        <div className="col-sm-8">
                            <input type="text" maxLength="10" name="phone" value={user.phone} onChange={handleInput} className="form-control  mb-2 mt-1" pattern="[6-9]\d{9}" required />
                            {errors.phone && <small className="text-danger float-right">{errors.phone}</small>}
                        </div>
                        
                    </div>
                    <div className="form-group form-row">
                        <label className="form-label text-dark"><b>Password</b></label>
                        <div className="col-sm-8">
                            <input type="password" name="pwd" value={user.pwd} onChange={handleInput} className="form-control  mb-2 mt-1" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required />
                            {errors.pwd && <small className="text-danger float-right">{errors.pwd}</small>}
                        </div>
                    </div>
                    <div className="form-group form-row">
                        <label className="form-label text-dark"><b>Confirm Password</b></label>
                        <div className="col-sm-8">
                            <input type="password" name="cpwd" value={user.cpwd} onChange={handleInput} className="form-control  mb-2 mt-1" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required  />
                            {errors.cpwd && <small className="text-danger float-right">{errors.cpwd}</small>}
                        </div>
                    </div>
                    <div className="d-felx justify-content-center">
                        <button className="btn btn-primary">Register</button>
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

export default RegSupplier;
