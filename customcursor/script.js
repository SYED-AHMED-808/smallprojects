const main = document.querySelector("#main");
const cursor = document.querySelector("#cursor")
const imageDiv = document.querySelector("#image")

main.addEventListener("mousemove", function (e) {
    gsap.to(cursor, { 
        x: e.x,
        y: e.y,
        duration:0.3,
        ease:"back.out"
    })
})
imageDiv.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
        scale:2
    })
})
imageDiv.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
        scale:1
    })
})