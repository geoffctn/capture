import React from 'react'
import styled from 'styled-components'
import useScroll from './useScroll'
import { About } from '../styles'
import Toggle from './Toggle'
import { AnimateSharedLayout } from 'framer-motion'
import { scrollReveal } from '../animation'

const FaqSection = () => {
  const [element, controls] = useScroll()
  return (
    <Faq
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              ipsum.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              ipsum.
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              ipsum.
            </p>
          </div>
        </Toggle>
        <Toggle title="What Product Do You Offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              ipsum.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  )
}

const Faq = styled(About)`
  display: block;
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  span {
    display: block;
  }
  .faq-line {
    width: 100%;
    height: 0.2rem;
    margin: 2rem 0;
    background: #cccccc;
  }
  .question {
    padding: 3rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`

export default FaqSection
