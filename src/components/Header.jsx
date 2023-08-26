import { useSelector } from "react-redux";
import "../Styles/Header.css";

function Header(){
    const state=useSelector((state)=>state);
    console.log("Header ",state.loggedin.Username)
    return (
        <div className="jumbotron p-2 mb-0 rounded-0 bg-transparent text-white">
          <div className="row" style={{backgroundColor: "#FFFDD0"}}>
          <div  className="col-2"> <img src={'icon.jpg'} style={{width:"140px", hieght:"140px"}} className="float-left p-0"/></div> 
          <div  className="col-8"><h1 className="heading text-center font-weight-bold p-3 mt-3 text-secondary" >My House Decore </h1></div>
           
          <div className="col-2"> {state.loggedin.IsLoggedIn ?
            <>            
            {/* <h5 className="float-left">Role : {state.loggedin.Role}</h5> */}
            <h5 className="float-right">Welcome ! {state.loggedin.Username}</h5> </>:
            ''}
          </div>
            <div className="clearfix"></div>

            </div> 
        </div>
    )
}

export default Header;