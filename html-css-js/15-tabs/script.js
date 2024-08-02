const heading = document.querySelector(".heading");
const para = document.querySelector(".para");
const img = document.querySelector("img");
const step1 = document.querySelector(".nav-step-1");
const step2 = document.querySelector(".nav-step-2");
const step3 = document.querySelector(".nav-step-3");

const content = [
    {
        step: 1,
        para: `Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Illum sint cumque quasi, amet impedit tempore
                            necessitatibus iste. Ratione possimus perspiciatis
                            sapiente, ex alias, ipsam sint beatae vel repellat
                            aperiam corrupti porro et molestiae nobis itaque
                            recusandae vitae atque! Reiciendis voluptatum
                            molestiae autem consectetur corporis libero itaque
                            quo mollitia quod! Corrupti doloribus veniam iusto
                            soluta laborum saepe debitis reiciendis atque nihil
                            eaque ducimus quo ullam ipsum, laboriosam velit
                            vitae sint, eius molestiae unde, tempora hic ipsam?
                            Cupiditate, beatae. Nostrum eos, id velit nisi
                            libero exercitationem, et fugiat assumenda mollitia
                            debitis deleniti, illum iusto. Officiis, ratione ex?
                            Magni, impedit vel. Quam, eaque.`,
        img: "./img/image-1.png",
    },
    {
        step: 1,
        para: `Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Illum sint cumque quasi, amet impedit tempore
                            necessitatibus iste. Ratione possimus perspiciatis
                            sapiente, ex alias, ipsam sint beatae vel repellat
                            aperiam corrupti porro et molestiae nobis itaque
                            recusandae vitae atquostrum eos, id velit nisi
                            libero exercitationem, et fugiat assumenda mollitia
                            debitis deleniti, illum iusto. Officiis, ratione ex?
                            Magni, impedit vel. Quam, eaque.`,
        img: "./img/image-2.jpg",
    },
    {
        step: 1,
        para: `quo mollitia quod! Corrupti doloribus veniam iusto
                            soluta laborum saepe debitis reiciendis atque nihil
                            eaque ducimus quo ullam ipsum, laboriosam velit
                            vitae sint, eius molestiae unde, tempora hic ipsam?
                            Cupiditate, beatae. Nostrum eos, id velit nisi
                            libero exercitationem, et fugiat assumenda mollitia
                            debitis deleniti, illum iusto. Officiis, ratione ex?
                            Magni, impedit vel. Quam, eaque.`,
        img: "./img/image-3.jpg",
    },
];

step1.addEventListener("click", () => {
    step1.style.background = "#ffe5e2";
    step1.style.color = "#000";
    para.innerHTML = content[0].para;
    heading.innerHTML = "Step 1";
    img.src = content[0].img;

    step2.style.background = "";
    step3.style.background = "";
});

step2.addEventListener("click", () => {
    step2.style.background = "#ffe5e2";
    step2.style.color = "#000";
    para.innerHTML = content[1].para;
    heading.innerHTML = "Step 2";
    img.src = content[1].img;

    step1.style.background = "";
    step3.style.background = "";
});

step3.addEventListener("click", () => {
    step3.style.background = "#ffe5e2";
    step3.style.color = "#000";
    para.innerHTML = content[2].para;
    heading.innerHTML = "Step 3";
    img.src = content[2].img;

    step1.style.background = "";
    step2.style.background = "";
});
