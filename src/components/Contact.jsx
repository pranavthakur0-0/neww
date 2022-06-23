import Footer from "./Footer.jsx";
import "./contact.css";
import {IoIosArrowDown} from "react-icons/io";
import { AiFillMessage, AiOutlinePhone} from "react-icons/ai";
import {BsArrowRightShort} from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import {IoLocationOutline } from "react-icons/io5";
import './universal.css'

function Contact() {
  return (
    <>
      <div className="main-container-landingpage main-contact-landing-page">
      <div className="main-landingpage-section-one">
            <div className="main-landingpage-section-one-ttile">
                Contacts
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

<div className="home-main-contactus-container">
    <div className="home-main-contactus-heading">
      Stay Connected
    </div>
  

<div className="home-main-contactus-title-wrapper">
<div className="home-main-contactus-title-new">
<div className="color-blue-text"> Get&nbsp;</div>in&nbsp;Touch&nbsp;
  </div>
  <div className="home-main-contactus-title-new">
  With <div className="color-blue-text">&nbsp;us</div>
  <div className="home-main-contactus-title-icon">
  <AiFillMessage className="ai-message-color"></AiFillMessage>
</div>
  </div>
</div>




</div>
<div className="home-main-contactus-section-one">
<form className="main-contact-form" autoComplete="off">
     <div className="main-contact-form-wrapper">
      <input type="text" className="main-contact-form-input" placeholder="First Name (required)" required/>  
      <input type="text" className="main-contact-form-input" placeholder="Last Name (required)" required/>
     </div>
     <div className="main-contact-form-wrapper">
      <input type="email" className="main-contact-form-input" placeholder="Email (required)" required/>  
      <input type="number" className="main-contact-form-input" placeholder="Number (required)" required/>
     </div>
     <div className="main-contact-form-wrapper-text">
      <input type="textarea" className="main-contact-form-input-message" placeholder="Message"/>  
      <div className="main-contact-form-button-container">
                                         <button typeof="submit" className="footer-contact-form-button">Get in touch</button>
                                </div>
     </div>


     <div className="main-contact-form-background-text">
      Contacts
     </div>
</form>
<div className="home-main-contactus-section-form-img-address">
  <div className="home-main-contactus-section-form-img-inner">
    <span>
      We are here!
    </span>
  </div>
  <div className="home-main-contactus-section-form-img-0101">
  </div>
  <div className="home-main-contactus-section-form-img-0101part2">
  </div>
</div>
</div>
<div className="main-contact-info">

  <div className="main-contact-info-backgound-text">
    Contacts
  </div>
  <div className="main-contact-info-wrapper">
    <div className="main-contact-info-wrapper-section">
      <div className="main-contact-info-wrapper-text-info-wrapper">
        <div className="main-contact-info-wrapper-text-info-icon">
          <MdAlternateEmail></MdAlternateEmail>
        </div>
        <div className="main-contact-info-wrapper-text-info-text">
        Info@cybrsky.com
        </div>

    </div>
    <div className="main-contact-info-wrapper-text-info-wrapper">
    <div className="main-contact-info-wrapper-text-info-icon">
    <AiOutlinePhone></AiOutlinePhone>
    </div>
    <div className="main-contact-info-wrapper-text-info-text">
    +91 99155 50233
    </div>
</div>
<div className="main-contact-info-wrapper-text-info-wrapper">
<div className="main-contact-info-wrapper-text-info-icon">
<IoLocationOutline>
  
</IoLocationOutline>
</div>
<div className="main-contact-info-wrapper-text-info-text">
2360 Hood Avenue, San Diego, CA, 92123
</div>
</div>
  </div>
  <div className="main-contact-info-art">
  <div className="main-contact-form-links">
<a className="contact-form-anchor-tags" href="https://www.linkedin.com/" title="linkedin" target="_blank" rel="noopener noreferrer">
<div className="main-contact-form-links-text">
   Twitter<BsArrowRightShort className="arrow-link-icon"></BsArrowRightShort>
</div>
</a>
<a className="contact-form-anchor-tags" href="https://www.linkedin.com/" title="linkedin" target="_blank" rel="noopener noreferrer">
<div className="main-contact-form-links-text">
   Linkedin<BsArrowRightShort className="arrow-link-icon"></BsArrowRightShort>
 </div>
 </a>
 <a className="contact-form-anchor-tags" href="https://www.linkedin.com/" title="linkedin" target="_blank" rel="noopener noreferrer">
 <div className="main-contact-form-links-text">
 Facebook<BsArrowRightShort className="arrow-link-icon"></BsArrowRightShort>
 </div>
 </a>
</div>
  </div>
  </div>
</div>
     
      <Footer></Footer>
    </>
  );
}
export default Contact;
