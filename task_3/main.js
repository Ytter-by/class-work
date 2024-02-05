// const array = [1,2,3,4]
// console.log(array)

let college = [
    {
        name: "Harry",
        age: 16,
        group: "ИС-2-1",
        studID: 321232,
        typeLearning: "Очная",
        task: ["Физ-ра", "МДК-02-02", "МДК-02-02", "МДК-04-01",],
        cash: 1600,
        isStudent: true
    },
    {
        name: "Ron",
        age: 19,
        group: "СФ-3-1",
        studID: 321243,
        typeLearning: "Заочная",
        task: ["ИЗО", "БЖ", "МДК-02-02", "ПРАВО",],
        cash: 0,
        isStudent: true
    },
    {
        name: "Tom",
        age: 32,
        isKurator: true,
        kuratorGroup: "СФ-3-1",
        kafedra: "Инф.технологии",
        predmet: ["МДК-02-01","МДК-09.01","МДК-09-02"],
        isStudent: false
    },
    {
        name: "Bob",
        age: 32,
        isKurator: true,
        kuratorGroup: "СФ-2-1",
        kafedra: "Инф.технологии",
        predmet: ["МДК-02-01","МДК-09.01","МДК-09-02"],
        isStudent: false
    }
]

number = 1
isStud = college[number]['isStudent']
Name = college[number]['name']
Age = college[number]['age']
Kurator = college[number]['isKurator']
KuratorGroup = college[number]['kuratorGroup']
Cash = college[number]['cash']

if (isStud===true) {
    console.log(`Студент ${Name}`)
    if (Age>= 18) {
        console.log(`Студент ${Name} совершеннолетний. Ему ${Age}`)
    }else {
        console.log(`Студент ${Name} не совершеннолетний. Ему ${Age}`)
    }
    if (Cash>= 4500) {
        console.log(`Студент ${Name} получает повышенную стипендию. (${Cash})`)
    }else if (Cash< 4400 && Cash >= 1) {
        console.log(`Студент ${Name} получает обычную стипендию. (${Cash})`)
    }else if (Cash === 0) {
        console.log(`Студент ${Name} не получает стипендию.`)
    }
} else if (isStud===false) {
    console.log(`Преподаватель ${Name}`)
    if (Kurator===true){
        console.log(`Преподаватель ${Name} куратор группы ${KuratorGroup}`)
    }
}