import { NavLink } from 'react-router-dom';
import { AiOutlineInstagram, AiFillLinkedin,AiOutlineTwitter,AiOutlineFacebook } from "react-icons/ai";
import { MdAlternateEmail ,MdLocalPhone, MdOutlineLocationOn, MdVerified } from "react-icons/md";


import './footer.css'
function Footer()
{
    return(
        <>
                <div className="main-footer-container">
                <div className="main-footer-container-section-one">
                    <div className="main-footer-container-section-one-part1">
                    Let's Get You Secure Digitally <MdVerified className="MdVerified"></MdVerified>
                    </div>
                </div>
                        <div className="main-footer-container-section-two">
                            
                            
                            <div className="inner-footer-section-space"></div>



                                <div className="inner-footer-section-one">


                                        <div className="inner-footer-container-one">
                                                <div className="inner-footer-container-one-logo">
                                                </div>
                                                <div className="inner-footer-container-one-text-wrapper">
                                                    <div className="inner-footer-container-one-contact">

                                                        <div className="inner-footer-container-one-contact-section">
                                                        <MdAlternateEmail className="home-section-contact-icon"></MdAlternateEmail>
                                                        <div className="home-section-contact-text">
                                                        Info@cybrsky.com
                                                        </div>
                                                        
                                                        </div>

                                                        <div className="inner-footer-container-one-contact-section">
                                                        <MdLocalPhone className="home-section-contact-icon"></MdLocalPhone>
                                                        <div className="home-section-contact-text">
                                                        +91 99155 50233
                                                        </div>
                                                        
                                                        </div>

                                                        <div className="inner-footer-container-one-contact-section">
                                                        <MdOutlineLocationOn className="home-section-contact-icon"></MdOutlineLocationOn>
                                                        <div className="home-section-contact-text">
                                                        2360 Hood Avenue, San Diego, CA, 92123
                                                        </div>
                                                        
                                                        </div>





                                                    </div>

                                                </div>


                                        </div>

                                        <div className="inner-footer-container-two">
                                            <div className="inner-footer-container-two-part-one">
                                                <div className="inner-footer-container-two-part-one-space"></div>
                                                        <div className="footer-container-two-part-one-header">
                                                            Navigation
                                                        </div>

                                                        <div className="footer-navlink">
                                                        <NavLink className={({ isActive }) => isActive? "footer-navlink-links": 'footer-navlink-links'}  to="/">Home</NavLink>
                                                        <NavLink className={({ isActive }) => isActive? "footer-navlink-links": 'footer-navlink-links'} to="/about"> About</NavLink>
                                                        <NavLink className={({ isActive }) => isActive? "footer-navlink-links": 'footer-navlink-links'} to="/services">Services</NavLink>
                                                        <NavLink className={({ isActive }) => isActive? "footer-navlink-links": 'footer-navlink-links'} to="/our-training">Our Training</NavLink>
                                                        <NavLink className={({ isActive }) => isActive? "footer-navlink-links": 'footer-navlink-links'} to="/contact">Contact</NavLink>
                                                        <NavLink className={({ isActive }) => isActive? "footer-navlink-links": 'footer-navlink-links'} to="/register">Register</NavLink>
                                                        </div>
                                            </div>

                                            <div className="inner-footer-container-two-part-one">
                                                <div className="inner-footer-container-two-part-one-space"></div>
                                                        <div className="footer-container-two-part-one-header">
                                                           Services
                                                            </div>
                                                            <div className="footer-services-wrapper">
                                                            <div className="footer-services-wrapper-text">
                                                                    Pentest On Demand
                                                            </div>
                                                            <div className="footer-services-wrapper-text">
                                                            Web Application
                                                            </div>
                                                            <div className="footer-services-wrapper-text">
                                                            Mobile Application
                                                            </div>

                                                            <div className="footer-services-wrapper-text">
                                                            Infra & Network

                                                            </div>
                                                            <div className="footer-services-wrapper-text">
                                                            Cloud Security Services

                                                            </div>
                                                            <div className="footer-services-wrapper-text">
                                                            API & End Point Security

                                                            </div>

                                                        </div>
                                            </div>
                                        </div>
                                </div>



                                <div className="inner-footer-section-two">
                                    <div className="inner-footer-section-two-line">
                                        <div className="footer-section-two-line-segment"></div>

                                    </div>
                                    <div className="inner-footer-section-two-media-and-text">
                                    <div className="inner-footer-section-two-companyname">
                                    @ All copyright 2022 Cybr Sky
                                    </div>
                                    <div className="inner-footer-section-two-policy">
                                        <div className="inner-footer-section-two-policy-one">
                                                Privacy Terms
                                                </div>
                                                <div className="inner-footer-section-two-policy-one">
                                                India
                                                </div>
                                                <div className="inner-footer-section-two-policy-one">
                                                English
                                                </div>
                                    </div>
                                        <div className="inner-footer-section-two-media-icons">
                                            <AiOutlineTwitter className="media-icons-footer"></AiOutlineTwitter>
                                            <AiFillLinkedin className="media-icons-footer"></AiFillLinkedin>
                                            <AiOutlineInstagram className="media-icons-footer"></AiOutlineInstagram>
                                            <AiOutlineFacebook className="media-icons-footer"></AiOutlineFacebook>
                                        </div>
                                    </div>
                                </div>
                        </div>
                </div>
                <div className="main-container-test">
  
</div>
        </>
    );

}
export default Footer;