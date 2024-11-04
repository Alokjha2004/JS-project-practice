const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let slideNumber = 1;
let length = images.length;

for( let i = 0; i < length; i++) {
    const div = document.createElement("div"); 
    div.className = "button";
    bottom.appendChild(div) 
}
const button = document.querySelectorAll(".button");
button[0].style.backgroundColor = "white";

const resetBg = () => {
    button.forEach((button) => {
        button.style.backgroundColor = "transparent";
    })
}

button.forEach((button , i) =>{
    button.addEventListener("click",() => {
        resetBg();
        slider.style.transform =`translateX(-${i * 600}px)`
        slideNumber = 1;
        button.style.backgroundColor = "white";
    })
})


const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 600}px)`;
    slideNumber++;
};
const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber - 2) * 600}px)`;
    slideNumber--;
};
const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1
};
const getLastSlide = () => {
    slider.style.transform = `translateX(-${(length - 1) * 600}px)`;
    slideNumber = length;
};
const changeColor = () => {
    resetBg();
    button[slideNumber - 1].style.backgroundColor = "white";
}

// right.addEventListener("click", () => {
//     if( slideNumber < length){
//         nextSlide();
//     }else{
//         getFirstSlide();
//     }    
// })
// only use short if condition 
right.addEventListener("click", () => {
    slideNumber < length ? nextSlide() : getFirstSlide(); 
    changeColor();
})

// left.addEventListener("click", () => {
//     if(slideNumber > 1){
//         prevSlide();
//     }else{
//         getLastSlide();
//     }
// })
left.addEventListener("click", () => {
    slideNumber > 1 ? prevSlide() : getLastSlide(); 
    changeColor();
})


