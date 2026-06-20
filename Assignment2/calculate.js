function calculate(num1, num2, operation)
{
    switch(operation)
    {
        case '+':
            return num1 + num2;

        case '-':
            return num1 - num2;

        case '*':
            return num1 * num2;

        case '/':
            if(num2 == 0)
            {
                return "Division by zero is not possible";
            }
            return num1 / num2;

        default:
            return "Invalid Operation";
    }
}

// Function Calls

console.log("Addition = " + calculate(10, 5, '+'));
console.log("Subtraction = " + calculate(10, 5, '-'));
console.log("Multiplication = " + calculate(10, 5, '*'));
console.log("Division = " + calculate(10, 5, '/'));