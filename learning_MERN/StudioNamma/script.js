let card = document.querySelector(".cardfollower")
let hero = document.querySelector(".hero")
let texts = document.querySelector(".texts h1")

document.addEventListener("mousemove", (e) => {
    card.style.top = e.clientY + "px"
    card.style.left = e.clientX + "px"
    card.style.transition = "linear 0.3s"
})

let menudiv = document.querySelector(".menu")
let click = document.querySelector("#menuClick")
let flag = 0

// click.addEventListener("click", () => {
//     if (!flag) {
//         menudiv.style.top = "-0%"
//         menudiv.style.transition = "linear 0.5s"
//         menudiv.style.rotate = "4deg"
//         flag = 1
//     }
//     else {
//         menudiv.style.top = "-115%"
//         menudiv.style.transition = "linear 0.5s"
//         flag = 0
//     }
// })




// button.addEventListener("click",()=>{
//     texts.style.bottom = "40%"
//     texts.style.opacity = 1
//     texts.style.transition = "all ease 0.5s"
// })

click.addEventListener("click", () => {
    if (!flag) {
        menudiv.style.top = "0%";
        menudiv.style.transition = "linear 0.5s";
        menudiv.style.rotate = "4deg";

        setTimeout(() => {
            texts.style.bottom = "40%";
            texts.style.opacity = 1;
            texts.style.transition = "all ease 0.5s";
        }, 500);

        flag = 1;
    } else {
        menudiv.style.top = "-115%";
        menudiv.style.transition = "linear 0.5s";

        flag = 0;
    }

    
});