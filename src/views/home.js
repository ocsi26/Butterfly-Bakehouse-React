import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import GalleryCard1 from '../components/gallery-card1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Butterfly Bakehouse</title>
        <meta property="og:title" content="Butterfly Bakehouse" />
      </Helmet>
      <Header rootClassName="header-root-class-name1"></Header>
      <div className="home-hero">
        <div className="home-hero1">
          <div className="home-container1">
            <h1 className="home-hero-heading heading1">
              Delicious Traditional Chimney Cakes
            </h1>
            <span className="home-hero-sub-heading">
              Indulge in the Sweetness
            </span>
            <div className="home-btn-group">
              <Link to="/order" className="home-hero-button1 button">
                Online Order
              </Link>
              <Link to="/menu" className="home-hero-button2 button">
                Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home-details">
        <div className="home-details1">
          <div className="home-container2">
            <span className="home-text sectionTitle">
              <span>Details</span>
              <br></br>
            </span>
            <h2 className="home-details-heading heading2">
              Crafted with Love and Tradition
            </h2>
            <span className="home-details-sub-heading">
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
            src="https://images.unsplash.com/photo-1606044292137-adf30029c2c5?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGNoaW1uZXklMjBjYWtlfGVufDB8fHx8MTcwMTI4ODUxOHww&amp;ixlib=rb-4.0.3&amp;w=400"
            className="home-details-image"
          />
        </div>
      </div>
      <div className="home-gallery">
        <div className="home-gallery1">
          <h1 className="home-gallery-heading heading2">
            Delicious Chimney Cakes
          </h1>
          <span className="home-gallery-sub-heading">
            Explore our mouthwatering chimney cakes
          </span>
          <div className="home-gallery2">
            <GalleryCard1
              image_src="/tn5qlzb96pakfvteuubf-1500h.webp"
              rootClassName="rootClassName"
            ></GalleryCard1>
            <GalleryCard1
              image_src="https://images.unsplash.com/photo-1593108600391-f6266b89bf5e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGt1cnRvc3xlbnwwfHx8fDE3MDE0OTY2ODd8MA&amp;ixlib=rb-4.0.3&amp;h=1500"
              rootClassName="rootClassName1"
            ></GalleryCard1>
            <GalleryCard1
              image_src="/chimney-cake-in-transylvania-sugaryums-1500h.jpg"
              rootClassName="rootClassName2"
            ></GalleryCard1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
