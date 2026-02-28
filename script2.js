function sort_numbers(numbers) {
    const INVALID_NUMBER = -1;
    for (let i = 0; i < numbers.length; ++i)
        if (isNaN(Number(numbers[i])) || (Number(numbers[i]) < 0)) return [INVALID_NUMBER];
    return numbers.sort(function(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    });
}

function mod_for_numbers(numbers) {
    const INVALID_NUMBER = -1;
    for (let i = 0; i < numbers.length; ++i) {
        if (isNaN(Number(numbers[i])) || (Number(numbers[i]) < 0)) return [INVALID_NUMBER];
        numbers[i] = numbers[i] % 5;
    }
    return numbers;
}

function get_median(...numbers) {
    const INVALID_NUMBER = -1;
    for (let i = 0; i < numbers.length; ++i)
        if (isNaN(Number(numbers[i]))) return [INVALID_NUMBER];
    let array = sort_numbers([...numbers]);
    if (array[0] == -1) return [INVALID_NUMBER];
    if (array.length % 2 == 0) 
        return (Number(array[array.length / 2 ])) + Number(array[array.length / 2 - 1]) / 2;
    else
        return Number(array[Math.floor(array.length / 2)]);
}

function check_correct(str) {
    const INVALID_STRING = "Строка состоит не из ( и )";
    let stack = []
    for (let i = 0; i < str.length; ++i) {
        if ((str[i] != "(") && (str[i] != ")")) return INVALID_STRING;
        if (str[i] == "(") stack.push("(");
        if (str[i] == ")") stack.pop();
    }
    if (stack.length == 0)
        return "Правильная";
    else 
        return "Неправильная";
}

function copy_object(obj) {
    return JSON.parse(JSON.stringify(obj));
}

let test_obj = {
    car_name: "BMW",
    car_series: "X",
    car_model: 5,
    car_param: {
        max_speed: 350,
        origin_country: "Germany"
    },
};
    
alert("Далее представлено взаимодействие для тестирования 3 задания лабораторной");

let str_numbers = prompt("Введите список натуральных чисел");
result = sort_numbers(str_numbers.split(",").map(Number)).join(", ");
if (result === "-1")
    alert("Представлен список не из натуральных чисел")
else
    alert(result)

str_numbers = prompt("Введите список натуральных чисел");
result = mod_for_numbers(str_numbers.split(",").map(Number)).join(", ");
if (result === "-1")
    alert("Представлен список не из натуральных чисел")
else
    alert(result)

let test_arr = [5, 12, 14, 15, 20];
alert(`Медиана, полученная первым способом: ${get_median(5, 12, 14, 15, 20)}. Медиана полученная вторым способом: ${get_median(...test_arr)}`);

let str_2 = prompt("Введите строку из ( ) для проверки корректности");
alert(check_correct(str_2));

let new_test_obj = copy_object(test_obj);
new_test_obj.car_name = "AUDI";
new_test_obj.car_param.origin_country = "Russia";
alert(`Old name is ${test_obj.car_name}, origin country is ${test_obj.car_param.origin_country}. New name is ${new_test_obj.car_name}, origin country is ${new_test_obj.car_param.origin_country}`);