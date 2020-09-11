import React from 'react'
import Fade from 'react-reveal/Fade'

const Four = props => (
  <Fade up>
    <section id="four" className="wrapper style1 special fade-up">
      <div className="container">
        <header className="major">
          <h2>Behind our success</h2>
          <p>
            Focus on goal
          </p>
        </header>
        <div className="box alt">
          <div className="row gtr-uniform">
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-chart-area"></span>
              <h3>Productivity</h3>
              <p>
                Working and maintaining a network of professional relationships within the industry.
              </p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-comment"></span>
              <h3>Response to the customer</h3>
              <p>
                No delay in sync with customer.
              </p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-file"></span>
              <h3>Documentation</h3>
              <p>
                Pretty clean drawings that portrait the idealogy of the site that you love
              </p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-lock"></span>
              <h3>Privacy</h3>
              <p>
                Customer details, site drawings are safe in digi lock for the privacy. We have an interactive tech team behind.
              </p>
            </section>
          </div>
        </div>
        <footer className="major">
          <ul className="actions special">
            <li>
              <a target="_blank" href="https://api.whatsapp.com/send?phone=+919884955059" className="button">
                Whatsapp us!
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </section>
  </Fade>
)

export default Four
