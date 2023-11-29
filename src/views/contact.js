import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import GalleryCard3 from '../components/gallery-card3'
import Question from '../components/question'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Butterfly Bakehouse</title>
        <meta property="og:title" content="Contact - Butterfly Bakehouse" />
      </Helmet>
      <div className="contact-header">
        <header data-thq="thq-navbar" className="contact-navbar-interactive">
          <span className="contact-logo">BAKERY</span>
          <div data-thq="thq-navbar-nav" className="contact-desktop-menu">
            <nav className="contact-links">
              <span>Home</span>
              <span className="contact-nav2">About</span>
              <span className="contact-nav3">Menu</span>
              <span className="contact-nav4">Order Online</span>
              <span className="contact-nav5">Contact</span>
            </nav>
            <div className="contact-buttons">
              <button className="contact-login button">Login</button>
              <button className="contact-register button">Register</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="contact-burger-menu">
            <svg viewBox="0 0 1024 1024" className="contact-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="contact-mobile-menu">
            <div className="contact-nav">
              <div className="contact-top">
                <span className="contact-logo1">BAKERY</span>
                <div data-thq="thq-close-menu" className="contact-close-menu">
                  <svg viewBox="0 0 1024 1024" className="contact-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="contact-links1">
                <span className="contact-nav11">Home</span>
                <span className="contact-nav21">About</span>
                <span className="contact-nav31">Menu</span>
                <span className="contact-nav41">Order Online</span>
                <span className="contact-nav51">Contact</span>
              </nav>
              <div className="contact-buttons1">
                <button className="contact-login1 button">Login</button>
                <button className="contact-register1 button">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="contact-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="contact-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="contact-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="contact-hero">
        <div className="contact-hero1">
          <div className="contact-container01">
            <h1 className="contact-hero-heading heading1">
              Delicious Traditional Chimney Cakes
            </h1>
            <span className="contact-hero-sub-heading">
              Indulge in the Sweetness
            </span>
            <div className="contact-btn-group">
              <button className="contact-hero-button1 button">
                Get Started
              </button>
              <button className="contact-hero-button2 button">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-details">
        <div className="contact-details1">
          <div className="contact-container02">
            <span className="contact-text sectionTitle">
              <span>Details</span>
              <br></br>
            </span>
            <h2 className="contact-details-heading heading2">Contact us</h2>
            <span className="contact-details-sub-heading">
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
            src="https://images.unsplash.com/photo-1620146344904-097a0002d797?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTI4ODA2NHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            className="contact-details-image"
          />
        </div>
      </div>
      <div className="contact-features">
        <div className="contact-features-container">
          <div className="contact-features1">
            <div className="contact-container03">
              <span className="contact-text03 sectionTitle">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="contact-features-heading heading2">
                Delicious Features
              </h2>
              <span className="contact-features-sub-heading">
                Discover the amazing features of our bakery website
              </span>
            </div>
            <div className="contact-container04">
              <FeatureCard
                Heading="Online Ordering"
                SubHeading="Customers can easily place orders online for chimney cakes."
              ></FeatureCard>
              <FeatureCard
                Heading="Menu Display"
                SubHeading="Display a variety of traditional chimney cakes with mouth-watering images."
              ></FeatureCard>
              <FeatureCard
                Heading="Customization Options"
                SubHeading="Allow customers to customize their chimney cakes with different toppings and fillings."
              ></FeatureCard>
              <FeatureCard
                Heading="Delivery Services"
                SubHeading="Offer convenient delivery services to customers' doorsteps."
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-pricing">
        <div className="contact-pricing1">
          <div className="contact-container05">
            <span className="contact-text06 sectionTitle">
              <span>Pricing</span>
              <br></br>
            </span>
            <h2 className="contact-pricing-heading heading2">
              Choose a Plan that Suits You Best
            </h2>
            <span className="contact-pricing-sub-heading">
              Explore our pricing options and find the perfect fit for your
              bakery business
            </span>
          </div>
          <div className="contact-container06">
            <div className="contact-pricing-card">
              <div className="contact-container07">
                <span className="contact-text09 heading3">Free</span>
                <span className="contact-free-plan-description">
                  A short description for the free plan
                </span>
              </div>
              <div className="contact-container08">
                <span className="contact-text10">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="contact-free-plan-price">0</span>
              </div>
              <div className="contact-container09">
                <div className="contact-container10">
                  <span className="contact-text13">✔</span>
                  <span className="contact-free-plan-features">
                    A feature of the free plan
                  </span>
                </div>
                <div className="contact-container11">
                  <span className="contact-text14">✔</span>
                  <span className="contact-free-plan-features1">
                    A feature of the free plan
                  </span>
                </div>
                <div className="contact-container12">
                  <span className="contact-text15">✔</span>
                  <span className="contact-free-plan-features2">
                    A feature of the free plan
                  </span>
                </div>
                <div className="contact-container13">
                  <span className="contact-text16">✔</span>
                  <span className="contact-free-plan-features3">
                    A feature of the free plan
                  </span>
                </div>
              </div>
              <button className="contact-button button">
                Continue with Free
              </button>
            </div>
            <div className="contact-pricing-card1">
              <div className="contact-container14">
                <span className="contact-text17 heading3">BASIC</span>
                <span className="contact-basic-plan-description">
                  A short description for the basic plan
                </span>
              </div>
              <div className="contact-container15">
                <span className="contact-text18">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="contact-basic-plan-pricing">7</span>
                <span className="contact-text21">/ month</span>
              </div>
              <div className="contact-container16">
                <div className="contact-container17">
                  <span className="contact-text22">✔</span>
                  <span className="contact-text23">
                    All features of FREE plan
                  </span>
                </div>
                <div className="contact-container18">
                  <span className="contact-text24">✔</span>
                  <span className="contact-basic-plan-features">
                    A feature of the basic plan
                  </span>
                </div>
                <div className="contact-container19">
                  <span className="contact-text25">✔</span>
                  <span className="contact-basic-plan-features1">
                    A feature of the basic plan
                  </span>
                </div>
                <div className="contact-container20">
                  <span className="contact-text26">✔</span>
                  <span className="contact-basic-plan-features2">
                    A feature of the basic plan
                  </span>
                </div>
                <div className="contact-container21">
                  <span className="contact-text27">✔</span>
                  <span className="contact-basic-plan-features3">
                    A feature of the basic plan
                  </span>
                </div>
              </div>
              <button className="contact-button1 button">
                Try the Basic plan
              </button>
            </div>
            <div className="contact-pricing-card2">
              <div className="contact-container22">
                <span className="contact-text28 heading3">
                  <span>PRO</span>
                  <br></br>
                </span>
                <span className="contact-pro-plan-description">
                  A short description for the pro plan
                </span>
              </div>
              <div className="contact-container23">
                <span className="contact-text31">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="contact-pro-plan-pricing">20</span>
                <span className="contact-text34">/ month</span>
              </div>
              <div className="contact-container24">
                <div className="contact-container25">
                  <span className="contact-text35">✔</span>
                  <span className="contact-text36">
                     All features of BASIC plan
                  </span>
                </div>
                <div className="contact-container26">
                  <span className="contact-text37">✔</span>
                  <span className="contact-pro-plan-features">
                    A feature of the pro plan
                  </span>
                </div>
                <div className="contact-container27">
                  <span className="contact-text38">✔</span>
                  <span className="contact-pro-plan-features1">
                    A feature of the pro plan
                  </span>
                </div>
                <div className="contact-container28">
                  <span className="contact-text39">✔</span>
                  <span className="contact-pro-plan-features2">
                    A feature of the pro plan
                  </span>
                </div>
              </div>
              <button className="contact-button2 button">
                Try the PRO plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-gallery">
        <div className="contact-gallery1">
          <h1 className="contact-gallery-heading heading2">
            Delicious Chimney Cakes
          </h1>
          <span className="contact-gallery-sub-heading">
            Explore our mouthwatering chimney cakes
          </span>
          <div className="contact-container29">
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1516355369664-a749d65099f0?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTI4ODA2Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName24"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1680514068881-2cb811495ea5?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTI4ODA2Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName25"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1534161919789-69eb71e62291?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTI4ODA2Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName26"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1524724873417-2fd6282ecbf2?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTI4ODA2Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName27"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1489657246911-07a06ecf3e28?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTI4ODA2Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName28"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1508404553086-1b9ec4650eb6?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTI4ODA2Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName29"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1508330603516-ab2a4fccb3ff?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTI4ODA2Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName30"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1636314953039-10b6e5f5c295?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTI4ODA2Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName31"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1523391139596-e7da8a18c733?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTI4ODA2Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName32"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1517065963912-27f75001ebe2?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTI4ODA2Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName33"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1507831960578-44f1a0da176b?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTI4ODA2Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName34"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1519334684146-245b81e04575?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTI4ODA2Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName35"
            ></GalleryCard3>
          </div>
        </div>
      </div>
      <div className="contact-banner">
        <div className="contact-banner1">
          <h1 className="contact-banner-heading heading2">
            Discover the Magic of Chimney Cakes
          </h1>
          <span className="contact-banner-sub-heading">
            Experience the rich flavors and unique texture of our traditional
            chimney cakes.
          </span>
          <button className="contact-banner-button button">Learn More</button>
        </div>
      </div>
      <div className="contact-faq">
        <div className="contact-faq-container">
          <div className="contact-faq1">
            <div className="contact-container30">
              <span className="contact-text40 sectionTitle">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="contact-text43 heading2">Common questions</h2>
              <span className="contact-text44">
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
            <div className="contact-container31">
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
      <div className="contact-footer">
        <footer className="contact-footer1">
          <div className="contact-container32">
            <span className="contact-logo2">BAKERY</span>
            <nav className="contact-nav1 contact-nav1">
              <span className="contact-nav12">Home</span>
              <span className="contact-nav22">About</span>
              <span className="contact-nav32">Menu</span>
              <span className="contact-nav42">Order Online</span>
              <span className="contact-nav52">Contact</span>
            </nav>
          </div>
          <div className="contact-separator"></div>
          <div className="contact-container33">
            <span className="contact-text61">
              © 2023 myCompany, All Rights Reserved.
            </span>
            <div className="contact-icon-group1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="contact-icon10"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="contact-icon12"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="contact-icon14"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Contact
