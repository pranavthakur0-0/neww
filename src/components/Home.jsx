import "./home.css";
import Videobg from "./images/video.mp4";
import Ticker from "./countup";
import { BsCodeSlash, BsPersonCheck, BsHourglassSplit } from "react-icons/bs";
import { AiOutlineCoffee } from "react-icons/ai";
import Footer from "./Footer.jsx";
import { RiDoubleQuotesL } from "react-icons/ri";
import Abouthomesection from "./Abouthomesection.jsx";

function Home() {

  return (
    <>
      {/* This section holds the main-first-look screen of home */}

      <div className="div-home-main-container" data-scroll data-scroll-speed="-11" >
        <video src={Videobg} autoPlay loop muted></video>

        <div className="div-home-main-container-part-one">
          <div className="home-main-part-one-title">
            <div className="home-main-part-one-title-part-one" data-scroll data-scroll-speed="-1"></div>
            <div className="home-main-part-one-title-part-two" data-scroll data-scroll-speed="-1" >
              Pentest On Demand
            </div>
          </div>

          <div className="home-main-part-one-heading" data-scroll data-scroll-speed="-1" >
            A New Era Of Security
          </div>
          <div className="home-main-part-one-text" data-scroll data-scroll-speed="-1">
            Secure your future with us in this digital world.
          </div>

          <div className="home-main-part-one-button" data-scroll data-scroll-speed="-0.5">
            <a href="#main-home-service-area">
              <button className="home-main-button"> Learn More</button>
            </a>
          </div>
        </div>
      </div>


      {/* This section holds the service area of home */}



<div className="main-who-we-are-wrapper-whole" data-scroll data-scroll-speed="3">


<Abouthomesection></Abouthomesection>

</div>



<div className="main-container-whychooseus"data-scroll data-scroll-speed="-1">
    <div className="main-container-whychooseus-part-heading" data-scroll data-scroll-speed="-3" data-scroll-direction="horizontal" >
      Why Choose us
    </div>

    <div className="main-container-whychooseus-part-heading-text">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus maxime dolorem quasi quidem. Pariatur ipsum ut maxime nulla quod a magnam. Distinctio dicta 
      eius repudiandae earum quae commodi voluptate sint?
    </div>

    <div className="main-container-whychooseus-container">

      <div className="main-container-whychooseus-container-part">
                 <ul>
                  <li>Lorem ipsum dolor sit amet consectetur </li>
                 </ul>
      </div>
      
      <div className="main-container-whychooseus-container-part">
                 <ul>
                  <li>Lorem ipsum dolor sit amet consectetur </li>
                 </ul>
      </div>

      <div className="main-container-whychooseus-container-part">
                 <ul>
                  <li>Lorem ipsum dolor sit amet consectetur </li>
                 </ul>
      </div>
    </div>

</div>


<div className="div-main-container-countup" data-scroll data-scroll-speed="2">
  <div className="div-main-container-countup-part">
    <div className="div-main-container-countup-part-icon">
          <BsHourglassSplit></BsHourglassSplit>
    </div>
    <div className="div-main-container-countup-part-count">
    <Ticker className="count" end={150} duration={3} ></Ticker>
    </div>
    <div className="div-main-container-countup-part-text">
    Spent Hours
      </div>
  </div>  

  <div className="div-main-container-countup-part">
    <div className="div-main-container-countup-part-icon">
    <AiOutlineCoffee></AiOutlineCoffee>
    </div>
    <div className="div-main-container-countup-part-count">
    <Ticker className="count" end={3000} duration={3} ></Ticker>
    </div>
    <div className="div-main-container-countup-part-text">
    Cups Of Coffee
      </div>
  </div>  

  
  <div className="div-main-container-countup-part">
    <div className="div-main-container-countup-part-icon">
      <BsCodeSlash></BsCodeSlash>
    </div>
    <div className="div-main-container-countup-part-count">
    <Ticker className="count" end={200} duration={3} ></Ticker>
    </div>
    <div className="div-main-container-countup-part-text">
    Successful Projects
      </div>
  </div>  

  <div className="div-main-container-countup-part">
    <div className="div-main-container-countup-part-icon">
   <BsPersonCheck></BsPersonCheck>
    </div>
    <div className="div-main-container-countup-part-count">
    <Ticker className="count" end={214} duration={3} ></Ticker>
    </div>
    <div className="div-main-container-countup-part-text">
    Happy Clients
      </div>
  </div>  


</div>




<div className="home-main-container-main-testimonial">
                <div className="home-main-container-main-our-testimonial">
                    Our Testimonials
                </div>
                <div className="home-main-container-main-testimonial-heading" >
                    Our Happy Clients Say
                </div>

                <div className="home-main-container-main-testimonial-carousel">

                </div>


            </div>






<div className="home-quotes-section">
  <div className="home-quotes-section-icon">
    <RiDoubleQuotesL></RiDoubleQuotesL>
  </div>
  <div className="home-quotes-section-text">
  “Original and with an innate understanding of their customer&apos;s needs, the team at Love Nature are always a pleasure to work with.”
  </div>

</div>





<Footer >

</Footer>






    </>
  );
}
export default Home;
