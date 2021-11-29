import React from 'react'
import { useGlobalContext } from './context'
import phoneImg from './images/phone.svg'

const Hero = () => {
  const {closeSubmenu}=useGlobalContext()
  
  return <section className="hero">
    <div className="hero-center">
      <article className="hero-images"><img src={phoneImg} alt="phone"/>
      </article>
    </div>
  </section>
}

export default Hero
