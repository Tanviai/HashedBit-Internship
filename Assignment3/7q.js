const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] }
];

// Calculate averages using map and reduce
const result = students.map(student => {

    const total = student.scores.reduce((sum, score) => {
        return sum + score;
    }, 0);

    const average = total / student.scores.length;

    return {
        name: student.name,
        average: average
    };
});

// Display output
document.getElementById("output").textContent =
    JSON.stringify(result, null, 2);

console.log(result);