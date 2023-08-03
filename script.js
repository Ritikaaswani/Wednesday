gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});







// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

var tl = gsap.timeline()
tl.from("#nav h1,#nav h4,#nav i ",{
    y: -30,
    opacity: 0,
    stagger:0.1,
    delay:0.5,
    duration: 0.3
})
.from("#center h1",{
    y: 40,
    opacity: 0,
    scale: 1.2,
    duration: 0.4
})
.from("#center p",{
    y: 20,
    opacity: 0,
   duration: 0.2
})
.from("#page1>img",{
   scale:0.8,
    opacity: 0,
   duration: 0.5
}) 
var tl2=gsap.timeline({
    scrollTrigger:{
        trigger: "#page2 h1",
        scroller:"#main",
        start:"top 80%",
        // markers:true
       }
})
tl2.from("#page2 h1",{
    y:30,
    opacity:0,
   duration:0.4
})
.from("#page2 p",{
    y:30,
    opacity:0,
    duration:0.3
})
gsap.from(".elem",{
   y: 80,
   opacity:0,
   scale:0.8,
   duration:0.5,
   scrollTrigger:{
    trigger: ".elem",
    scroller: "#main",
    start:"top 80%",
    end: "top 40%",
    scrub: 1,
    // markers: true
   }

})
var tl3= gsap.timeline({
    scrollTrigger:{
         trigger:"#page3 h1",
         scroller:"#main",
         start: "top 85%",
        //  markers:true
    }
})
tl3.from("#page3 h1",{
    y:30,
    opacity:0,
    duration:0.4,
   

})
tl3.from("#page3 p",{
    y:30,
    opacity:0,
    duration:0.4,
   

})


gsap.timeline().from("#center .e",{
    y: 80,
    opacity:0,
    duration:0.3,
    scrollTrigger:{
     trigger: "#center .e",
     scroller: "#main",
     start:"top 92%",
     end: "top 40%",
     scrub: 1,
    //  markers: true
    }
 
 })
 gsap.timeline().from("#bar .fill , #center .e #menu h2:nth-child(2)",{
        x:-100,
        duration:0.8,
        scrollTrigger:{
            trigger: "#bar .fill , #center .e #menu h2:nth-child(2)",
            scroller: "#main",
            start:"top 92%",
            end: "top 40%",
            scrub: 1,
            // markers: true
           }
 })
 var tl4 = gsap.timeline()

 tl4.from("#page4 h1",{
    y:40,
    opacity:0,
    duration:0.4,
   scrollTrigger : {
    trigger: "#page4 h1",
    scroller:"#main",
    start:"top 40% ",
    end:"top 20%",
    // markers: true,
    scrub:2
   }

})
tl4.from("#middle .el",{
    y: 80,
    opacity:0,
    stagger:0.1,
    duration:0.3,
    scrollTrigger:{
     trigger: "#middle .el",
     scroller: "#main",
     start:"top 70%",
     end: "top 40%",
     scrub: 1,
    //  markers: true
    }
})
tl4.from("#page5 h1, #page5 p",{
    y:40,
    opacity:0,
    scale:0.7,
    stagger:0.2,
    duration:0.4,
   scrollTrigger : {
    trigger: "#page5 h1, #page5 p" ,
    scroller:"#main",
    start:"top 70% ",
    end:"top 50%",
    // markers: true,
    scrub:2
   }
})
tl4.from("#mid .ele",{
    y: 30,
    opacity:0,
    scale:0.8,
    duration:0.4,
    scrollTrigger:{
     trigger: "#mid .ele" ,
     scroller: "#main",
     start:"top 80%",
     end: "top 40%",
     scrub: 1,
    //  markers: true
    }
})

tl4.from("#page6 #box",{
    x:-200,
    opacity:0,
    duration:0.3,
    scale:0.9,
    scrollTrigger:{
        trigger: "#box" ,
        scroller: "#main",
        start:"top 90%",
        end: "top 40%",
        scrub: 1,
        // markers: true
       }

})
var menu=document.querySelector("#menu")
var fullscr= document.querySelector("#fullscr")
var close = document.querySelector("#close")
menu.addEventListener("click",function(){
    fullscr.style.left="0"
})
close.addEventListener("click",function(){
    fullscr.style.left="-70vw"
})

  
  