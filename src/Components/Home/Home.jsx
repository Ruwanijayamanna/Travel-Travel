import React from 'react'
import './home.css'
import './home.scss';
import video from '../../assets/video.mp4'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";


const Home = () => {
  
  return (
    <section className="home"> 
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>
 
    <div className="homeContent container">
      <div className="textDiv">

        <span className="smallText">
          Our packages
        </span>

        <h1 className="homeTitle">
          Search Your Holiday
        </h1>

      </div>

      <div className="cardDiv grid">
        <div className="destinationInput">
          <labal className="city">Search Your Destination :</labal>
          <div className="input flex">
            <input type="text" placeholder="Enter name hear..." />
            <GrLocation className='icon'/>
          </div>
        </div>

        <div className="dateInput">
          <labal className="date">Select your Date :</labal>
          <div className="input flex">
            <input type="date" placeholder="Enter name hear..." />
          </div>
        </div>

        <div className="prizeInput">
         <div className="label_total flex">
          <label className="prize">Max-price:</label>
          <h3 className="total">$5000</h3>
         </div>
         <div className="input flex">
          <input type="range" max="5000" min="1000" />
         </div>
        </div>
      
      <div className="searchOptions flex">
      <HiFilter className='icon'/>
      <span>MORE FILTERS</span>
      </div>
</div>

<div className="homeFooterIcons flex">
  <div className="rightIcons">
  <FiFacebook className="icon"/>
  <FaInstagram  className="icon"/>
 <FaTripadvisor className="icon"/>
  </div>

  <div className="leftIcons">
  <BsListTask className="icon"/>
  <TbApps className="icon"/>
  </div>
</div>
    </div>
    </section>
  )
}

export default Home 
