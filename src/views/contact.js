import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Butterfly Bakehouse</title>
        <meta property="og:title" content="Contact - Butterfly Bakehouse" />
      </Helmet>
      <Header rootClassName="header-root-class-name6"></Header>
      <div className="contact-details">
        <div className="contact-details1">
          <div className="contact-container1">
            <span className="contact-text sectionTitle">
              <span>Contact</span>
              <br></br>
            </span>
            <h2 className="contact-details-heading heading2">Coming soon...</h2>
            <span className="contact-details-sub-heading">
              Please email info@butterflybakehouse.com if you have any
              questions.
            </span>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1606044292137-adf30029c2c5?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGNoaW1uZXklMjBjYWtlfGVufDB8fHx8MTcwMTI4ODUxOHww&amp;ixlib=rb-4.0.3&amp;w=400"
            className="contact-details-image"
          />
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name6"></Footer>
    </div>
  )
}

export default Contact
