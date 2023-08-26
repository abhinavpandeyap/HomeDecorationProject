const contactusvalidation=(values)=>{
    let errors={}
   
    if(!values.email){
        errors.email="Email is required"
    }
    if(!values.message){
        errors.message="Message id is required"
    }
   
    return errors;
}

export default contactusvalidation;