import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// images
import athlete from '../img/athlete-small.png'
import theracer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'

const OurWork = () => {
  return (
    <Work>
      <Movie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link to="/work/the-athlete">
          <img src={athlete} alt="athlete" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="theracer" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </Movie>
    </Work>
  )
}

const Work = styled.div`
  min-height: 100vh;
  padding: 5rem 10rem;
  overflow: hidden;
  h2 {
    padding: 1rem 0;
  }
`
const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    margin-bottom: 3rem;
    background: #cccccc;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`

export default OurWork
