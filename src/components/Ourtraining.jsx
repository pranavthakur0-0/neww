import './ourtraining.css'
import { IoIosArrowDown } from "react-icons/io";
import './universal.css'
import "./home.css";
import { NavLink } from 'react-router-dom';
import { CgArrowRight } from "react-icons/cg";
import Footer from "./Footer.jsx";

function Ourtraining()
{
    return(
        <>
    <div className="main-container-landingpage main-container-our-training">
      <div className="main-landingpage-section-one">
            <div className="main-landingpage-section-one-ttile">
                Our Training
            </div>
            <div className="main-landingpage-section-one-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nulla est eligendi illo, quaerat natus 
            </div>
            </div>
            <div className="main-about-container-two">
          <div className="home-main-part-scroll-outer-about">
            <div className="home-main-part-scroll-inner-line"></div>
            <div className="home-main-part-scroll-inner-arrow">
              <IoIosArrowDown></IoIosArrowDown>
            </div>
          </div>
          <div className="home-main-part-scroll-text">Scroll</div>
        </div>

      </div>



<div className="home-main-our-courses-container">
<div className="home-main-our-courses-title-back">
         Things We Offer
        </div>
        <div className="home-main-our-courses-title">
          Our Finest Courses
        </div>
        <div className="home-main-our-courses-section">

              <div className="home-main-our-courses-section-part">
                <div className="home-our-courses-section-img part-web">

                </div>
                <div className="home-main-our-courses-section-part-wrapper">
                <div className="home-our-courses-section-wrapper-title">
                Web Application Security
                </div>
                <div className="home-our-courses-section-wrapper-description">
                  <ul>
                    <li>Get hands-on experiences to gain real-world skills in web application security.</li>
                    <li>Our practical labs gives you real time challenges and learning experience.</li>
                  </ul>
               
               
                </div>
                <div className="home-our-courses-section-wrapper-button">
                <NavLink to="/our-training" className='home-service-area-link' >
                                      <button className="card-one-section-2-button-inner">Read More 
                                       <CgArrowRight className="CgArrowRight-ourtraining"></CgArrowRight>   </button>
                                       </NavLink>
                </div>
                </div>
              </div>


 <div className="home-main-our-courses-section-part">
                <div className="home-main-our-courses-section-part-wrapper-left">
                <div className="home-our-courses-section-wrapper-title">
                Mobile Application Security
                </div>
                <div className="home-our-courses-section-wrapper-description-left">
                  <ul>
                    <li>Learn advance vulnerability analysis techniques in mobile applications platforms.</li>
                    <li>Learn latest techniques, and methodologies used by hackers and information security professionals to exploit vulnerabilities in Android/IOS applications.</li>
                  </ul>
               
               
                </div>
                <div className="home-our-courses-section-wrapper-button">
                <NavLink to="/our-training" className='home-service-area-link' >
                                      <button className="card-one-section-2-button-inner">Read More 
                                       <CgArrowRight className="CgArrowRight-ourtraining"></CgArrowRight>   </button>
                                       </NavLink>
                </div>
                </div>
                <div className="home-our-courses-section-img part-mobile">
                </div>
              </div>
              




              <div className="home-main-our-courses-section-part">
                <div className="home-our-courses-section-img part-network">

                </div>
                <div className="home-main-our-courses-section-part-wrapper">
                <div className="home-our-courses-section-wrapper-title">
                Infra & Network Security
                </div>
                <div className="home-our-courses-section-wrapper-description">
                  <ul>
                    <li>Learn advanced methodology of reconnaissance, enumeration and gaining access to network and Infrastructure&apos;s.</li>

                  </ul>
               
               
                </div>
                <div className="home-our-courses-section-wrapper-button">
                <NavLink to="/our-training" className='home-service-area-link' >
                                      <button className="card-one-section-2-button-inner">Read More 
                                       <CgArrowRight className="CgArrowRight-ourtraining"></CgArrowRight>   </button>
                                       </NavLink>
                </div>
                </div>
              </div>


 <div className="home-main-our-courses-section-part">
                <div className="home-main-our-courses-section-part-wrapper-left">
                <div className="home-our-courses-section-wrapper-title">
                Cloud Security
                </div>
                <div className="home-our-courses-section-wrapper-description-cloud">
                  <ul>
                    <li>Learn how to exploit and identify vulnerabilities in applications hosted on cloud platforms like AWS and Azure.</li>
                
                  </ul>
               
               
                </div>
                <div className="home-our-courses-section-wrapper-button">
                <NavLink to="/our-training" className='home-service-area-link' >
                                      <button className="card-one-section-2-button-inner">Read More 
                                       <CgArrowRight className="CgArrowRight-ourtraining"></CgArrowRight>   </button>
                                       </NavLink>
                </div>
                </div>
                <div className="home-our-courses-section-img part-cloud">
                </div>
              </div>
              





        </div>
</div>
< Footer></Footer>
        </>
    );

}
export default Ourtraining;