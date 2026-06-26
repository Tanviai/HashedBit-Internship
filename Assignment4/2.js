//Write your code here
function createDiv(width, height, text) {
    const div = document.createElement("div");

    div.style.width = width + "px";
    div.style.height = height + "px";
    div.textContent = text;

    document.getElementById("container").appendChild(div);
}


// Do not change this code
window.createDiv = createDiv;