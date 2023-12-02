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
      <Header rootClassName="header-root-class-name4"></Header>
      <div className="contact-details">
        <div className="contact-container1">
          <h2 className="contact-details-heading heading2">Contact</h2>
          <span className="contact-details-sub-heading">
            <span>
              Please email
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="mailto:info@butterflybakehouse.com?subject=Info"
              className="contact-link"
            >
              info@butterflybakehouse.com
            </a>
            <span> if you have any questions</span>
            <span>.</span>
          </span>
        </div>
        <img
          alt="image"
          src="/chimney-cake-in-transylvania-sugaryums-400h.jpg"
          className="contact-details-image"
        />
      </div>
      <Footer rootClassName="footer-root-class-name4"></Footer>
    </div>
  )
}

export default Contact
