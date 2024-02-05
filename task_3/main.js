// const array = [1,2,3,4]
// console.log(array)

// let person = {
//     name: "Tom",
//     age: 18,
//     hobbies: ["кушать","Спать","Смотреть кино"],
//     contacts: {
//         phone: [8800553255,8800553355],
//         email: ["tom@email.com","tom2@email.com"],
//         social: "www.github.com"
//     }

// }

// console.log(`Имя - ${person["name"]}. Возраст - ${person["age"]}`)
// console.log(person["hobbies"][2])
// console.log(person['contacts']['email'][1])


let college = [
    {name: "Tom", age: 23, group: "ИС-2-1"},
    {name: "Bob", age: 20, group: "ИС-2-1"},
    {name: "Stan", age: 21, group: "ИС-2-1"},
    {name: "Harry", age: 26, group: "ИС-2-1"}
]

let studentAge = college[0]['age']
let studentName = college[0]['name']

if (studentAge>=18) {
    console.log(`Студент ${studentName} совершеннолетний. Ему ${studentAge}`)
} else if (studentAge<18) {
    console.log(`Студент ${studentName} не совершеннолетний. Ему ${studentAge}`)
}