## GSAP with NEXTJS

GSAP - GreenSock Animation Programming

<div class=”box”></div>
gsap.to(‘.box’,{
	x: 200,
	duration: 2,
	rotation: 20,
	repeat: -1,
	yoyo: true
});
gsap.from
gsap.timeline - allows you to put multiple animations and play them in order
const timeline = gsap.timeline();
timeline.to(‘.box1’,{}).to(‘box2’,{});

gsap.stagger - lets you animate multiple components with a delay

gsap.scrollTrigger - lets you animate when we scroll