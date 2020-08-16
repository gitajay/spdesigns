import React from 'react'

const Footer = props => (
  <footer id="footer">
    <ul className="icons">
      {/* <li>
        <a href="/" className="icon brands alt fa-twitter">
          <span className="label">Twitter</span>
        </a>
      </li>
      <li>
        <a href="/" className="icon brands alt fa-facebook-f">
          <span className="label">Facebook</span>
        </a>
      </li> */}
      <li>
        <a target="_blank" href="https://www.linkedin.com/company/sp-designs-and-engineering" className="icon brands alt fa-linkedin-in">
          <span className="label">LinkedIn</span>
        </a>
      </li>
      {/* <li>
        <a href="/" className="icon brands alt fa-instagram">
          <span className="label">Instagram</span>
        </a>
      </li> */}
      <li>
        <a target="_blank" href="mailto://spdesign16@gmail.com" className="icon solid alt fa-envelope">
          <span className="label">Email</span>
        </a>
      </li>
    </ul>
    <ul className="copyright">
      <li>&copy; SP Designs. All rights reserved.</li>
      <li>
        Made with love: <a href="https://ajaydev.netlify.app/">AJ</a>
      </li>
    </ul>
  </footer>
)

export default Footer
