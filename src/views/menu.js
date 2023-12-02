import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './menu.css'

const Menu = (props) => {
  return (
    <div className="menu-container">
      <Helmet>
        <title>Menu - Butterfly Bakehouse</title>
        <meta property="og:title" content="Menu - Butterfly Bakehouse" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <div className="menu-details">
        <div className="menu-details1">
          <div className="menu-container1">
            <span className="menu-text sectionTitle">
              <span>MENU</span>
              <br></br>
            </span>
            <h2 className="menu-details-heading heading2">Coming soon...</h2>
            <span className="menu-details-sub-heading">
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
            src="/chimney-cake-in-transylvania-sugaryums-400h.jpg"
            className="menu-details-image"
          />
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Menu
