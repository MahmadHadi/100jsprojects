const body = document.querySelector("body");

setTimeout(() => {
    body.addEventListener("mousemove", (e) => {
        console.log("asdf ");

        let circle = document.createElement("div");
        circle.setAttribute("class", "circle");
        body.appendChild(circle);

        let random = Math.random;
        if (Math.random() > 0.5) {
            circle.style.top = e.pageY + "px";
            circle.style.left = e.pageX + "px";
        } else {
            circle.style.display = "none";
        }
        circle.style.top = e.pageY + "px";
        circle.style.left = e.pageX + "px";
    });
}, 500);

function getSpeed() {
    let prevX, prevY, prevTime;

    document.addEventListener("mousemove", (e) => {
        const currentTime = performance.now();
        const x = e.clientX;
        const y = e.clientY;
        let speed;
        if (prevX && prevY) {
            const deltaX = x - prevX;
            const deltaY = y - prevY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            const timeDiff = currentTime - prevTime;
            speed = distance / timeDiff;

            console.log(`Mouse speed: ${speed.toFixed(2)} pixels per second`);
        }

        prevX = x;
        prevY = y;
        prevTime = currentTime;
        return speed.toFixed(2);
    });
}
