let tl = gsap.timeline();

tl.from(".line h1", {
  y: 150,
  opacity: 0,
  stagger: 0.25,
  duration: 0.6,
  delay: 0.5,
});
tl.from(".line-part1", {
  opacity: 0,
  onStart: function () {
    let h5timer = document.querySelector(".line h5");
    let grow = 0;

    setInterval(() => {
      if (grow < 100) {
        grow++;
        h5timer.innerHTML = grow++;
      } else {
        h5timer.innerHTML = grow;
      }
    }, 35);
  },
});
tl.to(".line h2", {
    animationName: "text-anime",
    opacity: 1,
})
tl.to("#loader", {
  opacity: 0,
  duration: 0.2,
  delay: 2,
});
tl.from("#page1",{
    y: 1600,
    opacity: 0,
    duration: 0.5,
    delay: 0.2,
    ease: Power4
})
tl.to("#loader", {
    display: "none",
})
