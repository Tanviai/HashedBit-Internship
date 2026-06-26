function countWords(paragraph) {

    // Remove extra spaces and split into words
    let words = paragraph.trim().split(/\s+/);

    return words.length;
}

let paragraph = "JavaScript is a powerful programming language used for web development.";

let wordCount = countWords(paragraph);

document.getElementById("paragraph").textContent = paragraph;
document.getElementById("count").textContent = wordCount;