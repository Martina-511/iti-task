// a - Get first anchor inside the second table
let secondTable = document.getElementsByTagName("table")[0];
let firstAnchor = secondTable.getElementsByTagName("a")[0];
firstAnchor.href = "https://training.com";
firstAnchor.innerText = "Training";

// b - Find last image and change its borders to: solid pink 2px
let allImages = document.getElementsByTagName("img");
let lastImage = allImages[allImages.length - 1];
lastImage.style.border = "2px solid pink";

// c - Create function to find all checked checkboxes in form
function showChecked() {
    let form = document.forms["userData"];
    let checkboxes = form.querySelectorAll("input[type='checkbox']:checked");
    let values = [];
    checkboxes.forEach(function (box) {
        values.push(box.value);
    });
    alert("Checked values: " + values.join(", "));
}

// d - Change background of element with id="example" to pink
let exampleDiv = document.getElementById("example");
exampleDiv.style.backgroundColor = "pink";
