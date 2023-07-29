var tl = gsap.timeline()
tl.from("#nav h1,#nav h4,#nav i ",{
    y: -30,
    opacity: 0,
    stagger:0.1,
    delay:0.5,
    duration: 0.4
})
.from("#center h1",{
    y: 40,
    opacity: 0,
    scale: 1.2,
    duration: 0.5
})
.from("#center p",{
    y: 20,
    opacity: 0,
   duration: 0.2
})
.from("#page1>img",{
   scale:0.8,
    opacity: 0,
   duration: 0.6
})
