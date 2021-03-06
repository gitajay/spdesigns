import React from 'react'
import Fade from 'react-reveal/Fade'

const Five = props => (
  <section id="five" className="wrapper style2 special fade inactive">
    <Fade duration={2500}>
      <div className="container">
        <header>
          <h2>Contact us</h2>
          <p>We are for you. Touch base with us any time</p>
        </header>
        <footer className="major">
          <ul className="actions special">
            <li>
              <a target="_blank" href="https://api.whatsapp.com/send?phone=+919884955059" className="button">
                9884955059
              </a>
            </li>
            <li>
              <a target="_blank" href="https://api.whatsapp.com/send?phone=+919003287608" className="button">
                9003287608
              </a>
            </li>
          </ul>
        </footer>
        {/* <form method="post" action="#" className="cta">
          <div className="row gtr-uniform gtr-50">
            <div className="col-8 col-12-xsmall">
              <input
                aria-label="Your pnone"
                type="email"
                name="email"
                id="email"
                placeholder="Your Email Address"
              />
            </div>
            <div className="col-4 col-12-xsmall">
              <input
                aria-label="Submit the form"
                id="submitForm"
                type="submit"
                value="Contact us"
                className="fit primary"
              />
            </div>
          </div>
        </form> */}
      </div>
    </Fade>
  </section>
)
export default Five
