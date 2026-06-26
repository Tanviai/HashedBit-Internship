let str = "I love my India";

// Split the string into words
let words = str.split(" ");

// Reverse the array of words
let reversedWords = words.reverse();

// Join the words back into a string
let result = reversedWords.join(" ");

// Display on webpage
document.getElementById("original").textContent = str;
document.getElementById("output").textContent = result;