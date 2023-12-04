import React from 'react'

import PropTypes from 'prop-types'

import Question from './question'
import './faq1.css'

const FAQ1 = (props) => {
  return (
    <div className={`faq1-container ${props.rootClassName} `}>
      <Question
        Answer='Chimney cakes, also known as "kürtőskalács", are traditional Hungarian pastries that are made by wrapping dough around a wooden cylinder and baking it over an open fire. The result is a sweet and crispy cake with a hollow center.'
        Question="What are chimney cakes?"
        rootClassName="question-root-class-name1"
        className=""
      ></Question>
      <Question
        Answer="No, currently we do not offer delivery services for our chimney cakes. You will need to pick up your freshly baked chimney cakes at our store location."
        Question="Do you deliver chimney cakes?"
        rootClassName="question-root-class-name2"
        className=""
      ></Question>
      <Question
        Answer="No, currently we do not offer gluten-free chimney cakes for customers with dietary restrictions."
        Question="Do you offer gluten-free chimney cakes?"
        rootClassName="question-root-class-name"
        className=""
      ></Question>
    </div>
  )
}

FAQ1.defaultProps = {
  rootClassName: '',
}

FAQ1.propTypes = {
  rootClassName: PropTypes.string,
}

export default FAQ1
