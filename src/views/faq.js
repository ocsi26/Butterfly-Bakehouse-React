import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './faq.css'

const FAQ = (props) => {
  return (
    <div className="faq-container">
      <Helmet>
        <title>FAQ - Butterfly Bakehouse</title>
        <meta property="og:title" content="FAQ - Butterfly Bakehouse" />
      </Helmet>
      <Header rootClassName="header-root-class-name5"></Header>
      <div className="faq-details">
        <div className="faq-details1">
          <div className="faq-container1">
            <h2 className="faq-details-heading heading2">FAQ</h2>
            <span className="faq-details-sub-heading">
              At our bakery, we take pride in handcrafting each chimney cake
              using time-honored recipes passed down through generations. Our
              cakes are made with the finest ingredients to ensure a delightful
              taste in every bite. From classic flavors like cinnamon sugar to
              indulgent options like Nutella and strawberries, there&apos;s a
              chimney cake for everyone.
            </span>
          </div>
          <img
            alt="image"
            src="/tn5qlzb96pakfvteuubf-400h.webp"
            className="faq-details-image"
          />
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default FAQ
