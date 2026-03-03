let count = 0;
let counter = document.getElementById("count");
let progress = document.getElementById("progress");

let interval = setInterval(() => {
    count++;
    counter.innerText = count + "%";
    progress.style.width = count + "%";

    if(count >= 100){
        clearInterval(interval);
        window.location.href = "home.html";  // 👈 YAHI ADD KARNA HAI
    }
}, 30);