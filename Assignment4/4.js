const text = document.getElementById("text-container");
const colorBox = document.getElementById("colorbox");
const colorBtn = document.getElementById("colorchange");
const fontSize = document.getElementById("fontsize");
const italicBtn = document.getElementById("italic");
const underlineBtn = document.getElementById("underline");
const boldBtn = document.getElementById("bold");
const fontList = document.getElementById("list");
const getStyleBtn = document.getElementById("getstyle");
const cssProps = document.getElementById("css-props");

// Change color
colorBtn.addEventListener("click", () => {
    text.style.color = colorBox.value;
});

// Change font size
text.style.fontSize = fontSize.value + "px";

fontSize.addEventListener("input", () => {
    text.style.fontSize = fontSize.value + "px";
});

// Toggle italic
italicBtn.addEventListener("click", () => {
    text.style.fontStyle =
        text.style.fontStyle === "italic" ? "normal" : "italic";
});

// Toggle underline
underlineBtn.addEventListener("click", () => {
    text.style.textDecoration =
        text.style.textDecoration === "underline" ? "none" : "underline";
});

// Toggle bold
boldBtn.addEventListener("click", () => {
    text.style.fontWeight =
        text.style.fontWeight === "bold" ? "normal" : "bold";
});

// Change font family
fontList.addEventListener("change", () => {
    text.style.fontFamily = fontList.value;
});

// Show CSS properties
getStyleBtn.addEventListener("click", () => {
    cssProps.textContent =
        `color: ${text.style.color}; ` +
        `font-size: ${text.style.fontSize}; ` +
        `font-family: ${text.style.fontFamily}; ` +
        `font-style: ${text.style.fontStyle || "normal"}; ` +
        `font-weight: ${text.style.fontWeight || "normal"}; ` +
        `text-decoration: ${text.style.textDecoration || "none"};`;
});