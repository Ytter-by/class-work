// let students = ["Андрей", "Иван", "Стас"];
// students[50] = "Индекс 50"
// console.log(students);


// let college = [["Андрей", "Иван", "Стас"],[205, 111, 304]];
// college[1][1] = 112
// let kab = college[1][1]
// console.log(kab)

let number = [1,2,3,4]

const countLenght = 3

if (number.length === countLenght) {
    console.log("ok")
} else if (number.length < countLenght) {
    let result = countLenght - number.length
    console.log(`Длинна вашего массива: ${number.length}. Длинну нужно увеличить до ${countLenght}. Прибавьте к массиву значение ${result}`)
} else if (number.length > countLenght) {
    let result_2 = number.length - countLenght
    console.log(`Длинна вашего массива: ${number.length}. Длинну нужно уменьшить до ${countLenght}. Отнимите от массива значение ${result_2}`)
}