import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import HeroSection from '../AboutUsPage/components/HeroSection';
import "./components/ourLocation.css"
const OurLocationPage = () => {
    return (
        <div className="ourLocation">
          <HeroSection title="OUR LOCATION"
          bg="location.jpg"
          />

           <div style={{position:"relative"}}>
          <div className='d-none d-md-inline'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.088685218583!2d-61.2233890492321!3d13.156805714300663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c475150d7889919%3A0xec14007759a547d6!2sGriffith%20Corporate%20Centre!5e0!3m2!1sen!2s!4v1641327221958!5m2!1sen!2s" width="100%" height="450" frameBorder="0" style={{border:'0'}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe></div>


           <div className="mapCard">
            <div className="title">Our Office</div>
            <div className="text">Suit 305, Griffith Corporate Centre<br/>
            Beachmont, P.O.Box 1510, Kingstown St.<br/>
            Vincent and the Grenadines</div>

            <div className="title">Customer Support</div>
            <div className="text">For any enquiries call or whatsapp us .</div>
            <div className="text mb-1"><FontAwesomeIcon icon={faPhone} color="#fff"  /> +44 (0) 203 900 2800</div>
            <div className="text"><FontAwesomeIcon icon={faEnvelope} color="#fff"  /> support@alawalmarkets.com
</div>
           </div>
           </div>

          <div className='basicRow'>
          <div className="cardFlex">
               <div className="locationCard">
                   <div className='title'>Our Office</div>
                   <div className="text"><FontAwesomeIcon icon={faMapMarkerAlt} color="#ee3f97"  /> <span>Suit 305, Griffith Corporate Centre<br/>
                   Beachmont, P.O.Box 1510, Kingstown St.<br/>
            Vincent and the Grenadines
                </span></div>
                <div className="text mb-1"><FontAwesomeIcon icon={faPhone} color="#ee3f97"  /> +44 (0) 203 900 2800</div>
                <div className="text"><FontAwesomeIcon icon={faEnvelope} color="#ee3f97"  />support@alawalmarkets.com</div>
               </div>
               {/* <div className="locationCard">
                   <div className='title'>Dubai</div>
                   <div className="text"><FontAwesomeIcon icon={faMapMarkerAlt} color="#ee3f97"  /> <span>Office No. 2005, 20th Floor, 2306, Prism tower, Business Bay, <br/> Dubai, UAE


                </span></div>
                <div className="text mb-1"><FontAwesomeIcon icon={faPhone} color="#ee3f97"  />  +971 (0) 547 468 487</div>
                <div className="text"><FontAwesomeIcon icon={faEnvelope} color="#ee3f97"  /> support@cabanacapitals.com</div>
               </div> */}
               {/* <div className="locationCard">
                   <div className='title'>Nigeria</div>
                   <div className="text"><FontAwesomeIcon icon={faMapMarkerAlt} color="#ee3f97"  /> <span>4th floor Mosesola House, 103 Allen Avenue,<br/> Ikeja Lagos.

                </span></div>
                <div className="text mb-1"><FontAwesomeIcon icon={faPhone} color="#ee3f97"  /> +234 805 653 1053.</div>
                <div className="text"><FontAwesomeIcon icon={faEnvelope} color="#ee3f97"  /> hu@cabanacapitals.com</div>
               </div> */}
           </div>
          </div>
        </div>
    );
};

export default OurLocationPage;
