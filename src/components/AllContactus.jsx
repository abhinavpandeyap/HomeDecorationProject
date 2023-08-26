import axios from "axios";
import { useEffect, useState } from "react";

function AllContactus(){
    const [customers,setCustomers]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/api/contactus/contactlist")
        .then(resp=>{
            setCustomers(resp.data.data)
            console.log(customers)
        })
    },[])
    
    return (
        <section className="cr-image">
        <div className="container-fluid">
            <h4 className="text-white p-2 text-center">All Contactus Information</h4>
            <table className="table table-bordered table-light table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>User email</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                {customers.map(x=>(
                    <tr key={x.id}>
                        <td>{x.name}</td>
                        <td>{x.email}</td>
                        <td>{x.message}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        </section>
    )
}

export default AllContactus;