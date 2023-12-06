import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Butterfly Bakehouse</title>
        <meta property="og:title" content="About - Butterfly Bakehouse" />
      </Helmet>
      <Header rootClassName="header-root-class-name3"></Header>
      <div className="about-details">
        <div className="about-details1">
          <div className="about-container1">
            <span className="about-text sectionTitle">About</span>
            <h2 className="about-details-heading heading2">About us</h2>
            <span className="about-details-sub-heading">
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
            className="about-details-image"
          />
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  )
}

export default About
