import "./services.css";
import { IoIosArrowDown } from "react-icons/io";
import './universal.css'
import Footer from './Footer.jsx'
function Services() {
  return (
    <>

      <div className="main-container-landingpage main-container-service">
      <div className="main-landingpage-section-one">
            <div className="main-landingpage-section-one-ttile">
                Services
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

      <div className="main-container-service-section">
        <div className="main-container-text-title">
        Check Our Best Services
        </div>
        <div className="main-container-service-section-info">
                <div className="main-container-service-section-info-img"></div>
                <div className="main-container-service-section-info-text">
                  <div className="main-container-service-section-info-text-wrapper">
                  <div className="main-container-service-section-info-text-heading">
                  Pentest On Demand Security Services
                </div>
                <div className="main-container-service-section-info-text-info">
                  <ul>
                    <li>Secure your future with us in this digital world . Our proactive approach helps our clients to enhance there overall protection from cyber risks.</li>
                    <br></br>
                    <li>We always focus on the security of our clients and provide reliable penetration testing services with fast and accurate delivery.</li>
                  </ul>
                </div>
                  </div>
                  <div className="main-container-service-section-info-text-wrapper">
                  <div className="main-container-service-section-info-text-heading">
                  Web Application Security Services
                </div>
                <div className="main-container-service-section-info-text-info">
                  <ul>
                    <li>Identify the threats using advance pen-testing approach in the web applications followed by manual & automation testing techniques.</li>
                    <br></br>
                    <li>Our extensive and advance testing approach identify all possible attack surfaces and helps improve your overall application security.</li>
                  </ul>
                </div>
                  </div>

                </div>
        </div>

        <div className="main-container-service-section-info">
                <div className="main-container-service-section-info-text">
                  <div className="main-container-service-section-info-text-wrapper">
                  <div className="main-container-service-section-info-text-heading">
                  Mobile Application Security Services
                </div>
                <div className="main-container-service-section-info-text-info">
                  <ul>
                    <li>Our Depth analysis of Android/IOS application with static and dynamic security testing approach identify security vulnerabilities and all weak aspects of code helps you to track all weakness in the mobile application.</li>
                    <br></br>
                    <li>Our depth and advance testing approach reduce the overall risk in your code and maintain the confidentiality of application data.</li>
                  </ul>
                </div>
                  </div>
                  <div className="main-container-service-section-info-text-wrapper">
                  <div className="main-container-service-section-info-text-heading">
                  Infra & Network Security Services
                </div>
                <div className="main-container-service-section-info-text-info">
                  <ul>
                    <li>Let our team helps to identify risk in your critical Infrastructure and Networks.</li>
                    <br></br>
                    <li>Critical Infrastructure’s are always the targets to attacker’s and our expertise team will helps identify internal and external threats to make your infra & networks secure. </li>
                  </ul>
                </div>
                  </div>

                </div>
                <div className="main-container-service-section-info-img-2"></div>
        </div>
        <div className="main-container-service-section-info">
                <div className="main-container-service-section-info-img"></div>
                <div className="main-container-service-section-info-text">
                  <div className="main-container-service-section-info-text-wrapper">
                  <div className="main-container-service-section-info-text-heading">
                  Cloud Security Services
                </div>
                <div className="main-container-service-section-info-text-info">
                  <ul>
                    <li>Testing to ensure the cloud hosted applications are secure against any vulnerabilities.</li>
                    <br></br>
                    <li>Our security audit helps to maintain security of your cloud infrastructure by identifying threats, misconfiguration of files and unauthorized access</li>
                  </ul>
                </div>
                  </div>
                  <div className="main-container-service-section-info-text-wrapper">
                  <div className="main-container-service-section-info-text-heading">
                  API & End Point Security
                </div>
                <div className="main-container-service-section-info-text-info">
                  <ul>
                    <li>API, attackers can gain access to your network using one kind of attack. Don’t let them to gain the access to your API data.</li>
                    <br></br>
                    <li>Our team helps you to provide extra layer of security to your API and web services by identify the vulnerabilities & external threats.</li>
                  </ul>
                </div>
                  </div>

                </div>
        </div>
        </div>


        <div className="main-container-service-section-why">
          <div className="main-container-service-section-why-heading">
          Why Love Our Service
          </div>

        <div className="container-service-section-why-icon">
          <div className="container-service-section-why-icon-part">
            <div className="container-service-section-why-icon-part-place1 section-why-icon-part-place1">
                      Expericence
            </div>
            <div className="container-service-section-why-icon-part-place2">
                   Quick Turnaround
            </div>
          </div>
          <div className="container-service-section-why-icon-part2">
          <div className="container-service-section-why-icon-part-place1 section-why-icon-part-place1-left">
                      5 Star Rating
          </div>
            <div className="container-service-section-why-icon-part-place2 section-why-icon-part-place2">
            Dedicated Support
            </div>
          </div>
        </div>

        <div className="container-service-section-why-icon-text">
          <ul>
              <li>
              Your customers just learned what services you offer. Tell them why they should work with you or your team, for example you could highlight your experience and positive client reviews.
              </li>
              <li>
              The badges illustrate this.  We also focus on key benefits they will get while using our services, namely quick turnaround times and dedicated support. You could also use them to show awards you won for your best work.
              </li>
          </ul>
        </div>
      </div>
<Footer></Footer>
    


    
    </>
  );
}
export default Services;
