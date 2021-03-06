import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import PrimaryButton from "./PrimaryButton"

const StyledH6 = styled.h6`
  font-family: var(--font-sans-serif);
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  padding: 1rem 0;
`

const StyledH2 = styled.h2`
  font-family: var(--font-serif);
  font-size: 3rem;
  font-weight: 400;
`

const StyledP = styled.p`
  width: 50%;
  font-family: var(--font-sans-serif);
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  padding: 2rem 0;
`

const LandingText = ({ className }) => {
  return (
    <section className={className}>
      <StyledH6>Interior Design Service</StyledH6>
      <StyledH2>
        I believe that good design can and should be beautiful, functional, and
        affordable.
      </StyledH2>
      <StyledP>
        Contact me to see how I can help you love your home again, no matter how
        big or small.
      </StyledP>
      <Link to="/services">
        <PrimaryButton primary>View Services</PrimaryButton>
      </Link>
    </section>
  )
}

export default LandingText
