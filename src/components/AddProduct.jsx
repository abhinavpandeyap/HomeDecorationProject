import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import productvalidation from "./productvalidation";
import "../Styles/Login.css";

function AddProduct(){
    const sellerid=sessionStorage.getItem("id")
    const [product,setProduct]=useState({
        "pname":"",
        "pcat":"",
        "price":"",
        "brand":"",
        "sellerId":sellerid
    })
    const [errors,setErrors]=useState({})
    const [selectedPhoto,setSelectedPhoto]=useState(null)
    const [file,setFile]=useState(null)
    const [submitted,setSubmitted]=useState(false)
    const history=useHistory()

    const handleInput=e=>{
        setProduct({...product,[e.target.name]:e.target.value})
    }

    const handleFileInput=e=>{
        setSelectedPhoto(e.target.files[0])
        setFile(URL.createObjectURL(e.target.files[0]))
    }

    const handleSubmit=e=>{
        e.preventDefault()
        setErrors(productvalidation(product))    
        setSubmitted(true)
    }

    useEffect(()=>{
        console.log(errors)
        if(Object.keys(errors).length===0 && submitted){
            const formData=new FormData()
            formData.append("pic",selectedPhoto)
            formData.append("pname",product.pname)
            formData.append("pcat",product.pcat)
            formData.append("price",product.price)
            formData.append("brand",product.brand)
            formData.append("sellerId",sellerid)
            console.log(product)
            axios.post("http://localhost:8080/api/products",formData)
            .then(resp=>{
                let result=resp.data.data;
                console.log(result) 
                alert("Product saved successfully")               
                history.push("/myproducts")
            })
            .catch(error=>{
                console.log("Error",error);
                alert("Error saving product")
            })            
        }
    },[errors])
    return (
        <section className="">
        <div className="container col-lg-4">
                <div className="card shadow bg-info text-black">
                    <div className="card-body">
                    <div className="row">
                        <div>
                            {selectedPhoto ? <img className="img-thumbnail" src={file} alt="Photo" /> : ""} 
                        </div>
                        <div >
                            <h4 className="text-center p-2">
                                Add Product Form
                            </h4>
                            <form onSubmit={handleSubmit}>
                            <div className="form-group form-row">
                                <label className=" label form-control-label"><b> Name</b></label>
                                <div className="col-sm-8">
                                    <input type="text" name="pname" value={product.pname} onChange={handleInput} className="form-control" />
                                    {errors.pname && <small className="text-danger float-right">{errors.pname}</small>}
                                </div>
                                
                            </div>                            
                            <div className="form-group form-row">
                                <label className=" label form-control-label"><b>size</b></label>
                                <div className="col-sm-8">
                                    <select name="pcat" value={product.pcat} onChange={handleInput} className="form-control">
                                        <option value="">Select Category</option>
                                        <option>large</option>   
                                        <option>small</option>     
                                        <option>medium</option>     
                                          
                                        {/* <option>Mango</option>     
                                        <option>Banana</option>     
                                        <option>Lemon</option>  */}
                                    </select>   
                                    {errors.pcat && <small className="text-danger float-right">{errors.pcat}</small>}                    
                                </div>                        
                            </div>
                            <div className="form-group form-row">
                                <label className="label form-control-label"><b>Price</b></label>
                                <div className="col-sm-8">
                                    <input type="number" min = "1"  name="price" value={product.price} onChange={handleInput} className="form-control" />
                                    {errors.price && <small className="text-danger float-right">{errors.price}</small>}
                                </div>                                
                            </div>
                            <div className="form-group form-row">
                                <label className=" label form-control-label"><b>Brand</b></label>
                                <div className="col-sm-8">
                                    <select name="brand" value={product.brand} onChange={handleInput} className="form-control">
                                        <option value="">Select Brand</option>
                                        <option>Bajaj </option>
                                        <option>Sunmeet</option>
                                        <option>LG</option>
                                        <option>Sleepy Head</option>
                                     
                                    </select>
                                    {errors.brand && <small className="text-danger float-right">{errors.brand}</small>}
                                </div>                                
                            </div>

                            <div className="form-group form-row">
                                <label className="label form-control-label"><b>Photo</b></label>
                                <div className="col-sm-8">
                                    <input type="file" required name="photo" value={product.photo} onChange={handleFileInput} className="form-control-file" />                                    
                                </div>                                
                            </div>
                            <div className="d-flex justify-content-center">
                            <button className="btn btn-primary " ><b>Save </b></button>
                            
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

export default AddProduct;
