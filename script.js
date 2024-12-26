// for the text on the home page
function revealToSpan(){
    document.querySelectorAll(".reveal")
.forEach(function(elem) {
    let parent = document.createElement("span");
    let child = document.createElement("span");

    parent.classList.add("parent");
    child.classList.add("child");

    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    elem.innerHTML="";
    elem.appendChild(parent);
} )
}

function valueSetters(){
    gsap.set("#nav a", { y: "-100%", opacity: 0 })
    gsap.set("#home .parent .child", { y: "100%" })
    gsap.set("#home .row .ri-corner-left-down-fill", { opacity: 0 })

    document.querySelectorAll("#Visual > g").forEach(function (e) {
        var character = e.childNodes[1].childNodes[1];
    
        character.style.strokeDasharray = character.getTotalLength() + 'px';
        character.style.strokeDashoffset = character.getTotalLength() + 'px';
      })
}

function loaderanimation(){
    var tl = gsap.timeline();

tl.from("#loader .child span",{
    x: 100,
    duration: 0.7,
    stagger: .1,
    ease: Circ.easeInOut
})

tl.to("#loader .parent .child",{
    y: "-100%",
    duration: 1,
    ease: Expo.easeInOut
})

tl.to("#loader",{
    height:0,
    duration: 1.5,
    ease: Expo.easeInOut
})

tl.to("#green",{
    height:"100%",
    top:0,
    duration: 1.5,
    delay: -1.5,
    ease: Expo.easeInOut
})

tl.to("#green",{
    height:"0%",
    duration: 0.9,
    delay:-.5,
    ease: Expo.easeInOut,
    onComplete : function(){
        animateHomepage();
    }
})
}

function animateSvg() {
  
    gsap.to("#Visual > g > g > path, #Visual > g > g > polyline", {
      strokeDashoffset: 0,
      stagger:0.2,
      delay:-0.5,
      duration: 1.2,
      ease: Expo.easeInOut
    })
}

function animateHomepage() {
    var tl = gsap.timeline();

    tl.to("#nav a", {
    y: 0,
    opacity: 1,
    duration: 0.4,
    stagger: .05,
    ease: Expo.easeInOut
})

    tl.to("#home .parent .child", {
    y: 0,
    stagger: .1,
    delay: -0.6,
    duration: 1.2,
    ease: Expo.easeInOut
  })
  
    tl.to("#home .row .ri-corner-left-down-fill", {
    delay: -0.5,
    duration: 1,
    opacity: 1,
    ease: Expo.easeInOut,
    onComplete: function () {
      animateSvg();
    }
  })

}

function locoInitialize(){

    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}

function cardShow(){
    document.querySelectorAll(".cnt")
    .forEach(function(cnt){
        cnt.addEventListener("mousemove", function(dets){
        document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
        })
    })
}

function darky  () {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

revealToSpan();
valueSetters();
loaderanimation();
// locoInitialize();
cardShow();






































// function valueSetters(){
//     gsap.set("#nav", {y: "-100%", opacity: 0})
//     gsap.set("#home span .child", {y:"100%" })
//     gsap.set("#home .row #ri-corner-left-down-fill", { opacity: 0})

//     document.querySelectorAll("#Visual > g").forEach(function (e) {
//         var character = e.childNodes[1].childNodes[1];
    
//         character.style.strokeDasharray = character.getTotalLength() + 'px';
//         character.style.strokeDashoffset = character.getTotalLength() + 'px';
//       })
// }

//for the text on the home page
// function revealToSpan(){
//     document.querySelectorAll(".reveal")
// .forEach(function(elem) {
//     let parent = document.createElement("span");
//     let child = document.createElement("span");

//     parent.classList.add("parent");
//     child.classList.add("child");

//     child.innerHTML = elem.innerHTML;
//     parent.appendChild(child);

//     elem.innerHTML="";
//     elem.appendChild(parent);
// } );
// }

// function loaderanimation(){
//     var tl = gsap.timeline();

// tl.from("#fr .child span",{
//     x: 100,
//     duration: 0.7,
//     stagger: .1,
//     ease: Circ.easeInOut
// })

// tl.to("#fr .parent .child",{
//     y: "-100%",
//     duration: 1,
//     ease: Expo.easeInOut
// })

// tl.to(".loader",{
//     y: "-100%",
//     duration: 1,
//     ease: Expo.easeInOut
// })

// //for the page movement
// tl.to("#fs", {
//     height: 0,
//     duration: 1,
//     ease: Expo.easeInOut
// })

// tl.to("#elem", {
//     height: "100%",
//     duration: 0.7,
//     delay:-1.6 ,
//     ease: Expo.easeInOut
// })

// tl.to("#richbl",{
//     height:"100%",
//     duration:1.6,
//     delay:-1.6, 
//     ease: Expo.easeInOut,
//     onComplete : function(){
//         animateHomepage();
//     }
// })
// }

// function animateSvg() {

//     gsap.to("#Visual path, #Visual polyline", {
//         strokeDashoffset: 0,
//         duration: 2,
//         ease: Expo.easeInOut
//       })
// }

// function animateHomepage(){
//     var tl = gsap.timeline();

//     tl
//     .to("#nav a", {
//       y: 0,
//       opacity: 1,
//       stagger: .05,
//       ease: Expo.easeInOut
//     })

//     .to("#home .parent .child", {
//         y: 0,
//         stagger: .1,
//         duration: 2,
//         ease: Expo.easeInOut
//       })

//       .to("#home .row #ri-corner-left-down-fill", {
//         opacity: 1,
//         ease: Expo.easeInOut,
//         onComplete: function(){
//             animateSvg();
//         }
//       })  

// }

// revealToSpan();
// valueSetters();
// loaderanimation();
// animateSvg();