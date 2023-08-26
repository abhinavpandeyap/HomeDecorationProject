import React, { Component } from 'react';
import "../Styles/footer.css";
import logo from"../images/icon.jpg";



class Footer extends Component {
    render(){
        return (
            <footer className="bg-dark text-center text-white">
              <div className="container p-3">
                <section className="mb-4">
                  <a className="btn bg-dark btn-outline-light  m-2" href="" target="_blank" role="button">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a className="btn bg-dark btn-outline-light btn-floating m-2" href="" target="_blank" role="button">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a className="btn bg-dark btn-outline-light btn-floating m-2" href="" target="_blank" role="button">
                    <i className="fa fa-google"></i>
                  </a>
                  <a className="btn bg-dark btn-outline-light btn-floating m-2" href="" target="_blank" role="button">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a className="btn bg-dark btn-outline-light btn-floating m-2" href="" target="_blank" role="button">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </section>
                
                <section className="">
                  <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <div className="d-flex justify-content-center mb-2 ">
                          <img src={logo} alt="" style={{ height: "75px" }} />
                        </div>
                        <div className="d-flex justify-content-center">
                          <h6 className="text-uppercase fw-bold mb-4">
                            <i className="fas fa-gem me-3 text-secondary"></i>My House Decore
                          </h6>
                        </div>
                        <div className="d-flex justify-content-center">
                        <p >
                        Home decor is the style of your home interiors and includes the items you use to decorate and personalise your house. For instance, if you like flowers, you can get carpets or cushion covers with floral prints. Or, if your interior design inspiration is more mid-century modern than contemporary, you can buy appropriate home decor items for your place.
                          </p>
                        </div>
                      </div>

                     <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase mb-4">Career</h6>
                        <h6 className="text-uppercase  mb-4">Help</h6>
                        <h6 className="text-uppercase  mb-4">Blog</h6>
                        <h6 className="text-uppercase mb-4">Terms and Condition</h6>
                       </div>
                        
                      <div className="justify-content-center col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                        <p><i style={{ fontSize: "24px" }} className="fa"></i> My House Decore, Mumbai, India</p>
                        <p><i style={{ fontSize: "24px" }} className="fa">📧</i> homedecore@gmail.com</p>
                        <p><i style={{ fontSize: "24px" }} className="fa"></i> &nbsp;9623920493</p>
                        <p><i style={{ fontSize: "24px" }} className="fa"></i> &nbsp; 9623403457</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                © 2023- {new Date().getFullYear()} My House Decore. All rights reserved.
              </div>
            </footer>
          )
    }
}
export default Footer;