import React from 'react'
import styled from 'styled-components'
// animations
import { motion } from 'framer-motion'
import { pageAnimation, titleAnimation } from '../animation'

const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: '#fff' }}
    >
      <Title>
        <Hide>
          <h2 variants={titleAnimation}>Get in touch.</h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>Send Us a message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>Send an email</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>Social media</h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  )
}

const ContactStyle = styled(motion.div)`
  min-height: 90vh;
  padding: 5rem 10rem;
  color: #353535;
  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
`
const Title = styled.div`
  margin-bottom: 4rem;
  color: block;
  @media (max-width: 1300px) {
    margin-top: 5rem;
  }
`
const Hide = styled.div`
  overflow: hidden;
`
const Circle = styled.div`
  width: 3rem;
  height: 3rem;
  background: #353535;
  border-radius: 50%;
`
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`

export default ContactUs
