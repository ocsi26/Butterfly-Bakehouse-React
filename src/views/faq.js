import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Question1 from '../components/question1'
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
      <div className="faq-faq">
        <div className="faq-faq-container">
          <div className="faq-faq1">
            <div className="faq-container1">
              <span className="faq-text sectionTitle">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="faq-text03 heading2">Common questions</h2>
              <span className="faq-text04">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
                <span>
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
                <span>
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
              </span>
            </div>
            <div className="faq-container2">
              <Question1
                Answer='Chimney cakes, also known as "kürtőskalács", are traditional Hungarian pastries that are made by wrapping dough around a wooden cylinder and baking it over an open fire. The result is a sweet and crispy cake with a hollow center.'
                Question="What are chimney cakes?"
              ></Question1>
              <Question1
                Answer="No, currently we do not offer gluten-free chimney cakes for customers with dietary restrictions."
                Question="Do you offer gluten-free chimney cakes?"
              ></Question1>
              <Question1
                Answer="Absolutely! We offer a variety of toppings for our chimney cakes, including cinnamon sugar, chocolate drizzle, nuts, and more. You can choose your favorite combination to create a personalized treat."
                Question="Can I customize the toppings on my chimney cake?"
              ></Question1>
              <Question1
                Answer="No, currently we do not offer delivery services for our chimney cakes. You will need to pick up your freshly baked chimney cakes at our store location."
                Question="Do you deliver chimney cakes?"
              ></Question1>
              <Question1
                Answer="Definitely! Our chimney cakes are perfect for special occasions such as birthdays, weddings, and parties. We can customize the decorations and flavors to match the theme of your event."
                Question="Are your chimney cakes suitable for special occasions?"
              ></Question1>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-details">
        <div className="faq-details1">
          <div className="faq-container3">
            <h2 className="faq-details-heading heading2">Try it now!</h2>
            <span className="faq-details-sub-heading">
              If you haven&apos;t tasted this unique, sweet deliciousness, give
              it a try and order today.
            </span>
          </div>
          <img
            alt="image"
            src="/chimney-cake-in-transylvania-sugaryums-400h.jpg"
            className="faq-details-image"
          />
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default FAQ
