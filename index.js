/*function getMonthName(monthNumber) {
    const months = [
        "Январь", "Февраль", "Март", "Апрель", 
        "Май", "Июнь", "Июль", "Август", 
        "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ];

    if (monthNumber < 1 || monthNumber > 12) {
        return "Некорректный номер месяца. Пожалуйста, введите число от 1 до 12.";
    }

    return months[monthNumber - 1];
}

// Пример использования
const monthNumber = 5; // Замените 5 на любое другое значение
const monthName = getMonthName(monthNumber);
console.log(getMonthName (monthName));*/

/*function getDayOfWeek(dayNumber) {
    const daysOfWeek = [
        "Понедельник", "Вторник", "Среда", 
        "Четверг", "Пятница", "Суббота", "Воскресенье"
    ];

    if (dayNumber < 1 || dayNumber > 7) {
        return "Некорректный номер дня. Пожалуйста, введите число от 1 до 7.";
    }

    return daysOfWeek[dayNumber - 1];
}
const dayNumber = 3; // Замените 3 на любое другое значение
const dayName = getDayOfWeek(dayNumber);
console.log("День недели:" (dayName)); */

/*function getFirstWords(text) {
    // Разделяем текст на предложения по знакам препинания
    const sentences = text.split(/(?<=[.!?])s+/);
    const firstWords = [];

    // Проходим по каждому предложению
    sentences.forEach(sentence => {
        // Удаляем лишние пробелы и разбиваем предложение на слова
        const words = sentence.trim().split(/s+/);
        if (words.length > 0) {
            // Добавляем первое слово в массив
            firstWords.push(words[0]);
        }
    });

    // Возвращаем первое слово из каждого предложения, разделенные запятой
    return firstWords.join(', ');
}

// Пример использования
const inputText = "Это первое предложение. Вот второе! А это третье предложение?";
const result = getFirstWords(inputText);
console.log(result); // Вывод: "Это, Вот, А" */

//Написать функцию, которой передаем имя, и она возвращает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван)//

/*
const getHello = (name) => {
    const hour = new Date().getHours()
    let hiText=''
    if(hour < 12 && hour > 5) {
        hiText = "Доброй ночи"
    }
    

    if(hour > 12 && hour > 5) {
        hiText = "Доброе утро"
    }
   

    if(hour > 12 && hour < 17) {
        hiText = "Добрый день"
    }
    
    if(hour > 17 && hour < 0) {
        hiText = "Доброй вечер"
    }

    if(hour < 12 && hour > 5) {
        hiText = "Доброй ночи"
    }
    return hiText + '' + name
}

console.log(getHello('Иван')); */


/*Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:

вывод fizz вместо чисел, кратных 3;

вывод buzz вместо чисел, кратных 5;

вывод fizzbuzz вместо чисел, кратных как 3, так и 5.*/


/*const getValue = (n) => {

    if(n <= 1) {
        console.log('Error');
        return;
    }

    for (let index = 1; index <= n; index++) {
        if(index % 3 === 0 && index % 5 === 0){
            console.log("fizzbuzz");
            continue;
        }

        if(index % 3 === 0){
            console.log("fizz");
            continue;
        }

        if(index % 5 === 0){
            console.log("buzz");
            continue;
        } 

        console.log(index);
        
    }
}

getValue(16) */