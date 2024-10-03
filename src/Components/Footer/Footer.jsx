import React from 'react'
import './footer.css'
import './footer.scss'
import video2 from '../../assets/video2.mp4'

//import icons
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";


const Footer = () => {
  return (
   <section className="footer">
    <div className="videoDiv">
      <video src={video2} loop autoPlay muted  type ="video/mp4" />
    </div>

    <div className="secContent container">
      <div className="contactDiv flex">
        <div type="text">
          <small>KEEP IN TOUCH</small>
          <h2>Travel with Us</h2>
        </div>

        <div className="inputDiv flex">
          <input type="text" placeholder="Enter email address"/>
          <button className="btn flex" type='submit'>
          SEND <FiSend className="icon"/>
          </button>
        </div>
      </div>
   

    <div className="footerCard flex">
      <div className="footerIntro flex">
        <div className="logoDiv">
          <a href="#" className='logo flex'>
          <MdOutlineTravelExplore className='icon' />Travel.
         
          </a>
        </div>
    <div className="footerParagraph">
    © 2024 Wanderlust Travel Agency. All Rights Reserved.
     Explore the world with us and discover breathtaking destinations, hidden gems, and unforgettable experiences. 
     Follow us on Facebook and Instagram for travel inspiration and exclusive offers. 
     For bookings and inquiries, contact us at info@wanderlusttravel.com.
      Your adventure starts here – let's make your travel dreams a reality.
    </div>
  <div className="footerSocial flex">
          <FaTwitter  className="icon"/>
          <AiFillYoutube className='icon' />
          <FaSquareInstagram className='icon' />
          <FaTripadvisor className='icon'/>
</div>

      </div>

      <div className="footerLinks grid">
        <div className="linkGroup">
          <span className="groupTitle">
            OUR AGENCY
          </span>

          <li className="footerList flex">
          <FiChevronRight className='icon'/>Services
          </li>
          
          <li className="footerList flex">
          <FiChevronRight className='icon'/>Insurance
          </li>

          <li className="footerList flex">
          <FiChevronRight className='icon'/>Agency
          </li>
          <li className="footerList flex">
          <FiChevronRight className='icon'/>Tourism
          </li>
          <li className="footerList flex">
          <FiChevronRight className='icon'/>Payment
          </li>
          

        </div>

        <div className="linkGroup">
          <span className="groupTitle">
            PARTNERS
          </span>

          <li className="footerList flex">
          <FiChevronRight className='icon'/>Booking
          </li>
          
          <li className="footerList flex">
          <FiChevronRight className='icon'/>Rentcars
          </li>

          <li className="footerList flex">
          <FiChevronRight className='icon'/>HostelWorld
          </li>
          <li className="footerList flex">
          <FiChevronRight className='icon'/>Trivage
          </li>
          <li className="footerList flex">
          <FiChevronRight className='icon'/>TripAdvisor
          </li>
          

        </div>

        

        
      </div>

      <div className="footerDiv flex">
        <small>BEST TRAVEL WEBSITE THEME 2024</small>
        
      </div>

    </div>
    </div>
   </section>
  )
}

export default Footer
