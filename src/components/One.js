import React from 'react'
import pic02 from '../assets/images/pic02.jpg'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const One = props => (
  <section
    id="one"
    className="spotlight style1 bottom inactive"
    style={{ backgroundImage: `url(${pic02})` }}
  >
    <span className="image fit main">
      <img src={pic02} alt="" />
    </span>
    <Fade bottom big>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-4 col-12-medium">
              <header>
                <h2>Who we are</h2>
                <p>
                  We are one of the Electrical A grade contractors in Tamilnadu functional from 2014 under the stewardship of  J.Anto Shebin and T.Ram prakash .,Partners who is having a field  experience, detailed  Engineering, design for 8 years in the Electrical Contracting and licensing field.
                </p>
              </header>
            </div>
            <div className="col-4 col-12-medium">
              <p>
                Prakash says: We are a dedicated team of  Engineers & electrical draftsman’s with experienced technicians are carrying out all types of electrical licensing works in compliance with IE rules and CEIG regulations to the fullest satisfaction of our valuable clients.
              </p>
            </div>
            <div className="col-4 col-12-medium">
              <p>
                Shebin says: The scope of our work includes preparation of detailed drawings, getting approval from statutory authorities arranging to get load sanction from Electricity Board and avail power supply. After the completion of Electrical installation we will arrange the inspection to get necessary safety certificate from CEIG and CEA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
    <ScrollLink
      to="two"
      className="goto-next"
      activeClass="active"
      smooth={true}
      offset={50}
      duration={1500}
      spy={true}
    >
      Next
    </ScrollLink>
  </section>
)
export default One
