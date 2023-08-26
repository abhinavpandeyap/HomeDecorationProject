import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import contactvalidation from "../contctusvalidation.js"
import '../Styles/Countactus.css'

function ContactUs () {
    const [contact,setContact]=useState({
        "name":"",
        "email":"",
        "message":""
        
    })
    const [errors,setErrors]=useState({})
    const history=useHistory()
    const [submitted,setSubmitted]=useState(false)

    const handleInput=(e)=>{
        setContact({...contact,[e.target.name]:e.target.value})
    }

    
    
    const handleSubmit=(e)=>{
        e.preventDefault()
       setErrors(contactvalidation(contact)) 
        if(!contact.message){
            errors.message="message is required"
        }
        setSubmitted(true)      
    }

    useEffect(()=>{
        if(!contact.email){
            errors.message="email is required"
        }

        if(!contact.message){
            errors.message="message is required"
        }
        
        console.log(errors)
        
        if(Object.keys(errors).length===0 && submitted){
            console.log(contact)
            axios.post("http://localhost:8080/api/contactus",contact)
            .then(resp=>{
                console.log(resp)
                alert("Thank you! I will get back to you as soon as possible.")
                
            }
            
            )
            .catch(error=>console.log("Error",error)) 
            document.getElementById('contact-form').reset();
                            
        }
    },[errors]);

  
        return(
             <>
          <div className="contact-container">
            <div className="left-col">
           </div>
            <div className="right-col">
              
    
              <h1>Contact us</h1>
            
              <form id="contact-form"onSubmit={handleSubmit} method="post" >
              
                <label htmlFor="name">Full name</label>
                
                <input type="text" id="name" name="name" placeholder="Your Full Name"onChange={handleInput}  pattern="[A-Z][a-zA-Z]*"
     required />
                           <label htmlFor="email">Email Address</label>
    
                <input type="email" id="email" name="email" placeholder="Your Email Address"onChange={handleInput} pattern='[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}' required />
    
                <label htmlFor="message">Message</label>
                <textarea rows="6" placeholder="Your Message" id="message" name="message"onChange={handleInput}></textarea>
                <button type="submit" id="submit" name="submit">Send</button>
              </form>
              <div id="error"></div>
              <div id="success-msg"></div>
            </div>
        </div>
        
        </>
        );
}



export default ContactUs;