import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import loginvalidation from "../loginvalidation"
import "../Styles/Login.css";

function CustomerLogin(){

    const dispatch=useDispatch()

    const [user,setUser]=useState({
        "userid":"",
        "pwd":""
    })
    const [errors,setErrors]=useState({})
    const [submitted,setSubmitted]=useState(false)
    const history=useHistory()

    const handleInput=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleSubmit=e=>{
        e.preventDefault()
        setErrors(loginvalidation(user))   
        setSubmitted(true) 
    }

    useEffect(()=>{
        console.log(errors)
        if(Object.keys(errors).length===0 && submitted){
            console.log(user)
            axios.post("http://localhost:8080/api/customers/validate",user)
            .then(resp=>{
                let result=resp.data.data;
                console.log(resp.data.data)
                sessionStorage.setItem("userid",result.userid)
                sessionStorage.setItem("uname",result.name)
                sessionStorage.setItem("role","customer")
                sessionStorage.setItem("id",result.id)  
                dispatch({type:'IsLoggedIn'})
                history.push("/")
            })
            .catch(error=>{
                console.log("Error",error);
                alert("Invalid username or password")
            })            
        }
    },[errors])


    return (
    <section className="cr-image mb-0">
    <div className="container">
     <div className="container d-flex justify-content-center col-sm-3 col-lg-6 ">
        <div className="card shadow bg-transparent mt-3 text-black">
            <div className="card-body">
                <div className="mx-auto">
                    <h4 className="text-center p-2">
                       <b>Customer Login</b> 
                    </h4>
                    <form onSubmit={handleSubmit}>                 
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label"><b>User Id</b></label>
                        <div className="col-sm-8">
                            <input type="text" name="userid" placeholder="Enter Your User Id" value={user.userid} onChange={handleInput} className="form-control" />
                            {errors.userid && <small className="text-danger float-right">{errors.userid}</small>}
                        </div>
                        
                    </div>                    
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label"><b>Password</b></label>
                        <div className="col-sm-8">
                            <input type="password" name="pwd" placeholder="Enter Your Password" value={user.pwd} onChange={handleInput} className="form-control" />
                            {errors.pwd && <small className="text-danger float-right">{errors.pwd}</small>}
                        </div>
                    </div>   
                    <div className="d-flex justify-content-center">                
                         <button className="btn btn-primary">Login Now</button>
                    </div> 
                    </form>
                </div>
            </div>
        </div>
        
        </div>
    </div>
    </section>
    );
}

export default CustomerLogin;