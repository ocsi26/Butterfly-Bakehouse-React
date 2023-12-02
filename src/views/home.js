import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import GalleryCard1 from '../components/gallery-card1'
import Question from '../components/question'
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
      <div className="home-faq">
        <div className="home-faq-container">
          <div className="home-faq1">
            <div className="home-container3">
              <span className="home-text03 sectionTitle">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text06 heading2">Common questions</h2>
              <span className="home-text07">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container4">
              <Question
                Answer="Chimney cakes, also known as kürtőskalács, are traditional Hungarian pastries that are made by wrapping dough around a wooden cylinder and baking it over an open fire. The result is a sweet and crispy cake with a hollow center."
                Question="What are chimney cakes?"
              ></Question>
              <Question
                Answer="Yes, we offer gluten-free chimney cakes for customers with dietary restrictions. Our gluten-free option is made with alternative flours and ingredients to ensure a delicious and safe treat for everyone."
                Question="Do you offer gluten-free chimney cakes?"
              ></Question>
              <Question
                Answer="Absolutely! We offer a variety of toppings for our chimney cakes, including cinnamon sugar, chocolate drizzle, nuts, and more. You can choose your favorite combination to create a personalized treat."
                Question="Can I customize the toppings on my chimney cake?"
              ></Question>
              <Question
                Answer="Yes, we offer delivery services for our chimney cakes. Simply place your order online or give us a call, and we will deliver your freshly baked chimney cakes to your doorstep."
                Question="Do you deliver chimney cakes?"
              ></Question>
              <Question
                Answer="Definitely! Our chimney cakes are perfect for special occasions such as birthdays, weddings, and parties. We can customize the decorations and flavors to match the theme of your event."
                Question="Are your chimney cakes suitable for special occasions?"
              ></Question>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
