let imgobj = document.getElementById("imgobj");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let slideshow = document.getElementById("slideshow");
let stop = document.getElementById("stop");

let counter = 1;
let timer;



// next 
next.addEventListener("click", function () {
    counter++;
    if (counter > 6) counter = 1;
    imgobj.src = "images/" + counter + ".png";
});

// prev
prev.addEventListener("click", function () {
    counter--;
    if (counter < 1) counter = 6;
    imgobj.src = "images/" + counter + ".png";
});

// slide show button
slideshow.addEventListener("click", function () {
    timer = setInterval(function () {
        counter++;
        if (counter > 6) counter = 1;
        imgobj.src = "images/" + counter + ".png";
    }, 1000); 
});

// stop button
stop.addEventListener("click", function () {
    clearInterval(timer);
});
