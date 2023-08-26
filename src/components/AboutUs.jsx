import React, { Component } from 'react';
import "../Styles/Aboutus.css";
import img1 from "../images/mrudula.jpg"
import img2 from "../images/mrudula.jpg"
import img3 from "../images/sanjay.jpg"
import img4 from "../images/mrudula.jpg"
import img5 from "../images/ashwini.jpg"
import img6 from "../images/sirkazi.jpg"

class AboutUs extends Component {
    render() {
      return (
        <>
         <div className='text-center'>
            <h1>ABOUT US</h1>
             
         </div>
    
          <div className="aboutAuthor">
            <div className="K2_bio">
              <img
                alt="About"
                //src="images/mission.png"
              />
    
              <h2>Dipali Patil</h2>
              <div className="h-divider">
                <div className="shadow"></div>
                <div className="text2"></div>
              </div>
              <p>
                Communicated with Contractor, homeowners, builders and other clients regarding 100+ major and minor projects in a year, increasing company's 
                profit by 5% year over year
              </p>
              <div className="h-divider">
                <div className="shadow"></div>
              </div>
              <div className="k2About-bt">
                <a className="button" href="Contact">
                  <span style={{ color: 'white' }}>Contact</span>
                </a>
              </div>
            </div>
          </div>
          <div className="aboutAuthor">
            <div className="K2_bio">
              <img
                alt="About"
                src={img2}
              />
    
              <h2>Mrudula Patil</h2>
              <div className="h-divider">
                <div className="shadow"></div>
                <div className="text2"></div>
              </div>
              <p>
                Certified Interior Designer offering 4+- year of history of designing innovative, 
                functional spaces focused on sustainability and creative aesthtic design. 
                Experienced design leader, skilled in writing proposals, delivering client 
                presentation and building key relationship to grow client base.
              </p>
              <div className="h-divider">
                <div className="shadow"></div>
              </div>
              <div className="k2About-bt">
                <a className="button" href="Contact">
                  <span style={{ color: 'white' }}>Contact</span>
                </a>
              </div>
            </div>
          </div>
          <div className="aboutAuthor">
            <div className="K2_bio">
              <img
                alt="About"
                src={img3}
              />
    
              <h2>Sanjay Tiwari</h2>
              <div className="h-divider">
                <div className="shadow"></div>
                <div className="text2"></div>
              </div>
              <p>
              Created computer-generated sketches, and coordinated with 4 cross-functional
                 teams to meet client's demands. coordinated with the senior interior designer and product 
                 architect on various on various client projects.
    
              </p>
              <div className="h-divider">
                <div className="shadow"></div>
              </div>
              <div className="k2About-bt">
                <a className="button" href="Contact">
                  <span style={{ color: 'white' }}>Contact</span>
                </a>
              </div>
            </div>
          </div>
          <div className="aboutAuthor">
            <div className="K2_bio">
              <img
                alt="About"
                src={img4}
              />
    
              <h2>Manaswi Bhabal</h2>
              <div className="h-divider">
                <div className="shadow"></div>
                <div className="text2"></div>
              </div>
              <p>
                Oversaw designs 3000 sq.ft Amerix Shopping Complex. Designed floor plans, including schematic designs in AutoCAD and 3D perspective for perspective
                for prospects to sales and improve customer understanding projects.
              </p>
              <div className="h-divider">
                <div className="shadow"></div>
              </div>
              <div className="k2About-bt">
                <a className="button" href="Contact">
                  <span style={{ color: 'white' }}>Contact</span>
                </a>
              </div>
            </div>
          </div>
    
    
          <div className="aboutAuthor">
            <div className="K2_bio">
              <img
                alt="About"
                src={img5}
              />
    
              <h2>Ashwini Dodke</h2>
              <div className="h-divider">
                <div className="shadow"></div>
                <div className="text2"></div>
              </div>
              <p>
                Assisted 12 in-house interior designers in planning and implementing clients' request in regards to furniture.
                Documenting concerns or requests and redirecting client to appropriate deparments as needed.
    
              </p>
              <div className="h-divider">
                <div className="shadow"></div>
              </div>
              <div className="k2About-bt">
                <a className="button" href="Contact">
                  <span style={{ color: 'white' }}>Contact</span>
                </a>
              </div>
            </div>
          </div>
    
          <div className="aboutAuthor">
            <div className="K2_bio">
              <img
              
                alt="About"
                src={img6}
              />
    
              <h2>Omar Sirkazi</h2>
              <div className="h-divider">
                <div className="shadow"></div>
                <div className="text2"></div>
              </div>
              <p>
              Acquired NCIDQ certification. Operated 3D Studio Max, Grasshoper and Rhino to maintain design
              quality and percision. Used CAD, sketch-Up, AutoCAD, Revit and InDesign for best delivery, percision and customer 
              satisfaction.
              </p>
              <div className="h-divider">
                <div className="shadow"></div>
              </div>
              <div className="k2About-bt">
                <a className="button" href="Contact">
                  <span style={{ color: 'white' }}> Contact</span>
                </a>
              </div>
            </div>
          </div>
        </>
      );
    }
}

export default AboutUs;