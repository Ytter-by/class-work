// const students = ["Tom", "Bob", "Harry", "Ron", "Stan"]
// for (let i = 0; i < students.length; i++) {
//     let result = students[i]
//     console.log(result)
// }

// let people = [["Tom", 18],["Bob", 17],["Stan", 36]]
// for (let i = 0; i < people.length; i++) {
//     for (let j = 0; j < people[i].length; j++ ) {
//         let result = people[i][j]
//         console.log(result)
//     }
//     console.log("---------------")
// }


// const students = ["Tom", "Bob", "Harry", "Ron"]

// for (let item of students) {
//     console.log(students[item])
// }

const person = {name: "Tom", age: 23}

for (let item in person) {
    console.log(person[item])
}