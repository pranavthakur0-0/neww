
import './App.css';
import React from "react";
import Navbar from "./components/navbar.jsx"
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef } from 'react';

function App() 
{
  const containerRef = useRef(null);
  
  return (
    <LocomotiveScrollProvider
      options={
        {
          smooth: true,
          multiplier : 0.5,
          lerp: 0.05,
          getSpeed:false
          // ... all available Locomotive Scroll instance options 
        }
      }
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
      <div data-scroll-section>
      <Navbar data-scroll data-scroll-speed="1" style={{ color:'white'}}></Navbar>
      
    </div>
    
      </main>
    </LocomotiveScrollProvider>
      );
}

export default App;
