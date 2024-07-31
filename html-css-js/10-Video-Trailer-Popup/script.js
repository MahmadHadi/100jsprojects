const btn = document.querySelector(".btn");
const video = document.querySelector(".video");
const close = document.querySelector(".close");

btn.addEventListener("click", () => {
    video.classList.remove("opacity-0");
    video.classList.remove("pointer-events-none");
    
});

close.addEventListener("click", () => {
    video.classList.add("opacity-0");
    video.classList.add("pointer-events-none");
})
