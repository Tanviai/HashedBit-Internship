let str = "JavaScript is very powerful";

let vowelCount = 0;
let consonantCount = 0;

for (let char of str.toLowerCase()) {

    if (char >= 'a' && char <= 'z') {

        if ("aeiou".includes(char)) {
            vowelCount++;
        } else {
            consonantCount++;
        }
    }
}

document.getElementById("string").textContent = str;
document.getElementById("vowels").textContent = vowelCount;
document.getElementById("consonants").textContent = consonantCount;