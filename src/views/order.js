import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './order.css'

const Order = (props) => {
  return (
    <div className="order-container">
      <Helmet>
        <title>Order - Butterfly Bakehouse</title>
        <meta property="og:title" content="Order - Butterfly Bakehouse" />
      </Helmet>
      <Header rootClassName="header-root-class-name2"></Header>
      <div className="order-details">
        <div className="order-details1">
          <div className="order-container1">
            <span className="order-text sectionTitle">
              <span>Online ORDER</span>
              <br></br>
            </span>
            <h2 className="order-details-heading heading2">Coming soon...</h2>
            <span className="order-details-sub-heading">
              <span>
                Online order is currently not available. Please email the
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a
                href="mailto:orders@butterflybakehouse.com?subject=Chimney Cake order"
                className="order-link"
              >
                orders@butterflybakehouse.com
              </a>
              <span> to ask questions and send orders.</span>
            </span>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1606044292137-adf30029c2c5?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGNoaW1uZXklMjBjYWtlfGVufDB8fHx8MTcwMTI4ODUxOHww&amp;ixlib=rb-4.0.3&amp;w=400"
            className="order-details-image"
          />
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default Order
