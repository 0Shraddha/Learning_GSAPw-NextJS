import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap'
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollTrigger = () => {

    const wrapperRef = useRef(null);
    const listRef = useRef(null);

    const timeline = gsap.timeline()
    useGSAP(() => {
        const list = listRef.current;

        gsap.to(list, {
            x :() => -(list.scrollWidth - window.innerWidth),
            ease: 'none',
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: 'top top',
                end: () => `+=${list.scrollWidth}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            }
        })
    },[])

  return (
    <div className="wrapper" ref={wrapperRef}>
        <div className="list" ref={listRef}>
        <div className="item one" style={{background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)'}}>
        <div className="item-content">
          <span className="section-number">Discover Paradise</span>
          Embark on a journey of a lifetime with our <span className="highlight">carefully curated destinations</span>. From pristine beaches to ancient wonders, we bring the world to your fingertips. Let wanderlust guide you to experiences that transform ordinary moments into extraordinary memories.
        </div>
      </div>

      <div className="item two" style={{ background: 'linear-gradient(135deg, #2d6a4f 0%, #52b788 100%)'}}>
        <div className="item-content">
          <span className="section-number">Luxury Awaits</span>
          Immerse yourself in <span className="highlight">unparalleled luxury and comfort</span>. Our exclusive partnerships with world-class resorts ensure every moment of your journey is touched with elegance. Experience personalized service that anticipates your every need before you even ask.
        </div>
      </div>

      <div className="item three" style={{background: 'linear-gradient(135deg, #7209b7 0%, #b185db 100%)'}}>
        <div className="item-content">
          <span className="section-number">Adventure Calls</span>
          Feel the rush of <span className="highlight">authentic cultural experiences</span> and thrilling adventures. Whether you seek serenity in remote landscapes or excitement in vibrant cities, we craft itineraries that speak to your soul. Every trip is a story waiting to be written.
        </div>
      </div>

  
      <div className="item four" style={{background: 'linear-gradient(135deg, #ff006e 0%, #ffbe0b 50%, #fb5607 100%)'}}>
        <div className="item-content">
          <span className="section-number">Your Journey Begins</span>
          Trust in our <span className="highlight">decades of travel expertise</span> to turn your dreams into reality. From the first consultation to your return home, we're with you every step of the way. Let us handle the details while you embrace the magic of discovery.
        </div>
      </div>     </div>
    </div>
  )
}

export default HorizontalScrollTrigger
