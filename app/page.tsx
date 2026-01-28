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

    //topbar
    gsap.from('.links', {
      duration: 1,
      y: '-100%',
      ease: 'elastic'
    })
    gsap.from('.link', {
      duration: 1,
      opacity: 0,
      delay: 1,
      stagger: 0.1
    })
    gsap.from('.left',{
      x: '-50%',
      duration: 1,
      opacity: 0,
      delay: 0.5
    })
    gsap.from('.right',{
      x: '50%',
      duration: 1,
      opacity: 0,
      delay: 1
    })
    gsap.from('.footer', {
      duration: 1,
      y: '-100%',
      ease: 'bounce'
    })

  },[])
  
  return (
    <div className="">

<ul className="links" style={{ display: 'flex', justifyContent: 'space-between', background: 'red', height: '10vh'}}>
  <li className="link">Link1</li>
  <li className="link">Link1</li>
  <li className="link">Link1</li>
</ul>

<div className="container" style={{ display: 'flex'}}>
  <div className="left" style={{height: '50vh', width: '50vw',background: 'green'}}>Left Container</div>
  <div className="right" style={{height: '50vh', width: '50vw',background: 'green'}}>Right Container</div>
</div>
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

<div className="footer" style={{ background: 'pink', height: '10vh'}}>Footer</div>
    </div>
  );
}
