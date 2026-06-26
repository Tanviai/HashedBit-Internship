function reverseString(str) {
    return str.split("").reverse().join("");
}

let input = "Hello";
let result = reverseString(input);

document.getElementById("input").textContent = input;
document.getElementById("output").textContent = result;