function month_checker(month_number) {
    const INVALID_NUMBER = "Некорректный номер месяца";
    const month_names = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    if (isNaN(Number(month_number))) return INVALID_NUMBER
    if ((Number(month_number) < 1) || (Number(month_number) > 12))
        return INVALID_NUMBER;
    return month_names[month_number-1];
}

function checker_simple(num) {
    if (num == 2) return true;
    sqrt = Math.sqrt(num);
    for (let i = 2; i < sqrt + 1; ++i) {
        if (num % i == 0) return false;
    }
    return true;
}

function simple_values(number_values) {
    const INVALID_NUMBER = "Некорректное значение";
    if (isNaN(Number(number_values))) return INVALID_NUMBER

    if (number_values <= 0)
        return "";
    let i = 2;
    let array = [];
    while(number_values > 0) {
        if (checker_simple(i)){
            number_values--;
            array.push(i);
        }
        i++;
    }
    return array.join(" ");
}

let Counter = {
    count: 0,
    add: function(value){
        this.count += value;
    },
    sub: function(value){
        this.count -= value;
    }
}

function change_separator(str) {
    let arr = str.split(",");
    return arr.join(".");
}

function is_palindrom(str) {
    let len = str.length
    for (let i = 0; i < len / 2; ++i)
        if (str[i] !== str[len - (i+1)])
            return "Нет";
    return "Да";
}

alert("Далее представлено взаимодействие для тестирования 2 задания лабораторной");

let month_number = prompt("Введите номер месяца");
alert(month_checker(month_number))

let simple_number = prompt("Введите число для поиска простых");
alert(simple_values(simple_number))

let words = prompt("Введите список слов через запятую");
alert(change_separator(words))

let str = prompt("Введите строку для проверки на палиндром");
alert(is_palindrom(str))