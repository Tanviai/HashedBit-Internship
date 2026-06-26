const students = [
    {
        student1: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student2: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student3: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    }
];

const result = students.map(student => {

    const [studentName, subjects] = Object.entries(student)[0];

    const marks = Object.values(subjects);

    const total = marks.reduce((sum, mark) => sum + mark, 0);

    const average = total / marks.length;

    return {
        [studentName]: {
            average: average
        }
    };
});

document.getElementById("output").textContent =
    JSON.stringify(result, null, 2);

console.log(result);