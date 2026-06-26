function repeatedSum(num) {

    while (num >= 10) {

        let sum = 0;

        // Sum all digits
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        num = sum;
    }

    return num;
}

let number = 456;
let result = repeatedSum(number);

document.getElementById("input").textContent = number;
document.getElementById("output").textContent = result;