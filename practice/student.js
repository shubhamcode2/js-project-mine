
const student = [
    {
        "name": "Rahul",
        "score": 95,
        "grade": "A"
    },
    {
        "name": "Ananya",
        "score": 88,
        "grade": "A"
    },
    {
        "name": "Vikram",
        "score": 76,
        "grade": "B"
    },
    {
        "name": "Pooja",
        "score": 60,
        "grade": "C"
    },
    {
        "name": "Rohit",
        "score": 145,
        "grade": "D"
    }
]


// console.log(student);
// let score = 0
// student.map((stud) => {
//     score = score + stud.score
// })




student.sort((a, b) => a.score - b.score)

console.log(student);
