//1 task
let count = localStorage.getItem("number_of_visits");
if (count)
    count = Number(count);
else
    count = 0;
count += 1;
localStorage.setItem("number_of_visits", count);

alert(`Количество заходов: ${count}`);