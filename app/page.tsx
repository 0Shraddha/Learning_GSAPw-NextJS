"use client";
import gsap from "gsap";
import {useGSAP} from '@gsap/react';
import HorizontalScrollTrigger from './HorizontalScrollTrigger'

export default function Home() {
  const timeline = gsap.timeline()

  useGSAP(()=>{
    gsap.fromTo('.box1',
      {
        x: 0,
        rotation: 0,
        borderRadius: '0%',
      },
      {
      x: 500,
      duration: 1,
      rotation: 360,
      // repeat: -1,
      borderRadius: '100%',
      yoyo: true,
      ease: 'power1.inOut'
    })

    timeline.to('.box2',{
      x: 300,
      duration: 1,
      rotation: 0,
      // repeat: -1,
      borderRadius: '10%',
      yoyo: true,
      ease: 'back.inOut'
    })

    timeline.to('.staggerBox',{
      x: 300,
      duration: 1,
      rotation: 0,
      repeat: -1,
      borderRadius: '100%',
      yoyo: true,
      ease: 'back.inOut',
      stagger: {
        amount: 1.5,
        // grid: [2,1], //first 2 box animates, then 1, again 2
        axis: 'y',
        ease: 'circ.inOut'
      }
    })

  },[])
  
  return (
    <div className="">
      <h1>gsap.fromTo</h1>
     <div className="box1"></div>
     <h1>gsap.timeline</h1>
     <div className="box2"></div>
     <h1>gsap.stagger</h1>
     <div className="staggerBox"></div>
     <div className="staggerBox"></div>
     <div className="staggerBox"></div>
     <div className="staggerBox"></div>
     <div className="staggerBox"></div>
<div style={{ height:'500px', width:'100px', background:'blue'}}>Hello</div>
<h1>Scroll Trigger demo</h1>
{/* <ScrollTriggerDemo /> */}
<hr/>
<hr/>
<hr/>
<hr/>

<h1>Scroll Trigger demo</h1>
<h1>Scroll Trigger demo</h1>
<h1>Scroll Trigger demo</h1>
<h1>Scroll Trigger demo</h1>
<h1>Scroll Trigger demo</h1>
<h1>Scroll Trigger demo</h1>
<h1>Scroll Trigger demo</h1>
<h1>Scroll Trigger demo</h1>
<h1>Scroll Trigger demo</h1>

<HorizontalScrollTrigger />

    </div>
  );
}
