import "./navbar.css"
import { BrowserRouter as Router,Routes, Route, NavLink } from 'react-router-dom';
import Home from "./Home.jsx"
import About from "./About.jsx"
import Ourtraining from "./Ourtraining.jsx"
import Services from "./Services.jsx"
import Contact from "./Contact.jsx"
import Register from "./Register.jsx"
import ScrollToTop from './linktotop.jsx'
function Navbar()
{

    

    return(
        <>
        <Router>
        <ScrollToTop />
        <div className="outer-main-container-navbar-strip">
            asdfasdf
        </div>
           <div  className="outer-main-container-navbar">
                <div className="outer-main-container-navbar-logo-outer">
                    <div className="outer-main-container-navbar-logo"   ></div>
                </div>
                <div className="outer-main-container-navbar-links-outer">
                    <div className="outer-main-container-navbar-links-inner">
                        <nav>
                        <NavLink  className={({ isActive }) => isActive? "active": 'not-active'} to="/" ><div className="wrapper"><div className="navbar-items-links" >Home</div>  <span  className="slider" ></span></div></NavLink>
                        <NavLink  className={({ isActive }) => isActive? "active": 'not-active'} to="/about" ><div className="wrapper"><div className="navbar-items-links">About Us</div><span className="slider" ></span></div></NavLink>
                        <NavLink  className={({ isActive }) => isActive? "active": 'not-active'} to="/services" ><div className="wrapper"><div className="navbar-items-links" >Services</div><span className="slider"  ></span></div></NavLink>
                        <NavLink  className={({ isActive }) => isActive? "active": 'not-active'} to="/our-training" ><div className="wrapper"><div className="navbar-items-links" >Our Training</div><span className="slider" ></span></div></NavLink>
                        <NavLink  className={({ isActive }) => isActive? "active": 'not-active'} to="/contact" ><div className="wrapper"><div className="navbar-items-links" >Contact</div><span className="slider" ></span></div></NavLink>
                        </nav>
     
                    </div>
                </div>
            </div>
            <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/about' element={<About />}></Route>
            <Route exact path='/services' element={<Services />}></Route>
            <Route exact path='/our-training' element={<Ourtraining />}></Route>
            <Route exact path='/contact' element={<Contact />}></Route>
            <Route exact path='/register' element={<Register />}></Route>
  


            </Routes>
        </Router>
        </>
    );

}
export default Navbar;