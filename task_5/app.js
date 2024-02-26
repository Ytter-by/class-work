// // Способ 1
// // cоздали функцию

// function Hello(){
//     console.log('Привет')
// }
// // вызов функцию

// Hello()

// // Способ 2
// const privet = function Privet(){
//     console.log("Привет 2")
// }

// privet()

// // Способ 3
// const main = () => {
//     console.log('Привет 3')
// }

// main()

// (a * b)+(c * d) = ...


// let sum = (a, b, c, d) => {
//     let res1 = a * b
//     console.log(res1)
//     let res2 = c * d
//     console.log(res2)
//     let result = res1 + res2
//     console.log(result)
// }

// sum(2,3,4,5)

// let person = (array) => {
//     console.log(array[0])
// }

// const tom = ["Tom", 42, "tom@example.com"]
// const bob = ["Bob", 32, "bob@example.com"]
// person(tom)
// person(bob)

// let person = (object) => {
//     console.log(object["name"])
// }

// let tom = {name :"Tom", age: 42, email: "tom@example.com"}

// person(tom)

// let temp = (e) => {
//     if (e === undefined) {
//         console.log("Укажите тем-ру")
//     }else {
//         if (e >= 25) {
//         console.log(`Сегодня ${e} градусов. Можно надеть футболку`)
//         }
//     }
// }

// let key = prompt("Введите тем-ру")
// temp(key)

let res1 = () =>{
    console.log("Вам 17")
}
let res2 = () => {
    console.log('Вам не 17')
}




let age = 17
if (age <= 17) {
    res1()
}else{
    res2()
}