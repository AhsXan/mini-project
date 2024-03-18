const randomNumber = () => {
    const num = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += num[Math.floor(Math.random() * 16)];
    }
    return color;
}

const change = () => {
    if (!s) {
        s = setInterval(() => {
            console.log(randomNumber());
            document.body.style.backgroundColor = randomNumber();
        }, 200);
    }
}

let s;
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

start.addEventListener("click", change);

stop.addEventListener("click", () => {
    clearInterval(s);
    s = null; // Reset interval variable
    console.log("asdaf");
});

const body = document.querySelector("body");
