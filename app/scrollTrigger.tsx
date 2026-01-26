"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const ScrollTriggerDemo = () => {
    
    const mainRef = useRef<any>(null);

    useGSAP(()=>{

        gsap.to('.two', {
            scrollTrigger: {
                trigger: '.two',
                start: 'top top'
            },
            scrub: 1
        })

        gsap.to('.scroll',{
            // x: 1000,
            duration: 3,
            yoyo: true,
            scrollTrigger: {
                trigger: '.scroll',
                start: 'top center',
                markers: true,
                scrub: true,
                toggleActions: 'restart pause none none'
            }
        })

        const boxes = gsap.utils.toArray(mainRef.current.children)
        if(boxes){
            boxes.forEach((box:any) => {
                gsap.to(box, {
                    x: 400,
                    duration: 2,
                    rotation: 360,
                    borderRadius: '100%',
                    scale: 2,
                    scrollTrigger: {
                        trigger: box,
                        start: 'bottom bottom',
                        end: 'top 30%',
                        scrub: true, //smooth animation
                    },
                    ease: 'back.inOut' 
                })
            })
        }
    },[])

  return (
    <div ref={mainRef} id="mainContainer">
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>

      <div className='scroll'> On Scroll</div>

      <div className='one' style={{ background: 'orange'}}></div>
      <div className='two' style={{ background: 'red'}}></div>
      <div className='three' style={{ background: 'blue'}}></div>
      <div className='four' style={{ background: 'violet'}}></div>

    </div>
  )
}

export default ScrollTriggerDemo
