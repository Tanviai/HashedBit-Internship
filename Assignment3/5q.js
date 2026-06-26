function correctfn(string, wrong, correct) {
    return string.replace(wrong, correct);
}

let sentence = "I love JavScript programming";
let result = correctfn(sentence, "JavScript", "JavaScript");

document.getElementById("original").textContent = sentence;
document.getElementById("corrected").textContent = result;